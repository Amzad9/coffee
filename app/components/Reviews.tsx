"use client";

import Link from "next/link";

export default function Reviews() {
  const reviews = [
    {
      name: "Mohaa Y.",
      source: "Google",
      text: "There's nothing like a good cup of Hamdi coffee☕ to get you going in the morning.",
    },
    {
      name: "Yussuf T.",
      source: "Google",
      text: "Best Somali tea 🫖 and American coffee ☕️ I really like this place and also enjoy their canbulo,Samusa,cakes and drinks🥰 the Business owners and their Employees are friendly people.",
    },
    {
      name: "Abdikafi I.",
      source: "Google",
      text: "Maansha allah everything is amazing service food. I'm so happy and I'm glad to see everyone same way keep doing it. What are you doing? Thank you guys.",
    },
  ];

  return (
    <section className="bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase tracking-wide mb-4">
            CUSTOMER REVIEWS
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            See what our customers are saying about us
          </p>

        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-2">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 48 48" 
                  fill="none"
                >
                  <defs>
                    <path id="google_coloured_a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                  </defs>
                  <clipPath id="google_coloured_b">
                    <use xlinkHref="#google_coloured_a" overflow="visible"></use>
                  </clipPath>
                  <path clipPath="url(#google_coloured_b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
                  <path clipPath="url(#google_coloured_b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                  <path clipPath="url(#google_coloured_b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                  <path clipPath="url(#google_coloured_b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
                </svg>
                <p className="text-sm font-semibold text-black">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
        <Link
            href="https://www.postcard.inc/places/hamdi-coffee-llc-minneapolis-AbEpUKsl7VK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-amber-500 to-amber-600 text-white font-bold text-sm sm:text-base rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Reviews on Postcard
          </Link>
        </div>
      </div>
    </section>
  );
}