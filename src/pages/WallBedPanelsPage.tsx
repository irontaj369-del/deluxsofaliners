import { CheckCircle2, Layers3, Ruler, Volume2 } from 'lucide-react';
import SwatchExplorer from '@/components/SwatchExplorer';

const FEATURES = [
  { icon: Layers3, title: 'Fabric & leatherette padding', text: 'Select a finish that brings softness, depth, and a polished custom look to your wall.' },
  { icon: Volume2, title: 'Acoustic accent panels', text: 'Add visual calm and a warmer sound profile to bedrooms, studios, and living spaces.' },
  { icon: Ruler, title: 'Tailored to any wall', text: 'Every panel is measured to your wall dimensions. Panels only — never a bed frame.' },
];

export default function WallBedPanelsPage() {
  return <>
    <section className="relative overflow-hidden bg-navy-800 pt-32 text-cream-50 md:pt-40"><div className="absolute inset-0"><img src="/assets/aistudio/a7078ca0-b580-48a8-9d21-1b3fdcb3f058_8eb7dee7.jfif" alt="Floor-to-ceiling upholstered wall panel and headboard" className="h-full w-full object-cover opacity-45" /><div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-800/85 to-navy-800/40" /></div><div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"><div className="max-w-3xl"><span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">Wall & bed backrest paneling</span><h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">Give your wall a softer, more luxurious point of view.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-200">Custom upholstered wall padding, acoustic interior panels, and tufted bed headboard backrests — designed to your wall, your palette, and your room.</p><a href="/contact#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 font-bold text-white hover:bg-accent-600">Plan your wall panel <Ruler className="h-4 w-4" /></a></div></div></section>
    <section className="bg-cream-50 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 md:grid-cols-3">{FEATURES.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-cream-200"><Icon className="h-8 w-8 text-accent-500" /><h2 className="mt-5 text-xl font-bold text-navy-700">{title}</h2><p className="mt-3 text-sm leading-relaxed text-charcoal-500">{text}</p><div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-600"><CheckCircle2 className="h-4 w-4" /> Custom measured</div></article>)}</div></div></section>
    <SwatchExplorer />
  </>;
}
