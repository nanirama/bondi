import React from "react";
import Layout from "../components/layout"
import Image from 'next/image'
import BlogImg1 from "../assets/images/blog-img1.jpg"
import BlogImg2 from "../assets/images/blog-img2.jpg"


export default function BlogSingle() {
    return (
        <Layout>
            <div className="max-w-xl mx-auto px-4 pt-20 pb-6 relative blog-content">
                <ol className="inline-flex items-center mb-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-green-500">
                            Home
                        </a>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-4 h-4" fill="#29481E" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <span className="text-sm font-medium text-green-500">Blog</span>
                        </div>
                    </li>
                </ol>
                <h2>10 reasons why you should hire us</h2>
                <div className="mb-5">
                    <Image src={BlogImg1} alt="" />
                </div>
                <p>This June marks the unveiling of the very first Michelin Guide Dubai and the Dubai selection 2022, with a total of 69 restaurants covering 21 cuisine types; 14 restaurants getting a Bib Gourmand; nine receiving a Michelin Star; and two earning two Michelin Stars.</p>
                <p>Dubai is the latest addition to the 35 culinary destinations across North America, South America, Asia Pacific and Europe. Home to thousands of restaurants serving a variety of cuisines from fine dining to street food, headed by talented international and homegrown chefs.</p>
                <p className="mb-0">The Michelin Guide Dubai 2022 at a glance:</p>
                <ul>
                    <li>2 restaurants with two Michelin Stars</li>
                    <li>9 restaurants with one Michelin Star</li>
                    <li> 1 restaurant with a Michelin Green Star</li>
                    <li>14 Bib Gourmand restaurants</li>
                    <li>44 Michelin-selected restaurants</li>
                </ul>
                <div className="mb-5">
                    <Image src={BlogImg2} alt="" />
                </div>
                <p>Impressively, Dubai welcomed 7.28 million international overnight visitors in 2021, setting the city firmly on course to achieve sustainable growth on its way to becoming the world’s most visited destinationthe destination of choice for foodies and gourmets seeking authentic culinary experiences across all tastes and budgets. These figures underline the resilience and resurgence of the city’s travel and tourism sector. With food tourism – travelling to explore different destinations’ food culture and heritage – on the rise, the launch of the Michelin Guide Dubai will be a catalyst to position Dubai as the destination of choice for foodies and gourmets seeking authentic culinary experiences across all tastes and budgets.<br />
                    The destination of choice for foodies and gourmets seeking authentic culinary experiences across all tastes and budgets.
                </p>
            </div>
        </Layout>
    )
}