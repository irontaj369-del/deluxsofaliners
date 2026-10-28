import { useEffect, useState } from 'react';
import { Phone, Menu, X, Sofa, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Custom Sofas', href: '/new-sofas' },
  { label: 'Repair & Restoration', href: '/sofa-repair' },
  { label: 'Wall & Bed Panels', href: '/wall-bed-panels' },
  { label: 'Contact', href: '/contact' },
];

const PHONE_DISPLAY = '097037 01756';
const PHONE_HREF = 'tel:+919703701756';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-cream-200/80 py-0'
          : 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-black/5 py-1'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy-800 text-cream-50 shadow-md transition-transform duration-300 group-hover:scale-105">
              <Sofa className="h-5 w-5 text-accent-400" />
            </span>
            <span className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#1A1A1A]">
                Delux Sofa Liners
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent-600 -mt-0.5">
                Hyderabad Atelier
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-all ${
                    isActive
                      ? 'bg-navy-800 text-cream-50 shadow-xs'
                      : 'text-charcoal-600 hover:text-navy-900 hover:bg-black/5'
                  }`}
                >
                  {link.label}
                  {link.label === 'Gallery' && (
                    <span className="ml-1.5 inline-block text-[10px] font-bold text-accent-600 uppercase">
                      New
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-accent-500/20 transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              <span>Call: {PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl text-charcoal-700 hover:bg-black/5 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-white/98 backdrop-blur-xl border-t border-cream-200/80 shadow-xl ${
          open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="px-5 py-5 flex flex-col gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-navy-800 text-cream-50'
                    : 'text-charcoal-700 hover:bg-cream-100 hover:text-navy-900'
                }`}
              >
                <span>{link.label}</span>
                {link.label === 'Gallery' && (
                  <span className="flex items-center gap-1 text-xs text-accent-500 font-bold">
                    <Sparkles className="h-3.5 w-3.5" />
                    Showcase
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 mt-2 border-t border-cream-200">
            <a
              href={PHONE_HREF}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-5 py-3.5 text-sm font-bold text-white shadow-md transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Studio: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
