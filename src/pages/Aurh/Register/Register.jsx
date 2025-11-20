import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
  const location = useLocation()
  const navigate = useNavigate()
const {
  register,
  handleSubmit,
  formState: { errors },
  } = useForm();
  
  const {   registerUser, updateUserProfile} = useAuth()

  const handleRegister = (data) => {
    console.log(data)
    const profileImg = data.photo[0]

    registerUser(data.email, data.password)
      .then(res => {
        //console.log(res.user)
        //1. store the img in form data
        const formData = new FormData()
        formData.append('image', profileImg)
//2. send the photo to store and get the url
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgage_host}`;

        axios.post(image_API_URL, formData)
          .then(res => {
            console.log('after image upload', res.data.data.url)
            
            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.url
            }

            //update user profile to  firebase
            updateUserProfile(userProfile)
              .then(() => {
                console.log("user profile updated");
                navigate;(location.state || '/')
              })
              .catch((e) => {
                console.log(e);
              });
        })
      })

      .catch(e => {
      console.log(e)
    })
  }


  return (
    <div className="w-full space-y-6">
      {/* Title */}
      <div className="text-left space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Create an Account</h1>
        <p className="text-sm text-gray-600">Register with ZapShift</p>
      </div>

      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
        <fieldset className="space-y-3">
          {/* Name */}
          <label className="label">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="input input-bordered w-full"
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">Name is required</p>
          )}

          

          {/* photo */}
          <label className="label">Photo URL</label>
          <input
            {...register("photo", { required: true })}
            type="file"
            className="file-input w-full"
            placeholder="Photo URL"
          />

          


          {/* Email */}
          <label className="label">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="input input-bordered w-full"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}

          {/* Password */}
          <label className="label">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
            })}
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
          />

          {errors.password?.type === "required" && (
            <p className="text-red-500 text-sm">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm">
              Password must be 6 characters minimum
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-sm">
              Must include 1 uppercase, lowercase, number & special character.
            </p>
          )}

          {/* Submit */}
          <button className="btn bg-primary w-full text-black mt-2">
            Register
          </button>

          {/* Switch to Login */}
          <p className="text-gray-500 text-sm text-center">
            Already have an account?{" "}
            <Link state={location.state} to="/login" className="text-primary font-medium">
              Login
            </Link>
          </p>
        </fieldset>

        {/* Divider */}
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;