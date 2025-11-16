import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import amzon from '../../../assets/brands/amazon.png'
import casio from "../../../assets/brands/casio.png";
import amzon_vic from "../../../assets/brands/amazon_vector.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from 'swiper/modules';


const brandsLogo = [
  amzon,
  casio,
  amzon_vic,
  moonstar,
  randstad,
  star,
  start_people,
];


const Brands = () => {
  return (
    <div className='my-10'>
      <div className='font-bold text-secondary text-center  py-5 text-3xl mb-5'>
        <h3>We've helped thousands of sales teams</h3>
      </div>
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandsLogo.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
              src={logo}
              alt="brand logo"
              className="w-24 h-auto mx-auto opacity-70 hover:opacity-100 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
