import React from "react";

const StoreTimings = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 min-h-[70vh] bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 py-6">Store Timings</h1>
      <p className="text-gray-600 mt-2 text-center">Our store operates at the following hours:</p>
      <ul className="list-disc pl-6 text-gray-600 mt-4">
        <li><strong>Monday - Friday:</strong> 9:00 AM - 9:00 PM</li>
        <li><strong>Saturday:</strong> 10:00 AM - 8:00 PM</li>
        <li><strong>Sunday:</strong> Closed</li>
      </ul>
    </div>
  );
};

export default StoreTimings;
