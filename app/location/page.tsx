"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Location() {
  // Business hours data for easier management
  const businessHours = [
    { day: "Monday", hours: "6:30 AM - 11:00 PM" },
    { day: "Tuesday", hours: "6:30 AM - 10:30 PM" },
    { day: "Wednesday", hours: "6:30 AM - 11:00 PM" },
    { day: "Thursday", hours: "6:30 AM - 10:30 PM" },
    { day: "Friday", hours: "7:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "6:30 AM - 11:00 PM" },
    { day: "Sunday", hours: "6:30 AM - 11:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-50 to-amber-100">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <Header />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-r from-amber-900/90 to-amber-800/90">
         
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              FIND US
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto">
              Where Tradition Meets Excellence
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left Column - Map */}
              <div className="space-y-8">
                {/* Map Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-[1.02]">
                  <div className="p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="bg-amber-500 w-1.5 h-8 rounded-full mr-3"></span>
                      Our Location
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Visit us at our cozy corner in Minneapolis. We're conveniently located and ready to serve you.
                    </p>
                  </div>
                  
                  {/* Map Container */}
                  <div className="relative h-[400px] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.720441039585!2d-93.282551684464!3d44.951674479098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f628c123456789%3A0x123456789abcdef!2s2910%20Pleasant%20Ave%20Fl%201%2C%20Minneapolis%2C%20MN%2055408!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="Hamdi Somali Coffee Location"
                    ></iframe>
                  </div>
                  
                  {/* Map Footer */}
                  <div className="p-6 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Hamdi Somali Coffee</p>
                        <p className="text-gray-600">
                          2910 Pleasant Ave Fl 1<br />
                          Minneapolis, MN 55408
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Directions Card */}
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">Need Directions?</h3>
                  <p className="text-amber-50 mb-6 leading-relaxed">
                    Get turn-by-turn directions straight to our door. We're easily accessible and have convenient parking nearby.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2910+Pleasant+Ave+Fl+1,+Minneapolis,+MN+55408"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Right Column - Contact & Hours */}
              <div className="space-y-8">
                
                {/* Address Card */}
                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 transform transition duration-500 hover:shadow-2xl">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="bg-amber-500 w-1.5 h-8 rounded-full mr-3"></span>
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                      <div className="bg-amber-500 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Phone</p>
                        <p className="text-lg font-semibold text-gray-900">(612) 259-8411</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                      <div className="bg-amber-500 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <p className="text-lg font-semibold text-gray-900">bulqass@yahoo.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                      <div className="bg-amber-500 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Website</p>
                        <p className="text-lg font-semibold text-gray-900">www.hamdisomali.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 transform transition duration-500 hover:shadow-2xl">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="bg-amber-500 w-1.5 h-8 rounded-full mr-3"></span>
                    Opening Hours
                  </h2>
                  
                  <div className="space-y-3">
                    {businessHours.map((item, index) => (
                      <div 
                        key={item.day}
                        className={`flex justify-between items-center py-2 ${
                          index !== businessHours.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                      >
                        <span className="font-medium text-gray-700">{item.day}</span>
                        <span className="text-gray-900 font-semibold">{item.hours}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}