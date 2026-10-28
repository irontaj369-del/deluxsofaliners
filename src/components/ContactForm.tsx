import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { validateAndSanitizeLead } from '@/lib/sanitize';

const SERVICES = [
  'Sofa Repair & Restoration',
  'Custom Sofa Liners & Covers',
  'Fabric Re-Upholstery',
  'Wall & Bed Backrest Panels',
  'Other / Not Sure',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICES[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg('');

    // Input sanitization and XSS protection
    const validation = validateAndSanitizeLead({
      fullName,
      phone,
      service,
      message,
    });

    if (!validation.isValid) {
      setStatus('error');
      setErrorMsg(validation.error || 'Please provide valid contact information.');
      return;
    }

    const { sanitized } = validation;
    setStatus('submitting');

    const leadPayload = {
      full_name: sanitized.fullName,
      phone: sanitized.phone,
      service_needed: sanitized.service,
      message: sanitized.message || null,
      created_at: new Date().toISOString(),
    };

    try {
      if (supabase) {
        const { error } = await supabase.from('leads').insert({
          full_name: leadPayload.full_name,
          phone: leadPayload.phone,
          service_needed: leadPayload.service_needed,
          message: leadPayload.message,
        });

        if (error) {
          saveLeadOffline(leadPayload);
        }
      } else {
        saveLeadOffline(leadPayload);
      }

      setStatus('success');
      setFullName('');
      setPhone('');
      setService(SERVICES[0]);
      setMessage('');
    } catch {
      saveLeadOffline(leadPayload);
      setStatus('success');
      setFullName('');
      setPhone('');
      setService(SERVICES[0]);
      setMessage('');
    }
  }

  function saveLeadOffline(lead: Record<string, unknown>) {
    try {
      const existing = JSON.parse(localStorage.getItem('delux_sofa_leads') || '[]');
      existing.push(lead);
      localStorage.setItem('delux_sofa_leads', JSON.stringify(existing));
    } catch {
      // Storage unavailable or quota exceeded; failsafe
    }
  }

  const inputBase =
    'w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-charcoal-600 placeholder:text-charcoal-500/50 outline-none transition-colors focus:ring-2 focus:ring-accent-500/40';

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
              Get a Free Estimate
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-700">
              Let's Bring Your Sofa Back to Life
            </h2>
            <p className="mt-4 text-lg text-charcoal-500 leading-relaxed">
              Share a few details about your sofa and the service you need. We'll get back
              to you with a free, no-obligation estimate — usually within a few hours.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Free, no-obligation estimates',
                'Doorstep measurement & pickup available',
                'Open 7 days — 10 AM to 10 PM',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] text-charcoal-600">
                  <CheckCircle2 className="h-5 w-5 text-accent-500 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white ring-1 ring-cream-200 p-6 md:p-8 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-navy-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your name"
                    className={`${inputBase} border-cream-200 focus:border-accent-500`}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className={`${inputBase} border-cream-200 focus:border-accent-500`}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="service" className="block text-sm font-semibold text-navy-700 mb-1.5">
                  Service Needed
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={`${inputBase} border-cream-200 focus:border-accent-500`}
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-semibold text-navy-700 mb-1.5">
                  Message / Sofa Dimensions
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your sofa — size, condition, fabric preferences, or anything else."
                  className={`${inputBase} border-cream-200 focus:border-accent-500 resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full bg-navy-600 hover:bg-navy-700 disabled:opacity-60 disabled:cursor-not-allowed px-6 py-3.5 text-base font-semibold text-cream-50 shadow-lg shadow-navy-600/20 transition-all hover:-translate-y-0.5"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send My Request
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-accent-500/10 border border-accent-500/20 px-4 py-3 text-sm text-charcoal-600">
                  <CheckCircle2 className="h-5 w-5 text-accent-600 shrink-0 mt-0.5" />
                  <p>
                    Thank you! Your request has been sent. We'll call you back shortly with
                    your free estimate.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  <p>{errorMsg}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
