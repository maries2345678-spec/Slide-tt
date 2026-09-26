import React from 'react';
import { SlideData } from '../types/presentation';
import { X, Layers, Check } from 'lucide-react';

interface SlideIndexDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideIndexDrawer: React.FC<SlideIndexDrawerProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 left-0 w-full sm:w-[380px] bg-stone-900 text-stone-100 z-50 shadow-2xl border-r border-stone-800 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-950">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-amber-400" />
          <span className="font-serif font-bold text-sm tracking-wide text-white">
            Danh Mục 12 Slides Báo Cáo
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Slide List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {slides.map((s, idx) => {
          const isCurrent = idx === currentSlideIndex;
          return (
            <div
              key={s.id}
              onClick={() => {
                onSelectSlide(idx);
                onClose();
              }}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                isCurrent
                  ? 'bg-amber-950/40 border-amber-600/60 shadow-md ring-1 ring-amber-500/30'
                  : 'bg-stone-800/60 border-stone-800 hover:bg-stone-800 hover:border-stone-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                  isCurrent ? 'bg-amber-500 text-stone-950' : 'bg-stone-700 text-stone-300'
                }`}>
                  {s.slideNumber < 10 ? `0${s.slideNumber}` : s.slideNumber}
                </span>
                <div>
                  <div className="text-[10px] font-mono text-amber-400 uppercase">
                    {s.category}
                  </div>
                  <div className={`text-xs font-semibold leading-tight line-clamp-1 ${
                    isCurrent ? 'text-white' : 'text-stone-300'
                  }`}>
                    {s.title}
                  </div>
                </div>
              </div>

              {isCurrent && (
                <Check className="w-4 h-4 text-amber-400 shrink-0 ml-2" />
              )}
            </div>
          );
        })}
      </div>

      {/* Footer information */}
      <div className="p-3 bg-stone-950 border-t border-stone-800 text-[11px] font-mono text-stone-400 text-center">
        HCMC CultureHub · Nghiên cứu KHKT 2026-2027
      </div>
    </div>
  );
};
