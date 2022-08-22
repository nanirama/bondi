import React from "react";
import BlogItem from "./BlogItem"

export default function BlogIndex() {
    return (
        <div className="">
            <h6 className="text-green-300 font-medium mb-4">Our Blog</h6>
            <h2 className="text-4xl font-semibold mb-4">Read stories and articles</h2>
            <p className="text-sm mb-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed erat at mi congue tempus.</p>
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <div className="border-t border-gray-200 flex items-center justify-between pt-4">
                <div className="-mt-px w-0 flex-1 flex">
                    <a href="#" className="border-2 border-gray-200 w-12 h-12 rounded-md p-4 flex items-center">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.20588 11.7614L0.75105 6.57614C0.416316 6.25795 0.416316 5.74206 0.75105 5.42387L6.20587 0.238644C6.54061 -0.0795474 7.08332 -0.0795474 7.41806 0.238644C7.75279 0.556835 7.75279 1.07272 7.41806 1.39092L3.42647 5.18522L12.5 5.18522L12.5 6.81478L3.42647 6.81478L7.41806 10.6091C7.75279 10.9273 7.75279 11.4432 7.41806 11.7614C7.08332 12.0795 6.54061 12.0795 6.20588 11.7614Z" fill="#C5C5C5" />
                        </svg>
                    </a>
                </div>
                <div className="hidden md:-mt-px md:flex">
                    <a href="#" className="text-black inline-flex items-center text-sm font-medium">
                        Page 1 of 20
                    </a>
                </div>
                <div className="-mt-px w-0 flex-1 flex justify-end">
                    <a href="#" className="border-2 border-gray-200 w-12 h-12 rounded-md p-4 flex items-center">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.79412 0.238643L12.2489 5.42386C12.5837 5.74205 12.5837 6.25794 12.2489 6.57614L6.79412 11.7614C6.45939 12.0795 5.91668 12.0795 5.58194 11.7614C5.24721 11.4432 5.24721 10.9273 5.58194 10.6091L9.57353 6.81478H0.5V5.18522H9.57353L5.58194 1.39091C5.24721 1.07272 5.24721 0.556834 5.58194 0.238643C5.91668 -0.0795478 6.45939 -0.0795478 6.79412 0.238643Z" fill="#C5C5C5" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}