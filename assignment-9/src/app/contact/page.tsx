"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 lg:p-12 mt-24">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="lg:flex">
          {/* Left Section: Contact Info */}
          <div className="lg:w-1/2 bg-gray-900 text-white p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-6 text-lg">
              We'd love to hear from you! Whether you have a question about our products, shipping, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-xl mr-4">
                <FaPhoneAlt />
                </span>
                <span>+92 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-8 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-xl mr-4">
                <FaEnvelope />
                </span>
                <span>support@shoppro.com</span>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-8 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-xl mr-4">
                <FaMapMarkerAlt />
                </span>
                <span>123 E-Commerce Street, Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="lg:w-1/2 p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-md shadow-lg transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
