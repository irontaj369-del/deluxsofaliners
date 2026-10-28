import { Scissors, Phone, MessageCircle } from 'lucide-react';
import GalleryGrid from '@/components/GalleryGrid';

const PHONE_HREF = 'tel:+919703701756';
const WHATSAPP_LINK =
  'https://wa.me/919703701756?text=Hi%20Delux%20Sofa%20Liners%2C%20I%20am%20browsing%20your%20showcase%20gallery%20and%20would%20like%20a%20quote.';

export default function GalleryPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-28 pb-24 text-[#1A1A1A]">
      {/* Top Header / Intro Banner */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700 shadow-sm mb-4">
          <Scissors className="h-3.5 w-3.5 text-accent-600" />
          <span>Real Deliveries Across Hyderabad</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A]">
          Showcase Project Gallery
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-charcoal-500 leading-relaxed">
          Every photo below is an authentic custom build, reupholstery restoration, or upholstered wall panel crafted by our artisans in Basheer Bagh.
        </p>
      </div>

      {/* Main Filterable Gallery Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GalleryGrid />
      </div>

      {/* Fast Consultation Callout Banner */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-3xl bg-navy-800 p-8 sm:p-12 text-cream-50 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-400">
              Personalized Consultation
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              Have a Custom Vision in Mind?
            </h2>
            <p className="mt-2 text-sm text-cream-200/80 max-w-lg">
              Send us your room dimensions or any reference picture from Pinterest/Instagram. We provide free doorstep fabric sampling across Hyderabad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1FB855] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Photo</span>
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all"
            >
              <Phone className="h-4 w-4" />
              <span>Call Studio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
