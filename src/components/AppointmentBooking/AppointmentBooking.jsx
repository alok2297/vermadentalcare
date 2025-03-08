import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../footer';
import { Breadcrumbs } from '../Elements/Breadcrumbs';

const AppointmentBooking = () => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [dentist, setDentist] = useState('');
  const [patientDetails, setPatientDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [additionalNotes, setAdditionalNotes] = useState('');
  console.log(service);
  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleBookAppointment = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    alert('Appointment booked successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen max-w-4xl mx-auto p-6">
        <Breadcrumbs
          links={[
            { name: "Home", path: "/" },
            { name: "Appointment", path: null },
          ]}
        />
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h1 className="text-3xl font-bold text-white">
              Book Your Appointment
            </h1>
            <p className="text-sm text-blue-100 mt-1">
              Fill in the details to schedule your appointment.
            </p>
          </div>

          <div className="p-8">
            {step === 1 && (
              <form onSubmit={handleNextStep}>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Select Service
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none bg-white pr-10"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                      >
                        <option value="">Choose a service...</option>
                        <option value="Dental Checkup">Dental Checkup</option>
                        <option value="Tech/Creating">Tech/Creating</option>
                        <option value="Filling Treatment">
                          Filling Treatment
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="dateTime"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Select Date and Time
                    </label>
                    <input
                      id="dateTime"
                      type="datetime-local"
                      className="w-full p-3 focus:outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      value={dateTime}
                      onChange={(e) => setDateTime(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dentist"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Select Dentist
                    </label>
                    <div className="relative">
                      <select
                        id="dentist"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none bg-white pr-10"
                        value={dentist}
                        onChange={(e) => setDentist(e.target.value)}
                        required
                      >
                        <option value="">Choose a dentist...</option>
                        <option value="Dr. Smith">Dr. Smith</option>
                        <option value="Dr. Johnson">Dr. Johnson</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Patient Details
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Full name"
                      className="w-full p-3 focus:outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 mb-3"
                      value={patientDetails.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 mb-3"
                      value={patientDetails.email}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 mb-3"
                      value={patientDetails.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
                      className="w-full p-3 focus:outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      value={patientDetails.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="additionalNotes"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      id="additionalNotes"
                      className="w-full focus:outline-none p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      rows="3"
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            {step === 2 && (
              <>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      Cost Breakdown
                    </h2>
                    <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                            Service
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                            Cost (RFR)
                          </th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                            QST ($/R$)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50 transition duration-200">
                          <td className="py-3 px-4 border-t">{service}</td>
                          <td className="py-3 px-4 border-t">$50</td>
                          <td className="py-3 px-4 border-t">$0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      Confirmation Details
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-700">
                        <strong>Service:</strong> {service}
                      </p>
                      <p className="text-gray-700">
                        <strong>Date:</strong>{" "}
                        {new Date(dateTime).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700">
                        <strong>Time:</strong>{" "}
                        {new Date(dateTime).toLocaleTimeString()}
                      </p>
                      <p className="mt-4 text-sm text-gray-600">
                        You will receive a confirmation email shortly. A
                        reminder notification will be sent 24 hours before the
                        appointment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-8 space-x-4">
                  <button
                    className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-200"
                    onClick={handlePreviousStep}
                  >
                    Previous
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                    onClick={handleBookAppointment}
                  >
                    Book Appointment
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentBooking;