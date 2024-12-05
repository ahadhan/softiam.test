import React from 'react'
import '../../globals.css'
import Image from 'next/image'
import BgPrint from "../../assets/images/bubbles.png"
import LaptopImage from "../../assets/images/laptop-bg.png"

const About = () => {
  return (
    <div className=' py-10 mx-auto main-container relative'>

      {/* Left Side */}
      <div className="left-side flex basis-1/2 flex-col" >
        <p className='text-secondaryColor text-3xl font-[500] my-5'> Featured case study</p>
        <h1 className='text-5xl w-1/2 font=vold font-platfair'>Empowering <span className='text-secondaryColor '> Modern Businesses </span> With Cutting-Edge Software Solutions</h1>

        <p className='text-xl w-1/2 my-4'>
          At softiam, we provide innovative software solutions designed to help businesses thrive in today’s digital landscape. Whether it's mobile app development, web applications, or AI-powered systems, we deliver high-quality solutions that meet our clients' unique needs.


        </p>
      </div>

      <div className="right-side">
        <div>

        </div>
      </div>
    </div>
  )
}

export default About