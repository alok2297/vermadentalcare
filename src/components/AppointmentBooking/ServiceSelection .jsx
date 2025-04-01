import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../redux/bookingSlice";
const ServiceSelection = ({onNext }) => {
  const dispatch = useDispatch();
  const { service, doctor } = useSelector((state) => state.booking.formData);
  console.log(service);
  
    const [services, setServices] = useState([
      { id: 1, name: 'General Checkup' },
      { id: 2, name: 'Teeth Cleaning' },
      { id: 3, name: 'Tooth Extraction' },
      { id: 4, name: 'Root Canal' },
      { id: 5, name: 'Braces' },
    ]);
  
    const [doctors, setDoctors] = useState([
      { id: 1, name: 'Dr. Smith', services: [1, 2, 3] },
      { id: 2, name: 'Dr. Johnson', services: [1, 2, 4] },
      { id: 3, name: 'Dr. Williams', services: [1, 5] },
    ]);
  
    const [filteredDoctors, setFilteredDoctors] = useState([]);
  
    useEffect(() => {
      if (service) {
        const serviceId = parseInt(service);
        const availableDoctors = doctors.filter(doctor => 
          doctor.services.includes(serviceId)
        );
        setFilteredDoctors(availableDoctors);
      } else {
        setFilteredDoctors([]);
      }
    }, [service, doctors]);
  
    const handleServiceChange = (e) => {
      const value = e.target.value;
      dispatch(
        updateFormData({
          service: value,
          doctor: "",
        })
      );
    };
  
    const handleDoctorChange = (e) => {
      const value = e.target.value;
      dispatch(updateFormData({ doctor: value }));
    };
  
    const isFormValid = () => {
      return service && doctor;
    };
  
    return (
      <div>
        <h2 className="text-xl font-semibold mb-6">Select Service and Doctor</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dental Service *
            </label>
            <select
              value={service || ''}
              onChange={handleServiceChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a service</option>
              {services.map(service => (
                <option key={service.id} value={service.id.toString()}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Doctor *
            </label>
            <select
              value={doctor || ''}
              onChange={handleDoctorChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              disabled={!service}
            >
              <option value="">Select a doctor</option>
              {filteredDoctors.map(doctor => (
                <option key={doctor.id} value={doctor.id.toString()}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
        </div>
  
        <div className="mt-8 flex justify-end">
          <button
            onClick={onNext}
            disabled={!isFormValid()}
            className={`px-4 py-2 rounded-md ${isFormValid() ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default ServiceSelection;