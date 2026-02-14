"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const testimonials = [
    {
      name: "Universal Auto Exports I.",
      source: "Google",
      quote:
        "Best Somali Shaah and Samosa's I've had in MN. Definitely a local hidden gem. Very affordable and quick service! Do yourself a favor and give them a try!",
        image: "/test1.png",
    },
    {
      name: "Yussuf T.",
      source: "Google",
      quote:
        "Best Somali tea and American coffee I really like this place and also enjoy their canbulo,Samusa,cakes and drinks the Business owners and their Employees are friendly people.",
        image: "/test2.png",
    },
    {
      name: "Abdikafi I.",
      source: "Google",
      quote:
        "Maansha allah everything is amazing service food. I'm so happy and I'm glad to see everyone same way keep doing it. What are you doing? Thank you guys.",
        image: "/test3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 relative overflow-x-hidden">
           <header className="fixed z-50 w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-4 bg-white/80 backdrop-blur-md border-b border-amber-100/50 shadow-sm">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black sm:w-6 sm:h-6"
            >
              <path
                d="M12 2L10 8L14 10L12 2Z"
                fill="currentColor"
                opacity="0.8"
              />
              <path
                d="M8 10L6 16L10 18L8 10Z"
                fill="currentColor"
                opacity="0.6"
              />
              <path
                d="M16 10L14 16L18 18L16 10Z"
                fill="currentColor"
                opacity="0.6"
              />
              <path
                d="M4 18L2 22L6 22L4 18Z"
                fill="currentColor"
                opacity="0.4"
              />
              <path
                d="M20 18L18 22L22 22L20 18Z"
                fill="currentColor"
                opacity="0.4"
              />
            </svg>
            <span className="text-xl sm:text-2xl font-bold text-black">Hamdi Coffee</span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-lg hover:bg-amber-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            <a
              href="#menu"
              className="text-black font-medium hover:text-amber-700 transition-colors duration-200 text-sm lg:text-base"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-black font-medium hover:text-amber-700 transition-colors duration-200 text-sm lg:text-base"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-black font-medium hover:text-amber-700 transition-colors duration-200 text-sm lg:text-base"
            >
              Contact
            </a>
            <button className="px-4 lg:px-6 py-2 lg:py-2.5 bg-linear-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm lg:text-base whitespace-nowrap">
              Shop Now
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Fixed version */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md border-b border-amber-100/50 shadow-lg z-50 py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#menu"
                className="text-black font-medium hover:text-amber-700 transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#about"
                className="text-black font-medium hover:text-amber-700 transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-black font-medium hover:text-amber-700 transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button className="w-full px-4 py-3 bg-linear-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Responsive */}
      <section className="relative mt-14 md:mt-18 min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Hamdi Coffee background"
            fill
            priority
            className="object-cover object-center"
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto w-full">
          <div className="w-full lg:w-1/2">
            <div className="relative z-20 space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-[1.1] tracking-tight drop-shadow-lg">
                  THE BEST TEA<br />
                  <span className="text-amber-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">MALAB IYO CAANO.</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed max-w-lg font-medium drop-shadow-md">
                  Authentic Somali Qahwo, Signature Coffees, and Delightful Snacks Delivered to Your Door.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <a href="#" className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-linear-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-sm sm:text-base lg:text-lg rounded-lg shadow-xl hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center">
                    EXPLORE MENU
                  </a>
                  <a href="#" className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white text-black font-bold text-sm sm:text-base lg:text-lg rounded-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    ORDER ONLINE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section - Responsive */}
      <section className="bg-linear-to-b from-amber-50 to-amber-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-amber-100/0">
            <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-black uppercase tracking-wide mb-6 sm:mb-8 lg:mb-12">
              TRUSTED BY TEA LOVERS
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
              {/* First Badge */}
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-black/20 flex items-center justify-center mb-2 sm:mb-3">
                  <div className="text-center">
                    <div className="text-[8px] sm:text-[10px] lg:text-xs text-black/60 font-light mb-0.5 sm:mb-1">Premium</div>
                    <div className="text-xs sm:text-sm lg:text-base font-bold text-black italic transform -rotate-2" style={{ fontFamily: 'cursive' }}>
                      Business
                    </div>
                    <div className="text-[8px] sm:text-[10px] lg:text-xs text-black/60 font-light mt-0.5 sm:mt-1">Quality</div>
                  </div>
                </div>
              </div>

              {/* Fourth Badge */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full border-2 border-black flex items-center justify-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">X</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xs sm:text-sm lg:text-base font-bold text-black">kisnwsyanis</div>
                  <div className="text-[8px] sm:text-[10px] lg:text-xs text-black/60">ohe mid</div>
                </div>
              </div>

              {/* Customer Rating */}
              <div className="flex flex-col items-center sm:items-end gap-1 sm:gap-2 ml-0 sm:ml-auto">
                <div className="flex gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="#F4D03F"
                        stroke="#D4AF37"
                        strokeWidth="1"
                      />
                    </svg>
                  ))}
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-xs sm:text-sm font-semibold text-black">Rated 4.9/5 by</div>
                  <div className="text-xs sm:text-sm font-semibold text-black">1,000+ customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Responsive */}
      <section className="bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Leaves */}
        <div className="absolute left-0 bottom-0 translate-x-[-10px] sm:translate-x-[-20px] translate-y-[10px] sm:translate-y-[20px] opacity-30 sm:opacity-40 blur-sm">
          <svg width="40" height="50" viewBox="0 0 80 100" className="w-10 h-12 sm:w-16 sm:h-20 lg:w-20 lg:h-24">
            <path d="M40 10 Q25 25 30 45 Q35 65 40 75 Q45 85 50 90" stroke="#22c55e" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6"/>
            <path d="M30 35 Q15 50 20 70" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5"/>
            <path d="M50 35 Q65 50 60 70" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute right-0 bottom-0 translate-x-[10px] sm:translate-x-[20px] translate-y-[10px] sm:translate-y-[20px] opacity-30 sm:opacity-40 blur-sm">
          <svg width="40" height="50" viewBox="0 0 80 100" className="w-10 h-12 sm:w-16 sm:h-20 lg:w-20 lg:h-24">
            <path d="M40 10 Q55 25 50 45 Q45 65 40 75 Q35 85 30 90" stroke="#22c55e" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6"/>
            <path d="M50 35 Q65 50 60 70" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5"/>
            <path d="M30 35 Q15 50 20 70" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => {
              return (
                <div
                  key={t.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full border-2 border-amber-500 bg-white shadow-lg flex items-center justify-center">
                      <div className="w-[85%] h-[85%] rounded-full bg-linear-to-br from-amber-100 to-amber-200 flex items-center justify-center overflow-hidden">
                        <Image src={t.image} alt={t.name} width={100} height={100} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed max-w-xl font-medium mb-3 sm:mb-4 px-2">
                    “{t.quote}”
                  </p>

                  <p className="text-xs sm:text-sm font-semibold text-black">{t.name}</p>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-1">{t.source}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exotic Delights Section - Responsive */}
      <section className="bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-black uppercase tracking-wide mb-8 sm:mb-12 lg:mb-16">
            REFRESH WITH OUR EXOTIC DELIGHTS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Avocado Smoothie */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 sm:mb-6 w-full max-w-[200px] sm:max-w-xs mx-auto">
                <Image src="/img1.png" alt="Avocado Smoothie" width={200} height={200} className="w-full h-auto object-cover" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-black mb-2">Avocado Smoothie</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xs px-2">
                Avecade Smoothie, Avecade smoothe & valotts
              </p>
            </div>

            {/* Mango Lassi */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 sm:mb-6 w-full max-w-[200px] sm:max-w-xs mx-auto">
                <Image src="/img2.png" alt="Mango Lassi" width={200} height={200} className="w-full h-auto object-cover" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-black mb-2">Mango Lassi</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xs px-2">
                Avocado smoothle with Mango tass!
              </p>
            </div>

            {/* Spicy Mango */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 sm:mb-6 w-full max-w-[200px] sm:max-w-xs mx-auto">
                <Image src="/img3.png" alt="Spicy Mango" width={200} height={200} className="w-full h-auto object-cover" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-black mb-2">Spicy Mango</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xs px-2">
                Sanrbuus, Malewax & Spicy Mango 5 More
              </p>
            </div>

            {/* Mutiy & Cakes */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 sm:mb-6 w-full max-w-[200px] sm:max-w-xs mx-auto">
                <Image src="/img4.png" alt="Muity & Cakes" width={200} height={200} className="w-full h-auto object-cover" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-black mb-2">Muity & Cakes</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xs px-2">
                Sambous, Malswas, and Bur Macaan
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">Cake & More</p>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[url('/getstarted.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white uppercase tracking-wide mb-4 sm:mb-6 lg:mb-8">
            READY TO TASTE THE TRADITION?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Experience authentic Somali flavors delivered fresh to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a href="#" className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-linear-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-sm sm:text-base lg:text-lg rounded-lg shadow-xl hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105">
              ORDER NOW
            </a>
            <a href="#" className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white text-black font-bold text-sm sm:text-base lg:text-lg rounded-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
              VIEW MENU
            </a>
          </div>
        </div>
      </section>

   {/* Footer - Responsive with Lucide Icons */}
<footer className="bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
      {/* Brand Section */}
      <div>
        <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black sm:w-6 sm:h-6 mt-1">
            <path d="M12 2L10 8L14 10L12 2Z" fill="currentColor" opacity="0.8"/>
            <path d="M8 10L6 16L10 18L8 10Z" fill="currentColor" opacity="0.6"/>
            <path d="M16 10L14 16L18 18L16 10Z" fill="currentColor" opacity="0.6"/>
            <path d="M4 18L2 22L6 22L4 18Z" fill="currentColor" opacity="0.4"/>
            <path d="M20 18L18 22L22 22L20 18Z" fill="currentColor" opacity="0.4"/>
          </svg>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-1">Hamdi Coffee</h3>
            <p className="text-xs sm:text-sm text-gray-700 font-light">Malso tyo Caano</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="font-bold text-black mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h4>
        <ul className="space-y-2 sm:space-y-3 text-gray-800 text-xs sm:text-sm">
          <li className="flex items-center gap-2 sm:gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black sm:w-[18px] sm:h-[18px]">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="break-all">kissmecoco@me.com</span>
          </li>
          <li className="flex items-center gap-2 sm:gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black sm:w-[18px] sm:h-[18px]">
              <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08V3.08C5.16 3.68 4.68 4.16 4.08 4.16H2.08C2.08 8.28 5.72 11.92 9.84 11.92V9.92C9.84 9.32 10.32 8.84 10.92 8.84H13.92C14.52 8.84 15 9.32 15 9.92V12.92C15 13.52 14.52 14 13.92 14H10.92C10.32 14 9.84 13.52 9.84 12.92V11.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>+1 (555) 123-4567</span>
          </li>
        </ul>
      </div>

      {/* Social Media - Updated with Lucide Icons */}
      <div>
        <h4 className="font-bold text-black mb-3 sm:mb-4 text-sm sm:text-base">Social media</h4>
        <ul className="space-y-2 sm:space-y-3 text-gray-800 text-xs sm:text-sm">
          <li className="flex items-center gap-2 sm:gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
              <svg 
                width="10" 
                height="10" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-white sm:w-3 sm:h-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <a href="#" className="hover:text-amber-700 transition-colors duration-300">@hamdicoffee</a>
          </li>
          <li className="flex items-center gap-2 sm:gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
              <svg 
                width="10" 
                height="10" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-white sm:w-3 sm:h-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <a href="#" className="hover:text-amber-700 transition-colors duration-300">@hamdicoffee</a>
          </li>
          <li className="flex items-center gap-2 sm:gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
              <svg 
                width="10" 
                height="10" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-white sm:w-3 sm:h-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.4 9 4.5 0-1 .5-4 3-5 2.6 1.6 4 4 7 4z" />
              </svg>
            </div>
            <a href="#" className="hover:text-amber-700 transition-colors duration-300">@hamdicoffee</a>
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h4 className="font-bold text-black mb-3 sm:mb-4 text-sm sm:text-base">Newsletter sign up</h4>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Sign up..."
            className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white flex items-center justify-center hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-gray-300 pt-6 sm:pt-8 mt-6 sm:mt-8">
      <p className="text-center text-gray-700 text-xs sm:text-sm">
        © {new Date().getFullYear()} Hamdi Coffee. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}