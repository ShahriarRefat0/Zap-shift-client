import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { singInUser } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log("data", data);
    singInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state || '/')
      })
      .catch((e) => {
        console.log(e);
      });
  };



  return (
    <div className="w-full ">
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
        {/* Title */}
        <div className="text-left space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome Back</h1>
          <p className="text-sm text-gray-600">Login with ZapShift</p>
        </div>

        {/* Form Fields */}
        <fieldset className="space-y-3">
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
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-sm">Password required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm">Minimum 6 characters</p>
          )}

          {/* Forgot Password */}
          <div className="mt-1">
            <a className="link link-hover text-sm text-primary">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button className="btn bg-primary w-full text-black mt-2">
            Login
          </button>
        </fieldset>

        {/* Switch to Register */}
        <p className="text-gray-500 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary font-medium">
            Register
          </Link>
        </p>

        {/* Divider */}
       <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Login;
