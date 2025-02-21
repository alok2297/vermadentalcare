import React, { useState } from 'react'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/footer';
import {blogs} from "../data/data"
import {videos} from "../data/data"
const DentistryPage = () => {
  const [selectedTab, setSelectedTab] = useState("blog"); // State to manage selected tab

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">Dentistry</h1>
        <p className="text-gray-600 text-lg">
          Explore the latest blogs and videos on dental care.
        </p>
      </header>

      {/* Search Input */}
      <div className="flex justify-center px-4 mb-8">
        <input
          type="text"
          placeholder="Search for blogs or videos..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center space-x-8 mb-8">
        <button
          onClick={() => setSelectedTab("blog")}
          className={`text-lg font-semibold ${
            selectedTab === "blog"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          Blog
        </button>
        <button
          onClick={() => setSelectedTab("video")}
          className={`text-lg font-semibold ${
            selectedTab === "video"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          Video
        </button>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-4">
  <div className="flex justify-center mb-6">
    <h2 className="text-3xl font-bold text-blue-600">
      {selectedTab === "blog" ? "Blogs" : "Videos"}
    </h2>
  </div>

  <div className="space-y-6">
    {selectedTab === "blog"
      ? blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-600">
              {blog.description.length > 50
                ? `${blog.description.substring(0, 50)}...`
                : blog.description}
            </p>
            {blog.description.length > 50 && (
              <button className="text-blue-600 font-semibold mt-2">
                Read More
              </button>
            )}
          </div>
        ))
      : videos.map((video) => (
          <div
            key={video.id}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {video.title}
            </h3>
            <p className="text-gray-600">
              {video.description.length > 50
                ? `${video.description.substring(0, 50)}...`
                : video.description}
            </p>
            {video.description.length > 50 && (
              <button className="text-blue-600 font-semibold mt-2">
                Read More
              </button>
            )}
            <div className="mt-4">
              <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
                <iframe
                  src={video.embedUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
  </div>
</div>

    </div>
  );
};

export default DentistryPage;
  
export const Dentistry = () => {
  return (
    <div><Navbar/>
    <DentistryPage/>
    <Footer/></div>
  );
};
