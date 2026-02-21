export default function VideoSection() {
  return (
    <section className="bg-linear-to-b from-amber-50 via-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase tracking-wide mb-4">
            WATCH OUR STORY
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/8WyyKCNIs-s"
            title="Hamdi Coffee Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
