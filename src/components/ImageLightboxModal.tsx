import { useState, useRef, useEffect, useCallback } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  MessageCircle,
  MapPin,
  Sparkles,
  Move,
} from 'lucide-react';
import { type ProjectItem, getWhatsAppEstimateLink } from '@/data/projects';

interface ImageLightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ImageLightboxModal({ project, onClose }: ImageLightboxModalProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  const startDragRef = useRef({ x: 0, y: 0 });
  const startPanRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset zoom & pan when switching project or closing
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setShowInfo(true);
  }, [project]);

  // Keyboard shortcut listener (Escape to close, + / - to zoom)
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleReset();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(4, Number((prev + 0.5).toFixed(1))));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const next = Math.max(1, Number((prev - 0.5).toFixed(1)));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleToggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoom > 1) {
      handleReset();
    } else {
      setZoom(2.2);
    }
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.0015;
    setZoom((prev) => {
      const next = Math.min(4, Math.max(1, Number((prev + delta).toFixed(2))));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  // Dragging to Pan when zoomed in
  const handlePointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    startDragRef.current = { x: e.clientX, y: e.clientY };
    startPanRef.current = { ...pan };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || zoom <= 1) return;
    const dx = e.clientX - startDragRef.current.x;
    const dy = e.clientY - startDragRef.current.y;
    
    // Bounded pan according to zoom factor
    const maxPanX = (zoom - 1) * 350;
    const maxPanY = (zoom - 1) * 260;

    const newX = Math.max(-maxPanX, Math.min(maxPanX, startPanRef.current.x + dx));
    const newY = Math.max(-maxPanY, Math.min(maxPanY, startPanRef.current.y + dy));

    setPan({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/92 backdrop-blur-md p-3 sm:p-6 select-none overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/15">
            <Sparkles className="h-3 w-3 text-accent-400" />
            <span>{project.category}</span>
          </span>
          <span className="hidden sm:flex items-center gap-1 text-xs text-white/70">
            <MapPin className="h-3 w-3 text-accent-400" />
            <span>{project.location}</span>
          </span>
        </div>

        {/* Right Top Actions (Zoom Controls & Close) */}
        <div className="flex items-center gap-2">
          {/* Zoom Control Bar */}
          <div className="flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-1 text-white shadow-xl">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 1}
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/20 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
              aria-label="Zoom out"
              title="Zoom out (-)"
            >
              <ZoomOut className="h-4 w-4" />
            </button>

            <span className="px-2.5 text-xs font-mono font-bold text-accent-300 min-w-[50px] text-center">
              {Math.round(zoom * 100)}%
            </span>

            <button
              onClick={handleZoomIn}
              disabled={zoom >= 4}
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/20 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
              aria-label="Zoom in"
              title="Zoom in (+)"
            >
              <ZoomIn className="h-4 w-4" />
            </button>

            {zoom > 1 && (
              <button
                onClick={handleReset}
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/20 border-l border-white/15 transition-colors ml-0.5 text-accent-400"
                aria-label="Reset zoom"
                title="Reset zoom (0)"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md transition-all shadow-xl hover:rotate-90"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Zoom/Pan Canvas */}
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDoubleClick={handleToggleZoom}
        className={`relative flex-1 w-full flex items-center justify-center overflow-hidden my-auto ${
          zoom > 1
            ? isDragging
              ? 'cursor-grabbing'
              : 'cursor-grab'
            : 'cursor-zoom-in'
        }`}
      >
        <div
          className="relative max-w-full max-h-[70vh] sm:max-h-[76vh] flex items-center justify-center transition-transform ease-out will-change-transform"
          style={{
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
            transitionDuration: isDragging ? '0ms' : '220ms',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={project.src}
            alt={project.title}
            className="max-h-[70vh] sm:max-h-[76vh] w-auto max-w-[95vw] sm:max-w-[85vw] object-contain rounded-2xl sm:rounded-3xl shadow-2xl ring-1 ring-white/10 select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Pan Hint Overlay when zoomed in */}
        {zoom > 1 && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-md border border-white/10 shadow-lg animate-fade-in">
            <Move className="h-3.5 w-3.5 text-accent-400" />
            <span>Drag to inspect fabric texture &amp; stitching</span>
          </div>
        )}
      </div>

      {/* Bottom Information Card & WhatsApp Action Bar */}
      <div
        className="relative z-20 w-full max-w-4xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl sm:rounded-full bg-navy-950/85 backdrop-blur-xl border border-white/15 p-4 sm:px-6 sm:py-3.5 shadow-2xl">
          <div className="flex flex-col text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs text-cream-200/80 line-clamp-1 mt-0.5">
              {project.highlight} • {project.location}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <a
              href={getWhatsAppEstimateLink(project.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1FB855] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Request on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
