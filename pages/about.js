import React from "react";
import Image from 'next/image'
import Layout from "../components/layout"

import AboutHero from "../assets/images/about-hero.png"
import AboutMap from "../assets/images/about-map.png"

export default function Aboutus() {
    return (
        <Layout>
            <div className="max-w-xl mx-auto px-4 pt-20 pb-8 relative">
                <h6 className="text-green-300 font-medium mb-4">About us</h6>
                <h2 className="text-4xl font-semibold mb-4">Get to know us a  little better</h2>
                <p className="text-sm mb-4 text-gray-400 border-b border-gray-200 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed erat at mi congue tempus.</p>
                <Image src={AboutHero} alt="" />
                <p className='text-base text-black leading-6 py-3'>This June marks the unveiling of the very first Michelin Guide Dubai and the Dubai selection 2022, with a total of 69 restaurants covering 21 cuisine types; 14 restaurants getting a Bib Gourmand; nine receiving a Michelin Star; and two earning two Michelin Stars.</p>
                <p className='text-base text-black leading-6 py-3'>Dubai is the latest addition to the 35 culinary destinations across North America, South America, Asia Pacific and Europe. Home to thousands of restaurants serving a variety of cuisines from fine dining to street food, headed by talented international and homegrown chefs.</p>
                <p className='text-base text-black leading-6 pt-3 pb-1'>The Michelin Guide Dubai 2022 at a glance:</p>
                <ul className='list-disc list-inside leading-7 mb-8'>
                    <li>2 restaurants with two Michelin Stars</li>
                    <li>9 restaurants with one Michelin Star</li>
                    <li>1 restaurant with a Michelin Green Star</li>
                    <li>14 Bib Gourmand restaurants</li>
                    <li>44 Michelin-selected restaurants</li>
                </ul>
                <h3 className='text-lg font-semibold text-gray-800 pb-5'>Service coverage area</h3>
                <Image src={AboutMap} alt="" />
            </div>
        </Layout >
    )
}
