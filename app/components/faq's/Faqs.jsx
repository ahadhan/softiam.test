"use client"
import React, {useState} from 'react'
import FaqImg from "../../assets/images/Faq-image.webp"
import Image from 'next/image'

const Faqs = () => {

  const [open, setOpen] = useState(null); // Track which FAQ is open
  const [activeIndex, setActiveIndex] = useState(null);
  const [index, setindex] = useState(null)

  const toggle = (index) => {
    setindex(index)
    setOpen(open === index ? null : index); // Toggle FAQ open/close
  };

  return (
    <div>
        <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 main-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* FAQ Content */}
          <div className="md:w-1/2 space-y-8">
          <p className='text-secondaryColor text-3xl font-[400] my-5'> Frequesntly Asked Questions</p>
          <h1 className='text-5xl  font-semibold font-platfair'>Have You Any Question? </h1>
            
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className='border-b-2 border-secondaryColor'>
                <button
                  onClick={() => toggle(1)}
                  className="w-full text-left flex items-center justify-between text-xl font-medium text-gray-800"
                >
                  <span>What services do you offer?</span>
                  <span 
                  className="text-blue-600"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  >{open !== 1 ? '+' : '−'}</span>
                </button>
                {open === 1 && (
                  <p className="text-gray-600 mt-2">
                    We offer a wide range of software services including web development, app development, UI/UX design, and more.
                  </p>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className='border-b-2 border-secondaryColor'>
                <button
                  onClick={() => toggle(2)}
                  className="w-full text-left flex items-center justify-between text-xl font-medium text-gray-800 duration-300"
                > 
                  <span>How long does a project take?</span>
                  <span className="text-blue-600">{open !== 2 ? '+' : '−'}</span>
                </button>
                {open === 2 && (
                  <p className="text-gray-600 mt-2">
                    Project timelines depend on the complexity and scope. Typically, projects range from a few weeks to several months.
                  </p>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className='border-b-2 border-secondaryColor'>
                <button
                  onClick={() => toggle(3)}
                  className="w-full text-left flex items-center justify-between text-xl font-medium text-gray-800"
                >
                  <span>Do you offer support after delivery?</span>
                  <span className="text-blue-600">{open !== 3 ? '+' : '−'}</span>
                </button>
                {open === 3 && (
                  <p className="text-gray-600 mt-2">
                    Yes, we offer post-delivery support for maintenance, updates, and bug fixes as needed.
                  </p>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className='border-b-2 border-secondaryColor'>
                <button
                  onClick={() => toggle(4)}
                  className="w-full text-left flex items-center justify-between text-xl font-medium text-gray-800"
                >
                  <span>How can I contact you?</span>
                  <span className="text-blue-600">{open !== 4 ? '+' : '−'}</span>
                </button>
                {open === 4 && (
                  <p className="text-gray-600 mt-2">
                    You can reach us via email, phone, or the contact form on our website. We're here to help!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              src={FaqImg}
              className="w-full h-full object-cover "
              alt="FAQ Image"
            />
          </div>
        </div>
      </div>
    </section>

  </div>
  )
}

export default Faqs;





// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import '../../app/globals.css';

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       id: 1,
//       question: 'What services do you offer?',
//       answer: 'We offer a wide range of software services including web development, app development, UI/UX design, and more.',
//     },
//     {
//       id: 2,
//       question: 'How long does a project take?',
//       answer: 'Project timelines depend on the complexity and scope. Typically, projects range from a few weeks to several months.',
//     },
//     {
//       id: 3,
//       question: 'Do you offer support after delivery?',
//       answer: 'Yes, we offer post-delivery support for maintenance, updates, and bug fixes as needed.',
//     },
//     {
//       id: 4,
//       question: 'How can I contact you?',
//       answer: 'You can reach us via email, phone, or the contact form on our website. We\'re here to help!',
//     },
//   ];

//   const toggleAnswer = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <section id="faq" className="py-20 bg-gradient-to-t from-blue-800 via-blue-600 to-blue-500 text-white mb-2">
//       <div className="container mx-auto px-6">
//         {/* Dynamic Heading */}
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-10 font-libre italic"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Frequently Asked Questions
//         </motion.h2>

//         {/* FAQ List */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={faq.id}
//               className="border-b border-gray-600 pb-4"
//               initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, ease: 'easeInOut' }}
//               viewport={{ once: true }}
//             >
//               {/* Question */}
//               <button
//                 onClick={() => toggleAnswer(index)}
//                 className="w-full text-left text-lg md:text-xl font-semibold flex justify-between items-center focus:outline-none"
//               >
//                 <span className="text-white">{faq.question}</span>
//                 <motion.span
//                   className="ml-2 text-2xl"
//                   initial={{ rotate: 0 }}
//                   animate={{ rotate: activeIndex === index ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {activeIndex === index ? '-' : '+'}
//                 </motion.span>
//               </button>

//               {/* Answer */}
//               <AnimatePresence>
//                 {activeIndex === index && (
//                   <motion.p
//                     className="mt-2 text-gray-400"
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.4, ease: 'easeInOut' }}
//                   >
//                     {faq.answer}
//                   </motion.p>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;
