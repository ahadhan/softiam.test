
// "use client"

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Image1 from "../../assets/images/pexels-anntarazevich-8051953.jpg";

// const AboutUs = () => {
//   const [selectedTab, setSelectedTab] = useState('Our Mission');

//   const tabs = [
//     {
//       name: 'Our Mission',
//       images: [Image1, Image1, Image1],
//       content:
//         "Our mission is to deliver exceptional solutions that empower our customers to succeed and innovate. We strive to make a positive impact by utilizing cutting-edge technologies and providing outstanding service.",
//     },
//     {
//       name: 'Our Vision',
//       images: [
//         '/images/vision-large.jpg',
//         '/images/vision-small1.jpg',
//         '/images/vision-small2.jpg',
//       ],
//       content:
//         "Our vision is to be a global leader in technology solutions, inspiring growth and innovation while maintaining a customer-centric approach in everything we do.",
//     },
//     {
//       name: 'Career',
//       images: [
//         '/images/career-large.jpg',
//         '/images/career-small1.jpg',
//         '/images/career-small2.jpg',
//       ],
//       content:
//         "Join our team and embark on a rewarding journey where your skills and ideas can shape the future. We are committed to fostering a culture of growth, collaboration, and excellence.",
//     },
//     {
//       name: 'Solutions',
//       images: [
//         '/images/solutions-large.jpg',
//         '/images/solutions-small1.jpg',
//         '/images/solutions-small2.jpg',
//       ],
//       content:
//         "We provide tailored solutions that address unique business challenges, leveraging the latest technologies to ensure efficiency, scalability, and innovation.",
//     },
//   ];

//   const currentTab = tabs.find((tab) => tab.name === selectedTab);

//   return (
//     <div className="py-20 pb-32">
//       <section className="main-container mx-auto">
//         <div className="container mx-auto">
//           <div className="w-full md:w-1/2">
//             <p className="text-secondaryColor text-3xl font-[400] my-5">
//               Discover Us
//             </p>
//             <h1 className="text-4xl md:text-5xl font-semibold font-platfair">
//               The Power Of{' '}
//               <span className="text-secondaryColor font-playfair italic">
//                 Software{' '}
//               </span>
//               , The Simplicity Of{' '}
//               <span className="text-secondaryColor font-playfair italic">
//                 Solutions{' '}
//               </span>
//             </h1>

//             <p className="text-lg my-4 font-roboto">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
//               fugit sint repellendus ratione dignissimos maxime?
//             </p>
//           </div>

//           {/* Horizontal Button Stack */}
//           <div className="flex justify-center mb-16 space-x-4">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.name}
//                 onClick={() => setSelectedTab(tab.name)}
//                 className={`py-2 px-4 font-semibold text-sm md:text-base rounded-lg transition ${
//                   selectedTab === tab.name
//                     ? 'bg-secondaryColor text-white'
//                     : 'bg-white text-gray-800 shadow-md hover:bg-secondaryColor hover:text-white border-2 border-gray-200'
//                 }`}
//               >
//                 {tab.name}
//               </button>
//             ))}
//           </div>

//           {/* Content Card */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white w-full p-6 h-auto items-center">
//             {/* Left Side (Images) */}
//             <div className="flex  flex-row gap-4   ">
//               {/* Large Image */}
//               <div className="md:w-[500px] w-1/2  md:relative  ">
//                 <Image
//                   src={currentTab.images[0]}
//                   width={400}
//                   height={400}
//                   alt="Large"
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//               {/* Small Images */}
//               <div className="w-[200px]  flex flex-wrap gap-2 md:relative ">
//                 <Image
//                   src={currentTab.images[1]}
//                   width={200}
//                   height={200}
//                   alt="Small 1"
//                   className="w-1/2 md:w-full h-auto object-cover"
//                 />
//                 <Image
//                   src={currentTab.images[2]}
//                   width={200}
//                   height={200}
//                   alt="Small 2"
//                   className="w-1/2 md:w-full h-auto object-cover"
//                 />
//               </div>
//             </div>

//             {/* Right Side (Text Content) */}
//             <div className="flex flex-col justify-start mt-8">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 {currentTab.name}
//               </h3>
//               <p className="text-gray-600">{currentTab.content}</p>

//               <div className="relative w-full bg-secondaryColor transform skew-x-12 p-6 mt-12">
//                 <ul className="list-disc pl-5 text-white space-y-3">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 italic">
//                     <li>Point 1: Description of point 1</li>
//                     <li>Point 2: Description of point 2</li>
//                     <li>Point 3: Description of point 3</li>
//                     <li>Point 4: Description of point 4</li>
//                   </div>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;



'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Image1 from "../../assets/images/pexels-anntarazevich-8051953.jpg";

const AboutUs = () => {
  const [selectedTab, setSelectedTab] = useState('Our Mission');

  const tabs = [
    {
      name: 'Our Mission',
      images: [Image1, Image1, Image1],
      content:
        "Our mission is to deliver exceptional solutions that empower our customers to succeed and innovate. We strive to make a positive impact by utilizing cutting-edge technologies and providing outstanding service.",
    },
    {
      name: 'Our Vision',
      images: [
        '/images/vision-large.jpg',
        '/images/vision-small1.jpg',
        '/images/vision-small2.jpg',
      ],
      content:
        "Our vision is to be a global leader in technology solutions, inspiring growth and innovation while maintaining a customer-centric approach in everything we do.",
    },
    {
      name: 'Career',
      images: [
        '/images/career-large.jpg',
        '/images/career-small1.jpg',
        '/images/career-small2.jpg',
      ],
      content:
        "Join our team and embark on a rewarding journey where your skills and ideas can shape the future. We are committed to fostering a culture of growth, collaboration, and excellence.",
    },
    {
      name: 'Solutions',
      images: [
        '/images/solutions-large.jpg',
        '/images/solutions-small1.jpg',
        '/images/solutions-small2.jpg',
      ],
      content:
        "We provide tailored solutions that address unique business challenges, leveraging the latest technologies to ensure efficiency, scalability, and innovation.",
    },
  ];

  const currentTab = tabs.find((tab) => tab.name === selectedTab);

  return (
    <div className="py-20 pb-32">
      <section className="main-container mx-auto">
        <div className="container mx-auto">
          {/* Section Header */}
          <div
            className="w-full md:w-1/2 mb-12 md:mb-0"
            data-aos="fade-right" // AOS animation for the header
            data-aos-delay="200"
          >
            <p
              className="text-secondaryColor text-3xl font-[400] my-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Discover Us
            </p>
            <h1
              className="text-4xl md:text-5xl font-semibold font-playfair"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              The Power Of{' '}
              <span className="text-secondaryColor font-playfair italic">
                Software{' '}
              </span>
              , The Simplicity Of{' '}
              <span className="text-secondaryColor font-playfair italic">
                Solutions{' '}
              </span>
            </h1>

            <p
              className="text-lg my-4 font-roboto"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              fugit sint repellendus ratione dignissimos maxime?
            </p>
          </div>

          {/* Horizontal Button Stack */}
          <div
            className="flex justify-center mb-16 space-x-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`py-2 px-4 font-semibold text-sm md:text-base rounded-lg transition ${
                  selectedTab === tab.name
                    ? 'bg-secondaryColor text-white'
                    : 'bg-white text-gray-800 shadow-md hover:bg-secondaryColor hover:text-white border-2 border-gray-200'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white w-full p-6 h-auto items-center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            {/* Left Side (Images) */}
            <div className="flex flex-row gap-4">
              {/* Large Image */}
              <div className="md:w-[500px] w-1/2 md:relative">
                <Image
                  src={currentTab.images[0]}
                  width={400}
                  height={400}
                  alt="Large"
                  className="w-full h-auto object-cover"
                  data-aos="zoom-in" // AOS animation for large image
                  data-aos-delay="800"
                />
              </div>
              {/* Small Images */}
              <div className="w-[200px] flex flex-wrap gap-2 md:relative">
                <Image
                  src={currentTab.images[1]}
                  width={200}
                  height={200}
                  alt="Small 1"
                  className="w-1/2 md:w-full h-auto object-cover"
                  data-aos="fade-up"
                  data-aos-delay="900"
                />
                <Image
                  src={currentTab.images[2]}
                  width={200}
                  height={200}
                  alt="Small 2"
                  className="w-1/2 md:w-full h-auto object-cover"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                />
              </div>
            </div>

            {/* Right Side (Text Content) */}
            <div className="flex flex-col justify-start mt-8">
              <h3
                className="text-2xl font-semibold text-gray-800 mb-4"
                data-aos="fade-up"
                data-aos-delay="1100"
              >
                {currentTab.name}
              </h3>
              <p
                className="text-gray-600"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                {currentTab.content}
              </p>

              <div
                className="relative w-full bg-secondaryColor transform skew-x-12 p-6 mt-12"
                >
                <ul className="list-disc pl-5 text-white space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 italic  ">
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
