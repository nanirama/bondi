import React, { useState } from "react";
import Link from 'next/link'
import Layout from "../../components/layout"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Book() {

    const [startDate, setStartDate] = useState(new Date());

    const timings = [
        { id: 'anytime', title: 'Anytime' },
        { id: 'possible', title: 'As soon as possible, please' },
        { id: 'morning', title: 'Morning' },
        { id: 'afternoon', title: 'Afternoon' },
    ]
    return (
        <Layout>
            <div className="pt-16 pb-8">
                <div className="max-w-xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                    <Link href="/book"><a> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM16 7H1V9H16V7Z" fill="#3D3E40" />
                        </svg></a></Link>
                        <h5 className="font-medium text-xl">Job Details</h5>
                        <Link href="/book" className="text-blue-400 font-medium"><a>Cancel</a></Link>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-xs text-gray-400 flex flex-col font-medium "><b className="text-sm text-black mb-2">Service address</b> 1 South Schiller St, Tampa FL 33629</p>
                        <p className="font-medium text-sm text-blue-400 mb-0">Change</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-400 flex flex-col font-medium "><b className="text-sm text-black mb-2">Type of service</b> Lawn Mowing & Edging</p>
                        <p className="font-medium text-sm text-blue-400 mb-0">Change</p>
                    </div>
                    <div className="mt-6">
                        <h6 className="text-black font-semibold text-sm mb-4">Frequency</h6>
                        <div className="border flex justify-between items-center px-3 py-4 rounded-md mb-2">
                            <p className="text-sm text-gray-900 font-medium ">Just Once</p>
                            <p className="font-medium text-sm text-gray-800 mb-0">$ 49</p>
                        </div>
                        <div className="border flex justify-between items-center px-3 py-4 rounded-md mb-2">
                            <p className="text-sm text-gray-900 font-medium ">Weekly</p>
                            <p className="font-medium text-sm text-gray-800 mb-0">$ 187</p>
                        </div>
                        <div className="border flex justify-between items-center px-3 py-4 rounded-md mb-2">
                            <p className="text-sm text-gray-900 font-medium ">Every 2 Weeks</p>
                            <p className="font-medium text-sm text-gray-800 mb-0">$ 399</p>
                        </div>
                        <div className="border flex justify-between items-center px-3 py-4 rounded-md mb-2">
                            <p className="text-sm text-gray-900 font-medium ">Monthly</p>
                            <p className="font-medium bg-blue-100 p-1 rounded text-xs text-blue-400 mb-0">Request Quote</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label className="text-sm font-semibold text-black">Select date</label>
                        <DatePicker className="w-full rounded-md border-gray-300 p-3 mt-2 focus:ring-green-500 focus:border-green-500" selected={startDate} onChange={(date) =>
                            setStartDate(date)} />
                    </div>
                    <div className="mt-6">
                        <label className="text-sm font-semibold text-black">Select time</label>
                        <fieldset className="mt-4">
                            <legend className="sr-only">Notification method</legend>
                            <div className="space-y-4">
                                {timings.map((timings) => (
                                    <div key={timings.id} className="flex items-center">
                                        <input
                                            id={timings.id}
                                            name="timings"
                                            type="radio"
                                            defaultChecked={timings.id === 'anytime'}
                                            className="focus:ring-transparent h-5 w-5 text-gray-800 border-gray-700"
                                        />
                                        <label htmlFor={timings.id} className="ml-3 text-base font-medium text-gray-800">
                                            {timings.title}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                    <button
                        type="submit"
                        className=" w-full bg-blue-400 mt-5 inline-flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white focus:outline-none focus:ring-none"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </Layout>
    )
}