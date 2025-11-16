import React from 'react';
import Logo from '../../../Components/Logo/logo';
import { TbBrandLinkedinFilled, TbBrandYoutubeFilled } from 'react-icons/tb';
import { FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 rounded-3xl p-10 mt-10">
      {/* TOP SECTION */}
      <div className="flex flex-col items-center text-center gap-4">
        <Logo />

        <p className="font-medium max-w-xl leading-relaxed text-sm md:text-base">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* NAV LINKS */}
      <div className="flex flex-wrap items-center justify-center gap-5 border-y border-dashed border-gray-600 py-6 mt-6 text-sm md:text-base">
        <Link className="hover:text-primary duration-200 cursor-pointer">
          Services
        </Link>
        <Link className="hover:text-primary duration-200 cursor-pointer">
          Coverage
        </Link>
        <Link className="hover:text-primary duration-200 cursor-pointer">
          About Us
        </Link>
        <Link className="hover:text-primary duration-200 cursor-pointer">
          Pricing
        </Link>
        <Link className="hover:text-primary duration-200 cursor-pointer">
          Blog
        </Link>
        <Link className="hover:text-primary duration-200 cursor-pointer">
          Contact
        </Link>
      </div>

      {/* SOCIAL ICONS */}
      <nav className="mt-6">
        <div className="flex items-center justify-center gap-6">
          <a href="">
            <TbBrandLinkedinFilled
              size={34}
              className="hover:scale-110 transition"
              color="#44a2eb"
            />
          </a>

          <a href="">
            <TbBrandYoutubeFilled
              size={34}
              className="hover:scale-110 transition"
              color="#ed4a4a"
            />
          </a>

          <a href="">
            <FaSquareFacebook
              size={34}
              className="hover:scale-110 transition"
              color="#44a2eb"
            />
          </a>

          <a href="">
            <FaSquareXTwitter
              size={34}
              className="hover:scale-110 transition"
            />
          </a>
        </div>
      </nav>

      {/* COPYRIGHT */}
      <p className="text-center text-sm md:text-base mt-6 opacity-80">
        Copyright © {new Date().getFullYear()} — All rights reserved
      </p>
    </footer>
  );
};

export default Footer;