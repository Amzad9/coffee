"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Location() {
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 relative overflow-x-hidden">
    
      <div className="relative z-10">
      <section className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
        <div className="absolute w-full h-full top-8 bg-linear-to-b from-amber-50 via-amber-50 to-amber-100  flex items-center justify-center">
          <div className="text-center text-black px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
            FIND US
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
              Where Tradition Meets Excellence
            </p>
          </div>
        </div>
      </section>
      
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
        

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Map Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-black mb-6">Our Location</h2>
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">Map will be embedded here</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Visit us at our cozy location in Minnesota. We're easily accessible and offer a warm, welcoming atmosphere for all our customers.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-black mb-6">Address</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-black mb-1">Hamdi Coffee</p>
                      <p className="text-base sm:text-lg text-gray-700">
                        123 Main Street<br />
                        Minneapolis, MN 55401<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-black mb-6">Hours</h2>
                <div className="space-y-3 text-base sm:text-lg">
                  <div className="flex justify-between">
                    <span className="font-semibold text-black">Monday - Friday</span>
                    <span className="text-gray-700">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-black">Saturday</span>
                    <span className="text-gray-700">8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-black">Sunday</span>
                    <span className="text-gray-700">9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-black mb-6">Get Directions</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                  Use the map above or your preferred navigation app to find us. We're located in a convenient location with easy parking access.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-linear-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
