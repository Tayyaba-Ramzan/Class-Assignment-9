import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Brand and About */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">ShopPro</h3>
          <p className="text-gray-400">
            Your one-stop shop for all your favorite products. Delivering quality and trust at your doorstep.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition">
                Electronics
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Fashion
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Home & Kitchen
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Beauty & Personal Care
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to get updates on the latest offers and products.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 transition text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500">Follow us on</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="#" className="text-gray-500 hover:text-indigo-500 transition">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-indigo-500 transition">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-indigo-500 transition">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-indigo-500 transition">
            <FaLinkedin />
          </Link>
        </div>
        <p className="text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} ShopPro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
