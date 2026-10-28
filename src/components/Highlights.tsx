import { Hammer, ShieldCheck, Truck, Clock } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Hammer,
    title: 'Experienced Craftsmanship',
    desc: 'Decades of hands-on upholstery & repair expertise.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Materials',
    desc: 'Durable fabrics and components built to last.',
  },
  {
    icon: Truck,
    title: 'Doorstep Consultation',
    desc: 'On-site visits & pickup options across Hyderabad.',
  },
  {
    icon: Clock,
    title: 'Open 7 Days a Week',
    desc: 'Mon–Sun, 10:00 AM – 8:00 PM, always available.',
  },
];

export default function Highlights() {
  return (
    <section className="relative py-16 md:py-20 bg-navy-700 text-cream-50">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,rgba(200,155,90,0.6),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HIGHLIGHTS.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="group flex flex-col gap-3 p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-cream-50">{h.title}</h3>
                <p className="text-sm text-cream-200/80 leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
