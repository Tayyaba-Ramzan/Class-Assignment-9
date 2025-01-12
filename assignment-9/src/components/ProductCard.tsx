"use client";
import { addItem, deleteItem, subItem } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

const Cartcard = () => {
  const cartItems = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="flex flex-row px-3 py-1 items-center">
            {/* Image */}
            <Image
              src={Array.isArray(item.image) ? item.image[0] : item.image}
              alt={item.title}
              height={300}
              width={300}
              className="w-[170px] md:w-[300px] h-[280px] object-contain"
            />

            {/* Content */}
            <div className="flex flex-col md:flex-row pl-9 w-full items-center justify-between mt-4 md:mt-0">
              <div className="w-full md:w-auto">
                {/* Title */}
                <h2 className="mt-2 text-gray-600 font-medium text-lg md:text-xl leading-6 line-clamp-1">
                  {item.title}
                </h2>

                {/* Size */}
                <h2 className="mt-2 text-black font-medium text-md md:text-lg leading-none">
                  Size:&nbsp;<span>{item.size}</span>
                </h2>

                {/* Color */}
                <h2 className="mt-2 text-black font-medium text-md md:text-lg leading-none">
                  Color:&nbsp;
                  <span>
                    <button
                      key={index}
                      className="border-2 rounded-full w-5 h-5"
                      style={{ backgroundColor: item.color }}
                    />
                  </span>
                </h2>

                {/* Quantity */}
                <div className="flex mt-3 items-center">
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="bg-slate-950 group hover:bg-white text-white hover:text-slate-950 duration-300 w-fit h-fit py-2 px-4 rounded-md text-base"
                  >
                    <FaPlus className="h-2 w-2 group-hover:text-black" />
                  </button>
                  <div className="px-2 scroll-m-20 font-medium text-base tracking-tight">
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => dispatch(subItem(item))}
                    className="bg-slate-950 group hover:bg-white text-white hover:text-slate-950 duration-300 w-fit h-fit py-2 px-4 rounded-md text-base"
                  >
                    <FaMinus className="h-2 w-2 group-hover:text-black" />
                  </button>
                </div>

                {/* Mobile Price and Delete */}
                <div className="md:hidden flex flex-col gap-2 mt-3 items-start">
                  <h2 className="text-lg text-black font-semibold line-clamp-1 leading-none">
                    <span>Price:&nbsp;</span>${item.price * item.quantity}
                  </h2>
                  <FaRegTrashAlt
                    onClick={() => dispatch(deleteItem(item.uuid))}
                    className="text-xl text-red-500 cursor-pointer leading-none font-semibold"
                  />
                </div>
              </div>

              {/* Desktop Price and Delete */}
              <div className="hidden md:flex flex-col gap-2 mt-3 md:mt-0 items-start">
                <h2 className="text-lg text-black font-semibold line-clamp-1 leading-none">
                  <span>Price:&nbsp;</span>${item.price * item.quantity}
                </h2>
                <FaRegTrashAlt
                  onClick={() => dispatch(deleteItem(item.uuid))}
                  className="text-xl text-red-500 cursor-pointer font-semibold"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col  items-center justify-center pt-7 md:pt-1">
          <Image
            src="/cart.jpg"
            alt="Empty Cart" 
            width={600}
            height={600}
            className="h-48 w-96 object-contain "
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">
            Your Cart is Empty
          </h2>
          <p className="mt-2 px-6 text-gray-900 font-medium text-base leading-none">
            It looks like you have not added anything to your cart. Go ahead and
            explore top category.
          </p>
          <button className="bg-indigo-700 text-white hover:text-gray-900 hover:bg-slate-100 hover:bg-transparent lg:text-lg duration-300 scroll-m-20 text-base hover:shadow-md font-semibold tracking-tight p-4 capitalize rounded-xl px-8 mt-5">
            <Link href={"/shop"}>Continue Shopping</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Cartcard;
