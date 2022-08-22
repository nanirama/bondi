import React from "react";
import Link from 'next/link'
import Layout from "../../components/layout"


export default function Payment() {        
    
    return (
        <Layout>
            <div className="pt-16 pb-8">
                <div className="max-w-xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                    <Link href="/book"><a><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM16 7H1V9H16V7Z" fill="#3D3E40" />
                        </svg></a></Link>
                        <h5 className="font-medium text-xl">Book job</h5>
                        <Link href="/"><a className="text-blue-400 font-medium">Cancel</a></Link>
                    </div>
                    <div className="border border-gray-300 rounded-md p-3">
                        <p className="text-sm font-semibold text-black mb-3 border-b pb-2">Order summary</p>
                        <p className="text-sm font-normal text-gray-400 mb-3 flex justify-between">A pretty fucking expensive service <span className="text-gray-800 tracking-tight">$999,99</span></p>
                        <p className="text-sm font-normal text-gray-400 mb-3 flex justify-between">Taxes <span className="text-gray-800 tracking-tight">$19,99</span></p>
                        <p className="text-sm font-normal text-gray-400 mb-3 flex justify-between">Service Fees <span className="text-gray-800 tracking-tight">$5.00</span></p>
                        <p className="text-sm font-normal text-gray-400 mb-3 flex justify-between">California State Bullshit Tax <span className="text-gray-800 tracking-tight">$35.59</span></p>
                        <button className="w-full border border-gray-300 rounded-lg p-2 text-base font-semibold text-black">Edit</button>
                    </div>
                    <div className="border border-gray-300 bg-gray-50 rounded-md p-3 mt-6 flex gap-3 mb-6">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0C4.0293 0 0 4.0293 0 9C0 13.9707 4.0293 18 9 18C13.9707 18 18 13.9707 18 9C18 4.0293 13.9707 0 9 0ZM9 13.5C8.5032 13.5 8.1 13.0968 8.1 12.6V9C8.1 8.5032 8.5032 8.1 9 8.1C9.4968 8.1 9.9 8.5032 9.9 9V12.6C9.9 13.0968 9.4968 13.5 9 13.5ZM9.45 6.3H8.55C8.3016 6.3 8.1 6.0984 8.1 5.85V4.95C8.1 4.7016 8.3016 4.5 8.55 4.5H9.45C9.6984 4.5 9.9 4.7016 9.9 4.95V5.85C9.9 6.0984 9.6984 6.3 9.45 6.3Z" fill="#2C93ED" />
                        </svg>
                        <p className="text-xs text-gray-700">Your card will only be charged <b className="text-black">after</b> the service is completed.</p>
                    </div>
                    
                    <div className="flex justify-between gap-3">
                        <div className="border border-gray-300 p-3 rounded-md w-32">
                            <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="26.3077" height="18" fill="#D9D9D9" />
                            </svg>
                            <p className="text-sm text-gray-500 mt-1">Card</p>
                        </div>
                        <div className="border border-gray-300 p-3 rounded-md w-32">
                            <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="26.3077" height="18" fill="#D9D9D9" />
                            </svg>
                            <p className="text-sm text-gray-500 mt-1">Google pay</p>
                        </div>
                        <div className="border border-gray-300 p-3 rounded-md flex items-center justify-center w-14">
                            <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.24716 2.82191C1.88092 2.82191 1.567 2.69312 1.3054 2.43555C1.0438 2.17797 0.915012 1.86405 0.919037 1.49379C0.915012 1.13157 1.0438 0.821674 1.3054 0.564098C1.567 0.306523 1.88092 0.177734 2.24716 0.177734C2.60133 0.177734 2.90921 0.306523 3.17081 0.564098C3.43644 0.821674 3.57126 1.13157 3.57529 1.49379C3.57126 1.73929 3.50687 1.96265 3.3821 2.16389C3.26137 2.36512 3.10038 2.5261 2.89915 2.64684C2.70194 2.76355 2.48461 2.82191 2.24716 2.82191Z" fill="#5D5E5E" />
                                <path d="M7.00005 2.82191C6.63381 2.82191 6.31989 2.69312 6.05829 2.43555C5.79669 2.17797 5.6679 1.86405 5.67192 1.49379C5.6679 1.13157 5.79669 0.821674 6.05829 0.564098C6.31989 0.306523 6.63381 0.177734 7.00005 0.177734C7.35421 0.177734 7.6621 0.306523 7.9237 0.564098C8.18932 0.821674 8.32415 1.13157 8.32817 1.49379C8.32415 1.73929 8.25976 1.96265 8.13499 2.16389C8.01425 2.36512 7.85327 2.5261 7.65204 2.64684C7.45483 2.76355 7.2375 2.82191 7.00005 2.82191Z" fill="#5D5E5E" />
                                <path d="M11.7529 2.82191C11.3867 2.82191 11.0728 2.69312 10.8112 2.43555C10.5496 2.17797 10.4208 1.86405 10.4248 1.49379C10.4208 1.13157 10.5496 0.821674 10.8112 0.564098C11.0728 0.306523 11.3867 0.177734 11.7529 0.177734C12.1071 0.177734 12.415 0.306523 12.6766 0.564098C12.9422 0.821674 13.077 1.13157 13.0811 1.49379C13.077 1.73929 13.0126 1.96265 12.8879 2.16389C12.7671 2.36512 12.6062 2.5261 12.4049 2.64684C12.2077 2.76355 11.9904 2.82191 11.7529 2.82191Z" fill="#5D5E5E" />
                            </svg>
                        </div>
                    </div>
                    <div className="form mt-6">
                        <input
                            type="text"
                            name="card-number"
                            id="card-number"
                            className="mb-5 focus:ring-green-500 focus:border-green-500 w-full text-sm border-gray-300 rounded-md px-3 py-4 bg-transparent"
                            placeholder="Card number"
                        />
                    <div className="flex gap-3">
                        <div className="w-1/2 flex-1 min-w-0">
                            <input
                                type="text"
                                name="card-expiration-date"
                                id="card-expiration-date"
                                className="mb-6 focus:ring-green-500 focus:border-green-500 w-full text-sm border-gray-300 rounded-md px-3 py-4 bg-transparent"
                                placeholder="Expiration"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <input
                                type="text"
                                name="card-cvc"
                                id="card-cvc"
                                className="mb-6 focus:ring-green-500 focus:border-green-500 w-full text-sm border-gray-300 rounded-md px-3 py-4 bg-transparent"
                                placeholder="CVC"
                            />
                        </div>
                    </div>
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mb-6 focus:ring-green-500 focus:border-green-500 w-full text-sm border-gray-300 rounded-md px-3 py-4 bg-transparent"
                    >
                        <option>Select Country</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>India</option>
                        <option>Mexico</option>
                    </select>
                    <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mb-6 focus:ring-green-500 focus:border-green-500 w-full text-sm border-gray-300 rounded-md px-3 py-4 bg-transparent"
                        placeholder="ZIP"
                    />
                    <button
                        type="submit"
                        className=" w-full bg-blue-400 inline-flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white focus:outline-none focus:ring-none"
                    >
                        Book service
                    </button>
                </div>
                </div>
            </div>
        </Layout>
    )
}