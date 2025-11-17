import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col px-6 md:px-16">
        <div className="mt-6 md:mt-10">
          <Logo />
        </div>

        <div className="flex-1 flex items-center justify-center py-10 md:py-0">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (HIDDEN ON MOBILE) */}
      <div className="hidden md:flex w-1/2 bg-[#FAFDF0] items-center justify-center p-6 lg:p-10">
        <img
          className="w-3/4 lg:w-[450px] h-auto object-contain"
          src={authImg}
          alt="Authentication"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
