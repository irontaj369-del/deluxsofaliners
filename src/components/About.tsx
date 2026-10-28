import { Scissors, Award, Users, MapPin } from 'lucide-react';

const STATS = [
  { icon: Award, value: '4.3★', label: 'Google Rating' },
  { icon: Users, value: '1,000+', label: 'Happy Customers' },
  { icon: Scissors, value: '20+', label: 'Years Experience' },
  { icon: MapPin, value: '7 Days', label: 'Open Weekly' },
];

const ABOUT_IMG_1 =
  '/assets/aistudio/b7115d4b-837f-4bbc-b1bf-776bd8736c90_6c04a049.jfif';
const ABOUT_IMG_2 =
  '/assets/aistudio/40e23448-2079-4a24-b486-deecc0d2c916_cb3a0b54.jfif';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-cream-200">
                <img
                  src={ABOUT_IMG_1}
                  alt="Artisan sewing leather upholstery"
                  className="h-[20rem] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-cream-200 mt-10">
                <img
                  src={ABOUT_IMG_2}
                  alt="Craftsman making a leather accessory"
                  className="h-[18rem] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl bg-navy-700 text-cream-50 shadow-xl px-6 py-3 text-center">
              <p className="text-xs uppercase tracking-wider text-cream-200">Our Promise</p>
              <p className="text-sm font-bold mt-0.5">Quality you can feel</p>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-700">
              A Local Studio Built on Craft & Trust
            </h2>
            <p className="mt-5 text-lg text-charcoal-500 leading-relaxed">
              Delux Sofa Liners is a family-run upholstery studio in Basheer Bagh,
              Hyderabad. For over two decades we've helped homes across the city restore,
              refresh, and reimagine their sofas — combining traditional tailoring
              techniques with modern, durable materials.
            </p>
            <p className="mt-4 text-base text-charcoal-500 leading-relaxed">
              Whether it's a custom-fit liner, a full re-upholstery in your favourite
              fabric, or a structural repair that brings comfort back, every job is
              treated as a one-off — measured, stitched, and finished by hand.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white ring-1 ring-cream-200 p-4 text-center shadow-sm"
                  >
                    <Icon className="h-6 w-6 mx-auto text-accent-500" />
                    <p className="mt-2 text-xl font-extrabold text-navy-700">{s.value}</p>
                    <p className="mt-0.5 text-xs text-charcoal-500">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
