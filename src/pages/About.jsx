import React from "react";

function About() {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">About Us</h2>
      
      {/* Main Content */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-blue-500">Who We Are</h3>
        <p className="text-gray-700 mb-4">
          We are a leading e-commerce platform dedicated to providing the best online shopping experience. Our mission is to connect customers with high-quality products at affordable prices.
        </p>
        <p className="text-gray-700">
          Our team is passionate about delivering exceptional customer service and ensuring that our clients find exactly what they need.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-blue-500">Our Mission</h3>
        <p className="text-gray-700 mb-4">
          At our core, we believe in putting the customer first. We strive to create a seamless shopping experience that is both enjoyable and rewarding.
        </p>
        <p className="text-gray-700">
          Our mission is to offer a wide range of quality products while ensuring customer satisfaction through excellent service.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-blue-500">Our Values</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Integrity: We uphold the highest standards of honesty and transparency.</li>
          <li>Customer Satisfaction: We prioritize our customers’ needs and feedback.</li>
          <li>Innovation: We constantly seek new ways to enhance our services and offerings.</li>
          <li>Diversity: We celebrate diversity and strive to create an inclusive environment.</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-blue-500">Join Us</h3>
        <p className="text-gray-700 mb-4">
          Whether you're looking for the best products or want to join our team, we invite you to explore what we have to offer. Thank you for choosing us!
        </p>
      </div>
    </div>
  );
}

export default About;
