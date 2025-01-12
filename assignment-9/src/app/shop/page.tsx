"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

const Page = () => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const parsedResponse: Product[] = await response.json();
            setData(parsedResponse);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-6 py-12">
            {/* Heading */}
            <div className="text-center mt-4">
                <h1 className="text-black text-2xl font-bold tracking-tight lg:text-4xl capitalize">
                    All Products
                </h1>
                <div className="w-28 h-1 mb-2 rounded-full bg-gray-900 inline-flex"></div>
            </div>
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {Array(4)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="bg-gray-200 rounded-lg p-5 shadow-md animate-pulse"
                            >
                                <div className="w-full h-56 bg-gray-300 mb-4 rounded-lg"></div>
                                <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                                <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
                                <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                                <div className="w-1/2 h-4 bg-gray-300 rounded mb-4"></div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
                                    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                <>

                    {/* Products */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
                        {data.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 p-5 flex flex-col relative"
                            >
                                <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        layout="responsive"
                                        width={500}
                                        height={500}
                                        className="object-contain rounded-lg"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {product.title}
                                    </h3>
                                    <p className="text-lg text-indigo-700 font-medium mb-3">
                                        ${product.price}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                        {product.description}
                                    </p>
                                    <p className="text-sm text-gray-500 mb-4">
                                        <strong>Category:</strong> {product.category}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-gray-800">
                                            Rating:
                                        </span>
                                        <span className="text-sm text-yellow-500">
                                            {product.rating.rate} <i className="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="bg-gray-100 py-1 px-3 rounded-full text-xs text-gray-600">
                                        {product.rating.count} reviews
                                    </div>
                                </div>
                                <Link
                                    href={`/shop/${product.id}`}
                                    className="mt-4 w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition-colors duration-200 text-center"
                                >
                                    Buy Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Page;
