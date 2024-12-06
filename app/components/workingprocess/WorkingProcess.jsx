'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegPaperPlane, FaCode, FaDatabase, FaUserCog, FaCheck } from 'react-icons/fa'; // Add icons for the steps
import '../../globals.css';

const WorkProcess = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const steps = [
    {
      id: 1,
      icon: <FaRegPaperPlane size={24} />,
      title: 'Planning',
      subheading: 'We begin with understanding your goals and planning the best approach.',
    },
    {
      id: 2,
      icon: <FaCode size={24} />,
      title: 'Designing',
      subheading: 'Our design team creates user-friendly and visually appealing layouts.',
    },
    {
      id: 3,
      icon: <FaDatabase size={24} />,
      title: 'Development',
      subheading: 'Our developers bring the design to life with clean and efficient code.',
    },
    {
      id: 4,
      icon: <FaUserCog size={24} />,
      title: 'Testing',
      subheading: 'We test the project rigorously to ensure everything works perfectly.',
    },
    {
      id: 5,
      icon: <FaCheck size={24} />,
      title: 'Launch',
      subheading: 'After final review, we launch the project and ensure smooth operation.',
    },
  ];

  const toggleSubheading = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="work-process" className="py-10 bg-gradient-to-t from-blue-800 via-blue-600 to-blue-500 text-white">
      <div className="container mx-auto px-6">
        <div className='my-8 space-y-5'>
        <p className="text-3xl font-[400] font-roboto">
          Our Working Process
        </p>
        <h1 className='text-5xl  font-semibold font-platfair'>Our Approach</h1>
        </div>

        {/* Steps Container */}
        <div className="flex flex-wrap justify-between gap-6 ">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative w-full md:w-[280px] h-[100px] bg-white text-blue-800 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer mb-7 border-2 border-blue-800"
              onClick={() => toggleSubheading(index)}
              onHoverStart={() => toggleSubheading(index)} // Optional: you can also use hover to trigger the effect
              onHoverEnd={() => setActiveIndex(null)} // Reset when hover ends
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Rectangle (Icon + Title) */}
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-800 text-white rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>

              {/* Subheading Rectangle (Slides out on click or hover) */}
              <motion.div
                className="absolute left-0 right-0 top-24 mt-2 bg-gray-100 text-blue text-sm rounded-lg p-4 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  y: activeIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {step.subheading}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;