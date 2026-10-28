import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_LINK =
  'https://wa.me/919703701756?text=Send%20photo%20for%20fast%20estimate';
const TOOLTIP = 'Send Sofa Photo for Instant Quote';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / expandable card */}
      <div
        className={[
          'origin-bottom-right transition-all duration-300',
          open
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 translate-y-2 pointer-events-none',
        ].join(' ')}
      >
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-3 w-64">
          <div className="flex items-start gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-navy-700">Chat with us on WhatsApp</p>
              <p className="mt-0.5 text-xs text-charcoal-500 leading-relaxed">
                {TOOLTIP}
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-charcoal-500 hover:text-navy-700 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1FB855] px-4 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Start Chat
          </a>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1FB855] shadow-lg shadow-[#25D366]/30 transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        {open ? (
          <X className="h-6 w-6 text-white relative" />
        ) : (
          <MessageCircle className="h-7 w-7 text-white relative" />
        )}
        {!open && (
          <span className="absolute -top-9 right-0 whitespace-nowrap rounded-lg bg-navy-700 text-cream-50 text-xs font-medium px-2.5 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {TOOLTIP}
          </span>
        )}
      </button>
    </div>
  );
}
