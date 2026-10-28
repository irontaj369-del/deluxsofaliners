import { Armchair, CheckCircle2, Ruler, Sofa } from 'lucide-react';
import CostEstimator from '@/components/CostEstimator';

const DESIGNS = [
  { title: 'Curved Terracotta Velvet Suite', image: '/assets/aistudio/b7115d4b-837f-4bbc-b1bf-776bd8736c90_6c04a049.jfif', text: 'Bespoke curved silhouette with diamond-stitched backrests, brass fluted accents, and matching teal wing armchairs.' },
  { title: 'Modular Biscuit-Tufted L-Sectional', image: '/assets/aistudio/40e23448-2079-4a24-b486-deecc0d2c916_cb3a0b54.jfif', text: 'Low-profile modern comfort with deep grid quilting, tailored corner lounge chaise, and durable soft fabric.' },
  { title: 'Architectural Bed & Wall Paneling Suite', image: '/assets/aistudio/a7078ca0-b580-48a8-9d21-1b3fdcb3f058_8eb7dee7.jfif', text: 'Floor-to-ceiling vertical channel fluting with warm integrated ambient lighting and acoustic padding.' },
];

export default function CustomSofasPage() {
  return (
    <>
      <PageIntro eyebrow="Custom new sofas" title="Furniture made around your room, not the other way around." copy="Choose the silhouette, comfort, and finish. We build bespoke sofa sets from scratch in Basheer Bagh with sturdy wooden frames, premium upholstery, and high-density foam." image={DESIGNS[0].image} />
      <section className="bg-cream-50 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 md:grid-cols-3">{DESIGNS.map((design) => <article key={design.title} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-cream-200"><img src={design.image} alt={design.title} className="h-56 w-full object-cover" loading="lazy" /><div className="p-6"><h2 className="text-xl font-bold text-navy-700">{design.title}</h2><p className="mt-3 text-sm leading-relaxed text-charcoal-500">{design.text}</p></div></article>)}</div></div></section>
      <section className="bg-navy-700 py-20 text-cream-50"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">The Delux build</span><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">A better sofa starts beneath the fabric.</h2><p className="mt-5 leading-relaxed text-cream-200">Our team helps you choose the right dimensions and comfort level before construction begins, then finishes every piece with precise tailoring.</p></div><ul className="grid gap-4 sm:grid-cols-2">{['Solid wooden frame construction', 'Italian fabric and leatherette options', 'High-density foam comfort guarantee', 'Measured for your exact room'].map((item) => <li key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent-400" />{item}</li>)}</ul></div></section>
      <CostEstimator />
    </>
  );
}

function PageIntro({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy: string; image: string }) {
  return <section className="relative overflow-hidden bg-navy-800 pt-32 text-cream-50 md:pt-40"><div className="absolute inset-0"><img src={image} alt="" className="h-full w-full object-cover opacity-35" /><div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-800/90 to-navy-800/35" /></div><div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28"><div><span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">{eyebrow}</span><h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">{title}</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-200">{copy}</p><a href="/contact#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 font-bold text-white hover:bg-accent-600">Book a design consultation <Ruler className="h-4 w-4" /></a></div><div className="hidden lg:flex justify-end"><div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"><Sofa className="h-10 w-10 text-accent-400" /><p className="mt-8 text-2xl font-bold">Built for your home.</p><p className="mt-2 max-w-xs text-sm leading-relaxed text-cream-200">Personal dimensions, comfort preferences, and a finish you will love living with.</p></div></div></div></section>;
}
