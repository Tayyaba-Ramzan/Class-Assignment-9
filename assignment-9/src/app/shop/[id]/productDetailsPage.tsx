"use client";

import ToastAddToCart from "@/components/toastAddToCart";
import Image from "next/image";
import { useState } from "react";

interface ProductRate {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRate;
}

interface CartItem extends Product {
  quantity: number;
}

const ProductDetailsPage = ({ product }: { product: Product }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showToast, setShowToast] = useState(false); // For toast visibility

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // Show toast notification
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="container mx-auto px-6 py-12 mt-32">
      {showToast && (
        <ToastAddToCart
          cartItem={{
            title: product.title,
            image: product.image,
            productDetails: product.description,
            price: product.price,
            allCategory: product.category,
            color: "Default", // Adjust as needed
            quantity: 1, // Default quantity
          }}
        />
      )}
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12 mt-6 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
          <p className="text-indigo-700 text-2xl font-medium mt-6">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="mt-6 py-2 px-6 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;