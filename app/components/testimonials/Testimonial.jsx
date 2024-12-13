

// "use client";
// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
// import Image from "next/image";
// import Client1 from "../../assets/images/manager.png";

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       client: "John Doe",
//       picture: Client1,
//       designation: "CEO, Company X",
//       feedback:
//         "This service is outstanding! The team was highly professional and delivered beyond my expectations.",
//       stars: 5,
//     },
//     {
//       client: "Jane Smith",
//       picture: "/images/jane.jpg",
//       designation: "CTO, Startup Y",
//       feedback:
//         "I am incredibly happy with the results. The communication and quality of work were excellent.",
//       stars: 4,
//     },
//     {
//       client: "Michael Brown",
//       picture: "/images/michael.jpg",
//       designation: "Manager, Business Z",
//       feedback:
//         "Highly recommend! The project was completed on time and the results were exceptional.",
//       stars: 5,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const currentTestimonial = testimonials[currentIndex];

//   return (
//     <section className="main-container mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       {/* Heading Section */}
//       <div className="text-center mb-10">
//         <p className="text-secondaryColor text-3xl font-medium my-2">What Our Clients Say</p>
//         <h1 className="text-4xl sm:text-5xl font-semibold italic">
//           Clients <span className="text-secondaryColor font-merriweather text-5xl sm:text-6xl">Testimonials</span>
//         </h1>
//       </div>

//       <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6">
//         {/* Card Section */}
//         <div
//           className="relative w-full lg:w-2/3 bg-white border-2 border-black rounded-tl-3xl rounded-br-3xl shadow-lg p-6 flex flex-col sm:flex-row gap-5 items-center"
//           style={{ borderTopRightRadius: "0", borderBottomLeftRadius: "0" }}
//         >
//           <div className="bg-gray-100 p-4 border-2 border-secondaryColor rounded-tl-3xl rounded-br-3xl shadow text-center flex flex-col w-full sm:w-1/3 items-center">
//             <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
//               {currentTestimonial.client}
//             </h3>
//             <p className="text-sm text-gray-600 mb-2">
//               {currentTestimonial.designation}
//             </p>
//             <div className="flex justify-center">
//               {[...Array(5)].map((_, starIndex) => (
//                 <span
//                   key={starIndex}
//                   className={`text-lg ${
//                     starIndex < currentTestimonial.stars
//                       ? "text-yellow-500"
//                       : "text-gray-300"
//                   }`}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="w-full sm:w-2/3 text-center sm:text-left">
//             <FaQuoteLeft className="text-2xl text-secondaryColor mb-2" />
//             <p className="text-gray-700">{currentTestimonial.feedback}</p>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="w-full lg:w-1/3 flex justify-center items-center">
//           <div className="relative z-30 border-8 border-secondaryColor rounded-full w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] overflow-hidden">
//             <Image
//               src={currentTestimonial.picture}
//               alt={currentTestimonial.client}
//               width={400}
//               height={400}
//               className="object-cover w-full h-full rounded-full absolute top-0 left-0 z-10 transform scale-110 shadow-xl"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Buttons Section */}
//       <div className="flex justify-center items-center mt-8 space-x-4">
//         <button
//           onClick={prevSlide}
//           className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
//         >
//           <FaChevronLeft className="text-gray-800" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
//         >
//           <FaChevronRight className="text-gray-800" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;











'use client';

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Client1 from "../../assets/images/manager.png";


const TestimonialsSection = () => {
  const testimonials = [
    {
      client: "John Doe",
      picture: Client1,
      designation: "CEO, Company X",
      feedback:
        "This service is outstanding! The team was highly professional and delivered beyond my expectations.",
      stars: 5,
    },
    {
      client: "Jane Smith",
      picture: "/images/jane.jpg",
      designation: "CTO, Startup Y",
      feedback:
        "I am incredibly happy with the results. The communication and quality of work were excellent.",
      stars: 4,
    },
    {
      client: "Michael Brown",
      picture: "/images/michael.jpg",
      designation: "Manager, Business Z",
      feedback:
        "Highly recommend! The project was completed on time and the results were exceptional.",
      stars: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="main-container mx-auto px-4 sm:px-6 lg:px-8 py-10"
      data-aos="fade-up" // AOS animation for the section
      data-aos-delay="200"
    >
      {/* Heading Section */}
      <div 
        className="text-center mb-10"
        data-aos="fade-down" // AOS animation for the heading
        data-aos-delay="300"
      >
        <p className="text-secondaryColor text-3xl font-medium my-2" data-aos="fade-up" data-aos-delay="400">
          What Our Clients Say
        </p>
        <h1 
          className="text-4xl sm:text-5xl font-semibold italic"
          data-aos="fade-up" 
          data-aos-delay="500"
        >
          Clients <span className="text-secondaryColor font-merriweather text-5xl sm:text-6xl">Testimonials</span>
        </h1>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6">
        {/* Card Section */}
        <div
          className="relative w-full lg:w-2/3 bg-white border-2 border-black rounded-tl-3xl rounded-br-3xl shadow-lg p-6 flex flex-col sm:flex-row gap-5 items-center"
          style={{ borderTopRightRadius: "0", borderBottomLeftRadius: "0" }}
          data-aos="zoom-in" // AOS animation for the card
          data-aos-delay="600"
        >
          <div 
            className="bg-gray-100 p-4 border-2 border-secondaryColor rounded-tl-3xl rounded-br-3xl shadow text-center flex flex-col w-full sm:w-1/3 items-center"
            data-aos="fade-right" // AOS animation for the client info
            data-aos-delay="700"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              {currentTestimonial.client}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {currentTestimonial.designation}
            </p>
            <div className="flex justify-center">
              {[...Array(5)].map((_, starIndex) => (
                <span
                  key={starIndex}
                  className={`text-lg ${
                    starIndex < currentTestimonial.stars
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div 
            className="w-full sm:w-2/3 text-center sm:text-left"
            data-aos="fade-left" // AOS animation for the feedback
            data-aos-delay="800"
          >
            <FaQuoteLeft className="text-2xl text-secondaryColor mb-2" />
            <p className="text-gray-700">{currentTestimonial.feedback}</p>
          </div>
        </div>

        {/* Image Section */}
        <div 
          className="w-full lg:w-1/3 flex justify-center items-center"
          data-aos="fade-up" // AOS animation for the image section
          data-aos-delay="900"
        >
          <div 
            className="relative z-30 border-8 border-secondaryColor rounded-full w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] overflow-hidden"
            data-aos="zoom-in" // AOS animation for the image container
            data-aos-delay="1000"
          >
            <Image
              src={currentTestimonial.picture}
              alt={currentTestimonial.client}
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-full absolute top-0 left-0 z-10 transform scale-110 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div 
        className="flex justify-center items-center mt-8 space-x-4"
        data-aos="fade-up" // AOS animation for the buttons
        data-aos-delay="1100"
      >
        <button
          onClick={prevSlide}
          className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
          data-aos="flip-left" // AOS animation for the previous button
          data-aos-delay="1200"
        >
          <FaChevronLeft className="text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
          data-aos="flip-right" // AOS animation for the next button
          data-aos-delay="1300"
        >
          <FaChevronRight className="text-gray-800" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
