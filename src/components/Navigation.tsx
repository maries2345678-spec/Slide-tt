import React from 'react';
import { ProjectInfo } from '../types/presentation';
import { Maximize2, Minimize2, Layers, ExternalLink } from 'lucide-react';

interface NavigationProps {
  projectInfo: ProjectInfo;
  onOpenSlideIndex: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onJumpToSlide: (index: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  projectInfo,
  onOpenSlideIndex,
  isFullscreen,
  onToggleFullscreen,
  onJumpToSlide,
}) => {
  return (
    <header className="h-14 px-4 md:px-8 border-b border-stone-800 bg-stone-950 sticky top-0 z-40 flex items-center justify-between no-print">
      {/* Zone 1: Single text element wordmark (Brand Zone) */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSlideIndex}
          className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 transition-colors flex items-center gap-1.5 text-xs font-medium"
          title="Danh mục 12 Slides (M)"
        >
          <Layers className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">Danh Mục Slides</span>
        </button>

        <span className="text-stone-600 hidden sm:inline" aria-hidden="true">|</span>

        <span className="text-sm md:text-base font-serif font-bold tracking-tight text-white whitespace-nowrap">
          HCMC CultureHub
        </span>
      </div>

      {/* Zone 2: 4-6 clean text navigation links (Nav Links Zone) */}
      <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-400">
        <button
          onClick={() => onJumpToSlide(0)}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          Bìa Báo Cáo
        </button>
        <button
          onClick={() => onJumpToSlide(1)}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          Đặt Vấn Đề
        </button>
        <button
          onClick={() => onJumpToSlide(3)}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          21 Học Liệu
        </button>
        <button
          onClick={() => onJumpToSlide(4)}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          Kiến Trúc AI
        </button>
        <button
          onClick={() => onJumpToSlide(6)}
          className="hover:text-amber-400 transition-colors text-amber-300 font-bold whitespace-nowrap"
        >
          Khảo Sát Pre-Test
        </button>
        <button
          onClick={() => onJumpToSlide(7)}
          className="hover:text-amber-400 transition-colors text-amber-300 font-bold whitespace-nowrap"
        >
          Kết Quả Thực Nghiệm
        </button>
        <button
          onClick={() => onJumpToSlide(11)}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          Kết Luận
        </button>
      </nav>

      {/* Zone 3: Clean Action Zone */}
      <div className="flex items-center gap-3">
        <a
          href={projectInfo.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-900 hover:bg-stone-850 border border-stone-700 rounded-lg transition-colors"
        >
          <span>Xem Web Thực Tế</span>
          <ExternalLink className="w-3 h-3 text-amber-400" />
        </a>

        <button
          onClick={onToggleFullscreen}
          className="p-1.5 text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-colors flex items-center gap-1 text-xs"
          title={isFullscreen ? 'Thu nhỏ (F)' : 'Toàn màn hình trình chiếu (F)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          <span className="hidden sm:inline">{isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}</span>
        </button>
      </div>
    </header>
  );
};
