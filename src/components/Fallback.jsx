import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Fallback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
      <AlertCircle size={50} className="text-red-500 mb-4" />
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-sm text-gray-500">Please try again later.</p>
    </div>
  );
};
