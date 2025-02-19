import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";

export const MyAppointments = () => {
  const appointments = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    date: `20 February`,
    clinic: "Verma Dental Clinic",
    doctor: "Tarun Shukla",
    bookedOn: "25 January 2025",
    fee: "1,099.00",
    appointmentId: `402-8658376-51059${i}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("past-week");
  const [activeTab, setActiveTab] = useState("upcoming");
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appointments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(appointments.length / itemsPerPage);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 lg:p-6">
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-3 space-y-3 md:space-y-0">
          <h2 className="text-2xl font-bold text-gray-600 md:w-auto">
            Your Orders
          </h2>
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
          <select
            className="border px-4 py-2 rounded-lg w-full md:w-auto"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="past-week">Past Week</option>
            <option value="past-month">Past Month</option>
            <option value="past-year">Past Year</option>
            <option value="lifetime">Lifetime</option>
          </select>
        </div>

        {/* Appointments List */}
        <div className="border rounded-lg p-4 bg-white shadow-sm">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="border-b py-4 flex flex-col md:flex-row gap-4"
            >
              {/* Appointment Details */}
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

              {/* Buttons */}
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
        </div>

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
