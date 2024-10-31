"use client"
import { useState } from 'react';
import Link from 'next/link';
import logo from "../../assets/images/logo.png"
import Image from 'next/image'; 
// import styles from '@/styles/Navbar.module.css';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center w-1/3">
                        <Image src={logo} alt="logo" width={90} height={90} />
                    </div>

                    {/* Menu Links */}
                    <div className="hidden md:flex space-x-12 font-montserrat font-[400]">
                        <Link href="/about" className="text-black hover:text-blue-300 duration-300">
                            Home
                        </Link>
                        <Link href="/about" className="text-black hover:text-blue-300 duration-300">
                            About
                        </Link>
                        <Link href="/services" className="text-black hover:text-blue-300 duration-300">
                            Services
                        </Link>
                        <Link href="/contact" className="text-black hover:text-blue-300 duration-300">
                            FAQ
                        </Link>
                        <Link href="/contact" className="text-black hover:text-blue-300 duration-300">
                            Projects
                        </Link>
                        <Link href="/contact" className="text-black hover:text-blue-300 duration-300">
                            Contact Us
                        </Link>
                    </div>

                    {/* Button */}
                    <div className="hidden md:block">
                        <Link href="/get-started">
                            <button className=" material-bubble bg-secondaryColor text-white px-4 py-2 rounded-lg border-2 border-blue-700 ">
                                Know Us
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-white hover:text-blue-300 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/about" className="block text-white hover:text-blue-300">
                        About
                    </Link>
                    <Link href="/services" className="block text-white hover:text-blue-300">
                        Services
                    </Link>
                    <Link href="/contact" className="block text-white hover:text-blue-300">
                        Contact
                    </Link>
                    <Link href="/get-started" className="block text-blue-600 bg-white px-4 py-2 rounded-md hover:bg-gray-200">
                        Get Started
                    </Link>
                </div>
            )}
        </nav>
    );
}
