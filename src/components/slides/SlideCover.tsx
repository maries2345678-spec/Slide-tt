import React from 'react';
import { SlideData, ProjectInfo } from '../../types/presentation';
import { Award, Compass, Sparkles, ExternalLink, QrCode } from 'lucide-react';

interface SlideCoverProps {
  slide: SlideData;
  projectInfo: ProjectInfo;
}

export const SlideCover: React.FC<SlideCoverProps> = ({ slide, projectInfo }) => {
  return (
    <div className="relative min-h-[580px] h-full flex flex-col justify-between py-6 px-4 md:px-12">
      {/* Top institution & contest marquee */}
      <div className="border-b border-stone-200 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs tracking-wider text-stone-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-800">SỞ GIÁO DỤC VÀ ĐÀO TẠO TP. HỒ CHÍ MINH</span>
            <span aria-hidden="true">·</span>
            <span>{projectInfo.contest}</span>
          </div>
          <div className="flex items-center gap-2 text-stone-700">
            <span className="font-mono text-stone-900 font-semibold">{projectInfo.academicYear}</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-800 font-medium">Lĩnh vực: {projectInfo.field}</span>
          </div>
        </div>
      </div>

      {/* Main hero typography & content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-900">
            <Compass className="w-4 h-4 text-amber-800" />
            <span>Đề tài nghiên cứu khoa học hành vi & xã hội</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15]">
            HCMC <span className="text-amber-900">CultureHub</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-700 font-serif leading-relaxed max-w-2xl">
            {slide.headline}
          </p>

          <p className="text-sm md:text-base text-stone-600 leading-relaxed max-w-xl">
            {slide.lead}
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-stone-200 max-w-lg">
            <div>
              <div className="text-2xl font-bold font-mono text-stone-900 tabular-nums">21</div>
              <div className="text-xs text-stone-500">Học liệu di sản chuẩn</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-amber-900 tabular-nums">100</div>
              <div className="text-xs text-stone-500">Học sinh thực nghiệm</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-stone-900 tabular-nums">05</div>
              <div className="text-xs text-stone-500">Không gian văn hóa HUL</div>
            </div>
          </div>

          {/* Action links */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={projectInfo.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-sm"
            >
              <span>Xem Hệ Thống Web Thực Tế</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-xs text-stone-500 font-mono">
              Báo cáo nghiệm thu KHKT 2026 - 2027
            </span>
          </div>
        </div>

        {/* Hero image card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 group">
            <img
              src={slide.image || './assets/hero_culturehub_showcase.jpg'}
              alt={slide.imageCaption || 'HCMC CultureHub Showcase'}
              className="w-full h-[320px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block mb-1">
                Không gian văn hóa TP.HCM mới
              </span>
              <p className="text-sm font-serif text-stone-200 leading-snug">
                {slide.imageCaption}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Authors & Mentorship credentials footer */}
      <div className="border-t border-stone-200 pt-4 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-xs uppercase tracking-wider text-stone-400 block mb-0.5">Tác giả đề tài</span>
            <div className="font-semibold text-stone-900">
              {projectInfo.authors.map(a => a.name).join(' · ')}
            </div>
            <div className="text-xs text-stone-500">
              {projectInfo.authors[0].school}
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-stone-400 block mb-0.5">Giáo viên hướng dẫn</span>
            <div className="font-semibold text-stone-900">{projectInfo.advisor}</div>
            <div className="text-xs text-stone-500">Tổ Ngữ Văn / Lịch Sử & Địa Lý</div>
          </div>

          <div className="md:text-right">
            <span className="text-xs uppercase tracking-wider text-stone-400 block mb-0.5">Thời gian & Địa điểm</span>
            <div className="font-semibold text-stone-900">{projectInfo.date}</div>
            <div className="text-xs text-stone-500">Thành phố Hồ Chí Minh</div>
          </div>
        </div>
      </div>
    </div>
  );
};
