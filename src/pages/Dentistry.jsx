import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import { blogData } from "../data/data";
import { videoData } from "../data/data";
import { FiSearch, FiClock, FiEye, FiBookOpen, FiPlayCircle } from "react-icons/fi";
import { FaTooth, FaTeeth, FaTeethOpen } from "react-icons/fa";

export const DentistryPage = () => {
  const [selectedTab, setSelectedTab] = useState("blog");
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetchContent();
    }, 1500);
  }, []);

  const fetchContent = () => {
    setBlogs(blogData);
    setVideos(videoData);
    setLoading(false);
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-[90px] lg:[110px]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <FaTooth className="text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dental Education Resources</h1>
          <p className="text-xl md:text-2xl font-light">
            Discover expert insights through our curated blogs and video tutorials
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search blogs or videos..."
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Tabs */}
          <div className="flex bg-white rounded-lg shadow-sm p-1 border border-gray-200">
            <button
              onClick={() => setSelectedTab("blog")}
              className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                selectedTab === "blog"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <FiBookOpen className="mr-2" />
              Articles
            </button>
            <button
              onClick={() => setSelectedTab("video")}
              className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                selectedTab === "video"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <FiPlayCircle className="mr-2" />
              Videos
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            {selectedTab === "blog" ? (
              <>
                <FiBookOpen className="mr-2 text-blue-500" />
                Latest Dental Articles
              </>
            ) : (
              <>
                <FiPlayCircle className="mr-2 text-blue-500" />
                Educational Videos
              </>
            )}
          </h2>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6)
                .fill({})
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
                  >
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                      <div className="flex justify-between">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : selectedTab === "blog" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <span className="text-xs font-medium text-white bg-blue-500 px-2 py-1 rounded-full">
                          {blog.category || "Dental Care"}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.description}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <div className="flex items-center">
                          <FiClock className="mr-1" />
                          <span>{blog.readTime || "5 min read"}</span>
                        </div>
                        <div className="flex items-center">
                          <FiEye className="mr-1" />
                          <span>{blog.views || "1.2k"} views</span>
                        </div>
                      </div>
                      <button className="mt-4 w-full py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-medium transition-colors">
                        Read Article
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <FaTeethOpen className="mx-auto text-4xl text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium text-gray-700">
                    No articles found matching your search
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Try different keywords or browse our video content
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative pb-[56.25%] overflow-hidden">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {video.description}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <div className="flex items-center">
                          <FiClock className="mr-1" />
                          <span>{video.duration || "8:15"}</span>
                        </div>
                        <div className="flex items-center">
                          <FiEye className="mr-1" />
                          <span>{video.views || "4.5k"} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <FaTeeth className="mx-auto text-4xl text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium text-gray-700">
                    No videos found matching your search
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Try different keywords or browse our article content
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mt-20 p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Dental Insights</h3>
            <p className="text-blue-100 mb-6">
              Subscribe to our newsletter for the latest articles, videos, and dental care tips
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dentistry = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <DentistryPage />
      <Footer />
    </div>
  );
};

export default Dentistry;