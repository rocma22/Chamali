import { ArrowUpRight, Check } from "lucide-react";

function About() {
  const values = [
    "Fresh seasonal ingredients",
    "Authentic cooking techniques",
    "Warm and welcoming atmosphere",
  ];

  return (
    <section
      id="about"
      className="overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Images */}
          <div className="relative">

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
                alt="Restaurant dining experience"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Small image */}
            <div className="absolute -bottom-8 -right-3 w-40 overflow-hidden rounded-2xl border-8 border-white shadow-xl sm:-right-8 sm:w-52">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=85"
                alt="Restaurant interior"
                className="aspect-square w-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute left-4 top-6 rounded-2xl bg-gray-950 px-5 py-4 text-white shadow-xl sm:left-6">
              <p className="font-serif text-3xl font-semibold text-amber-400">
                12+
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">
                Years of passion
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-4">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
              Our Story
            </p>

            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              More than a meal.
              <span className="block text-gray-400">
                It's an experience.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-gray-600">
              <p>
                Maison Délice was created around a simple idea: great food
                brings people together.
              </p>

              <p>
                Our kitchen combines traditional flavors with modern
                techniques, creating dishes that feel familiar while still
                offering something unexpected.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 space-y-4">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <Check
                      size={15}
                      className="text-amber-700"
                    />
                  </div>

                  <span className="text-sm font-medium text-gray-800">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Link */}
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 border-b border-gray-900 pb-1 text-sm font-semibold text-gray-950"
            >
              Discover our story

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;