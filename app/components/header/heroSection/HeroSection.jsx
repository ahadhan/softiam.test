import React from 'react'
import { FaLocationArrow } from "react-icons/fa";


const HeroSection = () => {
    return (
        <div className='mt-16  main-container mx-auto'>
            <div className="left-heading w-1/2">
                <div className="text font-[500] text-2xl mb-4 text-secondaryColor">
                    Designing for the future.
                </div>
                <div className="heading font-roboto font-bold text-6xl ">
                    Innovative Solutions For A <span className='text-secondaryColor'> Digital </span> World
                </div>

                <div className="button my-10 flex  items-center gap-10 ">
                    <button className='flex gap-2 items-center text-secondaryColor font-[500] text-lg border-2 px-4 py-2 border-blue-500 rounded-xl hover:bg-secondaryColor hover:text-white duration-300'>Discover More <FaLocationArrow /></button>
                    <div className="knowLink underline text-lg font-[700] cursor-pointer">
                        Know Us!
                    </div>
                </div>
            </div>

            {/* Right Side  */}
            <div className="rightSide">

            </div>


            {/* States */}


            <div className="states flex justify-between gap-8 ">
                <div className='bg-blue-300 w-1/3 rounded-lg mx-5 text-center py-5'>
                    <h1 className='sub-heading font-playfair my-4'>200+</h1>
                    <p className='font-[600] text-xl'>Customers</p>
                </div>
                <div className='bg-blue-300 w-1/3 rounded-lg mx-5 text-center py-5'>
                    <h1 className='sub-heading font-playfair my-4'>400+</h1>

                    <p>Customers</p>
                </div>
                <div className='bg-blue-300 w-1/3 rounded-lg mx-5 text-center py-5'>
                <h1 className='sub-heading font-playfair my-4'>1000+</h1>

                    <p>Customers</p>
                </div>
            </div>

        </div>
    )
}

export default HeroSection