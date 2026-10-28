import { ArrowRight, Armchair, Hammer, PanelsTopLeft } from 'lucide-react';

const PILLARS = [
  {
    icon: Armchair,
    number: '01',
    title: 'Custom New Sofa Sets',
    href: '/new-sofas',
    description: 'Made-to-order curved suites, sectionals, and statement seating, built around your room and preferred fabric.',
    points: ['Curved & L-shape luxury designs', 'Solid wood frame construction', 'Italian velvet & leatherette', 'Multi-density high-resilience foam'],
    image: '/assets/aistudio/40e23448-2079-4a24-b486-deecc0d2c916_cb3a0b54.jfif',
  },
  {
    icon: Hammer,
    number: '02',
    title: 'Old Sofa Repair & Re-Upholstery',
    href: '/sofa-repair',
    description: 'Thoughtful restoration that brings back structure, comfort, and a fresh finish without replacing what still works.',
    points: ['Sagging cushion renewal', 'Broken spring & frame repair', 'Modular sectional rebuilding', 'Doorstep pickup & delivery in Hyderabad'],
    image: '/assets/aistudio/b7115d4b-837f-4bbc-b1bf-776bd8736c90.jfif',
  },
  {
    icon: PanelsTopLeft,
    number: '03',
    title: 'Wall & Bed Backrest Paneling',
    href: '/wall-bed-panels',
    description: 'Tailored upholstered surfaces that add warmth, acoustic comfort, and a refined focal point to your room.',
    points: ['Channel-fluted & geometric padding', 'Acoustic interior accent panels', 'Backlit bed headboard backrests', 'Custom measured for any wall'],
    image: '/assets/aistudio/a7078ca0-b580-48a8-9d21-1b3fdcb3f058_8eb7dee7.jfif',
  },
];

export default function CoreOfferings() {
  return (
    <section id="services" className="bg-cream-100/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">Our three specialties</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-700 sm:text-4xl">Crafted for the way you live</h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-500">From a brand-new sofa made around your space to a cherished piece restored with care, every project starts with a conversation.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.number} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-cream-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-700/10">
                <div className="relative h-60 sm:h-64 overflow-hidden bg-navy-900">
                  <img src={pillar.image} alt={pillar.title} className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800/75 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy-700 shadow-sm">{pillar.number}</span>
                  <Icon className="absolute bottom-5 left-5 h-7 w-7 text-accent-400 drop-shadow" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-700">{pillar.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal-500">{pillar.description}</p>
                  <ul className="mt-5 space-y-2">
                    {pillar.points.map((point) => <li key={point} className="flex items-center gap-2 text-sm text-charcoal-600"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" />{point}</li>)}
                  </ul>
                  <a href={pillar.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-600 transition-colors hover:text-accent-600">Explore this service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
