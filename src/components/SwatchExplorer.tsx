import { useState } from 'react';
import { Palette, Check, ShieldCheck, Droplets, Heart } from 'lucide-react';

type Swatch = {
  id: string;
  name: string;
  tagline: string;
  features: { icon: typeof Heart; text: string }[];
  color: string;
  texture: string; // pexels image for swatch thumbnail
};

const SWATCHES: Swatch[] = [
  {
    id: 'velvet',
    name: 'Microfiber Velvet',
    tagline: 'Pet-friendly & soft',
    color: '#2F4B6B',
    texture:
      'https://images.pexels.com/photos/10410095/pexels-photo-10410095.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    features: [
      { icon: Heart, text: 'Soft to the touch' },
      { icon: ShieldCheck, text: 'Pet-friendly & durable' },
    ],
  },
  {
    id: 'leatherette',
    name: 'Premium PU Leatherette',
    tagline: 'Waterproof & luxury finish',
    color: '#6B4A2B',
    texture:
      'https://images.pexels.com/photos/12905114/pexels-photo-12905114.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    features: [
      { icon: Droplets, text: 'Waterproof & wipe-clean' },
      { icon: ShieldCheck, text: 'Luxury leather look' },
    ],
  },
  {
    id: 'jacquard',
    name: 'Jacquard & Printed Canvas',
    tagline: 'Washable & durable',
    color: '#A89B7C',
    texture:
      'https://images.pexels.com/photos/11255287/pexels-photo-11255287.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    features: [
      { icon: Droplets, text: 'Machine washable covers' },
      { icon: ShieldCheck, text: 'Fade-resistant prints' },
    ],
  },
];

const SOFA_IMG =
  '/assets/aistudio/b7115d4b-837f-4bbc-b1bf-776bd8736c90_6c04a049.jfif';

export default function SwatchExplorer() {
  const [active, setActive] = useState(SWATCHES[0].id);
  const current = SWATCHES.find((s) => s.id === active)!;

  return (
    <section id="swatches" className="py-20 md:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
            <Palette className="h-3.5 w-3.5" />
            Fabric & Material Explorer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-700">
            Visualize Your Fabric on a Real Sofa
          </h2>
          <p className="mt-4 text-lg text-charcoal-500 leading-relaxed">
            Tap a swatch to preview how its color and texture would drape across a sofa.
            All fabrics are available in multiple shades — ask us for the full library.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8 items-start">
          {/* Swatch list */}
          <div className="lg:col-span-2 space-y-3">
            {SWATCHES.map((s) => {
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={[
                    'w-full flex items-center gap-4 rounded-2xl p-4 text-left transition-all border',
                    isActive
                      ? 'border-navy-600 bg-white ring-1 ring-navy-600 shadow-md'
                      : 'border-cream-200 bg-white/60 hover:border-navy-600/40 hover:bg-white',
                  ].join(' ')}
                >
                  <span
                    className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden ring-1 ring-black/10"
                    style={{ backgroundColor: s.color }}
                  >
                    <img
                      src={s.texture}
                      alt={s.name}
                      className="h-full w-full object-cover opacity-90 mix-blend-multiply"
                      loading="lazy"
                    />
                  </span>
                  <span className="flex-1">
                    <span className="block text-base font-bold text-navy-700">{s.name}</span>
                    <span className="block text-sm text-charcoal-500">{s.tagline}</span>
                    <span className="mt-1.5 flex flex-wrap gap-2">
                      {s.features.map((f) => {
                        const Icon = f.icon;
                        return (
                          <span
                            key={f.text}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-charcoal-600 bg-cream-100 rounded-full px-2 py-0.5"
                          >
                            <Icon className="h-3 w-3 text-accent-500" />
                            {f.text}
                          </span>
                        );
                      })}
                    </span>
                  </span>
                  {isActive && (
                    <Check className="h-5 w-5 text-navy-600 shrink-0" />
                  )}
                </button>
              );
            })}

            <p className="pt-2 text-sm text-charcoal-500">
              Over 200+ fabrics, shades, and textures available in-store. Book a free
              doorstep sample visit to feel them before you decide.
            </p>
          </div>

          {/* Sofa preview */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-cream-200 shadow-xl">
              <img
                src={SOFA_IMG}
                alt="Sofa preview"
                className="h-[24rem] sm:h-[30rem] w-full object-cover"
                loading="lazy"
              />
              {/* Color overlay simulating fabric drape */}
              <div
                className="absolute inset-0 transition-colors duration-500 mix-blend-multiply"
                style={{ backgroundColor: current.color, opacity: 0.42 }}
              />
              <div
                className="absolute inset-0 opacity-30 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${current.texture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  mixBlendMode: 'overlay',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-700/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-5 md:p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-cream-200">
                  Live Preview
                </p>
                <p className="mt-1 text-2xl font-extrabold text-cream-50">
                  {current.name}
                </p>
                <p className="text-sm text-cream-200/90">{current.tagline}</p>

                <div className="mt-3 flex items-center gap-2">
                  <span
                    className="h-6 w-6 rounded-full ring-2 ring-white/70"
                    style={{ backgroundColor: current.color }}
                  />
                  <span className="text-xs font-medium text-cream-100">
                    Approximate drape color
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
