'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa'; // Icons for technologies
import { SiNextdotjs, SiTailwindcss, SiDjango } from 'react-icons/si';
import CurvedLine from "../../assets/images/curved line.svg";
import ToolsImg from "../../assets/images/tools.png"
import QuestionMark from '../../assets/images/question-mark.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TechnologiesSection = () => {

    useEffect(() => {
      AOS.init({
        duration: 1000,  // Duration of animation
        easing: 'ease-in-out',  // Easing type
        once: true,  // Animate only once
      });
    }, []);


  const [selectedDomain, setSelectedDomain] = useState('Web Platforms'); // State for selected domain

  

  const domains = [
    {
      name: 'Web Platforms',
      technologies: [
        { icon: <FaReact size={48} />, name: 'React' },
        { icon: <SiNextdotjs size={48} />, name: 'Next.js' },
        { icon: <SiTailwindcss size={48} />, name: 'Tailwind CSS' },
      ],
    },
    {
      name: 'Backend',
      technologies: [
        { icon: <FaNodeJs size={48} />, name: 'Node.js' },
        { icon: <FaPython size={48} />, name: 'Python' },
        { icon: <SiDjango size={48} />, name: 'Django' },
      ],
    },
    {
      name: 'DevOps',
      technologies: [
        { icon: <FaDocker size={48} />, name: 'Docker' },
        { icon: <FaAws size={48} />, name: 'AWS' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="main-container mx-auto px-6 relative">

        <div className="line ">
          <Image
            src={CurvedLine}
            alt='line'
            className='absolute -top-28 -left-20 z-0 opacity-50 '
          >
          </Image>

          <Image
           data-aos="flip-up"  // AOS flip effect
           data-aos-duration="800"  // Animation duration
           data-aos-easing="ease-in -out"  // Easing function
          src={QuestionMark}
          width={100}
          height={100}
          className='absolute -top-20 left-36 skew-x-12 '
          >
          </Image>

        </div>
        <div className='flex justify-between z-10'>
          <div className='w-1/2'>
            <p className='text-secondaryColor text-3xl font-[400] my-5'> Our Tools </p>
            <h1 className='text-5xl  font-semibold font-platfair'>What <span className='text-secondaryColor font-playfair italic'> Technologies </span> We Use?</h1>
            <p className='text-lg  my-4 font-roboto '>
              At softiam, We use the best and most reliable technologies to deliver top-notch solutions for our customers.
            </p>
          </div>

          <div className="image -mt-10 ">
            <Image
              src={ToolsImg}
              className=''
              width={400}
              height={400}
            ></Image>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-4">
          {/* Left Side: Vertical Buttons */}
          <div className="flex flex-col space-y-4 w-full md:w-1/4">
            {domains.map((domain) => (
              <button
                key={domain.name}
                onClick={() => setSelectedDomain(domain.name)}
                className={`py-3 px-6 rounded-lg text-left font-semibold text-gray-800 hover:bg-blue-500 hover:text-white transition ${selectedDomain === domain.name ? 'bg-secondaryColor text-white' : 'bg-white shadow-md'
                  }`}
              >
                {domain.name}
              </button>
            ))}
          </div>
          <div className="line bg-blue-600 h-110 w-1 ">

          </div>

          {/* Right Side: Cards */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains
              .find((domain) => domain.name === selectedDomain)
              ?.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-secondaryColor rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition transform duration-300"
                >
                  <div className="text-white">{tech.icon}</div>
                  <p className="mt-4 text-gray-200 font-semibold">{tech.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
