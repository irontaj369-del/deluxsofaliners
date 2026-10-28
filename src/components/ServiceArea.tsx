import { Truck, MapPin, CheckCircle2 } from 'lucide-react';

const NEIGHBORHOODS = [
  'Basheer Bagh',
  'Himayatnagar',
  'Abids',
  'Banjara Hills',
  'Jubilee Hills',
  'Somajiguda',
  'Begumpet',
  'Nampally',
  'King Koti',
  'Hyderguda',
  'Liberty',
];

const DIRECTIONS_LINK = 'https://maps.app.goo.gl/ehAZFbnVfVntAzmY8';

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 md:py-28 bg-cream-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy + list */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
              <MapPin className="h-3.5 w-3.5" />
              Where We Serve
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-700">
              Free Pickup & Drop-off Across Central Hyderabad
            </h2>
            <p className="mt-4 text-lg text-charcoal-500 leading-relaxed">
              Based in Basheer Bagh, we offer complimentary pickup and drop-off for
              upholstery jobs across these neighborhoods. Too far? Call us — we often
              travel further for larger projects.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {NEIGHBORHOODS.map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-cream-200 px-3.5 py-2 text-sm font-medium text-navy-700 shadow-sm hover:ring-navy-600/30 transition-colors"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-500" />
                  {n}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-600 hover:bg-navy-700 px-6 py-3.5 text-base font-semibold text-cream-50 shadow-lg shadow-navy-600/20 transition-all hover:-translate-y-0.5"
              >
                <Truck className="h-5 w-5 text-accent-400" />
                Book a Free Pickup
              </a>
              <a
                href={DIRECTIONS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-cream-100 border-2 border-navy-600/15 hover:border-navy-600/30 px-6 py-3.5 text-base font-semibold text-navy-700 transition-all"
              >
                <MapPin className="h-5 w-5 text-accent-500" />
                Check Our Location
              </a>
            </div>
          </div>

          {/* Visual map panel */}
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-cream-200 shadow-xl bg-navy-700">
            <iframe
              title="Delux Sofa Liners service area map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.42%2C17.36%2C78.54%2C17.45&layer=mapnik&marker=17.3986%2C78.4784"
              className="h-[22rem] sm:h-[26rem] w-full grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-700 via-navy-700/80 to-transparent p-5">
              <p className="text-sm font-bold text-cream-50">Central Hyderabad Service Zone</p>
              <p className="text-xs text-cream-200/80 mt-0.5">
                Free pickup & drop-off within the highlighted area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
