import { MapPin, Clock, Phone, ExternalLink, CheckCircle2, Navigation } from 'lucide-react';

const ADDRESS =
  'No. 3-6-66/7, Shaheed Yar Jung Rd, Avanti Nagar, Basheer Bagh, Hyderabad, Telangana 500029';
const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Delux+Sofa+Liners+Basheer+Bagh+Hyderabad';
const DIRECTIONS_LINK = 'https://maps.app.goo.gl/ehAZFbnVfVntAzmY8';
const PHONE_DISPLAY = '097037 01756';
const PHONE_HREF = 'tel:+919703701756';

// Basheer Bagh, Hyderabad coordinates
const LAT = 17.3986;
const LNG = 78.4784;

const HOURS = [
  { day: 'Monday', time: '10:00 AM – 8:00 PM' },
  { day: 'Tuesday', time: '10:00 AM – 8:00 PM' },
  { day: 'Wednesday', time: '10:00 AM – 8:00 PM' },
  { day: 'Thursday', time: '10:00 AM – 8:00 PM' },
  { day: 'Friday', time: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 8:00 PM' },
];

export default function Location() {
  return (
    <section id="location" className="py-20 md:py-28 bg-cream-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
            Visit Our Studio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-700">
            Location & Hours
          </h2>
          <p className="mt-4 text-lg text-charcoal-500 leading-relaxed">
            Conveniently located in Basheer Bagh, central Hyderabad. Open every day of
            the week — walk in or book a doorstep consultation.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* Left: details */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-white ring-1 ring-cream-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-700">Our Address</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-charcoal-600">
                    {ADDRESS}
                  </p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-accent-600 transition-colors"
                  >
                    Open in Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white ring-1 ring-cream-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-700">Phone</h3>
                  <a
                    href={PHONE_HREF}
                    className="mt-1.5 block text-[15px] font-semibold text-charcoal-600 hover:text-accent-600 transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white ring-1 ring-cream-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-navy-700">Opening Hours</h3>
                  <ul className="mt-3 divide-y divide-cream-200">
                    {HOURS.map((h) => (
                      <li
                        key={h.day}
                        className="flex items-center justify-between py-2 text-sm"
                      >
                        <span className="text-charcoal-600">{h.day}</span>
                        <span className="flex items-center gap-1.5 font-medium text-navy-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent-500" />
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-cream-200 shadow-sm min-h-[22rem] lg:flex-1">
              <iframe
                title="Delux Sofa Liners location map"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${LNG - 0.01}%2C${LAT - 0.008}%2C${LNG + 0.01}%2C${LAT + 0.008}&layer=mapnik&marker=${LAT}%2C${LNG}`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={DIRECTIONS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-600 hover:bg-navy-700 px-6 py-3.5 text-base font-semibold text-cream-50 shadow-lg shadow-navy-600/20 transition-all hover:-translate-y-0.5"
            >
              <Navigation className="h-5 w-5 text-accent-400" />
              Open Directions in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
