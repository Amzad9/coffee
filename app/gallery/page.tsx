"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images from /public/gallary folder
  const galleryImages = [
    { id: 1, src: "/gallary/image1.png", alt: "Hamdi Coffee Gallery Image 1" },
    { id: 2, src: "/gallary/image2.jpg", alt: "Hamdi Coffee Gallery Image 2" },
    { id: 3, src: "/gallary/image3.jpg", alt: "Hamdi Coffee Gallery Image 3" },
    { id: 4, src: "/gallary/image4.jpg", alt: "Hamdi Coffee Gallery Image 4" },
    { id: 5, src: "/gallary/image5.png", alt: "Hamdi Coffee Gallery Image 5" },
    { id: 6, src: "/gallary/image6.jpg", alt: "Hamdi Coffee Gallery Image 6" },
    { id: 7, src: "/gallary/image7.jpg", alt: "Hamdi Coffee Gallery Image 7" },
    { id: 8, src: "/gallary/image8.jpg", alt: "Hamdi Coffee Gallery Image 8" },
    { id: 9, src: "/gallary/image9.jpg", alt: "Hamdi Coffee Gallery Image 9" },
    { id: 10, src: "/gallary/image10.jpg", alt: "Hamdi Coffee Gallery Image 10" },
    { id: 11, src: "/gallary/image11.jpg", alt: "Hamdi Coffee Gallery Image 11" },
    { id: 12, src: "/gallary/image12.png", alt: "Hamdi Coffee Gallery Image 12" },
    { id: 13, src: "/gallary/image13.jpg", alt: "Hamdi Coffee Gallery Image 13" },
    { id: 14, src: "/gallary/image14.png", alt: "Hamdi Coffee Gallery Image 14" },
    { id: 15, src: "/gallary/image15.png", alt: "Hamdi Coffee Gallery Image 15" },
    { id: 16, src: "/menu/image (17).png", alt: "Hamdi Coffee Gallery Image 16" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 relative overflow-x-hidden">
      <Header />
      
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-wide mb-4">
              OUR GALLERY
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Take a look at our cozy space, delicious food, and warm atmosphere
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={galleryImages[selectedImage - 1].src}
              alt={galleryImages[selectedImage - 1].alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}

    </div>
  );
}
