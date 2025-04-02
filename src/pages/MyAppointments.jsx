import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import { Breadcrumbs } from "../components/Elements/Breadcrumbs";
import { useMediaQuery } from "react-responsive";
import { FiCalendar, FiClock, FiMapPin, FiPhone, FiFileText, FiRefreshCw, FiPrinter, FiSearch } from "react-icons/fi";
import { FaTooth, FaStethoscope } from "react-icons/fa";

const MyAppointments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("past-week");
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAppointments(
        Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          date: new Date(2025, 1, 20 + i),
          time: `${9 + i}:00 AM`,
          clinic: "Verma Dental Clinic",
          address: "123 Health Street, New Delhi",
          doctor: "Dr. Lallan Verma",
          specialty: "Dentist",
          bookedOn: new Date(2025, 0, 25),
          fee: 1099.00,
          status: i % 3 === 0 ? "Confirmed" : i % 3 === 1 ? "Pending" : "Cancelled",
          appointmentId: `402-8658376-51059${i}`,
        }))
      );
      setLoading(false);
    }, 1500);
  }, []);

  const filteredAppointments = appointments.filter(app => {
    // Filter by tab
    if (activeTab === "upcoming" && new Date(app.date) < new Date()) return false;
    if (activeTab === "completed" && new Date(app.date) >= new Date()) return false;
    
    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        app.clinic.toLowerCase().includes(query) ||
        app.doctor.toLowerCase().includes(query) ||
        app.appointmentId.toLowerCase().includes(query))
      }
    return true;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAppointments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (time) => {
    return time; // In a real app, you might format this properly
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow mt-[90px] lg:mt-[120px]  max-w-6xl mx-auto p-4 lg:p-6 w-full">
        {/* Breadcrumbs */}
        <Breadcrumbs
          links={[
            { name: "Home", path: "/" },
            { name: "My Appointments", path: null },
          ]}
          className="mb-6"
        />

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            My Appointments
          </h1>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search appointments..."
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tabs and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex border-b border-gray-200 w-full md:w-auto">
              <button
                className={`px-4 py-2 font-medium text-sm flex items-center border-b-2 transition-colors ${
                  activeTab === "upcoming" 
                    ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("upcoming")}
              >
                <FiCalendar className="mr-2" />
                Upcoming
              </button>
              <button
                className={`px-4 py-2 font-medium text-sm flex items-center border-b-2 transition-colors ${
                  activeTab === "completed" 
                    ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("completed")}
              >
                <FiCalendar className="mr-2" />
                Completed
              </button>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="text-sm text-gray-500 whitespace-nowrap">Filter by:</span>
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="past-week">Past Week</option>
                <option value="past-month">Past Month</option>
                <option value="past-year">Past Year</option>
                <option value="lifetime">All Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="p-4 border-b animate-pulse">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                    <div className="flex gap-4">
                      <div className="h-4 bg-gray-100 rounded w-1/4"></div>
                      <div className="h-4 bg-gray-100 rounded w-1/4"></div>
                    </div>
                    <div className="h-4 bg-gray-100 rounded w-1/3"></div>
                  </div>
                  <div className="w-full md:w-48 space-y-2">
                    <div className="h-10 bg-gray-200 rounded-lg"></div>
                    <div className="h-10 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))
          ) : currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div key={item.id} className="p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Appointment Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      {item.specialty === "Dentist" ? (
                        <FaTooth className="text-blue-500 text-xl mt-1" />
                      ) : (
                        <FaStethoscope className="text-blue-500 text-xl mt-1" />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.doctor}</h3>
                        <p className="text-sm text-gray-500">{item.specialty}</p>
                      </div>
                    </div>
                    
                    <div className="ml-8 pl-1 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <FiMapPin className="mr-2 text-gray-400" />
                        {item.clinic} • {item.address}
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <FiCalendar className="mr-2 text-gray-400" />
                          {formatDate(item.date)}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FiClock className="mr-2 text-gray-400" />
                          {formatTime(item.time)}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="mr-2">Booked on:</span>
                          {formatDate(item.bookedOn)}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="mr-2">Fee:</span>
                          ₹{item.fee.toLocaleString('en-IN')}
                        </div>
                        <div className="flex items-center text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.status === "Confirmed" 
                              ? "bg-green-100 text-green-800" 
                              : item.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="w-full md:w-48 flex flex-col gap-2">
                    <button className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                      <FiFileText /> Details
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                      <FiPhone /> Contact
                    </button>
                    {activeTab === "upcoming" && (
                      <button className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                        <FiRefreshCw /> Reschedule
                      </button>
                    )}
                    {activeTab === "completed" && (
                      <button className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                        <FiPrinter /> Receipt
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <div className="text-gray-400 mb-4">
                <FiCalendar className="mx-auto text-4xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-1">
                No appointments found
              </h3>
              <p className="text-gray-500">
                {activeTab === "upcoming" 
                  ? "You don't have any upcoming appointments." 
                  : "You don't have any completed appointments."}
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredAppointments.length > 0 && (
          <div className="flex justify-center mt-6">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Previous</span>
                &larr;
              </button>
              
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                // Show limited pages with ellipsis for many pages
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === pageNum
                        ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              {totalPages > 5 && (
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
              )}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Next</span>
                &rarr;
              </button>
            </nav>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyAppointments;