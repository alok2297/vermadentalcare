import { useState, useEffect } from 'react';

const DateTimePicker = ({ formData, onFormChange, onNext, onPrev }) => {
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [activeTab, setActiveTab] = useState('date'); // 'date' or 'time'
  
  useEffect(() => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) { // Reduced to 14 days for compactness
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    setAvailableDates(dates);
  }, []);

  useEffect(() => {
    if (formData.date) {
      const times = [];
      const timeSlots = [];
      
      // Morning slots (9AM to 2PM)
      for (let hour = 9; hour < 14; hour++) {
        timeSlots.push({ hour, minute: 0 });
        timeSlots.push({ hour, minute: 15 });
        timeSlots.push({ hour, minute: 30 });
        timeSlots.push({ hour, minute: 45 });
      }
      
      // Evening slots (4PM to 8PM)
      for (let hour = 16; hour < 20; hour++) {
        timeSlots.push({ hour, minute: 0 });
        timeSlots.push({ hour, minute: 15 });
        timeSlots.push({ hour, minute: 30 });
        timeSlots.push({ hour, minute: 45 });
      }
      
      // Format times
      timeSlots.forEach(({ hour, minute }) => {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        const timeString = `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`;
        const value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        
        times.push({
          display: timeString,
          value: value,
          period: period.toLowerCase()
        });
      });
      
      setAvailableTimes(times);
      setActiveTab('time');
    } else {
      setAvailableTimes([]);
    }
  }, [formData.date]);

  const handleDateChange = (date) => {
    onFormChange('date', date.toISOString().split('T')[0]);
    onFormChange('time', '');
  };

  const handleTimeChange = (timeValue) => {
    onFormChange('time', timeValue);
  };

  const isFormValid = () => {
    return formData.date && formData.time;
  };

  // Group times by AM/PM
  const morningTimes = availableTimes.filter(time => time.period === 'am');
  const eveningTimes = availableTimes.filter(time => time.period === 'pm');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
      <div className="w-full bg-white rounded-t-3xl shadow-xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white p-4 border-b border-gray-200 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Select Date & Time</h2>
            <button 
              onClick={() => onPrev()} 
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex mt-4 border-b border-gray-200">
            <button
              className={`pb-2 px-4 font-medium ${activeTab === 'date' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('date')}
            >
              Date
            </button>
            <button
              className={`pb-2 px-4 font-medium ${activeTab === 'time' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'} ${!formData.date ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => formData.date && setActiveTab('time')}
              disabled={!formData.date}
            >
              Time
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {activeTab === 'date' && (
            <div className="mb-4">
              <div className="flex overflow-x-auto pb-2 hide-scrollbar">
                {availableDates.map((date, index) => {
                  const dateString = date.toISOString().split('T')[0];
                  const day = date.toLocaleDateString('en-US', { weekday: 'short' });
                  const dateNum = date.getDate();
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleDateChange(date)}
                      className={`flex flex-col items-center justify-center w-16 h-20 mx-1 rounded-lg shrink-0
                        ${formData.date === dateString 
                          ? 'bg-blue-100 border-2 border-blue-500' 
                          : 'border border-gray-200 hover:bg-gray-50'}`}
                    >
                      <span className="text-xs text-gray-500">{day}</span>
                      <span className={`text-lg font-bold mt-1 ${formData.date === dateString ? 'text-blue-600' : 'text-gray-800'}`}>
                        {dateNum}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'time' && formData.date && (
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Morning</h3>
                <div className="grid grid-cols-3 gap-2">
                  {morningTimes.map((time, index) => (
                    <button
                      key={`am-${index}`}
                      onClick={() => handleTimeChange(time.value)}
                      className={`py-2 rounded-md text-sm font-medium
                        ${formData.time === time.value 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    >
                      {time.display}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Evening</h3>
                <div className="grid grid-cols-3 gap-2">
                  {eveningTimes.map((time, index) => (
                    <button
                      key={`pm-${index}`}
                      onClick={() => handleTimeChange(time.value)}
                      className={`py-2 rounded-md text-sm font-medium
                        ${formData.time === time.value 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    >
                      {time.display}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200">
          <button
            onClick={onNext}
            disabled={!isFormValid()}
            className={`w-full py-3 rounded-lg font-medium
              ${isFormValid() 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          >
            {isFormValid() ? `Confirm ${formData.time}` : 'Select Date & Time'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;