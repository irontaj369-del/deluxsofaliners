import { Ruler, Wrench, Layers, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Ruler,
    title: 'Custom Sofa Liners & Bespoke Suites',
    desc: 'Tailor-made curved suites and modular sets designed to your exact dimensions and interior style — measured, cut, and stitched to precision.',
    points: ['Exact-measure fitting', 'Curved & L-shape designs', 'Italian velvet & leatherette'],
    img: '/assets/aistudio/b7115d4b-837f-4bbc-b1bf-776bd8736c90_6c04a049.jfif',
  },
  {
    icon: Wrench,
    title: 'Sofa Repair & Restoration',
    desc: 'Fixing sagging frames, broken springs, and worn-out cushioning to restore the comfort and structure of your furniture.',
    points: ['Frame & spring repair', 'Foam & cushion replacement', 'Structural reinforcement'],
    img: '/assets/aistudio/40e23448-2079-4a24-b486-deecc0d2c916_cb3a0b54.jfif',
  },
  {
    icon: Layers,
    title: 'Wall Paneling & Headboard Upholstery',
    desc: 'Full-height acoustic and channel-quilted bed backrest wall panels with ambient lighting integration and premium fabrics.',
    points: ['Floor-to-ceiling panels', 'Acoustic sound-dampening', 'Custom channel & grid tufting'],
    img: '/assets/aistudio/a7078ca0-b580-48a8-9d21-1b3fdcb3f058_8eb7dee7.jfif',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-cream-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-700">
            Services Crafted for Every Sofa
          </h2>
          <p className="mt-4 text-lg text-charcoal-500 leading-relaxed">
            From bespoke liners to complete restoration, every job is handled in-house by
            experienced craftsmen using durable, premium materials.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-cream-200 shadow-sm hover:shadow-xl hover:shadow-navy-700/10 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-700/50 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 backdrop-blur text-accent-600 shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold text-navy-700">{s.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-charcoal-500">
                    {s.desc}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-charcoal-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-accent-600 transition-colors"
                  >
                    Request this service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
