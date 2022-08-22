import React from "react";
import Image from 'next/image'
import BlogImg from "../../assets/images/blog-img.jpg"

export default function BlogItem() {
    return (
        <div className="blog border-t border-gray-200 pt-4">
            <Image src={BlogImg} alt="" />
            <h4 className="text-base mt-5 font-semibold text-gray-800">This is a way longer title dolor sit amet, consectetur adipiscing elit. Donec quis nibh ex. Sed a turpis eu urna porta fringilla.</h4>
            <p className="text-xs text-gray-400 my-3">June 27</p>
            <p className="text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed erat at mi congue tempus nec nec metus. Aliquam convallis sem a nisi ultrices viverra. </p>
        </div>

    )
}