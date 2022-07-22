import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout"
import Link from 'next/link'


import AboutHero from "../assets/images/about-hero.png"
import AboutMap from "../assets/images/about-map.png"



export default function Aboutus() {
    return (
            <Layout>
                <div className="max-w-7xl mx-auto px-4 py-20 relative">
                    <h2 className='text-xl text-gray-800 font-semibold pb-5'>About us</h2>
                    <Image src={AboutHero} alt="" />
                    <p className='text-base text-black leading-6 py-3'>Fitzgerald Lawn Care Inc. has been delivering professional and reliable lawn maintenance services throughout western Wisconsin and eastern Minnesota since 1998.</p>

                    <p className='text-base text-black leading-6 py-3'>Starting out with just a single truck and mower, we have expanded our services and grown into one of the largest lawn maintenance companies in our area. Our expansion and stellar reputation is due, in part, to our exceptional reputation for quality and timely service. Our lawn care technicians utilize the latest technology and techniques to deliver beautiful results that will stand the test of time.</p>

                    <p className='text-base text-black leading-6 py-3'>Fitzgerald Lawn Care prides itself on one simple principle – provide each customer with high-quality and personalized service.</p>

                    <p className='text-base text-black leading-6 py-3'>As a result, we’ve enjoyed a reputation as one of the premier residential and commercial lawn maintenance companies in our area.</p>

                    <p className='text-base text-black leading-6 pt-3 pb-1'>We are a full-service company providing all aspects of lawn maintenance, including:</p>
                    <ul className='list-disc list-inside leading-7 pb-3'>
                        <li>Fertilization and Weed Control programs</li>
                        <li>Weekly Mowing Services</li>
                        <li>Insect Control & Grub control</li>
                        <li>Seeding, Core Aeration and much more.</li>
                    </ul>

                    <p>Fitzgerald Lawn Care’s mission is to provide our customers with the highest level of quality services. We pledge to establish lasting relationships with our clients by exceeding their expectations and gaining their trust through exceptional performance.</p>

                    <p className='text-base text-black leading-6 py-3'>Our clients count on our dependability, our drive, and our integrity and we take great pride in our accomplishments and build on them every day.</p>

                    <p className='text-base text-black leading-6 py-3'>Call Fitzgerald Lawn Care at 715-246-3958 or 651-439-4272 or email us at info@fitzgeraldlawncare.com.</p>

                    <p className='text-base text-black leading-6 py-3'>You may also use our online contact form to request a free quote.</p>
                    <h3 className='text-lg font-semibold text-gray-800 pb-5'>Service coverage area</h3>
                    <Image src={AboutMap} alt="" />
                    <button className="w-full justify-center sm:w-72 font-medium  flex rounded-md bg-green-600 text-white items-center p-3 gap-1 text-base mt-5" >
                        <svg width="14" height="13" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9997 2.33331V0.99998C10.9997 0.823169 10.9294 0.653599 10.8044 0.528575C10.6794 0.403551 10.5098 0.333313 10.333 0.333313C10.1562 0.333313 9.98663 0.403551 9.8616 0.528575C9.73658 0.653599 9.66634 0.823169 9.66634 0.99998V2.33331H4.33301V0.99998C4.33301 0.823169 4.26277 0.653599 4.13775 0.528575C4.01272 0.403551 3.84315 0.333313 3.66634 0.333313C3.48953 0.333313 3.31996 0.403551 3.19494 0.528575C3.06991 0.653599 2.99967 0.823169 2.99967 0.99998V2.33331H0.333008V13H13.6663V2.33331H10.9997ZM12.333 11.6666H1.66634V3.66665H12.333V11.6666ZM9.70634 6.61331L8.90634 5.81331L6.53301 8.18665L5.09301 6.75331L4.29301 7.55331L6.53301 9.79331L9.70634 6.61331Z" fill="white" />
                        </svg> Book service online
                    </button>
                </div>
            </Layout >
    )
}
