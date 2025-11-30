import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import rider from "../../../public/agent-pending.png";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters?.map((c) => c.region);

  const regions = [...new Set(regionsDuplicate)];
  //explore more useMemo() and callback
  const riderRegion = useWatch({ control, name: "riderRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const district = regionDistricts.map((d) => d.district);
    return district;
  };

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data)
      .then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:
            "Your application has been submitted. We will reach to you very soon.",
          showConfirmButton: false,
          timer: 2000,
        })
      }
    });
  };
  return (
    <div className="bg-white rounded-3xl p-15  text-black flex">
      <div>
        <div className="border-b border-gray-300 space-y-6 p-6">
          <h1 className="text-5xl font-bold">Be A Rider</h1>
          <p className="text-sm">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal <br /> packages to business shipments —
            we deliver on time, every time.
          </p>
        </div>
        <div className="flex gap-9 items-end">
          <div>
            <form
              onSubmit={handleSubmit(handleRiderApplication)}
              className="mt-2 p-4 text-black"
            >
              {/* send details */}
              <fieldset className="fieldset grid gird-row-">
                <h4 className="text-2xl font-bold">Tell us about yourself</h4>
                <div className="grid grid-cols-2 w-full">
                  <div>
                    {/* rider name */}
                    <label className="label font-semibold">Your Name</label>
                    <input
                      type="text"
                      {...register("riderName")}
                      className="input w-full"
                      placeholder="Your Name"
                      defaultValue={user?.displayName}
                      // readOnly
                    />
                  </div>
                  <div>
                    {/* rider age */}
                    <label className="label font-semibold">Your age</label>
                    <input
                      type="text"
                      {...register("riderAge", { required: true })}
                      className="input w-full rounded-r-lg"
                      placeholder="Your age"
                    />
                    {
                      errors.riderAge && <p className="text-red-500 text-xs">age is required</p>
                    }
                  </div>
                </div>

                <div className="grid grid-cols-2 mt-3">
                  <div>
                    {/* rider email */}
                    <label className="label font-semibold">Your Email</label>
                    <input
                      type="email"
                      {...register("riderEmail")}
                      className="input w-full "
                      placeholder="Your Email"
                      defaultValue={user?.email}
                      // readOnly
                    />
                  </div>
                  <div>
                    {/* rider phone */}
                    <label className="label font-semibold">Contact</label>
                    <input
                      type="text"
                      {...register("riderContact", {required: true})}
                      className="input w-full "
                      placeholder="Contact"
                    />
                    {
                      errors.riderContact && <p className="text-red-500 text-xs">Contact is required</p>
                    }
                  </div>
                </div>

                <div className="grid grid-cols-2 ">
                  <div>
                    {" "}
                    {/* region */}
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Regions</legend>
                      <select
                        {...register("riderRegion", {required: true})}
                        defaultValue="Pick a Region"
                        className="select"
                      >
                        <option disabled={true}>Pick a Region</option>

                        {regions.map((r, i) => (
                          <option key={i} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                      {
                        errors.riderRegion && <p className="text-red-500 text-xs"> Region is required</p>
                      }
                    </fieldset>
                  </div>
                  <div>
                    {" "}
                    {/* sender District */}
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Districts</legend>
                      <select
                        {...register("riderDistrict", {required: true})}
                        defaultValue="Pick a District"
                        className="select"
                      >
                        <option disabled={true}>Pick a District</option>
                        {districtsByRegion(riderRegion).map((r, i) => (
                          <option key={i} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                      {
                        errors.riderDistrict && <p className="text-red-500 text-xs">District is required</p>
                      }
                    </fieldset>
                  </div>
                </div>

                {/* sender add */}
                <label className="label font-semibold">NID NO</label>
                <input
                  type="text"
                  {...register("riderNidNo")}
                  className="input w-full "
                  placeholder="NID"
                />

                {/* wire house */}
                <label className="label font-semibold mt-3">
                  Which wire-house you want to work?
                </label>
                <input
                  type="area"
                  {...register("wireHouse")}
                  className="input w-full "
                  placeholder="Select wire house"
                />
              </fieldset>

              <input
                type="submit"
                className="btn w-lg btn-primary text-black mt-5"
                value="Submit"
              />
            </form>
          </div>

          <div className="">
            <img src={rider} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;
