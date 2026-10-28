import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ramesh K.',
    detail: 'Banjara Hills',
    rating: 5,
    text: 'Got my 8-year-old sofa re-upholstered and it looks brand new. The team was punctual, professional, and the fabric quality is excellent. Highly recommend.',
  },
  {
    name: 'Sunita P.',
    detail: 'Kukatpally',
    rating: 4,
    text: 'Custom sofa liners fit perfectly. They came home to measure and delivered on time. Very happy with the finish and the price was reasonable.',
  },
  {
    name: 'Asif M.',
    detail: 'Basheer Bagh',
    rating: 5,
    text: 'Excellent repair work on a sagging sofa. Springs were replaced and cushioning redone — comfort is back. Friendly staff and quick turnaround.',
  },
  {
    name: 'Priya S.',
    detail: 'Himayat Nagar',
    rating: 4,
    text: 'Good service and a huge range of fabrics to choose from. They patiently helped me pick the right leatherette for my living room. Will use again.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 text-accent-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? 'fill-current' : 'fill-current opacity-25'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
              Customer Reviews
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-700">
              Trusted by Hyderabad Homeowners
            </h2>
            <p className="mt-4 text-lg text-charcoal-500 leading-relaxed">
              Backed by a 4.3-star Google rating and a steady stream of positive local
              feedback for quality workmanship and prompt service.
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-white ring-1 ring-cream-200 px-5 py-4 shadow-sm">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-navy-700 leading-none">4.3</p>
              <div className="mt-1.5"><Stars count={4} /></div>
            </div>
            <div className="h-12 w-px bg-cream-200" />
            <p className="text-sm text-charcoal-500 max-w-[10rem]">
              Google-rated local business loved by the community.
            </p>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="relative flex flex-col gap-4 rounded-2xl bg-white ring-1 ring-cream-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="h-8 w-8 text-accent-400/40" />
              <blockquote className="text-[15px] leading-relaxed text-charcoal-600 flex-1">
                "{r.text}"
              </blockquote>
              <figcaption className="flex items-center justify-between border-t border-cream-200 pt-4">
                <div>
                  <p className="text-sm font-bold text-navy-700">{r.name}</p>
                  <p className="text-xs text-charcoal-500">{r.detail}</p>
                </div>
                <Stars count={r.rating} />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
