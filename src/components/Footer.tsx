import { Sofa, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Custom Sofas', href: '/new-sofas' },
  { label: 'Repair & Restoration', href: '/sofa-repair' },
  { label: 'Wall & Bed Panels', href: '/wall-bed-panels' },
  { label: 'Contact & Visit', href: '/contact' },
];

const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Delux+Sofa+Liners+Basheer+Bagh+Hyderabad';
const PHONE_HREF = 'tel:+919703701756';

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-cream-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500 text-white">
                <Sofa className="h-5 w-5" />
              </span>
              <div className="leading-none">
                <p className="text-lg font-extrabold text-cream-50">Delux Sofa Liners</p>
                <p className="text-[11px] text-cream-200/70 uppercase tracking-wide mt-1">
                  Basheer Bagh · Hyderabad
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-cream-200/80 max-w-sm">
              Premier sofa repair, custom liners, and re-upholstery in the heart of
              Hyderabad. Bringing old furniture back to life with craftsmanship and care.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-accent-500 text-cream-200 hover:text-white transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="h-4.5 w-4.5" />
              </a>
              <a
                href={PHONE_HREF}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-accent-500 text-cream-200 hover:text-white transition-colors"
                aria-label="Call"
              >
                <Phone className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-accent-500 text-cream-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-accent-500 text-cream-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cream-50">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-200/80 hover:text-accent-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cream-50">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-accent-400 shrink-0 mt-0.5" />
                <span>
                  No. 3-6-66/7, Shaheed Yar Jung Rd, Avanti Nagar, Basheer Bagh,
                  Hyderabad, Telangana 500029
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-accent-400 shrink-0" />
                <a href={PHONE_HREF} className="hover:text-accent-400 transition-colors">
                  097037 01756
                </a>
              </li>
              <li>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent-400 hover:text-accent-500 font-semibold transition-colors"
                >
                  View Google Maps Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream-200/60">
            © {new Date().getFullYear()} Delux Sofa Liners. All rights reserved.
          </p>
          <p className="text-xs text-cream-200/60">
            Crafted with care in Hyderabad.
          </p>
        </div>
      </div>
    </footer>
  );
}
