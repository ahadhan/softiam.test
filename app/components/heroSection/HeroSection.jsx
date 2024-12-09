import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import Image from 'next/image';
import HeroImg from "../../assets/images/hero-img.jpg"
import Idea from "../../assets/images/idea.png"
import { } from 'react-icons/fa';

const HeroSection = () => {

    // const socialLinks = [
    //     {"icon" : }
    // ]


    return (
        <div className='pt-16 '>
            <div className='  main-container mx-auto'>
                <div className='flex '>
                    <div className="left-heading w-1/2">
                        <div className="text font-[500] text-2xl mb-4 text-secondaryColor">
                            Designing for the future.
                        </div>
                        <div className="heading font-roboto font-[500] text-6xl ">
                            Innovative Solutions <span className='text-5xl'> For A  <span className='text-secondaryColor text-6xl font-[600] italic font-playfair'> Digital </span> World</span>
                        </div>

                        <div className="button my-10 flex  items-center gap-10 ">
                            <button className='flex gap-2 items-center text-secondaryColor font-[500] text-lg border-2 px-4 py-2 border-blue-500 rounded-xl hover:bg-secondaryColor hover:text-white duration-300'>Discover Softiam <FaLocationArrow /></button>
                            <div className="knowLink underline text-lg font-[700] cursor-pointer hover:text-secondaryColor duration-300">
                                Our Services!
                            </div>
                        </div>
                        <div className="socialLinks flex">

                        </div>
                    </div>

                    {/* Right Side  */}
                    <div className="rightSide relative">

                        <Image
                            src={HeroImg}
                            alt='hero image'
                            width={400}
                            height={400}
                            className=''
                        >
                        </Image>

                        <Image
                            src={Idea}
                            width={100}
                            alt='idea img'
                            className='absolute top-0 -right-10'
                        >
                        </Image>
                    </div>
                </div>


                {/* States */}


                <div className="states flex justify-between gap-8 mb-10 ">
                    <div className='bg-blue-300 w-1/3 rounded-lg  text-center py-5 '>
                        <p className='font-[600] text-2xl '>Around</p>
                        <h1 className='text-4xl font-[700] mt-1 text-blue-700 '>200</h1>
                        <p className='font-[500] text-xl font-playfair italic'>Customers</p>
                    </div>
                    <div className='bg-blue-300 w-1/3 rounded-lg mx-5 text-center py-5'>
                        <p className='font-[600] text-2xl '>Over</p>
                        <h1 className='text-4xl font-[700] mt-1 text-blue-700 '>1200</h1>
                        <p className='font-[500] text-xl font-playfair italic'>Projects</p>
                    </div>
                    <div className='bg-blue-300 w-1/3 rounded-lg mx-5 text-center py-5'>
                        <p className='font-[600] text-2xl '>Around</p>
                        <h1 className='text-4xl font-[700] mt-1 text-blue-700 '>200</h1>
                        <p className='font-[500] text-xl font-playfair italic'>Customers</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection