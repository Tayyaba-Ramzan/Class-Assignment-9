"use client";

import Cartcard from "@/components/ProductCard";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const CartPage = () => {
  const cartlist = useAppSelector((state) => state.cart);
  const cartTotal = cartlist.reduce(
    (total: number, item: { price: number; quantity: number }) => {
      return total + item.price * item.quantity;
    },
    0
  );

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 bg-white md:pt-8 ">
      {/* items */}
      <div className="col-span-2 ">
        <Cartcard />
      </div>
      {/* order summary */}
      <div className="bg-gray-900 p-6 justify-center ml-4 items-center pt-14 h-fit w-full rounded-xl ">
        {/* heading */}
        <h1 className="text-white scroll-m-20 text-lg capitalize lg:text-2xl font-semibold tracking-tight ">
          Order Summary
        </h1>
        {/* divider */}
        <div className="divider mt-0 mb-1 "></div>
        {/* Pricing */}
        <div className=" text-sm lg:text-lg font-medium tracking-tight text-white">
          {/* product prices */}
          <div className="flex justify-between items-center capitalize">
            <h2>sub total</h2>
            <h2>${cartTotal}</h2>
          </div>
          {/* delivery charges  */}
          <div className="flex justify-between items-center capitalize">
            <h2>Delivery Charges</h2>
            <h2>TBD</h2>
          </div>
          {/* Servive charges  */}
          <div className="flex justify-between items-center capitalize">
            <h2>Sales Tax</h2>
            <h2>TBD</h2>
          </div>
        </div>
        {/* divider */}
        <div className="divider mt-0 mb-1 "></div>
        {/* estimated total */}
        <div className="flex justify-between items-center text-sm lg:text-lg tracking-tight text-white font-semibold capitalize">
          <h2>Estimated total</h2>
          <h2>${cartTotal}</h2>
        </div>
        {/* divider */}
        <div className="divider mt-4 mb-1 "></div>
        {/* checkout  button */}
        <div className="flex justify-center pb-8  items-center w-full">
          <button className="bg-white text-gray-900-900 hover:text-white hover:bg-transparent lg:text-lg duration-300 scroll-m-20 text-base hover:shadow-md font-semibold tracking-tight p-4 capitalize rounded-xl px-8">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;