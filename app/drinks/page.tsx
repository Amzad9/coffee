"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Drinks() {
  const drinkItems = [
    {
      id: "somali-shaah",
      name: "Somali Shaah (Tea)",
      description: "Authentic Somali tea, traditionally brewed with aromatic spices. A warm, comforting beverage that's perfect any time of day.",
      image: "/img1.png",
      price: 3.50,
      actualprice: 4.00,
    },
    {
      id: "malab-iyo-caano",
      name: "Malab iyo Caano",
      description: "Our signature tea with milk - a rich, creamy blend that's become a customer favorite. The perfect balance of flavor and comfort.",
      image: "/img2.png",
      price: 4.00,
      actualprice: 4.50,
    },
    {
      id: "somali-qahwo",
      name: "Somali Qahwo (Coffee)",
      description: "Traditional Somali coffee, carefully roasted and brewed to perfection. Experience the authentic taste of East African coffee culture.",
      image: "/img3.png",
      price: 4.50,
      actualprice: 5.00,
    },
    {
      id: "american-coffee",
      name: "American Coffee",
      description: "Classic American-style coffee, freshly brewed and served hot. Perfect for those who love a traditional cup of joe.",
      image: "/img4.png",
      price: 3.99,
      actualprice: 4.50,
    },
    {
      id: "avocado-smoothie",
      name: "Avocado Smoothie",
      description: "Creamy avocado smoothie, rich and nutritious. A refreshing blend that's both healthy and delicious.",
      image: "/img1.png",
      price: 5.99,
      actualprice: 6.50,
    },
    {
      id: "mango-lassi",
      name: "Mango Lassi",
      description: "Sweet and tangy mango lassi, made with fresh mangoes and yogurt. A tropical treat that's both refreshing and satisfying.",
      image: "/img2.png",
      price: 5.50,
      actualprice: 6.00,
    },
    {
      id: "spicy-mango",
      name: "Spicy Mango",
      description: "A unique blend of mango with a hint of spice. An exotic combination that tantalizes your taste buds.",
      image: "/img3.png",
      price: 5.99,
      actualprice: 6.50,
    },
    {
      id: "specialty-drinks",
      name: "Specialty Drinks",
      description: "A variety of specialty beverages, each crafted with care. From traditional favorites to modern creations, we have something for everyone.",
      image: "/img4.png",
      price: 6.50,
      actualprice: 7.00,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 relative overflow-x-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/menu/image (16).png"
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
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 sm:mb-6">
              OUR DRINKS MENU
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              From traditional Somali tea and coffee to refreshing smoothies and specialty drinks, we offer a wide variety of beverages to quench your thirst.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {drinkItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 transform hover:scale-105 flex flex-col"
              >
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 sm:p-8 grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-black text-black mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 grow">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-amber-200">
                    <span className="text-xl sm:text-2xl font-black text-amber-600">
                      ${item.price.toFixed(2)}{" "}
                      <span className="text-xs sm:text-sm font-semibold text-gray-700/80 line-through">
                        ${item.actualprice.toFixed(2)}
                      </span>
                    </span>
                    <button
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm whitespace-nowrap"
                    >
                      Order Online
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 border-2 border-amber-200">
                <h2 className="text-2xl sm:text-3xl font-black text-black mb-4">
                  Traditional Brews
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our traditional Somali tea and coffee are brewed using time-honored methods passed down through generations. Each cup is a celebration of our cultural heritage, prepared with care and served with warmth.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 border-2 border-amber-200">
                <h2 className="text-2xl sm:text-3xl font-black text-black mb-4">
                  Fresh & Refreshing
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  All our drinks are made fresh to order using quality ingredients. Whether you prefer hot or cold, traditional or modern, we have the perfect beverage to satisfy your cravings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  );
}
