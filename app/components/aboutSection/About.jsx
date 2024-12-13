

// 'use client'

// import React, { useEffect } from 'react';
// import '../../globals.css';
// import Image from 'next/image';
// import AboutBg from "../../assets/images/about_image.png";
// import CurvedLine from "../../assets/images/curve line 3d.png";
// import RocketImg from "../../assets/images/rocket.png";
// import VisionImg from "../../assets/images/vision.png";
// import 'aos/dist/aos.css'; // AOS CSS
// import AOS from 'aos'; // AOS JS

// const About = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration (in ms)
//       once: true, // Whether animation should happen only once
//     });
//   }, []);

//   return (
//     <div className="py-10 mx-auto main-container relative flex flex-col md:flex-row items-center">
//       {/* Background Line */}
//       <div className="line">
//         <Image
//           src={CurvedLine}
//           alt="line"
//           className="absolute top-20 -left-20 hidden lg:block"
//         />
//       </div>

//       {/* Left Side */}
//       <div className="left-side flex flex-col basis-full md:basis-1/2 px-5 md:px-10 z-10">
//         <p className="text-secondaryColor text-3xl font-[400] my-5 text-center md:text-left">
//           Featured Case Study
//         </p>
//         <h1 className="text-4xl md:text-5xl font-semibold font-playfair text-center md:text-left">
//           Empowering{' '}
//           <span className="text-secondaryColor font-playfair italic">
//             Modern Businesses
//           </span>{' '}
//           With Cutting-Edge Software Solutions
//         </h1>
//         <p className="text-lg my-4 font-roboto text-center md:text-left">
//           At Softiam, we provide innovative software solutions designed to help
//           businesses thrive in today’s digital landscape. Whether it's mobile
//           app development, web applications, or AI-powered systems, we deliver
//           high-quality solutions that meet our clients' unique needs.
//         </p>
//         <div className="img-container mx-auto md:mx-0">
//           <Image
//             src={AboutBg}
//             alt="A person using computer."
//             className="w-full max-w-[500px] md:max-w-[900px]"
//           />
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="right-side flex flex-col gap-10 justify-center items-center mt-10 md:mt-0 px-5 md:px-10 basis-full md:basis-1/2">
//         {/* Card 1 */}
//         <div className="max-w-sm w-full shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out p-6 bg-secondaryColor text-white">
//           <div className="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full mx-auto">
//             <Image src={RocketImg} alt="mission" />
//           </div>
//           <h2 className="text-2xl font-semibold text-center mt-4">
//             Our Mission
//           </h2>
//           <p className="text-center mt-2">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//             volutpat interdum libero, ac blandit risus.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="max-w-sm w-full shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out p-6 bg-secondaryColor text-white">
//           <div className="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full mx-auto">
//             <Image src={VisionImg} alt="vision" />
//           </div>
//           <h2 className="text-2xl font-semibold text-center mt-4">
//             Our Vision
//           </h2>
//           <p className="text-center mt-2">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//             volutpat interdum libero, ac blandit risus.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="max-w-sm w-full shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out p-6 bg-secondaryColor text-white">
//           <div className="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full mx-auto">
//             <Image src={RocketImg} alt="mission" />
//           </div>
//           <h2 className="text-2xl font-semibold text-center mt-4">
//             Our Mission
//           </h2>
//           <p className="text-center mt-2">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//             volutpat interdum libero, ac blandit risus.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;










'use client'

import React, { useEffect } from 'react';
import '../../globals.css';
import Image from 'next/image';
import AboutBg from "../../assets/images/about_image.png";
import CurvedLine from "../../assets/images/curve line 3d.png";
import RocketImg from "../../assets/images/rocket.png";
import VisionImg from "../../assets/images/vision.png";
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
    <div 
      className="py-10 mx-auto main-container relative flex flex-col md:flex-row items-center"
      data-aos="fade-up" // AOS animation for the main container
    >
      {/* Background Line */}
      <div 
        className="line"
        data-aos="fade-right" // AOS animation for the background line
      >
        <Image
          src={CurvedLine}
          alt="line"
          className="absolute top-20 -left-20 hidden lg:block"
        />
      </div>

      {/* Left Side */}
      <div 
        className="left-side flex flex-col basis-full md:basis-1/2 px-5 md:px-10 z-10"
        data-aos="fade-right" // AOS animation for the left side
      >
        <p 
          className="text-secondaryColor text-2xl sm:text-3xl  font-[400] my-5 text-center md:text-left"
          data-aos="fade-up" // AOS animation for the subheading
        >
          Featured Case Study
        </p>
        <h1 
          className="text-3xl md:text-5xl font-semibold font-playfair text-center md:text-left"
          data-aos="fade-up" // AOS animation for the main heading
          data-aos-delay="200" // Delay for a staggered effect
        >
          Empowering{' '}
          <span className="text-secondaryColor font-playfair italic">
            Modern Businesses
          </span>{' '}
          With Cutting-Edge Software Solutions
        </h1>
        <p 
          className="text-lg my-4 font-roboto text-center md:text-left"
          data-aos="fade-up" // AOS animation for the description
          data-aos-delay="400"
        >
          At Softiam, we provide innovative software solutions designed to help
          businesses thrive in today’s digital landscape. Whether it's mobile
          app development, web applications, or AI-powered systems, we deliver
          high-quality solutions that meet our clients' unique needs.
        </p>
        <div 
          className="img-container mx-auto md:mx-0"
          data-aos="zoom-in" // AOS animation for the image
          data-aos-delay="600"
        >
          <Image
            src={AboutBg}
            alt="A person using computer."
            className="w-full max-w-[500px] md:max-w-[900px]"
          />
        </div>
      </div>

      {/* Right Side */}
      <div 
        className="right-side flex flex-col gap-10 justify-center items-center mt-10 md:mt-0 px-5 md:px-10 basis-full md:basis-1/2"
        data-aos="fade-left" // AOS animation for the right side
      >
        {/* Card 1 */}
        <div 
          className="max-w-sm w-full shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out p-6 bg-secondaryColor text-white"
          data-aos="zoom-in" // AOS animation for Card 1
        >
          <div 
            className="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full mx-auto"
            data-aos="fade-up" // AOS animation for the icon container
            data-aos-delay="200"
          >
            <Image src={RocketImg} alt="mission" />
          </div>
          <h2 
            className="text-2xl font-semibold text-center mt-4"
            data-aos="fade-up" // AOS animation for Card 1 title
            data-aos-delay="400"
          >
            Our Mission
          </h2>
          <p 
            className="text-center mt-2"
            data-aos="fade-up" // AOS animation for Card 1 description
            data-aos-delay="600"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            volutpat interdum libero, ac blandit risus.
          </p>
        </div>

        {/* Card 2 */}
        <div 
          className="max-w-sm w-full shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out p-6 bg-secondaryColor text-white"
          data-aos="zoom-in" // AOS animation for Card 2
          data-aos-delay="200"
        >
          <div 
            className="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full mx-auto"
            data-aos="fade-up" // AOS animation for the icon container
            data-aos-delay="400"
          >
            <Image src={VisionImg} alt="vision" />
          </div>
          <h2 
            className="text-2xl font-semibold text-center mt-4"
            data-aos="fade-up" // AOS animation for Card 2 title
            data-aos-delay="600"
          >
            Our Vision
          </h2>
          <p 
            className="text-center mt-2"
            data-aos="fade-up" // AOS animation for Card 2 description
            data-aos-delay="800"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            volutpat interdum libero, ac blandit risus.
          </p>
        </div>

        {/* Card 3 */}
        <div 
          className="max-w-sm w-full shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out p-6 bg-secondaryColor text-white"
          data-aos="zoom-in" // AOS animation for Card 3
          data-aos-delay="200"
        >
          <div 
            className="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full mx-auto"
            data-aos="fade-up" // AOS animation for the icon container
            data-aos-delay="400"
          >
            <Image src={RocketImg} alt="mission" />
          </div>
          <h2 
            className="text-2xl font-semibold text-center mt-4"
            data-aos="fade-up" // AOS animation for Card 3 title
            data-aos-delay="600"
          >
            Our Mission
          </h2>
          <p 
            className="text-center mt-2"
            data-aos="fade-up" // AOS animation for Card 3 description
            data-aos-delay="800"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            volutpat interdum libero, ac blandit risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
