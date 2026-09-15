import { ArrowUpRight, Camera, Share2 } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block">
              <div className="font-serif text-3xl font-semibold">
                Maison Délice
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-amber-400">
                Restaurant · Kenitra
              </div>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
              A modern dining experience inspired by authentic flavors,
              seasonal ingredients, and the art of bringing people together.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-400 hover:text-amber-400"
              >
                <Camera size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-400 hover:text-amber-400"
              >
                <Share2 size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#home"
                className="text-sm text-white/50 transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#menu"
                className="text-sm text-white/50 transition hover:text-white"
              >
                Menu
              </a>

              <a
                href="#about"
                className="text-sm text-white/50 transition hover:text-white"
              >
                Our Story
              </a>

              <a
                href="#gallery"
                className="text-sm text-white/50 transition hover:text-white"
              >
                Gallery
              </a>

              <a
                href="#contact"
                className="text-sm text-white/50 transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Contact
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/50">
              <p>Kenitra, Morocco</p>
              <p>+212 6 00 00 00 00</p>
              <p>hello@maisondelice.ma</p>
            </div>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Reserve a table
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
          <p>© 2026 Maison Délice. All rights reserved.</p>

          <p>Designed & developed with React + Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;