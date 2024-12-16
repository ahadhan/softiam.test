


import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Logo from "../../assets/images/logo-white.png"
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#12141E] py-10'>
            <div className="main-container mx-auto px-4">
                <div className='flex flex-col lg:flex-row'>
                    <div className='lg:basis-1/2'>
                        {/* First section */}
                        <div className="text-white font-roboto mb-3 text-3xl ">
                            <Image src={Logo} width={300} height={300} className='-ml-5'>
                            </Image>                            
                            <h1 className='text-blue-500 text-lg lg:text-xl'>IT Solutions & Technology</h1>
                        </div>

                        <div className="icons flex text-white gap-5 text-2xl my-8">
                            <span className='hover:text-secondaryColor hover:scale-110 transform duration-300 ease-in'><FaFacebook /></span>
                            <span className='hover:text-secondaryColor hover:scale-110 transform duration-300 ease-in'><FaInstagram /></span>
                            <span className='hover:text-secondaryColor hover:scale-110 transform duration-300 ease-in'><FaTwitter /></span>
                            <span className='hover:text-secondaryColor hover:scale-110 transform duration-300 ease-in'><FaLinkedin /></span>
                        </div>

                        <div className="button mt-10">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg border border-blue-700 font-semibold hover:bg-blue-500 transition duration-300">
                                Get Quote
                            </button>
                        </div>
                    </div>

                    {/* Second section */}
                    <div className='lg:basis-1/2 mt-6 lg:mt-0'>
                        <div className="para text-white text-base lg:text-xl mb-12">
                            At SOFTIAM, we provide cutting-edge digital solutions tailored to meet your business needs, ensuring you stay ahead in the digital world.
                        </div>

                        <div className="copyright text-white text-base lg:text-xl flex gap-3">
                            <p>&#169; 2024 - All rights reserved by </p>
                            <p className='text-blue-500 font-bold'>Softiam</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 text-white mt-8">
                    <Link href="/" className="hover:text-blue-300 hover:underline duration-300 font-semibold text-base lg:text-lg">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-blue-300 hover:underline duration-300 font-semibold text-base lg:text-lg">
                        About
                    </Link>
                    <Link href="/services" className="hover:text-blue-300 hover:underline duration-300 font-semibold text-base lg:text-lg">
                        Services
                    </Link>
                    <Link href="/contact" className="hover:text-blue-300 hover:underline duration-300 font-semibold text-base lg:text-lg">
                        FAQ
                    </Link>
                    <Link href="/contact" className="hover:text-blue-300 hover:underline duration-300 font-semibold text-base lg:text-lg">
                        Projects
                    </Link>
                    <Link href="/contact" className="hover:text-blue-300 hover:underline duration-300 font-semibold text-base lg:text-lg">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
