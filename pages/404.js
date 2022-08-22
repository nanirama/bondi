import React from "react";
import Link from 'next/link'
import Layout from "../components/layout"

export default function Page404() {
    return (
        <Layout>
            <div className="max-w-xl mx-auto px-4 pt-20 pb-10 relative">
                <h6 className="text-green-300 font-medium mb-4">Page not found</h6>
                <h2 className="text-4xl font-semibold mb-4">Something went wrong</h2>
                <p className="text-sm mb-4 text-gray-400 border-b border-gray-200 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed erat at mi congue tempus.</p>
                <Link href="/"><a className="w-full justify-center font-medium flex rounded-md bg-green-300 text-white items-center p-3 gap-1 text-base mt-5" >
                    Take me home
                </a></Link>
            </div>
        </Layout >
    )
}
