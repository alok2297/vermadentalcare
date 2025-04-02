import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../footer";

export const PerfectAlignmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 px-4 sm:px-6 lg:px-8 mt-[90px] lg:mt-[120px]">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Perfect Alignment
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Achieving harmony between design, functionality, and purpose
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Hero Image */}
          <div className="h-64 bg-blue-600 flex items-center justify-center">
            <svg
              className="h-32 w-32 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>

          {/* Content Sections */}
          <div className="p-8">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Perfect Alignment?</h2>
              <p className="text-gray-600 leading-relaxed">
                Perfect Alignment refers to the precise arrangement of elements in a design or system where all components work together harmoniously to achieve optimal performance, aesthetics, and functionality. In UI/UX design, it creates visual connections between elements, establishes hierarchy, and improves readability.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Principles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-3">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Visual Balance</h3>
                  <p className="text-gray-600 text-sm">Equal distribution of visual weight creates stability and structure.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-3">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Consistent Spacing</h3>
                  <p className="text-gray-600 text-sm">Uniform margins and padding create rhythm and improve scanning.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-3">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Grid Systems</h3>
                  <p className="text-gray-600 text-sm">Using grids ensures elements align properly across the entire layout.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Implementation Techniques</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800">CSS Grid and Flexbox</h3>
                  <p className="text-gray-600 mt-1">Modern CSS layout systems that provide powerful alignment capabilities.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800">Design Systems</h3>
                  <p className="text-gray-600 mt-1">Predefined spacing and alignment rules ensure consistency across projects.</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-purple-800">Alignment Tools</h3>
                  <p className="text-gray-600 mt-1">Use design software alignment features and developer tools to verify alignment.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits of Proper Alignment</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enhances visual appeal and professionalism</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Improves readability and content flow</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Creates intuitive navigation patterns</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduces cognitive load for users</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Establishes visual hierarchy and organization</span>
                </li>
              </ul>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800 mb-4 md:mb-0">
                Want to learn more about design principles?
              </h3>
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Explore Our Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Details = () => {
  return (
    <div>
      <Navbar />
      <PerfectAlignmentPage />
      <Footer />
    </div>
  );
};

export default Details;
