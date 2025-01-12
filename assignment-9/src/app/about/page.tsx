import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-6 py-12 mt-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">About ShopPro</h1>
        <p className="text-lg text-gray-600 mt-4">Discover the world of ShopPro – Your one-stop online shopping destination!</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        {/* Team Image */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <Image
            src="/about.png"  // Replace with your team or office image
            alt="ShopPro Team"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* About Us Text */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
          <p className="text-lg text-gray-600 mt-4">
            ShopPro is a dynamic e-commerce platform that brings you a wide range of high-quality products at affordable prices.
            Our mission is to provide an easy and enjoyable shopping experience to people all over the world. With a focus on customer
            satisfaction, we strive to deliver exceptional service and a curated collection of products for every need.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Founded by a passionate team of experts, ShopPro aims to make online shopping accessible, safe, and exciting for everyone.
            We believe in quality, transparency, and building lasting relationships with our customers.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 underline decoration-indigo-700 decoration-4">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 underline decoration-indigo-700 decoration-4">Customer-Centric</h3>
            <p className="text-gray-600 mt-2">We put our customers first and focus on offering the best shopping experience possible.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 underline decoration-indigo-700 decoration-4">Integrity</h3>
            <p className="text-gray-600 mt-2">We believe in honesty, trust, and transparency in everything we do.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 underline decoration-indigo-700 decoration-4">Innovation</h3>
            <p className="text-gray-600 mt-2">Constantly evolving, we bring new and innovative products to our platform.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 underline decoration-indigo-700 decoration-4">Join Our Community</h2>
        <p className="text-lg text-gray-600 mt-4">
          Become a part of the ShopPro family! Stay updated with our latest offers, news, and exciting launches. Together, we can make online shopping even better!
        </p>
        <button className="mt-6 py-3 px-8 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
          Join Us Now
        </button>
      </div>
    </div>
  );
}
