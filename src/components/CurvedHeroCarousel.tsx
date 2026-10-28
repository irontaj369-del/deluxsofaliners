import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowUpRight, Sparkles, MapPin, ZoomIn } from 'lucide-react';
import { PROJECTS, type ProjectItem, getWhatsAppEstimateLink } from '@/data/projects';
import ImageLightboxModal from '@/components/ImageLightboxModal';

// Duplicate array for seamless infinite looping
const CAROUSEL_ITEMS: ProjectItem[] = [...PROJECTS, ...PROJECTS];

export default function CurvedHeroCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Continuous scroll position in pixels
  const posRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const totalDragDistanceRef = useRef(0);
  const velocityRef = useRef(0);
  const isHoveredRef = useRef(false);

  // Selected project for interactive Zoom & Pan Lightbox
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Responsive dynamic card dimensions state
  const [dimensions, setDimensions] = useState({
    cardWidth: 300,
    cardHeight: 410,
    cardGap: 24,
  });

  // Dynamic window resize listener for precision card sizing across mobile, tablet, and desktop
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w < 640) {
        // Mobile viewport: comfortable bounds (240px wide, 340px tall)
        setDimensions({
          cardWidth: 240,
          cardHeight: 335,
          cardGap: 14,
        });
      } else if (w < 1024) {
        // Tablet viewport
        setDimensions({
          cardWidth: 275,
          cardHeight: 375,
          cardGap: 18,
        });
      } else {
        // Desktop viewport
        setDimensions({
          cardWidth: 300,
          cardHeight: 410,
          cardGap: 24,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions, { passive: true });
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const { cardWidth, cardHeight, cardGap } = dimensions;
  const totalCardStep = cardWidth + cardGap;
  const halfLoopWidth = PROJECTS.length * totalCardStep;

  // Auto drift speed (pixels per frame at 60fps)
  const BASE_SPEED = 0.85;

  // Animation loop with drag & momentum coasting
  useEffect(() => {
    let animId: number;

    const loop = () => {
      if (!isDraggingRef.current) {
        // Apply friction to momentum velocity if any
        if (Math.abs(velocityRef.current) > 0.08) {
          posRef.current += velocityRef.current;
          velocityRef.current *= 0.94; // friction decay
        } else {
          // Normal auto drift (slows slightly on hover)
          const currentSpeed = isHoveredRef.current ? BASE_SPEED * 0.35 : BASE_SPEED;
          posRef.current += currentSpeed;
        }

        // Infinite seamless loop wrap
        if (posRef.current >= halfLoopWidth) {
          posRef.current -= halfLoopWidth;
        } else if (posRef.current < 0) {
          posRef.current += halfLoopWidth;
        }
      }

      // Apply transform to track
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [halfLoopWidth, totalCardStep]);

  // Pointer / Drag event handlers
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    totalDragDistanceRef.current = 0;
    velocityRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    totalDragDistanceRef.current += Math.abs(delta);
    posRef.current -= delta; // move track
    velocityRef.current = -delta * 0.75; // store velocity for momentum
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  }, []);

  // Card click: only trigger if pointer didn't drag
  const handleCardClick = (item: ProjectItem) => {
    if (totalDragDistanceRef.current > 6) return;
    setSelectedProject(item);
  };

  return (
    <>
      <div
        ref={containerRef}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative w-full max-w-[100vw] overflow-hidden py-6 sm:py-8 select-none cursor-grab active:cursor-grabbing touch-pan-y"
        style={{
          perspective: '1400px',
          perspectiveOrigin: '50% 60%',
        }}
      >
        {/* Soft studio side fade gradients */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#FAF8F5] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FAF8F5] to-transparent z-20" />
        <div className="pointer-events-none absolute left-0 inset-y-0 w-8 sm:w-28 bg-gradient-to-r from-[#FAF8F5] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-8 sm:w-28 bg-gradient-to-l from-[#FAF8F5] to-transparent z-20" />

        {/* 3D Track */}
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{
            width: `${CAROUSEL_ITEMS.length * totalCardStep}px`,
            gap: `${cardGap}px`,
            transformStyle: 'preserve-3d',
          }}
        >
          {CAROUSEL_ITEMS.map((item, index) => {
            // Calculate distance from center of visible area for 3D cylindrical arch transform
            const cardOffsetLeft = index * totalCardStep - posRef.current;
            const containerWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
            const distFromCenter = (cardOffsetLeft + cardWidth / 2 - containerWidth / 2) / (containerWidth / 2);
            
            // Cylindrical concave arch geometry:
            // Center cards are upright and closer; cards toward outer edges curve backward and expand slightly in height
            const clampedDist = Math.max(-1.8, Math.min(1.8, distFromCenter));
            const rotateY = clampedDist * -12; // degrees
            const translateY = Math.abs(clampedDist) * -14; // arch rises upward at edges
            const scale = 1 + Math.abs(clampedDist) * 0.04; // edge cards appear taller like an inner amphitheater cylinder

            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => handleCardClick(item)}
                className="group relative shrink-0 transition-transform duration-300 ease-out cursor-pointer"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `translate3d(0, ${translateY}px, 0) rotateY(${rotateY}deg) scale(${scale})`,
                  transformOrigin: 'center center',
                }}
              >
                {/* Card Container */}
                <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-navy-900 shadow-xl ring-1 ring-black/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_24px_50px_rgba(31,45,74,0.25)]">
                  {/* Photo */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 pointer-events-none"
                    loading="lazy"
                    draggable={false}
                  />

                  {/* Ambient Scrim Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/25 to-black/10" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[10px] sm:text-[11px] font-bold text-navy-800 shadow-md">
                    <Sparkles className="h-3 w-3 text-accent-500" />
                    <span>{item.category}</span>
                  </div>

                  {/* Zoom Preview Action Icon */}
                  <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-navy-950/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent-500 hover:scale-110 shadow-lg">
                    <ZoomIn className="h-4 w-4" />
                  </div>

                  {/* Bottom Frosted Glass Card Details */}
                  <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-5 z-10">
                    <div className="rounded-2xl bg-navy-950/80 p-3 sm:p-3.5 backdrop-blur-md border border-white/10 shadow-lg transition-transform duration-300 group-hover:translate-y-0">
                      <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-accent-400 mb-0.5">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{item.location}</span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[10px] sm:text-[11px] text-cream-200/80 line-clamp-1">
                        {item.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal with Smooth Zoom & Pan */}
      <ImageLightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
