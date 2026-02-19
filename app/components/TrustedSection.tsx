export default function TrustedSection() {
  return (
    <section className="bg-linear-to-b from-amber-50 to-amber-100 py-8 px-4 sm:px-6 lg:px-8">
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
  );
}
