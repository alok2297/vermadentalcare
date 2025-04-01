import {useEffect } from "react";
import ServiceSelection from "./ServiceSelection ";
import DateTimePicker from "./DateTimePicker";
import PatientDetailsForm from "./PatientDetailsForm";
import OTPVerification from "./OTPVerification";
import ConfirmationPage from "./ConfirmationPage";
import { Breadcrumbs } from '../Elements/Breadcrumbs';
import { 
  setStep, 
  setAuth, 
  setOTPModal, 
  updateFormData, 
  resetBooking
} from '../../redux/bookingSlice';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AppointmentBooking = () => {
  const dispatch = useDispatch();
  const {
    step,
    isAuthenticated,
    showOTPModal,
    formData
  } = useSelector((state) => state.booking);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      dispatch(setAuth(true));
    }
  }, [dispatch]);

  const handleNext = () => {
    if (step === 3 && !isAuthenticated) {
      dispatch(setOTPModal(true));
    } else {
      dispatch(setStep(step + 1));
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    dispatch(setStep(step - 1));
    window.scrollTo(0, 0);
  };

  const handleOTPVerification = (otp) => {
    console.log("Verifying OTP:", otp);
    localStorage.setItem("authToken", "demo-token");
    dispatch(setAuth(true));
    dispatch(setOTPModal(false));
    dispatch(setStep(4));
  };

  const handleFormChange = (name, value) => {
    dispatch(updateFormData({ [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitting appointment:", formData);
    dispatch(resetBooking());
    alert("Appointment booked successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Breadcrumbs
          links={[
            { name: "Home", path: "/" },
            { name: "Appointment", path: null },
          ]}
        />
      <div className="bg-gradient-to-r from-blue-600 rounded-t-lg to-purple-600 p-6">
        <h1 className="text-3xl font-bold text-white">Book Your Appointment</h1>
        <p className="text-sm text-blue-100 mt-1">
          Fill in the details to schedule your appointment.
        </p>
      </div>

      <div className="flex justify-between mb-8 p-8">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div
            key={stepNumber}
            className="flex flex-col items-center"
            onClick={() => {
              // Only allow navigation to previous steps
              if (stepNumber < step) {
                dispatch(setStep(stepNumber));
                window.scrollTo(0, 0);
              }
            }}
            style={{
              cursor: stepNumber < step ? "pointer" : "default",
            }}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center 
          ${
            step >= stepNumber
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }
          ${stepNumber < step ? "hover:bg-blue-600 transition-colors" : ""}`}
            >
              {stepNumber}
            </div>
            <span
              className={`text-sm mt-1 ${
                stepNumber < step ? "text-blue-500" : "text-gray-600"
              }`}
            >
              {stepNumber === 1 && "Service"}
              {stepNumber === 2 && "Date & Time"}
              {stepNumber === 3 && "Details"}
              {stepNumber === 4 && "Confirm"}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {step === 1 && (
          <ServiceSelection
            formData={formData}
            onFormChange={handleFormChange}
            onNext={handleNext}
          />
        )}

        {step === 2 && (
          <DateTimePicker
            formData={formData}
            onFormChange={handleFormChange}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}

        {step === 3 && (
          <PatientDetailsForm
            formData={formData}
            onFormChange={handleFormChange}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}

        {step === 4 && (
          <ConfirmationPage
            formData={formData}
            onSubmit={handleSubmit}
            onPrev={handlePrev}
          />
        )}
      </div>

      {/* OTP Verification Modal */}
      {showOTPModal && (
        <OTPVerification
          onVerify={handleOTPVerification}
          onClose={() => dispatch(setOTPModal(false))}
        />
      )}
    </div>
  );
};

export default AppointmentBooking;
