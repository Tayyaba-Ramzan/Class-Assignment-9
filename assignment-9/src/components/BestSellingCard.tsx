"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

interface BestSellingCardProps {
  src: string;
  alt: string;
  title: string;
  price: number;
  productDetails: string;
  quantity: number;
}

const BestSellingCard: React.FC<BestSellingCardProps> = ({
  src,
  alt,
  title,
  price,

}) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <div className="w-[350px] h-[35rem] mx-auto p-4 shadow-md rounded-xl relative group bg-gray-200"></div>
    ); // Placeholder UI to avoid mismatch
  }

  return (
    <div className="w-[350px] h-[35rem] mx-auto p-4 shadow-md rounded-xl relative group">
      {/* Image */}
      <div className="block w-full h-[23rem] rounded overflow-hidden hover:scale-110 duration-500 hover:duration-500">
        <Image
          className="w-full h-full object-contain"
          src={src}
          alt={alt}
          width={300}
          height={300}
          priority
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-gray-800 border-b pb-2 text-lg font-semibold tracking-tight transition-colors line-clamp-1 ">
          {title}
        </h2>

        <span className="text-black pb-2 mt-2 text-base font-semibold tracking-tight line-clamp-1">
          ${price}
        </span>

        {/* Add to Cart and Buy Now Buttons */}
        <button className="group mt-3 text-center justify-center items-center bg-gray-800 flex rounded-xl absolute left-4 hover:bg-transparent text-white hover:text-black text-sm p-3 scroll-m-20 font-semibold tracking-tight">
          <FaHeart className="mr-2 h-7 w-5 group-hover:text-red-500 duration-300" />
          Buy Now
        </button> 
      </div>
    </div>
  );
};

export default BestSellingCard;