


"use client";
import { useState } from 'react';
import Image from 'next/image';
import FaqImg from "../../assets/images/Faq-image.webp";

const FaqSection = () => {
  const faqs = [
    {
      question: 'What is Next.js?',
      answer: 'Next.js is a React framework for production with features like server-side rendering and static site generation.',
    },
    {
      question: 'What is Tailwind CSS?',
      answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
    },
    {
      question: 'How do I install Next.js?',
      answer: 'You can install Next.js by running `npx create-next-app@latest` in your terminal.',
    },
    {
      question: 'Can I use Tailwind with Next.js?',
      answer: 'Yes, Tailwind CSS works seamlessly with Next.js. You can set it up in just a few steps.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="bg-gradient-to-b from-blue-800 via-blue-600 to-blue-500 text-white py-16 px-6"
      data-aos="fade-up" // AOS animation for the section
    >
      <div className='main-container mx-auto'>
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8"
          data-aos="fade-up" // AOS animation for the inner container
          data-aos-delay="200" // Delay for staggered effect
        >
          {/* FAQ Section */}
          <div
            className="md:w-1/2"
            data-aos="fade-right" // AOS animation for FAQ container
          >
            <h2
              className="text-4xl font-bold text-white mb-8"
              data-aos="fade-down" // AOS animation for the heading
              data-aos-delay="400"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-all"
                  data-aos="fade-up" // AOS animation for each FAQ item
                  data-aos-delay={`${600 + index * 200}`} // Staggered delay
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full flex items-center justify-between px-6 py-3 text-left focus:outline-none transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-gradient-to-r from-secondaryColor to-blue-400 text-white'
                        : 'bg-gray-100 text-gray-800'
                    } hover:shadow-md`}
                  >
                    <span className="text-lg font-semibold text-black">{faq.question}</span>
                    <span className="text-2xl font-bold bg-secondaryColor w-[40px] rounded-md text-center text-white pb-1 ">
                      {activeIndex === index ? '-' : '+'}
                    </span> 
                  </button>
                  <div
                    className={`px-6 overflow-hidden bg-gray-50 text-gray-700 transition-max-height duration-500 ease-in-out ${
                      activeIndex === index
                        ? 'max-h-40 py-4'
                        : 'max-h-0 py-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div
            className="md:w-1/2 flex justify-center"
            data-aos="zoom-in" // AOS animation for the image container
            data-aos-delay="800"
          >
            <Image
              src={FaqImg} // Replace with your image path
              alt="FAQ Illustration"
              className="w-full max-w-sm md:max-w-md drop-shadow-xl"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
