"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full px-4 sm:px-6 lg:px-8 py-0 sm:py-2 bg-white/80 backdrop-blur-md border-b border-amber-100/50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Hamdi Coffee Logo"
            width={210}
            height={60}
            className="h-16 sm:h-20 md:h-18 w-auto object-contain border border-black"
            priority
          />
        </Link>

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
          <Link
            href="/"
            className="text-black font-medium hover:text-amber-700 transition-colors duration-200 text-sm lg:text-base"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-black font-medium hover:text-amber-700 transition-colors duration-200 text-sm lg:text-base"
          >
            About
          </Link>
          <Link
            href="/food"
            className="text-black font-medium hover:text-amber-700 transition-colors duration-200 text-sm lg:text-base"
          >
            Food
          </Link>
          <Link
            href="/drinks"
            className="text-black font-medium hover:text-amber-700 transition-colors duration-200 text-sm lg:text-base"
          >
            Drinks
          </Link>
          <Link
            href="/gallery"
            className="text-black font-medium hover:text-amber-700 transition-colors duration-200 text-sm lg:text-base"
          >
            Gallery
          </Link>
          <Link
            href="/location"
            className="text-black font-medium hover:text-amber-700 transition-colors duration-200 text-sm lg:text-base"
          >
            Location
          </Link>
          <Link
            href="/contact"
            className="text-black font-medium hover:text-amber-700 transition-colors duration-200 text-sm lg:text-base"
          >
            Contact
          </Link>
        
          <a href="/food" className="px-4 lg:px-6 py-2 lg:py-2.5 bg-linear-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm lg:text-base whitespace-nowrap">
            Order Online
          </a>
        </div>
      </nav>

      {/* Mobile Menu - Fixed version */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md border-b border-amber-100/50 shadow-lg z-50 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-black font-medium hover:text-amber-700 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black font-medium hover:text-amber-700 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/location"
              className="text-black font-medium hover:text-amber-700 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Location
            </Link>
            <Link
              href="/contact"
              className="text-black font-medium hover:text-amber-700 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/food"
              className="text-black font-medium hover:text-amber-700 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Food
            </Link>
            <Link
              href="/drinks"
              className="text-black font-medium hover:text-amber-700 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Drinks
            </Link>
            <Link
              href="/gallery"
              className="text-black font-medium hover:text-amber-700 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <button className="w-full px-4 py-3 bg-linear-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
              Order Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
