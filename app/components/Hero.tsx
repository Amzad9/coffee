import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mt-14 md:mt-18 overflow-hidden">
      <div className="relative md:hidden min-h-[300px] md:min-h-[520px] flex items-center justify-center px-4 pt-8 pb-14">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Hamdi Coffee background"
            fill
            priority
            className="object-cover object-center"
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

       

        <div className="relative z-10 text-center text-white max-w-sm mx-auto mt-0 py-8 md:py-0 md:mt-18">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide mb-4">
            THE BEST TEA
            <span className="block">MALAB IYO CAANO.</span>
          </h1>
          <p className="mt-3 text-base font-medium text-white/90">
            Authentic Somali Qahwo, Signature Coffees, and Delightful Snacks Delivered to Your Door.
          </p>
          <a
            href="#"
            className="mt-5 inline-flex min-w-[210px] justify-center rounded-full bg-[#9a5f2a] px-8 py-3 text-lg font-semibold text-white shadow-lg"
          >
            Order Now
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg
            viewBox="0 0 390 72"
            preserveAspectRatio="none"
            className="block h-16 w-full"
            aria-hidden="true"
          >
            <path d="M0 14 Q195 54 390 14 L390 72 L0 72 Z" fill="#fffbeb" />
          </svg>
        </div>
      </div>

      <div className="hidden md:flex min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-30rem)] items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
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
      </div>
    </section>
  );
}
