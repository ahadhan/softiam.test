'use client'
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const GetInTouch = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formStatus, setFormStatus] = useState("");

    const onSubmit = (data) => {
        setFormStatus("Thank you for contacting us! We'll get back to you soon.");
        // Here you can handle form submission (send to an API, email, etc.)
    };

    return (
        <div className="py-16 bg-gray-100">
            <div className="main-container mx-auto">
                <div className=" mb-12 w-1/2">
                    <p className='text-secondaryColor text-3xl font-[400] my-5'> Get In Touch</p>
                    <h1 className='text-5xl  font-semibold font-playfair'>Your Business To <span className='text-secondaryColor font-playfair italic'> Growth </span> Please Touch ?</h1>

                    <p className='text-lg  my-4 font-roboto '>
                        For your car we will do everything advice design in us repairs and maintenance. We are the some preferred.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-12 bg-white p-10">
                    {/* Left side (Contact Form) */}
                    <div className="w-full md:w-1/2 bg-white rounded-xl  p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <FaMapMarkerAlt className="text-4xl text-blue-600" />
                            <h3 className="text-xl font-semibold text-gray-700">Our Location</h3>
                        </div>
                        <p className="text-lg text-gray-700 mb-4">
                            1234 Software Park, Tech City, Country
                        </p>
                        <button className="py-3 px-6 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white duration-300">
                            View on Map
                        </button>
                        {formStatus && (
                            <div className="mt-6 text-green-500 font-semibold text-center">
                                {formStatus}
                            </div>
                        )}
                    </div>

                    {/* Right side (Address/Map) */}
                    <div className="flex flex-col md:flex-row justify-between gap-12 bg-gray-100 shadow-lg rounded-lg p-10">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label htmlFor="name" className="text-lg text-gray-700 font-medium">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-secondaryColor"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="text-lg text-gray-700 font-medium">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-secondaryColor"
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="text-lg text-gray-700 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-secondaryColor"
                                    {...register("message", { required: "Message is required" })}
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                            </div>

                            <button type="submit" className="w-full py-3 bg-secondaryColor text-white font-semibold rounded-lg hover:bg-blue-600 duration-300">
                                Send Message
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;
