import React from 'react'
import '../../globals.css'
import Image from 'next/image'
import BgPrint from "../../assets/images/bubbles.png"
import LaptopImage from "../../assets/images/laptop-bg.png"

const Services = () => {
    return(
<div className=' py-10 mx-auto relative'>

      <div
        className="absolute  inset-0 bg-cover bg-center opacity-80 top-40 z-10"
        style={{ backgroundImage: `url(${BgPrint.src})` }}
      ></div>

      <div className=" main-container text-center font-roboto w-[50vw] mx-auto z-20">
        <h1 className='text-secondaryColor text-5xl font-[500] my-5'>What We Offer?</h1>
        <p className='text-lg opacity-100 '>
        The Softiam -- provides you integrated design and content solutions, we specialize in creating stunning, user-friendly websites that elevate your online presence. Let us transform your digital landscape and help you reach your online goals.
        </p>
      </div>

      <div className="relative w-full z-30 max-w-4xl mx-auto">
        {/* Laptop/Table Image */}
        <Image 
          src={LaptopImage} 
          alt="Laptop showcasing services" 
          className="mx-auto w-full "
          priority 
        />

        {/* Cards inside the screen */}
        <div className="absolute inset-0 top-20 left-[15%] right-[15%] flex flex-col gap-5 p-5 bg-transparent z-20">
          {/* Service Cards */}
          <div className="bg-secondaryColor shadow-md rounded-lg p-4  border-4 border-blue-600 ">
            <h3 className="text-xl font-bold text-primaryColor mb-2 text-white">Web Development</h3>
            <p className="text-gray-200">We build scalable and modern websites to help your business grow.</p>
          </div>
          <div className="bg-secondaryColor shadow-md rounded-lg p-4  border-4 border-blue-600  ">
            <h3 className="text-xl font-bold text-primaryColor mb-2 text-white">App Design</h3>
            <p className="text-gray-200">Crafting user-friendly and visually appealing mobile apps.</p>
          </div>
          <div className="bg-secondaryColor shadow-md rounded-lg p-4  border-4 border-blue-600 ">
            <h3 className="text-xl font-bold text-primaryColor mb-2 text-white">SEO Optimization</h3>
            <p className="text-gray-200">Improving your online presence with advanced SEO strategies.</p>
          </div>
          <div className="seeMore text-right ">
            <a href="/" className="cursor:pointer hover:text-blue-500"> 
            See More ...</a>
          </div>
        </div>
      </div>
    </div>
    )
  }


export default Services