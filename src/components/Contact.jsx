import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            Visit Us
          </p>

          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Your table is waiting.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Whether you're planning a special dinner or simply looking for a
            memorable meal, we'd love to welcome you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left side */}
          <div className="rounded-[2rem] bg-gray-950 p-7 text-white sm:p-9">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Maison Délice
              </p>

              <h3 className="mt-4 font-serif text-3xl font-medium">
                Come and experience it yourself.
              </h3>
            </div>

            <div className="mt-10 space-y-7">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={19} className="text-amber-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Address</p>
                  <p className="mt-1 text-sm leading-6 text-white/50">
                    Avenue Mohammed V
                    <br />
                    Kenitra, Morocco
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone size={18} className="text-amber-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <a
                    href="tel:+212600000000"
                    className="mt-1 block text-sm text-white/50 transition hover:text-white"
                  >
                    +212 6 00 00 00 00
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Clock3 size={18} className="text-amber-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Opening Hours</p>
                  <p className="mt-1 text-sm leading-6 text-white/50">
                    Monday – Sunday
                    <br />
                    12:00 PM – 11:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noreferrer"
              className="mt-10 flex items-center justify-between rounded-2xl bg-amber-500 px-5 py-4 text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={19} />
                Reserve via WhatsApp
              </span>

              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Right side */}
          <div className="overflow-hidden rounded-[2rem] bg-stone-100">
            {/* Map */}
            <div className="relative h-[300px] sm:h-[380px]">
              <iframe
                title="Maison Délice location"
                src="https://www.google.com/maps?q=Kenitra,Morocco&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Reservation form */}
            <div className="p-7 sm:p-9">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                    Reservations
                  </p>

                  <h3 className="mt-2 font-serif text-3xl font-medium text-gray-950">
                    Book your table
                  </h3>
                </div>

                <p className="text-sm text-gray-500">
                  We'll confirm your request shortly.
                </p>
              </div>

              <form
                className="mt-8 grid gap-4 sm:grid-cols-2"
                onSubmit={(event) => event.preventDefault()}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-800"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-800"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+212 6..."
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-medium text-gray-800"
                  >
                    Date
                  </label>

                  <input
                    id="date"
                    type="date"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="mb-2 block text-sm font-medium text-gray-800"
                  >
                    Guests
                  </label>

                  <select
                    id="guests"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                    defaultValue="2"
                  >
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                    <option value="6">6 guests</option>
                    <option value="7">7 guests</option>
                    <option value="8">8+ guests</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-800"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Any special request?"
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl"
                  >
                    Request a reservation

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;