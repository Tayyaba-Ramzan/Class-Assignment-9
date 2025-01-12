"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle menu state
  const cartCount = useAppSelector((state) => state.cart);

  return (
    <div className="bg-white text-indigo-700 py-3 sticky top-0 z-10 px-3 sm:px-6 md:px-12 shadow-md border-b-4 border-indigo-700
">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={280}
          />

        </div>

        {/* Mobile Menu Button (aligned to the right) */}
        <button
          className="block sm:hidden text-2xl ml-auto" // ml-auto ensures the button is aligned to the right
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex flex-1 justify-end gap-3 md:gap-10 items-center">
          <Link href="/" className="navLink hover:text-yellow-500 transition-colors text-sm md:text-base font-semibold">
            Home
          </Link>
          <Link
            href="/shop"
            className="navLink hover:text-yellow-500 transition-colors text-sm md:text-base font-semibold"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="navLink hover:text-yellow-500 transition-colors text-sm md:text-base font-semibold"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="navLink hover:text-yellow-500 transition-colors text-sm md:text-base font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Cart Icon */}
        <Link href={"/card"} className="navLink">
          <div className="flex text-[22px] sm:ml-4">
            <div className="relative cursor-pointer hover:text-yellow-500 transition-colors font-semibold">
              <AiOutlineShoppingCart />
              {cartCount.length > 0 && (
                <div
                  className="absolute top-[-10px] right-[-10px] text-gray-400-500 w-[20px] h-[20px] rounded-full
                  text-[12px] grid place-items-center bg-red-600 text-white font-semibold"
                >
                  {cartCount.length}
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile Navigation Links */}
      {menuOpen && (
        <div className="sm:hidden mt-3 space-y-2 text-center font-semibold">
          <Link
            href="/"
            className="block navLink hover:text-yellow-500 transition-colors text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="block navLink hover:text-yellow-500 transition-colors text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="navLink hover:text-yellow-500 transition-colors text-sm md:text-base font-semibold"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block navLink hover:text-yellow-500 transition-colors text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
