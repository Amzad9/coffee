import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b relative z-10 from-amber-50 via-amber-50 to-amber-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div>
            <div className="mb-3 sm:mb-4">
              <Image
                src="/logo.png"
                alt="Hamdi Coffee Logo"
                width={200}
                height={100}
                className="h-auto w-48 sm:w-56 md:w-64 object-contain"
              />
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
                <span className="break-all">bulqass@yahoo.com</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black sm:w-[18px] sm:h-[18px]">
                  <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08V3.08C5.16 3.68 4.68 4.16 4.08 4.16H2.08C2.08 8.28 5.72 11.92 9.84 11.92V9.92C9.84 9.32 10.32 8.84 10.92 8.84H13.92C14.52 8.84 15 9.32 15 9.92V12.92C15 13.52 14.52 14 13.92 14H10.92C10.32 14 9.84 13.52 9.84 12.92V11.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>(612) 259-8411</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black sm:w-[18px] sm:h-[18px] mt-0.5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs sm:text-sm">2910 Pleasant Ave Fl 1<br />Minneapolis, MN 55408, US</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
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

          {/* Hours */}
          <div>
            <h4 className="font-bold text-black mb-3 sm:mb-4 text-sm sm:text-base">Hours</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-800 text-xs sm:text-sm">
          
              <li className="flex justify-between">
                <span className="font-semibold text-black">Sunday:</span>
                <span>6:30 am - 11:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-black">Monday:</span>
                <span>6:30 am - 11:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-black">Tuesday:</span>
                <span>6:30 am - 10:30 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-black">Wednesday:</span>
                <span>6:30 am - 11:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-black">Thursday:</span>
                <span>6:30 am - 10:30 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-black">Friday:</span>
                <span>7:00 am - 11:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-black">Saturday:</span>
                <span>6:30 am - 11:00 pm</span>
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
  );
}
