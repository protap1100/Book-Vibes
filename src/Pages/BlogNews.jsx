import { useLoaderData } from "react-router-dom";
import BlogNewsCard from "../Components/BlogNewsCard";
import { useState } from "react";

const BlogNews = () => {

    const newsBlog  = useLoaderData();
    const [loadBlog,setLoadBlog] = useState(7);
   

    console.log(newsBlog)

    return (
        <div>
             <section className=" text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 rounded-xl bg-green-600">
                        <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{newsBlog[0].title}</h3>
                            <span className="text-xs text-gray-50">{newsBlog[0].date}</span>
                            <p>{newsBlog[0].content}</p>
                            <span className="text-gray-50">Type: {newsBlog[0].type}</span>
                            <h1 className="text-gray-50">Author: {newsBlog[0].author}</h1>
                            <h1 className="text-gray-50">Location: {newsBlog[0].location}</h1>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                        {
                            newsBlog.slice(1,loadBlog).map((blog) => <BlogNewsCard key={blog.id} blog={blog}>{blog}</BlogNewsCard> )
                        }
                    </div>
                    <div className="flex justify-center">
                        <button type="button" onClick={() => setLoadBlog(newsBlog.length)} className="px-6 py-3 text-sm rounded-md hover:underline bg-[#23BE0A] text-white">Load more posts...</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogNews;