import { useCallback, useRef, useState, type MouseEvent, type PointerEvent } from 'react';
import { MoveHorizontal, Sparkles } from 'lucide-react';

type Project = {
  id: string;
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: 'curved-velvet',
    label: 'Custom Curved Velvet Living Suite Re-Upholstery',
    before:
      'https://images.pexels.com/photos/13003715/pexels-photo-13003715.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000',
    after:
      '/assets/aistudio/b7115d4b-837f-4bbc-b1bf-776bd8736c90_6c04a049.jfif',
    beforeAlt: 'Worn old sofa before restoration',
    afterAlt: 'Delux bespoke terracotta velvet curved sofa set',
  },
  {
    id: 'velvet',
    label: 'L-Shape Sectional Tufted Re-Building',
    before:
      'https://images.pexels.com/photos/17139757/pexels-photo-17139757.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000',
    after:
      '/assets/aistudio/40e23448-2079-4a24-b486-deecc0d2c916_cb3a0b54.jfif',
    beforeAlt: 'Sagging sofa before re-building',
    afterAlt: 'Re-upholstered modular biscuit-tufted sectional',
  },
  {
    id: 'wall-panels',
    label: 'Acoustic Headboard & Bed Wall Paneling Installation',
    before:
      'https://images.pexels.com/photos/35754766/pexels-photo-35754766.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000',
    after:
      '/assets/aistudio/a7078ca0-b580-48a8-9d21-1b3fdcb3f058_8eb7dee7.jfif',
    beforeAlt: 'Plain bedroom wall before paneling',
    afterAlt: 'Delux bespoke illuminated acoustic bed wall paneling',
  },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const project = PROJECTS[active];

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };
  const onClickTrack = (e: MouseEvent<HTMLDivElement>) => {
    updateFromClientX(e.clientX);
  };

  return (
    <section id="before-after" className="py-20 md:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
            <Sparkles className="h-3.5 w-3.5" />
            Before & After
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-700">
            See the Transformation
          </h2>
          <p className="mt-4 text-lg text-charcoal-500 leading-relaxed">
            Drag the slider across any project to compare worn-out furniture with our
            finished restoration work.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => {
                setActive(i);
                setPos(50);
              }}
              className={[
                'rounded-full px-4 py-2 text-sm font-semibold transition-all',
                i === active
                  ? 'bg-navy-600 text-cream-50 shadow-md shadow-navy-600/20'
                  : 'bg-white text-charcoal-600 ring-1 ring-cream-200 hover:ring-navy-600/30 hover:text-navy-700',
              ].join(' ')}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onClick={onClickTrack}
          className="mt-8 relative select-none overflow-hidden rounded-3xl ring-1 ring-cream-200 shadow-xl cursor-ew-resize aspect-[16/10] sm:aspect-[16/9] touch-none"
        >
          {/* After (full) */}
          <img
            src={project.after}
            alt={project.afterAlt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            draggable={false}
          />
          <span className="absolute top-4 right-4 rounded-full bg-navy-700/90 text-cream-50 text-xs font-bold px-3 py-1.5 uppercase tracking-wider">
            After
          </span>

          {/* Before (clipped via clip-path so the image stays full-width) */}
          <div
            className="absolute inset-0 h-full w-full"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={project.before}
              alt={project.beforeAlt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              draggable={false}
            />
            <span className="absolute top-4 left-4 rounded-full bg-charcoal-700/90 text-cream-50 text-xs font-bold px-3 py-1.5 uppercase tracking-wider">
              Before
            </span>
          </div>

          {/* Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_0_1px_rgba(16,23,40,0.1)] pointer-events-none"
            style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-navy-700/10 text-navy-700">
              <MoveHorizontal className="h-5 w-5" />
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-charcoal-500">
          {project.label}
        </p>
      </div>
    </section>
  );
}
