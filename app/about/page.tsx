"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 relative overflow-x-hidden">
      {/* <div className="fixed inset-0 z-0">
        <Image
          src="/menu/image (14).png"
          alt="Menu Background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div> */}
      <div className="relative z-10">
      
      <section className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
     
        <div className="absolute w-full h-full top-8 bg-linear-to-b from-amber-50 via-amber-50 to-amber-100  flex items-center justify-center">
          <div className="text-center text-black px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-4">
              ABOUT HAMDI COFFEE
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
              Where Tradition Meets Excellence
            </p>
          </div>
        </div>
      </section>
      
  

      <section className="pb-12 sm:py-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Our Story */}
            <div className=" backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10  transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-black">Our Story</h2>
              </div>
              <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
                Welcome to Hamdi Coffee, where tradition meets excellence. We are passionate about bringing you the authentic flavors of Somali culture through our carefully crafted beverages and delicious snacks.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Our journey began with a simple mission: to share the rich heritage of Somali Qahwo (coffee) and Shaah (tea) with our community. Every cup we serve is a celebration of our culture, made with love and the finest ingredients.
              </p>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full min-h-[500px]">
              <Image
                src="/about.png"
                alt="Hamdi Coffee Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className=" backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10  mb-12 sm:mb-16">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black">What Makes Us Special</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: "Authentic Recipes",
                  description: "Traditional Somali recipes passed down through generations"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Fresh Ingredients",
                  description: "We use only the freshest, highest quality ingredients"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: "Warm Hospitality",
                  description: "Experience the genuine warmth and friendliness of Somali culture"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Community Focus",
                  description: "A welcoming space for everyone in our community"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Affordable Prices",
                  description: "Quality food and drinks that everyone can enjoy"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Fresh Daily",
                  description: "All items prepared fresh daily with traditional methods"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-amber-50 to-white rounded-xl p-6 border border-amber-100 hover:border-amber-300 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-600 flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-black mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6">
                Visit Us Today
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                We invite you to visit Hamdi Coffee and experience the authentic taste of Somali culture. Whether you're looking for the perfect cup of tea, a delicious snack, or a welcoming place to relax, we're here for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/location"
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white text-amber-600 font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Find Our Location
                </Link>
                <Link
                  href="/contact"
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  );
}