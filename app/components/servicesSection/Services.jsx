

// import React from "react";
// import "../../globals.css";
// import Image from "next/image";
// import BgPrint from "../../assets/images/bubbles.png";
// import LaptopImage from "../../assets/images/laptop-bg.png";
// import WebImg from "../../assets/images/developmen.png"
// import AiImg from "../../assets/images/Ai.webp"
// import AppImg from "../../assets/images/app.png"

// const Services = () => {
//   return (
//     <div className="py-6 mx-auto relative">
//       {/* Background Pattern */}
//       {/* <div
//         className="absolute inset-0 bg-cover bg-center opacity-80 top-40 z-10"
//         style={{ backgroundImage: `url(${BgPrint.src})` }}
//       ></div> */}

//       {/* Heading Section */}
//       <div className="main-container  flex gap-10 mx-auto z-30 mb-20 md:mb-0">
//         <div className="md:w-1/2 hidden md:block ">

//         </div>
//         <div className="md:w-1/2 w-full text-center">
//         <p className="text-secondaryColor text-3xl font-[400] my-5 md:text-left">
//           Our Services
//         </p>
//         <h1 className="text-secondaryColor text-5xl font-merriweather font-[600] text-left">
//           What We Offer?
//         </h1>
//         <p className="text-lg opacity-100 font-roboto font-[500] z-30  w-100">
//           The Softiam -- provides you integrated design and content solutions.
//           We specialize in creating stunning, user-friendly websites that
//           elevate your online presence. Let us transform your digital landscape
//           and help you reach your online goals.
//         </p>
//       </div>
//       </div>

//       {/* Service Cards Section */}
//       <div className="relative w-full z-30 max-w-4xl mx-auto -mt-14">

//         {/* Service Cards */}
//         <div className="container mx-auto px-4">
//         {/* <h2 className="text-center text-3xl font-bold mb-12">Our Services</h2> */}
//         <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 ">
//           {/* Card 1 */}
//           <div className="service-card neon-card bg-gradient-light shadow-neon font-roboto transform hover:rotate-[-5deg] hover:scale-105 transition duration-300  p-3 rounded-lg max-w-md w-full ">
//             <h3 className="text-2xl font-bold mb-4 text-white text-center font-roboto">Web Development</h3>
//             <Image
//             src={WebImg}
//             alt="icon"
//             width={400}
//             >

//             </Image>
//             <p className="text-gray-100  font-roboto font-[500]">
//               Comprehensive details about Service 1 and how it can benefit the user.
//             </p>
//           </div>
//           {/* Card 2 */}
//           <div className="service-card neon-card bg-gradient-light shadow-neon font-roboto transform hover:rotate-[5deg] hover:scale-105 transition duration-300  p-3 rounded-lg max-w-md w-full mt-40 ">
//             <h3 className="text-2xl font-bold mb-4 text-white text-center ">Ai Algorithms</h3>
//             <Image
//             src={AiImg}
//             alt="icon"
//             width={400}
//             >

//             </Image>
//             <p className="text-gray-100  font-roboto font-[500]">
//               Comprehensive details about Service 1 and how it can benefit the user.
//             </p>
//           </div>
//           {/* Card 3 */}
//           <div className="service-card neon-card bg-gradient-light shadow-neon font-roboto transform hover:rotate-[-5deg] hover:scale-105 transition duration-300  p-3 rounded-lg max-w-md w-full mt-80">
//             <h3 className="text-2xl font-bold mb-4 text-white text-center">App Development</h3>
//             <Image
//             src={AppImg}
//             alt="icon"
//             width={400}
//             >

//             </Image>
//             <p className="text-gray-100  font-roboto font-[500]">
//               Comprehensive details about Service 1 and how it can benefit the user.
//             </p>
//           </div>
//         </div>
//       </div>
//       </div>

//       {/* Add Space to Separate This Section from the Next */}
//       <div className="h-20"></div>
//     </div>
//   );
// };

// export default Services;








import React from "react";
import "../../globals.css";
import Image from "next/image";
import WebImg from "../../assets/images/developmen.png";
import AiImg from "../../assets/images/Ai.png";
import AppImg from "../../assets/images/app.png";
import SerImg from "../../assets/images/services.png"

const Services = () => {
  return (
    <div className="py-6 mx-auto relative">
      {/* Heading Section */}
      <div className="main-container flex md:flex-row flex-col items-center gap-10 mx-auto z-30 mb-20 md:mb-0">
        <div className="md:w-1/2  md:block -mt-10">
          <Image
          src={SerImg}
          alt="Services"
          width={500}
          >

          </Image>
        </div>
        <div className="md:w-1/2 w-full ">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-secondaryColor text-2xl sm:text-3xl md:text-4xl  font-[400] my-5 md:text-left "
          >
            Our Services
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-secondaryColor text-3xl sm:text-4xl md:text-5xl  font-merriweather font-[600] text-left"
          >
            What We Offer?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-md   opacity-100 font-roboto font-[500] z-30 w-100"
          >
            The Softiam -- provides you integrated design and content solutions.
            We specialize in creating stunning, user-friendly websites that
            elevate your online presence. Let us transform your digital landscape
            and help you reach your online goals.
          </p>
        </div>
      </div>

      {/* Service Cards Section */}
      <div
        className="relative w-full z-30 max-w-4xl mx-auto -mt-14"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        {/* Service Cards */}
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Card 1 */}
            <div
              data-aos="flip-left"
              data-aos-delay="100"
              className="service-card neon-card bg-gradient-light shadow-neon font-roboto transform transition duration-300 p-3 rounded-lg max-w-md w-full hover:scale-105 hover:rotate-[-5deg]"
            >
              <h3 className="text-2xl font-bold mb-4 text-white text-center font-roboto">
                Web Development
              </h3>
              <Image src={WebImg} alt="icon" width={400}></Image>
              <p className="text-gray-100 font-roboto font-[500]">
                Comprehensive details about Service 1 and how it can benefit the
                user.
              </p>
            </div>
            {/* Card 2 */}
            <div
              className="service-card neon-card bg-gradient-light shadow-neon font-roboto transform transition duration-300 p-3 rounded-lg max-w-md w-full md:mt-40 mt-8 hover:scale-105 hover:rotate-[5deg]"
            >
              <h3 className="text-2xl font-bold mb-4 text-white text-center">
                Ai Algorithms
              </h3>
              <Image src={AiImg} alt="icon" width={400}></Image>
              <p className="text-gray-100 font-roboto font-[500]">
                Comprehensive details about Service 2 and how it can benefit the
                user.
              </p>
            </div>
            {/* Card 3 */}
            <div
              data-aos="flip-left"
              data-aos-delay="500"
              className="service-card neon-card bg-gradient-light shadow-neon font-roboto transform transition duration-300 p-3 rounded-lg max-w-md w-full md:mt-80 mt-8  hover:scale-105 hover:rotate-[-5deg]"
            >
              <h3 className="text-2xl font-bold mb-4 text-white text-center">
                App Development
              </h3>
              <Image src={AppImg} alt="icon" width={400}></Image>
              <p className="text-gray-100 font-roboto font-[500]">
                Comprehensive details about Service 3 and how it can benefit the
                user.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Space to Separate This Section from the Next */}
      <div className="h-20"></div>
    </div>
  );
};

export default Services;
