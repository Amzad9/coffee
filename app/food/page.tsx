"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Food() {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const foodItems = [
    {
      id: "sambusa",
      name: "Sambusa",
      description: "Crispy, golden-fried pastries filled with spiced meat or vegetables. A traditional Somali favorite that's perfect as a snack or appetizer.",
      image: "/menu/image (13).png",
      price: 3.99,
      actualprice: 4.50,
    },
    {
      id: "canbulo",
      name: "Canbulo",
      description: "Traditional Somali sweet bread, soft and flavorful. Perfect for pairing with tea or coffee, or enjoyed on its own.",
      image: "/menu/image (14).png",
      price: 4.50,
      actualprice: 5.00,
    },
    {
      id: "malsawa",
      name: "Malsawa",
      description: "Delicious Somali flatbread, freshly made and served warm. A staple that complements any meal or beverage.",
      image: "/menu/image (15).png",
      price: 3.50,
      actualprice: 4.00,
    },
    {
      id: "bur-macaan",
      name: "Bur Macaan",
      description: "Sweet Somali bread, soft and aromatic. A delightful treat that pairs perfectly with our signature tea.",
      image: "/menu/image (16).png",
      price: 4.00,
      actualprice: 4.50,
    },
    {
      id: "cakes-pastries",
      name: "Cakes & Pastries",
      description: "Freshly baked cakes and pastries made daily. From traditional recipes to modern favorites, we have something for every sweet tooth.",
      image: "/menu/image (17).png",
      price: 5.99,
      actualprice: 6.50,
    },
    {
      id: "traditional-snacks",
      name: "Traditional Snacks",
      description: "A variety of authentic Somali snacks, each with its own unique flavor and story. Perfect for sharing with friends and family.",
      image: "/img4.png",
      price: 4.99,
      actualprice: 5.50,
    },
  ];

  const handleAddToCart = (itemId: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
    // Show feedback
    alert("Added to cart!");
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 relative overflow-x-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/menu/image (15).png"
          alt="Menu Background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>
      <div className="relative z-10">
        <Header />
      
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 sm:mb-6">
              FOOD MENU
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Discover our authentic Somali cuisine, made with traditional recipes and the finest ingredients. Each dish tells a story of our rich cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {foodItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 transform hover:scale-105 flex flex-col"
              >
                <div className="relative h-64 sm:h-72">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-black text-black mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-amber-200">
                  <span className="text-xl sm:text-2xl font-black text-amber-600">
                      ${item.price.toFixed(2)}{" "}
                      <span className="text-xs sm:text-sm font-semibold text-gray-700/80 line-through">
                        ${item.actualprice.toFixed(2)}
                      </span>
                    </span>
                    <button
                      onClick={() => handleAddToCart(item.id)}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      </div>
    </div>
  );
}
