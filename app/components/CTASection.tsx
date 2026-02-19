export default function CTASection() {
  return (
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
  );
}
