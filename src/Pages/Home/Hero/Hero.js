import React from 'react';
import{ useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";
// import required modules
import {Autoplay, EffectFade } from "swiper";

import banner1 from '../../../Images/banner1.jpg'
import banner2 from '../../../Images/banner2.jpg'
import banner3 from '../../../Images/banner3.jpg'
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
       

        <>
    
     <Swiper
        spaceBetween={30}
        effect={"fade"}
        
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper relative "
        
      >
        <div className='h-screen w-full absolute top-0 z-10 overlay'>

        </div>
        <SwiperSlide className='img-gradient'>
          <img className='' src={ banner1}  alt='banner'/>
        </SwiperSlide>
        <SwiperSlide className='img-gradient'>
          <img src={ banner2}  alt='banner'/>
        </SwiperSlide>
        <SwiperSlide className='img-gradient'>
          <img src={ banner3}  alt='banner'/>
        </SwiperSlide>
      </Swiper>
      <div className='mx-auto text-center w-full'>
        
        <h2 className='text-md md:text-3xl font-roboto   text-[#FF5E15] absolute left-0 right-0 top-12 md:top-44  z-50'>HIGH QUALITY</h2>
        <h2 className='text-xl md:text-8xl font-roboto w-3/4 md:w-1/2 mx-auto text-white absolute left-0 right-0 top-20 md:top-56  z-50 '>SERVICES FOR INDUSTRIES</h2>
        <p className='text-sm md:text-xl font-roboto w-11/12 md:w-1/2 mx-auto text-white absolute left-0 right-0 top-[115px] md:top-[425px]  z-50'>In the world of renewable energy we cast quite a shadow. Innovative produts and services</p>
        <Link className='px-2 md:px-5 py-1 md:py-3 bg-[#FF5E15] absolute left-0 right-0 top-[165px] md:top-[510px] text-white font-roboto text-md md:text-lg z-50 w-24 md:w-44 mx-auto hover:bg-[#f0530a] transition-all duration-300'>Book Now</Link>
      </div>
    </> 
   

    );
};

export default Hero;