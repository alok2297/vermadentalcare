const ConfirmationPage = ({ formData, onSubmit, onPrev }) => {
    // Find selected service and doctor names
    const services = [
      { id: 1, name: 'General Checkup' },
      { id: 2, name: 'Teeth Cleaning' },
      { id: 3, name: 'Tooth Extraction' },
      { id: 4, name: 'Root Canal' },
      { id: 5, name: 'Braces' },
    ];
  
    const doctors = [
      { id: 1, name: 'Dr. Smith' },
      { id: 2, name: 'Dr. Johnson' },
      { id: 3, name: 'Dr. Williams' },
    ];
  
    const selectedService = services.find(s => s.id === parseInt(formData.service));
    const selectedDoctor = doctors.find(d => d.id === parseInt(formData.doctor));
  
    // Format date
    const formattedDate = new Date(formData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    // Format time
    const formatTime = (timeString) => {
      if (!timeString) return '';
      const [hours, minutes] = timeString.split(':');
      const hour = parseInt(hours);
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour;
      return `${displayHour}:${minutes} ${period}`;
    };
  
    return (
      <div>
        <h2 className="text-xl font-semibold mb-6">Confirm Your Appointment</h2>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Appointment Details</h3>
          
          <div className="space-y-3">
            <div className="flex">
              <span className="w-32 text-gray-600">Service:</span>
              <span>{selectedService?.name || 'N/A'}</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-600">Doctor:</span>
              <span>{selectedDoctor?.name || 'N/A'}</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-600">Date:</span>
              <span>{formattedDate}</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-600">Time:</span>
              <span>{formatTime(formData.time)}</span>
            </div>
          </div>
        </div>
  
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Patient Details</h3>
          
          <div className="space-y-3">
            <div className="flex">
              <span className="w-32 text-gray-600">Name:</span>
              <span>{formData.name}</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-600">Phone:</span>
              <span>{formData.phone}</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-600">Email:</span>
              <span>{formData.email}</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-600">Address:</span>
              <span>{formData.address}</span>
            </div>
            {formData.additionalDetails && (
              <div className="flex">
                <span className="w-32 text-gray-600">Additional Info:</span>
                <span>{formData.additionalDetails}</span>
              </div>
            )}
          </div>
        </div>
  
        <div className="mt-8 flex justify-between">
          <button
            onClick={onPrev}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    );
  };
  
  export default ConfirmationPage;