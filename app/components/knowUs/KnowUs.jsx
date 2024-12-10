'use client';


import React, { useState } from 'react';
import Image from 'next/image';
import Image1 from "../../assets/images/pexels-anntarazevich-8051953.jpg"

const AboutUs = () => {
  const [selectedTab, setSelectedTab] = useState('Our Mission');

  const tabs = [
    {
      name: 'Our Mission',
      images: [
        Image1, // Replace with your actual image paths
        Image1,
        Image1,
         ],
      content: "Our mission is to deliver exceptional solutions that empower our customers to succeed and innovate. We strive to make a positive impact by utilizing cutting-edge technologies and providing outstanding service.",
    },
    {
      name: 'Our Vision',
      images: [
        '/images/vision-large.jpg',
        '/images/vision-small1.jpg',
        '/images/vision-small2.jpg',
      ],
      content: "Our vision is to be a global leader in technology solutions, inspiring growth and innovation while maintaining a customer-centric approach in everything we do.",
    },
    {
      name: 'Career',
      images: [
        '/images/career-large.jpg',
        '/images/career-small1.jpg',
        '/images/career-small2.jpg',
      ],
      content: "Join our team and embark on a rewarding journey where your skills and ideas can shape the future. We are committed to fostering a culture of growth, collaboration, and excellence.",
    },
    {
      name: 'Solutions',
      images: [
        '/images/solutions-large.jpg',
        '/images/solutions-small1.jpg',
        '/images/solutions-small2.jpg',
      ],
      content: "We provide tailored solutions that address unique business challenges, leveraging the latest technologies to ensure efficiency, scalability, and innovation.",
    },
  ];

  const currentTab = tabs.find((tab) => tab.name === selectedTab);

  return (
    <div className='py-20 bg-gray-200 pb-32'>
      <section className=" main-container mx-auto ">
        <div className="container mx-auto ">
          <div className='w-1/2'>
            <p className='text-secondaryColor text-3xl font-[400] my-5'> Discover Us</p>
            <h1 className='text-5xl  font-semibold font-platfair'>The Power Of  <span className='text-secondaryColor font-playfair italic'>Software </span> , The Simplicity Of <span className='text-secondaryColor font-playfair italic'>Solutions </span></h1>

            <p className='text-lg  my-4 font-roboto '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit sint repellendus ratione dignissimos maxime?        </p>
          </div>

          {/* Horizontal Button Stack */}
          <div className="flex justify-center mb-16 space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`py-2 px-4 font-semibold text-sm md:text-base rounded-lg transition ${selectedTab === tab.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800 shadow-md hover:bg-blue-500 hover:text-white border-2 border-gray-200'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white w-100vw  p-6 h-[300px]">
            {/* Left Side (Images) */}
            <div className="flex flex-col gap-2 relative">
              <div className="flex-1 absolute -top-10 left-12">
                <Image
                  src={currentTab.images[0]}
                  width={400}
                  height={400}
                  alt="Large"
                  className="w-75 h-auto object-cover "
                />
              </div>
              <div className="grid grid-cols-2 gap-2 absolute -bottom-24 ">
                <Image
                  src={currentTab.images[1]}
                  width={400}
                  height={400}
                  alt="Small 1"
                  className="w-full h-40 object-cover "
                />
                <Image
                  src={currentTab.images[2]}
                  width={400}
                  height={400}
                  alt="Small 2"
                  className="w-full h-32 object-cover "
                />
              </div>
            </div>

            {/* Right Side (Text Content) */}
            <div className="flex flex-col justify-start mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {currentTab.name}
              </h3>
              <p className="text-gray-600">{currentTab.content}</p>

              <div className="relative w-100 h-auto bg-blue-500 transform skew-x-12 p-6 mt-12">
                <ul className="list-disc pl-5 text-white space-y-3">
                  <div className="grid grid-cols-2 gap-x-6 italic">
                    <li>Point 1: Description of point 1</li>
                    <li>Point 2: Description of point 2</li>
                    <li>Point 3: Description of point 3</li>
                    <li>Point 4: Description of point 4</li>
                  </div>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
