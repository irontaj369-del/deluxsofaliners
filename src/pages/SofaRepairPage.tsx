import { CheckCircle2, Clock3, Hammer, Truck } from 'lucide-react';
import BeforeAfter from '@/components/BeforeAfter';
import ContactForm from '@/components/ContactForm';

const SERVICES = [
  { icon: Hammer, title: 'Frame & spring repair', text: 'We strengthen broken frames, replace worn springs, and restore the support your sofa was designed to provide.' },
  { icon: Clock3, title: 'Foam & cushion renewal', text: 'Sagging seats become supportive again with carefully selected high-density foam and tailored cushion filling.' },
  { icon: Truck, title: 'Pickup, repair, delivery', text: 'Book a doorstep assessment and we coordinate pickup and delivery across central Hyderabad.' },
];

export default function SofaRepairPage() {
  return <>
    <section className="bg-navy-800 pt-32 text-cream-50 md:pt-40"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28"><div><span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">Sofa repair & restoration</span><h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">Keep the sofa you love. Make it feel new again.</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-200">From a broken spring to a completely new cover, our restoration team brings old furniture back with honest advice and careful workmanship.</p><a href="#contact" className="mt-8 inline-flex rounded-full bg-accent-500 px-6 py-3.5 font-bold text-white hover:bg-accent-600">Get a restoration estimate</a></div><img src="/assets/aistudio/40e23448-2079-4a24-b486-deecc0d2c916_cb3a0b54.jfif" alt="Restored custom modular sectional sofa" className="h-[24rem] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10" /></div></section>
    <section className="bg-cream-50 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 md:grid-cols-3">{SERVICES.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-cream-200"><Icon className="h-8 w-8 text-accent-500" /><h2 className="mt-5 text-xl font-bold text-navy-700">{title}</h2><p className="mt-3 text-sm leading-relaxed text-charcoal-500">{text}</p><CheckCircle2 className="mt-5 h-5 w-5 text-accent-500" /></article>)}</div></div></section>
    <BeforeAfter />
    <ContactForm />
  </>;
}
