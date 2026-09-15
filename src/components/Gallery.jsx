function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
      alt: "Restaurant dish",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
      alt: "Moroccan food",
    },
    {
      src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=85",
      alt: "Restaurant table",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
      alt: "Restaurant interior",
    },
    {
      src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=85",
      alt: "Restaurant atmosphere",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-gray-950 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Gallery
            </p>

            <h2 className="mt-4 font-serif text-4xl font-medium text-white sm:text-5xl">
              A taste of the atmosphere.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50">
            Step inside Maison Délice and discover the details behind every
            memorable dining experience.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[180px] md:grid-cols-4">

          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl ${image.className || ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;