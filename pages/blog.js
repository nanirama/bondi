import React from "react";
import Layout from "../components/layout"
import BlogIndex from "../components/blog/BlogIndex"

export default function Blog() {
    return (
        <Layout>
            <div className="max-w-xl mx-auto px-4 pt-20 pb-6 relative">
                <BlogIndex />
            </div>
        </Layout>
    )
}