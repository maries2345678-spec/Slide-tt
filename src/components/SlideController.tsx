import React from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Printer, ExternalLink, Sparkles } from 'lucide-react';

interface SlideControllerProps {
  currentIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onJump: (index: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrint: () => void;
  demoUrl: string;
}

export const SlideController: React.FC<SlideControllerProps> = ({
  currentIndex,
  totalSlides,
  onNext,
  onPrev,
  onJump,
  isPlaying,
  onTogglePlay,
  onPrint,
  demoUrl,
}) => {
  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <footer className="h-16 px-4 md:px-8 border-t border-stone-200 bg-white/95 backdrop-blur-md sticky bottom-0 z-30 flex items-center justify-between no-print">
      {/* Left zone: Slide Index & Direct Web Link */}
      <div className="flex items-center gap-4 text-xs text-stone-500">
        <div className="flex items-center gap-1.5 font-mono">
          <span className="text-stone-900 font-bold text-sm tabular-nums">
            {(currentIndex + 1).toString().padStart(2, '0')}
          </span>
          <span>/</span>
          <span className="tabular-nums">
            {totalSlides.toString().padStart(2, '0')}
          </span>
        </div>

        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-stone-600 hover:text-amber-900 transition-colors"
        >
          <span>hcmc-pg.github.io</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Center zone: Segmented Progress Dots & Navigation */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="p-2 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
          title="Slide trước (←)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Mini progress tracker pills */}
        <div className="hidden md:flex items-center gap-1.5 px-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => onJump(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-7 bg-amber-900'
                  : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
              title={`Chuyển tới slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          className="p-2 rounded-lg bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-40 disabled:hover:bg-stone-900 transition-all shadow-sm"
          title="Slide kế tiếp (Space/→)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right zone: Presentation Utilities */}
      <div className="flex items-center gap-2">
        <button
          onClick={onTogglePlay}
          className={`p-2 rounded-lg border transition-colors flex items-center gap-1.5 text-xs font-medium ${
            isPlaying
              ? 'bg-amber-100 text-amber-900 border-amber-300'
              : 'text-stone-700 hover:bg-stone-100 border-stone-200'
          }`}
          title={isPlaying ? 'Dừng tự động chuyển slide' : 'Tự động trình chiếu (5s/slide)'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{isPlaying ? 'Dừng' : 'Tự Chạy'}</span>
        </button>

        <button
          onClick={onPrint}
          className="p-2 rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-100 transition-colors"
          title="In tài liệu / Xuất PDF báo cáo"
        >
          <Printer className="w-4 h-4" />
        </button>
      </div>

      {/* Thin top progress line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-stone-200">
        <div
          className="h-full bg-amber-800 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </footer>
  );
};
