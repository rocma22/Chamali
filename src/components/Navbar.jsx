import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 py-3 shadow-lg backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          className={`group flex items-center gap-2 transition-colors duration-300 ${
            scrolled ? "text-gray-950" : "text-white"
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/60 bg-amber-400/10">
            <span className="font-serif text-lg text-amber-400">
              M
            </span>
          </div>

          <div className="leading-none">
            <div className="font-serif text-xl font-semibold tracking-wide">
              Maison
            </div>

            <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-amber-500">
              Délice
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/10 px-2 py-2 backdrop-blur-md lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100 hover:text-amber-600"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl"
          >
            Reserve a Table
            <ChevronDown
              size={15}
              className="-rotate-90 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full border p-2.5 transition-all duration-300 lg:hidden ${
            scrolled
              ? "border-gray-200 bg-white text-gray-900"
              : "border-white/20 bg-white/10 text-white backdrop-blur-md"
          }`}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-3 rounded-3xl border border-white/10 bg-gray-950/95 p-5 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
                style={{
                  transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                }}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-2xl bg-amber-500 px-5 py-3.5 text-center text-sm font-semibold text-gray-950 transition hover:bg-amber-400"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;