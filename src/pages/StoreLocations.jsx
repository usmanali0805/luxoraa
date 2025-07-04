import React from "react";

const StoreLocations = () => {
  return (
    <div className="max-w-4xl min-h-[60vh] mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Store Locations</h1>
      <p className="text-gray-600 mt-2 text-center">Find us at the following locations:</p>
      <ul className="list-disc pl-6 text-gray-600 mt-4">
        <li><strong>Karachi Branch:</strong> Karachi</li>
        <li><strong>Lahore Branch:</strong> Lahore</li>
        <li><strong>Islamabad Branch:</strong> Islamabad</li>
      </ul>
    </div>
  );
};

export default StoreLocations;
