'use client';
import { useState } from "react";
import AddNewBlog from "../add-new-blog";

const initialBlogFormData = {
    title: "",
    description: ""
};

function BlogOverview() {
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

    console.log(blogFormData);
    return (
        <div className="min-h-screen text-white flex flex-col gap-10 p-4 bg-rose-950 font-bold">
            <AddNewBlog
                // openBlogDialog={openBlogDialog}
                // setOpenBlogDialog={setOpenBlogDialog}
                loading={loading}
                setLoading={setLoading}
                blogFormData={blogFormData}
                setBlogFormData={setBlogFormData}
            />
            <div>
                List of blogs
            </div>

        </div>
    );
}

export default BlogOverview;