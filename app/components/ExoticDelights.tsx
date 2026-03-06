import Image from "next/image";

export default function ExoticDelights() {
  return (
    <section className="bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 py-4 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto md:hidden">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[1.7rem] font-extrabold text-[#4f2f15] leading-tight">
            Pastries & Eats
          </h2>
          <span className="text-2xl text-[#7b4d25]" aria-hidden="true">
            &gt;
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="relative mb-2 h-24 rounded-xl overflow-hidden">
              <Image src="/menu/image (13).png" alt="Cheesecake" fill className="object-cover" />
            </div>
            <h3 className="text-sm font-semibold text-[#4f2f15] leading-tight">Cheesecake</h3>
            <p className="text-sm text-[#6d4728]">$4.00</p>
          </div>
          <div className="text-center">
            <div className="relative mb-2 h-24 rounded-xl overflow-hidden">
              <Image src="/menu/image (14).png" alt="Ham & Cheese Croissant Sandwich" fill className="object-cover" />
            </div>
            <h3 className="text-sm font-semibold text-[#4f2f15] leading-tight">Ham &amp; Cheese</h3>
            <p className="text-sm text-[#6d4728]">$7.00</p>
          </div>
          <div className="text-center">
            <div className="relative mb-2 h-24 rounded-xl overflow-hidden">
              <Image src="/menu/image (16).png" alt="Samosa" fill className="object-cover" />
            </div>
            <h3 className="text-sm font-semibold text-[#4f2f15] leading-tight">Samosa</h3>
            <p className="text-sm text-[#6d4728]">$5.00</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto hidden md:block">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-black uppercase tracking-wide mb-8 sm:mb-12 lg:mb-16">
          REFRESH WITH OUR EXOTIC DELIGHTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-4">
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
          <a href="#" className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">Cake & More</a>
        </div>
      </div>
    </section>
  );
}
