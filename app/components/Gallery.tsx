"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder for 17 images - these would be replaced with actual images from the postcard link
  const galleryImages = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/image-${i + 1}.jpg`, // These would be actual image paths
    alt: `Hamdi Coffee Gallery Image ${i + 1}`,
  }));

  return (
    <section className="bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase tracking-wide mb-4">
            OUR GALLERY
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Take a look at our cozy space, delicious food, and warm atmosphere
          </p>
        </div>

        {/* Gallery Toolbar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 text-sm sm:text-base">
            All Photos
          </button>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-lg border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 text-sm sm:text-base">
            Interior
          </button>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-lg border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 text-sm sm:text-base">
            Food & Drinks
          </button>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-lg border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 text-sm sm:text-base">
            Events
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
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
    </section>
  );
}
