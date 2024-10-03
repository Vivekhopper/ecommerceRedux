import React from "react";

function Contact() {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      
      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Contact Form */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="bg-gray-100 shadow-md p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Information</h3>
          <ul className="space-y-2">
            <li>
              <strong>Address:</strong> 123 E-commerce St, Online City, 12345
            </li>
            <li>
              <strong>Phone:</strong> +1 123-456-7890
            </li>
            <li>
              <strong>Email:</strong> contact@shoponline.com
            </li>
            <li>
              <strong>Business Hours:</strong> Mon-Fri, 9 AM - 5 PM
            </li>
          </ul>

          {/* Placeholder for Map */}
          <div className="mt-6">
            <iframe
              title="map"
              className="w-full h-64 rounded-lg"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
