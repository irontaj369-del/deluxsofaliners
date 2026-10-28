import { ArrowRight, Phone } from 'lucide-react';

export default function MobileToolbar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-cream-200 bg-cream-50/95 p-3 shadow-[0_-8px_24px_rgba(16,23,40,0.12)] backdrop-blur-md md:hidden">
      <a href="tel:+919703701756" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy-600 px-4 py-3 text-sm font-bold text-white"><Phone className="h-4 w-4 text-accent-400" />Call 097037 01756</a>
      <a href="/contact#contact" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-500 px-4 py-3 text-sm font-bold text-white"><ArrowRight className="h-4 w-4" />Get Estimate</a>
    </div>
  );
}
