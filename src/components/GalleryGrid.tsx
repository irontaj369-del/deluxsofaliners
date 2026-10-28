import { useState } from 'react';
import { Sparkles, MapPin, MessageCircle, ZoomIn, CheckCircle2 } from 'lucide-react';
import { PROJECTS, type ProjectItem, getWhatsAppEstimateLink } from '@/data/projects';
import ImageLightboxModal from '@/components/ImageLightboxModal';

type FilterType = 'all' | 'custom' | 'repair' | 'panels';

export default function GalleryGrid() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);

  const filteredItems =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((item) => item.catId === filter);

  const filterTabs: { id: FilterType; label: string; count: number }[] = [
    { id: 'all', label: 'All Works', count: PROJECTS.length },
    { id: 'custom', label: 'Custom New Sofas', count: PROJECTS.filter((p) => p.catId === 'custom').length },
    { id: 'repair', label: 'Repair & Re-upholstery', count: PROJECTS.filter((p) => p.catId === 'repair').length },
    { id: 'panels', label: 'Bed & Wall Panels', count: PROJECTS.filter((p) => p.catId === 'panels').length },
  ];

  return (
    <div className="w-full">
      {/* Filter Tabs Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
        {filterTabs.map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-navy-800 text-cream-50 shadow-md shadow-navy-900/15 scale-102'
                  : 'bg-white text-charcoal-600 ring-1 ring-cream-200 hover:bg-cream-100 hover:text-navy-900'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-mono ${
                  isActive ? 'bg-white/20 text-cream-100' : 'bg-cream-100 text-charcoal-500'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Masonry-Style Responsive Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-cream-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
          >
            {/* Card Image Container with Click to Lightbox */}
            <div
              onClick={() => setSelectedItem(item)}
              className="relative aspect-[4/3] overflow-hidden bg-navy-900 cursor-zoom-in"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Service Category Tag */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-navy-800 shadow-md">
                <Sparkles className="h-3.5 w-3.5 text-accent-500" />
                <span>{item.category}</span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                <ZoomIn className="h-4 w-4" />
              </div>

              {/* Bottom In-image Location Tag */}
              <div className="absolute bottom-3 left-4 z-10 flex items-center gap-1.5 text-xs text-cream-100/90 drop-shadow">
                <MapPin className="h-3.5 w-3.5 text-accent-400" />
                <span>{item.location}</span>
              </div>
            </div>

            {/* Card Content & Action Button */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold text-navy-800 tracking-tight leading-snug">
                {item.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-charcoal-500 line-clamp-2">
                {item.description}
              </p>

              {/* Specs Pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.specs.map((spec) => (
                  <span
                    key={spec.label}
                    className="inline-flex items-center gap-1 rounded-lg bg-cream-100/80 px-2.5 py-1 text-[11px] font-medium text-charcoal-600"
                  >
                    <CheckCircle2 className="h-3 w-3 text-accent-500" />
                    <span>{spec.value}</span>
                  </span>
                ))}
              </div>

              {/* Quick Action Button: WhatsApp */}
              <div className="mt-6 pt-4 border-t border-cream-200/60 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="text-xs font-semibold text-charcoal-500 hover:text-navy-900 transition-colors"
                >
                  View Full Details
                </button>

                <a
                  href={getWhatsAppEstimateLink(item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-800 hover:bg-navy-900 px-4 py-2 text-xs font-bold text-cream-50 shadow-sm transition-all hover:scale-102 hover:shadow"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                  <span>Request Similar Design</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Lightbox Preview Modal with Zoom & Pan */}
      {selectedItem && (
        <ImageLightboxModal
          project={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
