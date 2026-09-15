import { ArrowRight, MapPin, Star } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gray-950"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/30" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-gray-950 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="w-full max-w-3xl">

          {/* Location */}
          <div className="mb-7 flex items-center gap-2 text-sm text-amber-300">
            <MapPin size={16} />

            <span className="tracking-wide">
              Kenitra · Morocco
            </span>
          </div>

          {/* Rating */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={15}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            <span className="text-sm text-white/70">
              4.9 · 250+ reviews
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Where every
            <span className="block text-amber-400">
              dish tells a story.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            A modern dining experience inspired by authentic flavors,
            seasonal ingredients, and the art of bringing people together.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-500 px-7 py-4 text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/20"
            >
              Discover our menu

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Reserve a table
            </a>
          </div>

          {/* Trust */}
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs uppercase tracking-[0.18em] text-white/50 sm:text-sm">
            <span>Fresh ingredients</span>
            <span>•</span>
            <span>Authentic flavors</span>
            <span>•</span>
            <span>Open daily</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/40 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <div className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}

export default Hero;