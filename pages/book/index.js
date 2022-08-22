import React from "react";
import Link from 'next/link'
import Layout from "../../components/layout"

export default function Book() {
    return (
        <Layout>
            <div className="pt-16 pb-8">
                <div className="max-w-xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                    <Link href="/book"><a><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM16 7H1V9H16V7Z" fill="#3D3E40" />
                        </svg></a></Link>
                        <h5 className="font-medium text-xl">Job Details</h5>
                        <Link href="/"><a className="text-blue-400 font-medium">Cancel</a></Link>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="service"
                            id="service"
                            className="focus:ring-green-500 focus:border-green-500 w-full border-gray-300 rounded-md p-3 bg-transparent"
                            placeholder="Service Address"
                        />
                        <label htmlFor="service" className="mt-2 font-normal text-xs text-gray-400">
                            Where you want the job to be done
                        </label>
                    </div>
                    <div className="mt-6">
                        <h6 className="text-black font-semibold text-sm mb-4">Select service</h6>
                        <div className="border flex justify-between items-center p-3 rounded-md mb-2">
                            <p className="text-xs text-gray-400 flex flex-col font-medium"><b className="text-sm text-gray-600 mb-1">Service  1</b> Lorem · Ipsum · Dolor</p>
                            <p className="font-medium text-sm text-gray-800 mb-0">$ 49</p>
                        </div>
                        <div className="border flex justify-between items-center p-3 rounded-md mb-2">
                            <p className="text-xs text-gray-400 flex flex-col font-medium "><b className="text-sm text-gray-600 mb-1">Service numero dos</b> Lorem · Ipsum · Dolor</p>
                            <p className="font-medium text-sm text-gray-800 mb-0 gap-2 flex">$ 187 <span className="bg-blue-400 p-1 rounded text-xs text-white">Popular</span></p>
                        </div>
                        <div className="border flex justify-between items-center p-3 rounded-md mb-2">
                            <p className="text-xs text-gray-400 flex flex-col font-medium "><b className="text-sm text-gray-600 mb-1">The “Holland” special</b> Lorem · Ipsum · Dolor</p>
                            <p className="font-medium text-sm text-gray-800 mb-0">$ 399</p>
                        </div>
                        <div className="border flex justify-between items-center p-3 rounded-md mb-2">
                            <p className="text-xs text-gray-400 flex flex-col font-medium "><b className="text-sm text-gray-600 mb-1">Custom service</b> Lorem · Ipsum · Dolor</p>
                            <p className="font-medium bg-blue-100 p-1 rounded text-xs text-blue-400 mb-0">Request Quote</p>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}