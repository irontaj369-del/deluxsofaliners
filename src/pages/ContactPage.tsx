import { MessageCircle, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Location from '@/components/Location';

const WHATSAPP_LINK = 'https://wa.me/919703701756?text=Send%20photo%20for%20fast%20estimate';

export default function ContactPage() {
  return <>
    <section className="bg-navy-800 pt-32 text-cream-50 md:pt-40"><div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24"><span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">Contact & visit</span><h1 className="mt-4 max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">Tell us what you want to transform.</h1><p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-cream-200">Visit our Basheer Bagh studio, call for a quick answer, or send a sofa photo on WhatsApp for a fast estimate.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="tel:+919703701756" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 font-bold text-white hover:bg-accent-600"><Phone className="h-4 w-4" />Call 097037 01756</a><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white hover:bg-white/20"><MessageCircle className="h-4 w-4 text-[#25D366]" />WhatsApp a photo</a></div></div></section>
    <Location />
    <ContactForm />
  </>;
}
