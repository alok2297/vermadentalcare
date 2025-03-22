import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import { Breadcrumbs } from "../components/Elements/Breadcrumbs";
import { useMediaQuery } from "react-responsive";

const MyAppointments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("past-week");
  const [activeTab, setActiveTab] = useState("upcoming");
  const itemsPerPage = 5;

  useEffect(() => {
    setTimeout(() => {
      setAppointments(
        Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          date: "20 February",
          clinic: "Verma Dental Clinic",
          doctor: "Tarun Shukla",
          bookedOn: "25 January 2025",
          fee: "1,099.00",
          appointmentId: `402-8658376-51059${i}`,
        }))
      );
      setLoading(false);
    }, 2000);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appointments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 lg:p-6">
        {/* Breadcrumbs */}
        <Breadcrumbs
          links={[
            { name: "Home", path: "/" },
            { name: "My Appointments", path: null },
          ]}
        />

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-3 md:space-y-0">
          {isDesktop && (
            <h2 className="text-2xl font-bold text-gray-600 md:w-auto">
              Your Orders
            </h2>
          )}
          <div className="flex items-center w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search orders..."
                className="border h-10 pl-10 pr-4 py-2 w-full md:w-64 rounded-lg focus:outline-none"
              />
            </div>
            <button className="bg-black text-white ml-2 px-4 py-2 rounded-lg">
              Search
            </button>
          </div>
        </div>

        {/* Tabs and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center my-4 gap-3">
          <div className="flex w-full md:w-auto gap-2">
            <button
              className={`w-1/2 md:w-auto px-4 py-2 rounded-lg ${
                activeTab === "upcoming" ? "bg-blue-500 text-white" : "border"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`w-1/2 md:w-auto px-4 py-2 rounded-lg ${
                activeTab === "completed" ? "bg-blue-500 text-white" : "border"
              }`}
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </button>
          </div>
          <div className="relative inline-block w-full md:w-auto">
            <select
              className="appearance-none border px-4 py-2 pr-10 rounded-lg w-full"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="past-week">Past Week</option>
              <option value="past-month">Past Month</option>
              <option value="past-year">Past Year</option>
              <option value="lifetime">Lifetime</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
              <svg
                className="h-4 w-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.7-.3l-3-3a1 1 0 111.4-1.4L10 9.586l2.3-2.3a1 1 0 111.4 1.4l-3 3A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="border-b py-4 animate-pulse flex flex-col md:flex-row gap-4"
              >
                {/* Left Section - Appointment Info */}
                <div className="md:w-3/4">
                  <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>

                {/* Right Section - Buttons */}
                <div className="flex flex-col md:w-1/4 gap-2">
                  <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
                  <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
                  <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
                  <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
                </div>
              </div>
            ))
          : currentItems.map((item) => (
              <div
                key={item.id}
                className="border-b py-4 flex flex-col md:flex-row gap-4"
              >
                <div className="md:w-3/4">
                  <h3 className="text-lg font-semibold">
                    Appointment on {item.date}
                  </h3>
                  <p className="text-sm">at {item.clinic}</p>
                  <p className="text-sm text-gray-500">
                    Booked on: {item.bookedOn}
                  </p>
                  <p className="text-sm text-gray-500">Fee: ₹{item.fee}</p>
                  <p className="text-sm text-gray-500">Doctor: {item.doctor}</p>
                  <p className="text-sm text-gray-500">
                    Appointment ID: {item.appointmentId}
                  </p>
                </div>
                <div className="flex flex-col md:w-1/4 gap-2">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg w-full">
                    Payment Receipt
                  </button>
                  <button className="border px-4 py-2 rounded-lg w-full">
                    Doctor Contact
                  </button>
                  <button className="border px-4 py-2 rounded-lg w-full">
                    Prescription
                  </button>
                  <button className="border px-4 py-2 rounded-lg w-full">
                    Reschedule
                  </button>
                </div>
              </div>
            ))}

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "border"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MyAppointments;