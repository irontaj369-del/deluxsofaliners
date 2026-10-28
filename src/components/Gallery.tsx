import { useState } from 'react';
import { Sparkles, ZoomIn, X, MapPin, CheckCircle2 } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'custom' | 'sectional' | 'paneling';
  categoryLabel: string;
  location: string;
  description: string;
  span: string;
  isRealClientUpload: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hero-curved-sofa',
    src: '/assets/aistudio/b7115d4b-837f-4bbc-b1bf-776bd8736c90_6c04a049.jfif',
    alt: 'Custom curved luxury terracotta velvet sofa set with gold metallic trims and matching teal armchairs',
    title: 'Curved Luxury Living Suite in Terracotta Velvet',
    category: 'custom',
    categoryLabel: 'Custom Sofa Suite',
    location: 'Basheer Bagh / Hyderabad Client',
    description: 'Diamond-tufted curved backrest, fluted brass accents, Italian velvet upholstery and matching teal wing armchairs.',
    span: 'sm:col-span-2 sm:row-span-2 min-h-[22rem]',
    isRealClientUpload: true,
  },
  {
    id: 'sectional-lounge',
    src: '/assets/aistudio/40e23448-2079-4a24-b486-deecc0d2c916_cb3a0b54.jfif',
    alt: 'Grey biscuit-tufted modular L-shaped sectional lounge sofa in living room',
    title: 'Biscuit-Tufted Modular L-Sectional',
    category: 'sectional',
    categoryLabel: 'Modular L-Sectional',
    location: 'Hyderabad Apartment',
    description: 'Deep grid tufting with multi-layer high-density foam, hardwood internal frame, and soft-touch upholstery.',
    span: 'sm:col-span-2 sm:row-span-1 min-h-[14rem]',
    isRealClientUpload: true,
  },
  {
    id: 'wall-bed-panel',
    src: '/assets/aistudio/a7078ca0-b580-48a8-9d21-1b3fdcb3f058_8eb7dee7.jfif',
    alt: 'Floor-to-ceiling upholstered wall panel with channel fluting and ambient illumination',
    title: 'Floor-to-Ceiling Fluted Acoustic Headboard Panel',
    category: 'paneling',
    categoryLabel: 'Wall & Headboard Panel',
    location: 'Master Bedroom Suite',
    description: 'Custom acoustic fabric channels, integrated warm halo backlighting, and flush platform bed integration.',
    span: 'sm:col-span-2 sm:row-span-1 min-h-[14rem]',
    isRealClientUpload: true,
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'custom' | 'sectional' | 'paneling'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
              Real Client Work
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-700">
              Delux Sofa Liners Project Portfolio
            </h2>
            <p className="mt-3 text-lg text-charcoal-500 leading-relaxed">
              Every photograph is a genuine handcrafted set or wall panel delivered and installed for homes in Hyderabad.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'custom', label: 'Custom Sofas' },
              { id: 'sectional', label: 'L-Sectionals' },
              { id: 'paneling', label: 'Wall Panels' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-navy-700 text-cream-50 shadow-md shadow-navy-700/20'
                    : 'bg-white text-charcoal-600 ring-1 ring-cream-200 hover:bg-cream-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative overflow-hidden rounded-3xl bg-navy-800 ring-1 ring-cream-200 shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-700/15 ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Pill: Real Client Project */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-navy-700 shadow-md">
                <Sparkles className="h-3 w-3 text-accent-500" />
                <span>{item.categoryLabel}</span>
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-navy-900/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="h-4 w-4" />
              </div>

              {/* Bottom Caption */}
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-cream-50">
                <div className="flex items-center gap-1.5 text-xs text-accent-400 font-medium mb-1">
                  <MapPin className="h-3 w-3" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-cream-200/80 line-clamp-2">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Real Craftsmanship Callout */}
        <div className="mt-10 rounded-2xl bg-white p-5 ring-1 ring-cream-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-navy-700">
                Have a design from Pinterest or Instagram?
              </p>
              <p className="text-xs text-charcoal-500">
                Send us a photo on WhatsApp. We can recreate any sofa silhouette or wall paneling layout.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/919703701756?text=Hi%2C%20I%20have%20a%20sofa%20design%20photo%20I%20would%20like%20custom%20built."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-navy-600 hover:bg-navy-700 px-5 py-2.5 text-xs font-bold text-cream-50 transition-colors"
          >
            Share Your Reference Photo →
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full overflow-hidden rounded-3xl bg-navy-900 border border-white/15 shadow-2xl text-cream-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-navy-800/80 text-white hover:bg-navy-700 transition-colors border border-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-400">
                <span>{selectedPhoto.categoryLabel}</span>
                <span>•</span>
                <span className="text-cream-200">{selectedPhoto.location}</span>
              </div>
              <h3 className="mt-1 text-2xl font-extrabold text-white">
                {selectedPhoto.title}
              </h3>
              <p className="mt-2 text-sm text-cream-200/90 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
