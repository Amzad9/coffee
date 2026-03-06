export default function TrustedSection() {
  return (
    <section className="bg-linear-to-b from-amber-50 to-amber-100 pb-4 pt-0 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto md:hidden">
        <div className="rounded-2xl text-[#4f2f15]">
          <h2 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase tracking-wide mb-4">
            About Hamdi Coffee
          </h2>
          <div className="text-[0.89rem] leading-[1.5] text-[#5a3a20]">
            <img
              src="/about.png"
              alt="Hamdi coffee cups"
              className="float-left mr-3 mb-2 w-[45%] h-auto rounded-[999px] object-cover border border-[#6b3f1f]/20"
            />
            Welcome to Hamdi Coffee, where family and tradition blend into every cup. From rich coffee and warm Somali tea to savory bites and sweets, we serve comfort made fresh every day.            Every coffee break here feels special. Sit back, relax, and enjoy a warm cup with us.

            <div className="clear-both"></div>
          </div>
        
        
        </div>
      </div>
      

      <div className="max-w-7xl mx-auto hidden md:block">
        <div className="bg-white/10 rounded-xl sm:rounded-2xl  border border-amber-100/0">
        <div className="text-center flex items-center gap-2 md:justify-center sm:text-right">
                <a href="https://www.postcard.inc/places/hamdi-coffee-llc-minneapolis-AbEpUKsl7VK" target="_blank" rel="noopener noreferrer">
                  <img src="/features.png" alt="Google Logo" className="max-w-[200px]"  />
                </a>
                <img src="/map.png" alt="Google Logo"  />
                {/* <div className="text-xs sm:text-sm font-semibold text-black">Rated 4.9/5 by</div>
                <div className="text-xs sm:text-sm font-semibold text-black">1,000+ customers</div> */}
              </div>
        </div>
      </div>
    </section>
  );
}
