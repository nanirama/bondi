import React from "react";
import Link from 'next/link'
import Layout from "../../components/layout"

export default function ContactDetails() {
    return (
        <Layout>
            <div className="pt-16 pb-8">
                <div className="max-w-xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                    <Link href="/book"><a><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM16 7H1V9H16V7Z" fill="#3D3E40" />
                        </svg></a></Link>
                        <h5 className="font-medium text-xl">Your Details</h5>
                        <Link href="/book" className="text-blue-400 font-medium"><a>Cancel</a></Link>
                    </div>
                    <div className="form">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="mb-5 focus:ring-green-500 focus:border-green-500 w-full text-sm border-gray-300 rounded-md px-3 py-4 bg-transparent"
                            placeholder="Your Name"
                        />
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="mb-5 focus:ring-green-500 focus:border-green-500 w-full text-sm border-gray-300 rounded-md px-3 py-4 bg-transparent"
                            placeholder="Phone"
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mb-5 focus:ring-green-500 focus:border-green-500 w-full text-sm border-gray-300 rounded-md px-3 py-4 bg-transparent"
                            placeholder="Email"
                            aria-describedby="email-optional"
                        />
                        <div className="relative flex md:items-center items-start mb-3">
                            <input
                                id="comments"
                                aria-describedby="comments-description"
                                name="comments"
                                type="checkbox"
                                className="focus:ring-transparent h-4 w-4 text-gray-300 border-gray-400 rounded"
                            />
                            <label htmlFor="comments" className="ml-3 text-sm font-normal text-gray-700">
                                I agree to the terms of service and privacy policy
                            </label>
                        </div>
                        <div className="relative flex md:items-center items-start">
                            <input
                                id="marketing"
                                aria-describedby="marketing-description"
                                name="marketing"
                                type="checkbox"
                                className="focus:ring-transparent h-4 w-4 text-gray-300 border-gray-400 rounded"
                            />
                            <label htmlFor="comments" className="ml-3 text-sm font-normal text-gray-700">
                                I agree to receive marketing materials from XXXXXX Garden and home care
                            </label>
                        </div>
                        <button
                            type="submit"
                            className=" w-full bg-blue-400 mt-5 inline-flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white focus:outline-none focus:ring-none"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}