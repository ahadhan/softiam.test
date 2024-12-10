import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#12141E] py-10'>
            <div className="main-container mx-auto  ">
                <div className='flex'>
                <div className='basis-1/2'>
                    {/* First section */}
                    <div className=" text-white font-roboto  mb-3 text-3xl">
                        <h1 className='text-5xl font-playfair font-bold mb-3'>softiam. </h1>
                        <h1 className='text-blue-500'>IT Solutions & Technology</h1>
                    </div>

                    <div className="icons flex text-white gap-5 text-2xl my-8">
                        <span >
                            <FaFacebook />
                        </span>
                        <span >
                            <FaInstagram></FaInstagram>
                        </span>
                        <span><FaTwitter></FaTwitter></span>
                        <span><FaLinkedin></FaLinkedin></span>

                    </div>

                    <div className="button mt-10">
                        <button className="material-bubble bg-secondaryColor text-white px-4 py-2 rounded-lg border border-blue-700 font-semibold">
                            Get Quote
                        </button>
                    </div>

                </div>

                {/* Second section */}

                <div className='basis-1/2 mt-3'>
                    <div className="para text-white text-xl mb-12">At SOFTIAM, we provide cutting-edge digital solutions tailored to meet your business needs, ensuring you stay ahead in the digital world.</div>




                    <div className="copyright text-white text-xl flex gap-3">
                        <p>&#169; 2024 - All rights reserved by </p>
                        <p className='text-blue-500 font-bold'> Softiam</p>

                    </div>


                </div>
                </div>

                <div className=" flex space-x-12  text-white justify-center">
                        <Link href="/" className=" hover:text-blue-300 hover:underline duration-300 font-[600]">
                            Home
                        </Link>
                        <Link href="/about" className=" hover:text-blue-300 hover:underline duration-300 font-[600]">
                            About
                        </Link>
                        <Link href="/services" className=" hover:text-blue-300 hover:underline duration-300 font-[600]">
                            Services
                        </Link>
                        <Link href="/contact" className=" hover:text-blue-300 hover:underline duration-300 font-[600]">
                            FAQ
                        </Link>
                        <Link href="/contact" className=" hover:text-blue-300 hover:underline duration-300 font-[600]">
                            Projects
                        </Link>
                        <Link href="/contact" className=" hover:text-blue-300 hover:underline duration-300 font-[600]">
                            Contact Us
                        </Link>
                    </div>
            </div>

        </div>
    )
}

export default Footer