import React from "react";
import Layout from "../components/layout"

export default function Success() {
    return (
        <Layout>
            <div className="pt-24 pb-8">
                <div className="max-w-xl mx-auto px-4">
                    <div className="bg-green-400 rounded-lg p-3 flex flex-col items-center justify-center">
                        <div className="bg-green-400 rounded-full w-14 h-14 flex justify-center items-center border-4 border-white -mt-12 mb-3">
                            <svg width="32" height="32" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9649 22.0352L29.2916 7.7085L31.4715 9.88841L14.9649 26.395L6.16663 17.5967L8.34654 15.4168L14.9649 22.0352Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9649 22.0349L29.2917 7.70816L31.4716 9.88808L14.9649 26.3947L6.16666 17.5964L8.34657 15.4165L14.9649 22.0349ZM14.9649 20.6207L29.2917 6.29395L32.8858 9.88808L14.9649 27.8089L4.75244 17.5964L8.34657 14.0023L14.9649 20.6207Z" fill="white" />
                            </svg>
                        </div>
                        <h5 className="text-white text-xl mb-2">Job booked!</h5>
                        <p className="text-white text-sm text-center">Your card will be charged after the service is done.</p>
                    </div>
                    <div>
                        <div className="border border-gray-300 rounded-md p-3 mt-6">
                            <p className="text-sm font-semibold text-black mb-3 border-b pb-2">Order summary</p>
                            <p className="text-sm font-normal text-gray-400 mb-3">A pretty fucking expensive service </p>
                            <p className="text-sm font-normal text-gray-400 mb-3">Just once </p>
                            <p className="text-sm font-normal text-gray-400 mb-3">June 19th </p>
                            <p className="text-sm font-normal text-gray-400 mb-3">In the morning</p>
                            <button className="w-full border border-gray-300 rounded-lg p-2 text-base font-semibold text-black">Edit</button>
                        </div>
                        <div className="border border-gray-300 rounded-md p-3 mt-6">
                            <p className="text-sm font-semibold text-black mb-3 border-b pb-2">Your details</p>
                            <p className="text-sm font-normal text-gray-400 mb-3">Nicolas Garcia</p>
                            <p className="text-sm font-normal text-gray-400 mb-3">Address: 1234 Crazy St. Miami, FL 33122</p>
                            <button className="w-full border border-gray-300 rounded-lg p-2 text-base font-semibold text-black">Edit</button>
                        </div>
                        <div className="border border-gray-300 rounded-md p-3 mt-6">
                            <p className="text-sm font-semibold text-black mb-3 border-b pb-2">Contact</p>
                            <p className="text-sm font-normal text-gray-400 mb-3">nico@trady.com </p>
                            <p className="text-sm font-normal text-gray-400 mb-3">(650) 3333 2222</p>
                            <button className="w-full border border-gray-300 rounded-lg p-2 text-base font-semibold text-black">Edit</button>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 w-full bg-green-400 inline-flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white focus:outline-none focus:ring-none"
                        >
                            Return to Homepage
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}