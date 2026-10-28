import { useMemo, useState } from 'react';
import { Calculator, ArrowRight, Sparkles, Info } from 'lucide-react';

type SofaType = {
  id: string;
  label: string;
  base: number; // base labor cost in INR
};

type ServiceType = {
  id: string;
  label: string;
  multiplier: number;
};

type MaterialTier = {
  id: string;
  label: string;
  desc: string;
  perSeat: number; // material cost per seat in INR
  swatch: string;
};

const SOFA_TYPES: SofaType[] = [
  { id: 'single', label: 'Single Chair', base: 800 },
  { id: 'three', label: '3-Seater Standard', base: 2500 },
  { id: 'five', label: '5-Seater L-Shape', base: 4500 },
  { id: 'recliner', label: 'Recliner', base: 3000 },
  { id: 'dining', label: 'Dining Chairs (Set of 6)', base: 2000 },
];

const SEATS: Record<string, number> = {
  single: 1,
  three: 3,
  five: 5,
  recliner: 2,
  dining: 6,
};

const SERVICES: ServiceType[] = [
  { id: 'reupholstery', label: 'Full Fabric Re-Upholstery', multiplier: 1.0 },
  { id: 'cover', label: 'Custom Fitted Cover / Liner', multiplier: 0.6 },
  { id: 'foam', label: 'Foam Cushion Replacement', multiplier: 0.45 },
  { id: 'frame', label: 'Structural Frame Repair', multiplier: 0.7 },
];

const MATERIALS: MaterialTier[] = [
  {
    id: 'cotton',
    label: 'Durable Cotton Canvas',
    desc: 'Washable & budget-friendly',
    perSeat: 1200,
    swatch: '#D9C7A7',
  },
  {
    id: 'velvet',
    label: 'Premium Velvet',
    desc: 'Pet-friendly & soft',
    perSeat: 2200,
    swatch: '#2F4B6B',
  },
  {
    id: 'leatherette',
    label: 'Genuine / PU Leatherette',
    desc: 'Waterproof & luxury finish',
    perSeat: 2800,
    swatch: '#6B4A2B',
  },
  {
    id: 'italian',
    label: 'Stain-Resistant Italian Fabric',
    desc: 'Premium imported weave',
    perSeat: 3500,
    swatch: '#A89B7C',
  },
];

function formatINR(n: number) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

export default function CostEstimator() {
  const [sofa, setSofa] = useState(SOFA_TYPES[1].id);
  const [service, setService] = useState(SERVICES[0].id);
  const [material, setMaterial] = useState(MATERIALS[1].id);

  const { low, high } = useMemo(() => {
    const s = SOFA_TYPES.find((x) => x.id === sofa)!;
    const sv = SERVICES.find((x) => x.id === service)!;
    const m = MATERIALS.find((x) => x.id === material)!;
    const seats = SEATS[sofa] ?? 3;
    const materialCost = m.perSeat * seats;
    const subtotal = (s.base + materialCost) * sv.multiplier;
    // ±12% range to reflect size/condition variability
    return { low: subtotal * 0.88, high: subtotal * 1.12 };
  }, [sofa, service, material]);

  const cardBase =
    'rounded-2xl border px-4 py-3 text-left transition-all cursor-pointer';

  return (
    <section id="estimator" className="py-20 md:py-28 bg-cream-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
            <Calculator className="h-3.5 w-3.5" />
            Instant Cost Estimator
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-700">
            Estimate Your Sofa Restoration Cost in 30 Seconds
          </h2>
          <p className="mt-4 text-lg text-charcoal-500 leading-relaxed">
            Pick your sofa type, service, and material to see an indicative price range.
            Final pricing is confirmed after a free doorstep inspection.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 rounded-3xl bg-white ring-1 ring-cream-200 p-6 md:p-8 shadow-sm space-y-7">
            {/* Sofa type */}
            <div>
              <label className="block text-sm font-bold text-navy-700 mb-3">
                1. Select Sofa Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {SOFA_TYPES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSofa(s.id)}
                    className={[
                      cardBase,
                      sofa === s.id
                        ? 'border-navy-600 bg-navy-600/5 ring-1 ring-navy-600 text-navy-700'
                        : 'border-cream-200 bg-white text-charcoal-600 hover:border-navy-600/40',
                    ].join(' ')}
                  >
                    <span className="block text-sm font-semibold">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-bold text-navy-700 mb-3">
                2. Select Service Needed
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {SERVICES.map((sv) => (
                  <button
                    key={sv.id}
                    onClick={() => setService(sv.id)}
                    className={[
                      cardBase,
                      service === sv.id
                        ? 'border-navy-600 bg-navy-600/5 ring-1 ring-navy-600 text-navy-700'
                        : 'border-cream-200 bg-white text-charcoal-600 hover:border-navy-600/40',
                    ].join(' ')}
                  >
                    <span className="block text-sm font-semibold">{sv.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <label className="block text-sm font-bold text-navy-700 mb-3">
                3. Select Material Tier
              </label>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {MATERIALS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMaterial(m.id)}
                    className={[
                      cardBase,
                      'flex items-center gap-3',
                      material === m.id
                        ? 'border-navy-600 bg-navy-600/5 ring-1 ring-navy-600'
                        : 'border-cream-200 bg-white hover:border-navy-600/40',
                    ].join(' ')}
                  >
                    <span
                      className="h-9 w-9 shrink-0 rounded-lg ring-1 ring-black/10"
                      style={{ backgroundColor: m.swatch }}
                    />
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-navy-700">{m.label}</span>
                      <span className="text-xs text-charcoal-500">{m.desc}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl bg-navy-700 text-cream-50 p-6 md:p-8 shadow-xl overflow-hidden relative">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent-500/15 blur-2xl" />
              <p className="text-xs uppercase tracking-[0.2em] text-cream-200">Estimated Cost</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-3xl font-extrabold leading-none">{formatINR(low)}</span>
                <span className="text-lg text-cream-200/70">–</span>
                <span className="text-3xl font-extrabold leading-none">{formatINR(high)}</span>
              </div>
              <p className="mt-2 text-xs text-cream-200/70">
                Indicative range incl. labor & material. Final price confirmed on inspection.
              </p>

              <div className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm">
                <Row label="Sofa" value={SOFA_TYPES.find((s) => s.id === sofa)!.label} />
                <Row label="Service" value={SERVICES.find((s) => s.id === service)!.label} />
                <Row label="Material" value={MATERIALS.find((m) => m.id === material)!.label} />
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-5 py-3.5 text-base font-semibold text-white transition-colors"
              >
                <Sparkles className="h-4 w-4" />
                Book Free Doorstep Fabric Sample Inspection & Exact Quote
                <ArrowRight className="h-4 w-4" />
              </a>

              <p className="mt-4 flex items-start gap-2 text-xs text-cream-200/70">
                <Info className="h-4 w-4 shrink-0 mt-0.5" />
                Estimates are indicative only and may vary based on sofa condition,
                fabric availability, and exact dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-cream-200/70">{label}</span>
      <span className="font-semibold text-cream-50 text-right">{value}</span>
    </div>
  );
}
