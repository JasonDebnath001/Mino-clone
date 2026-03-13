import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Service 1</h2>
          <p className="text-gray-600">
            Description of service 1. We provide high-quality solutions tailored
            to your needs.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Service 2</h2>
          <p className="text-gray-600">
            Description of service 2. Our team ensures timely delivery and
            excellent results.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Service 3</h2>
          <p className="text-gray-600">
            Description of service 3. We focus on innovation and customer
            satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
