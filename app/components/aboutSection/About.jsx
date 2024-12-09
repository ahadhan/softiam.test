'use client'

import React, {useEffect} from 'react'
import '../../globals.css'
import Image from 'next/image'
import BgPrint from "../../assets/images/bubbles.png"
import LaptopImage from "../../assets/images/laptop-bg.png"
import AboutBg from "../../assets/images/about_image.png"
import CurvedLine from "../../assets/images/curve line 3d.png"
import RocketImg from "../../assets/images/rocket.png"
import VisionImg from "../../assets/images/vision.png"
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos'; // AOS JS

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className=' py-10 mx-auto main-container relative flex '>

<div className="line">
  <Image 
  src={CurvedLine}
  alt='line'
  className='absolute top-20 -left-20'
  >
  </Image>
</div>
      {/* Left Side */}
      <div className="left-side flex basis-1/2 flex-col z-10 mr-3" >
        <p className='text-secondaryColor text-3xl font-[400] my-5'> Featured case study</p>
        <h1 className='text-5xl  font-semibold font-playfair'>Empowering <span className='text-secondaryColor font-playfair italic'> Modern Businesses </span> With Cutting-Edge Software Solutions</h1>

        <p className='text-lg  my-4 font-roboto '>
          At softiam, we provide innovative software solutions designed to help businesses thrive in today’s digital landscape. Whether it's mobile app development, web applications, or AI-powered systems, we deliver high-quality solutions that meet our clients' unique needs.
        </p>

      <div className="img-container  ">
        <Image 
        src={AboutBg}
        alt='A person using computer.'
        // width={400}
        className='mx-auto w-[900px]'
        >

        </Image>
      </div>
          </div>

          {/* Right Side */}

      <div className='right-side basis-1/2 cards  m-10 flex flex-col gap-10 justify-center items-center'>


<div class="max-w-sm mx-auto card shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out p-6">
  <div class="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full mx-auto">
    {/* <!-- Heroicon --> */}
    <Image
    src={RocketImg}
    alt='mission'
    ></Image>
  </div>
  <h2 class="text-2xl font-semibold text-gray-100 text-center mt-4">Our Mission</h2>
  <p class="text-gray-200 text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat interdum libero, ac blandit risus.</p>
  {/* <button class="mt-4 px-6 py-2 bg-gray-100 text-secondaryColor rounded-full hover:bg-secondaryColor hover:text-white border-2 border-white border-box transition block mx-auto duration-300">
    Learn More
  </button> */}
</div>

<div class="max-w-sm mx-auto card shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out p-6">
  <div class="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full mx-auto">
    {/* <!-- Heroicon --> */}
    <Image
    src={VisionImg}
    alt='mission'
    ></Image>
  </div>
  <h2 class="text-2xl font-semibold text-gray-100 text-center mt-4">Our Vision</h2>
  <p class="text-gray-200 text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat interdum libero, ac blandit risus.</p>
  {/* <button class="mt-4 px-6 py-2 bg-gray-100 text-secondaryColor rounded-full hover:bg-secondaryColor hover:text-white border-2 border-white border-box transition block mx-auto duration-300">
    Learn More
  </button> */}
</div>

<div class="max-w-sm mx-auto card shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out p-6">
  <div class="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full mx-auto">
    {/* <!-- Heroicon --> */}
    <Image
    src={RocketImg}
    alt='mission'
    ></Image>
  </div>
  <h2 class="text-2xl font-semibold text-gray-100 text-center mt-4">Our Mission</h2>
  <p class="text-gray-200 text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat interdum libero, ac blandit risus.</p>
  {/* <button class="mt-4 px-6 py-2 bg-gray-100 text-secondaryColor rounded-full hover:bg-secondaryColor hover:text-white border-2 border-white border-box transition block mx-auto duration-300">
    Learn More
  </button> */}
</div>

      </div>
    </div>
  )
}

export default About