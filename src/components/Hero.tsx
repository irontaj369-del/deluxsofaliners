import { ArrowRight, MessageCircle, Star, Scissors, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import CurvedHeroCarousel from '@/components/CurvedHeroCarousel';

const WHATSAPP_LINK =
  'https://wa.me/919703701756?text=Hi%20Delux%20Sofa%20Liners%2C%20I%20saw%20your%20website%20and%20would%20like%20a%20free%20estimate.';

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Delux Sofa Liners Reelmark Studio Showcase"
      className="relative overflow-hidden bg-[#FAF8F5] pt-28 pb-16 lg:pt-36 lg:pb-24 text-[#1A1A1A]"
    >
      {/* Subtle Studio Radial Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,133,74,0.08),transparent_55%)]" />

      {/* Header & Typography Section */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Pill Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700 shadow-sm">
          <Scissors className="h-3.5 w-3.5 text-accent-600" />
          <span>Crafted in Hyderabad • 20+ Years Experience</span>
        </div>

        {/* Headline */}
        <h1 className="mt-5 text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] text-balance">
          Bespoke Sofas &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 via-accent-500 to-amber-700">
            Luxury Wall Panels
          </span>
        </h1>

        {/* Subline */}
        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed text-charcoal-500 font-normal">
          Handcrafted custom sofa sets, complete furniture restoration, and luxury upholstered bed backrests tailored to your room in Basheer Bagh, Hyderabad.
        </p>
      </div>

      {/* Reelmark-Style 3D Curved Arched Continuous Carousel */}
      <div className="relative mt-8 sm:mt-10">
        <CurvedHeroCarousel />
      </div>

      {/* Bottom CTA Centerpiece */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center mt-6 sm:mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            to="/gallery"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-accent-500 hover:bg-accent-600 px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:shadow-accent-500/40"
          >
            <span>Explore Showcase Gallery</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-charcoal-600/20 bg-white hover:bg-cream-100 px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#1A1A1A] shadow-sm transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366] fill-[#25D366]/20" />
            <span>WhatsApp Sofa Photo</span>
          </a>
        </div>

        {/* Trust Markers Bar */}
        <div className="mt-8 pt-6 border-t border-cream-200/80 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-charcoal-500">
          <div className="flex items-center gap-1.5 text-accent-600">
            {[0, 1, 2, 3, 4].map((star) => (
              <Star key={star} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-1 text-charcoal-700 font-bold">4.3★ Rating (Hyderabad)</span>
          </div>
          <div className="flex items-center gap-1.5 text-charcoal-600">
            <Award className="h-4 w-4 text-accent-500" />
            <span>Doorstep Measurement &amp; Sampling</span>
          </div>
          <div className="flex items-center gap-1.5 text-charcoal-600">
            <Clock className="h-4 w-4 text-accent-500" />
            <span>Open 7 Days • 10 AM to 10 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
