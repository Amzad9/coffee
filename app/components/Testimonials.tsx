import Image from "next/image";

interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
                  "{t.quote}"
                </p>

                <p className="text-xs sm:text-sm font-semibold text-black">{t.name}</p>
                <p className="text-[10px] sm:text-xs text-gray-600 mt-1">{t.source}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
