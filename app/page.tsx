"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedSection from "./components/TrustedSection";
import Testimonials from "./components/Testimonials";
import ExoticDelights from "./components/ExoticDelights";
import VideoSection from "./components/VideoSection";
import Reviews from "./components/Reviews";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  const testimonials = [
    {
      name: "Ahmed M.",
      quote:
        "Best Somali Shaah and Samosa's I've had in MN. Definitely a local hidden gem. Very affordable and quick service! Do yourself a favor and give them a try!",
      image: "/test1.png",
    },
    {
      name: "Yussuf T.",
      quote:
        "Best Somali tea and American coffee I really like this place and also enjoy their canbulo,Samusa,cakes and drinks the Business owners and their Employees are friendly people.",
      image: "/test2.png",
    },
    {
      name: "Amina H.",
      quote:
        "Maansha allah everything is amazing service food. I'm so happy and I'm glad to see everyone same way keep doing it. What are you doing? Thank you guys.",
      image: "/test3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 relative overflow-x-hidden">
      {/* <Header /> */}
      <Hero />
      <TrustedSection />
      <VideoSection />
      <Testimonials testimonials={testimonials} />
      <ExoticDelights />
      <Reviews />
      <CTASection />
      {/* <Footer /> */}
    </div>
  );
}