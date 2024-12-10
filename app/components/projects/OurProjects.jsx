'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Image1 from "../../assets/images/pexels-fauxels-3183150.jpg"
import Image2 from "../../assets/images/pexels-fauxels-3183153.jpg"
import Image3 from "../../assets/images/pexels-hillaryfox-1595385.jpg" 
const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('web'); // Default tab is 'web'

  // Sample projects data
  const projects = [
    { id: 1, title: 'Web Project 1', type: 'web', image: Image1, pdfLink: '/pdf/web1.pdf' },
    { id: 2, title: 'Mobile Project 1', type: 'mobile', image: Image2, pdfLink: '/pdf/mobile1.pdf' },
    { id: 3, title: 'Design Project 1', type: 'design', Image2: '/images/design1.jpg', pdfLink: '/pdf/design1.pdf' },
    { id: 4, title: 'Web Project 2', type: 'web', image: Image3, pdfLink: '/pdf/web2.pdf' },
    { id: 5, title: 'Mobile Project 2', type: 'mobile', image1: '/images/mobile2.jpg', pdfLink: '/pdf/mobile2.pdf' },
    { id: 6, title: 'Design Project 2', type: 'design', image1: '/images/design2.jpg', pdfLink: '/pdf/design2.pdf' },
  ];

  const filteredProjects = projects.filter((project) => project.type === activeTab);

  return (
    <section id="portfolio" className="py-20  bg-white">
      <div className='main-container mx-auto'>
         <div className="left-side flex basis-1/2 flex-col z-10 " >
        <p className='text-secondaryColor text-3xl font-[400] my-5'> Gallery Here</p>
        <h1 className='text-5xl  font-semibold '>Latest <span className='text-secondaryColor font-playfair italic'> Projects </span> Are Here</h1>

        <p className='text-lg  my-4 font-roboto '>
          At softiam, we provide innovative software solutions designed to help businesses thrive in today’s digital landscape. Whether it's mobile app development, web applications, or AI-powered systems, we deliver high-quality solutions that meet our clients' unique needs.
        </p>
{/* 
      <div className="img-container  ">
        <Image 
        src={AboutBg}
        alt='A person using computer.'
        // width={400}
        className='mx-auto w-[900px]'
        >

        </Image>
      </div> */}
          </div>
      <div className=" mx-auto px-6 main-container">
        {/* Tabs for Filtering */}
        <div className="flex justify-center mb-12 text-white gap-5">
          <button
            onClick={() => setActiveTab('web')}
            className={`py-2 px-4 font-semibold text-sm md:text-base rounded-lg transition ${activeTab === 'web'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 shadow-md hover:bg-blue-500 hover:text-white border-2 border-gray-200'
                  }`}
          >
            Web
          </button>
          <button
            onClick={() => setActiveTab('mobile')}
            className={`py-2 px-4 font-semibold text-sm md:text-base rounded-lg transition ${activeTab === 'mobile'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 shadow-md hover:bg-blue-500 hover:text-white border-2 border-gray-200'
                  }`}
          >
            Mobile
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`py-2 px-4 font-semibold text-sm md:text-base rounded-lg transition ${activeTab === "design"
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 shadow-md hover:bg-blue-500 hover:text-white border-2 border-gray-200'
                  }`}
          >
            Design
          </button>
        </div>

        {/* Portfolio Cards */}
        <div className='flex justify-center items-center w-full'>
        <div className="flex flex-wrap justify-center gap-8 ">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <Image src={project.image} alt={project.title} width={400} height={400} className="w-full h-60 object-cover rounded-lg" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.pdfLink} target="_blank" rel="noopener noreferrer" className="text-white text-lg font-semibold">
                  View PDF
                </a>
              </div>

              {/* Project Title */}
              <div className="absolute bottom-4 left-4 text-white font-semibold text-xl">{project.title}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default PortfolioSection;
