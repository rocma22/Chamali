import { Star } from "lucide-react";

function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      text: "Beautiful atmosphere and absolutely delicious food. Everything felt carefully prepared.",
    },
    {
      name: "Youssef A.",
      text: "One of those places where the food, service, and atmosphere all come together perfectly.",
    },
    {
      name: "Emma R.",
      text: "The Moroccan dishes were incredible. We will definitely come back again.",
    },
  ];

  return (
    <section className="bg-stone-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            Guest Reviews
          </p>

          <h2 className="mt-4 font-serif text-4xl font-medium text-gray-950 sm:text-5xl">
            Loved by our guests.
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="mt-5 text-base leading-7 text-gray-600">
                "{review.text}"
              </p>

              <div className="mt-6 border-t border-gray-100 pt-5">
                <p className="text-sm font-semibold text-gray-950">
                  {review.name}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Verified guest
                </p>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Reviews;