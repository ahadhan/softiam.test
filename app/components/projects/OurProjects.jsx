'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Image1 from "../../assets/images/pexels-fauxels-3183150.jpg";
import Image2 from "../../assets/images/pexels-fauxels-3183153.jpg";
import Image3 from "../../assets/images/pexels-hillaryfox-1595385.jpg"; 

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('web'); // Default tab is 'web'

  // Sample projects data
  const projects = [
    { id: 1, title: 'Web Project 1', type: 'web', image: Image1, pdfLink: '/pdf/web1.pdf' },
    { id: 2, title: 'Mobile Project 1', type: 'mobile', image: Image2, pdfLink: '/pdf/mobile1.pdf' },
    { id: 3, title: 'Design Project 1', type: 'design', image: Image2, pdfLink: '/pdf/design1.pdf' }, // Fixed key: image instead of Image2
    { id: 4, title: 'Web Project 2', type: 'web', image: Image3, pdfLink: '/pdf/web2.pdf' },
    { id: 5, title: 'Mobile Project 2', type: 'mobile', image: Image2, pdfLink: '/pdf/mobile2.pdf' }, // Fixed key: image instead of image1
    { id: 6, title: 'Design Project 2', type: 'design', image: Image2, pdfLink: '/pdf/design2.pdf' }, // Fixed key: image instead of image1
  ];

  const filteredProjects = projects.filter((project) => project.type === activeTab);

  return (
    <section 
      id="portfolio" 
      className="py-20 bg-white"
      data-aos="fade-up" // AOS animation for the section
    >
      <div className='main-container mx-auto'>
        {/* Section Header */}
        <div 
          className="left-side flex flex-col z-10 mb-12 md:mb-0" 
          data-aos="fade-right" // AOS animation for the header
          data-aos-delay="200"
        >
          <p className='text-secondaryColor text-3xl font-[400] my-5' data-aos="fade-up" data-aos-delay="300">
            Gallery Here
          </p>
          <h1 
            className='text-5xl font-semibold'
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            Latest <span className='text-secondaryColor font-playfair italic'>Projects</span> Are Here
          </h1>

          <p 
            className='text-lg my-4 font-roboto'
            data-aos="fade-up" 
            data-aos-delay="500"
          >
            At Softiam, we provide innovative software solutions designed to help businesses thrive in today’s digital landscape. Whether it's mobile app development, web applications, or AI-powered systems, we deliver high-quality solutions that meet our clients' unique needs.
          </p>
        </div>

        {/* Tabs for Filtering */}
        <div 
          className="flex justify-center mb-12 text-white gap-5"
          data-aos="fade-up" 
          data-aos-delay="600"
        >
          <button
            onClick={() => setActiveTab('web')}
            className={`py-2 px-4 font-semibold text-sm md:text-base rounded-lg transition ${
              activeTab === 'web'
                ? 'bg-secondaryColor text-white'
                : 'bg-gray-200 text-gray-800 shadow-md hover:bg-secondaryColor hover:text-white border-2 border-gray-200'
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setActiveTab('mobile')}
            className={`py-2 px-4 font-semibold text-sm md:text-base rounded-lg transition ${
              activeTab === 'mobile'
                ? 'bg-secondaryColor text-white'
                : 'bg-gray-200 text-gray-800 shadow-md hover:bg-secondaryColor hover:text-white border-2 border-gray-200'
            }`}
          >
            Mobile
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`py-2 px-4 font-semibold text-sm md:text-base rounded-lg transition ${
              activeTab === "design"
                ? 'bg-secondaryColor text-white'
                : 'bg-gray-200 text-gray-800 shadow-md hover:bg-secondaryColor hover:text-white border-2 border-gray-200'
            }`}
          >
            Design
          </button>
        </div>

        {/* Portfolio Cards */}
        <div 
          className='flex justify-center items-center w-full'
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="flex flex-wrap justify-center gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                data-aos="zoom-in" // AOS animation for each card
                data-aos-delay={`${800 + index * 200}`} // Staggered delay
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={400} 
                  className="w-full h-60 object-cover rounded-lg" 
                />
                
                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  data-aos="fade-in" // AOS animation for the overlay
                  data-aos-delay={`${800 + index * 200}`}
                >
                  <a 
                    href={project.pdfLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white text-lg font-semibold"
                  >
                    View PDF
                  </a>
                </div>

                {/* Project Title */}
                <div 
                  className="absolute bottom-4 left-4 text-white font-semibold text-xl"
                  data-aos="fade-up"
                  data-aos-delay={`${800 + index * 200 + 100}`}
                >
                  {project.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
