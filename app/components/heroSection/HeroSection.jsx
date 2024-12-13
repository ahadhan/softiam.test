import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import Image from 'next/image';
import HeroImg from "../../assets/images/hero-img.jpg";
import Idea from "../../assets/images/idea.png";

const HeroSection = () => {
    return (
        <div className='pt-16'>
            <div className='main-container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/* Left Section */}
                    <div 
                        data-aos="fade-right" 
                        data-aos-offset="200"
                        data-aos-delay="100"
                        className="left-heading w-full lg:w-1/2"
                    >
                        <div className="text font-[500] text-2xl mb-4 text-secondaryColor">
                            Designing for the future.
                        </div>
                        <div className="font-merriweather font-[600] text-4xl sm:text-5xl md:text-6xl">
                            Innovative Solutions <span className='text-4xl sm:text-5xl md:text-6xl font-[600]'> for a <span className='text-secondaryColor text-4xl sm:text-5xl md:text-6xl font-[600] italic font-playfair'> Digital </span> World</span>
                        </div>

                        <div className="button my-10 flex flex-col sm:flex-row gap-4 sm:gap-10 items-center">
                            <button 
                                data-aos="fade-up" 
                                data-aos-delay="300"
                                className='flex gap-2 items-center text-secondaryColor font-[500] text-lg border-2 px-4 py-2 border-blue-500 rounded-xl hover:bg-secondaryColor hover:text-white duration-300'
                            >
                                Discover Softiam <FaLocationArrow />
                            </button>
                            <div 
                                data-aos="fade-up" 
                                data-aos-delay="500"
                                className="knowLink underline text-lg font-[700] cursor-pointer hover:text-secondaryColor duration-300"
                            >
                                Our Services!
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div 
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        className="rightSide relative w-full lg:w-1/2 mt-8 lg:mt-0"
                    >
                        <Image
                            src={HeroImg}
                            alt='hero image'
                            width={400}
                            height={400}
                            className='mx-auto lg:mx-0'
                        />
                        <Image
                            src={Idea}
                            width={100}
                            alt='idea img'
                            className='absolute top-0 right-20'
                        />
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="states flex flex-col sm:flex-row justify-between gap-8 mb-10 bg-secondaryColor py-6 ite">
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                    className='w-full sm:w-1/3 rounded-lg text-center py-5'
                >
                    <p className='font-[600] text-2xl text-blue-200 font-merriweather'>Around</p>
                    <h1 className='text-4xl font-[700] mt-1 text-gray-100 '>200</h1>
                    <p className='font-[500] text-xl font-merriweather italic text-blue-200'>Customers</p>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="400"
                    className='w-full sm:w-1/3 rounded-lg mx-5 text-center py-5'
                >
                    <p className='font-[600] text-2xl text-blue-200 '>Over</p>
                    <h1 className='text-4xl font-[700] mt-1 text-gray-100 '>1200</h1>
                    <p className='font-[500] text-xl font-merriweather italic text-blue-200'>Projects</p>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="600"
                    className='w-full sm:w-1/3 rounded-lg mx-5 text-center py-5'
                >
                    <p className='font-[600] text-2xl text-blue-200'>Around</p>
                    <h1 className='text-4xl font-[700] mt-1 text-gray-100 '>200</h1>
                    <p className='font-[500] text-xl font-merriweather italic text-blue-200'>Customers</p>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
