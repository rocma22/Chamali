import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { menuItems } from "../data/menu";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Starters",
    "Main Course",
    "Moroccan",
    "Dessert",
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="bg-stone-50 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            Our Menu
          </p>

          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Crafted with passion
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Discover a selection of dishes prepared with carefully chosen
            ingredients and inspired by flavors from around the world.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 sm:justify-center">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gray-950 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-950"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Menu grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-900 backdrop-blur">
                  {item.category}
                </span>

                {/* Arrow */}
                <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-gray-950 opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl font-semibold text-gray-950">
                    {item.name}
                  </h3>

                  <span className="shrink-0 text-lg font-semibold text-amber-600">
                    {item.price} DH
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button className="rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:border-gray-950 hover:bg-gray-950 hover:text-white">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}

export default Menu;