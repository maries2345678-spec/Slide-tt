import React from 'react';
import { SlideData, ProjectInfo } from '../../types/presentation';
import { Award, CheckCircle2, QrCode, ExternalLink, Heart, MessageSquare } from 'lucide-react';

interface SlideConclusionProps {
  slide: SlideData;
  projectInfo: ProjectInfo;
}

export const SlideConclusion: React.FC<SlideConclusionProps> = ({ slide, projectInfo }) => {
  return (
    <div className="h-full flex flex-col justify-between py-4 px-4 md:px-10">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-900 uppercase">
            <span>{slide.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Tổng kết đề tài & thảo luận</span>
          </div>
          <span className="text-xs font-mono text-stone-400">SLIDE 12/12</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
          {slide.title}
        </h2>
        <p className="text-sm md:text-base text-stone-600 mt-1">
          {slide.headline}
        </p>
      </div>

      {/* Main Grid: 3 Conclusion Highlights + QR Live Demo & Thank You Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left Column: 3 Final Scientific Verdicts */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
            Ba Kết Luận Khoa Học Then Chốt Của Đề Tài
          </div>

          {slide.summaryHighlights?.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-stone-200/90 shadow-sm space-y-1"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <h3 className="text-sm font-bold text-stone-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-stone-600 pl-6 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}

          {/* Inspirational Cultural Quote */}
          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/70 text-xs text-amber-950 font-serif italic leading-relaxed">
            "Không gian văn hóa không chỉ là những viên gạch lịch sử đã qua, mà là hơi thở sống động của thế hệ hôm nay khi biết ứng dụng công nghệ để gìn giữ và tôn vinh cội nguồn."
          </div>
        </div>

        {/* Right Column: Live Demo QR Code & Q&A Callout */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {/* Live Product Card */}
          <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-md text-center flex flex-col items-center">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 mb-1">
              Sản Phẩm Đã Vận Hành Trực Tuyến
            </span>
            <h3 className="text-base font-serif font-bold text-white mb-3">
              Quét Mã Để Trải Nghiệm Website
            </h3>

            {/* Simulated Clean SVG QR Code */}
            <div className="bg-white p-3 rounded-xl shadow-inner mb-3">
              <svg
                viewBox="0 0 120 120"
                className="w-28 h-28"
                fill="currentColor"
              >
                {/* QR Pattern Representation */}
                <rect width="120" height="120" fill="white" />
                <rect x="10" y="10" width="30" height="30" fill="#1C1917" />
                <rect x="15" y="15" width="20" height="20" fill="white" />
                <rect x="18" y="18" width="14" height="14" fill="#1C1917" />

                <rect x="80" y="10" width="30" height="30" fill="#1C1917" />
                <rect x="85" y="15" width="20" height="20" fill="white" />
                <rect x="88" y="18" width="14" height="14" fill="#1C1917" />

                <rect x="10" y="80" width="30" height="30" fill="#1C1917" />
                <rect x="15" y="85" width="20" height="20" fill="white" />
                <rect x="18" y="88" width="14" height="14" fill="#1C1917" />

                {/* Data modules */}
                <rect x="45" y="15" width="8" height="8" fill="#1C1917" />
                <rect x="60" y="20" width="8" height="8" fill="#1C1917" />
                <rect x="45" y="35" width="12" height="6" fill="#1C1917" />
                <rect x="65" y="45" width="10" height="10" fill="#9A3412" />
                <rect x="20" y="50" width="8" height="8" fill="#1C1917" />
                <rect x="35" y="60" width="14" height="8" fill="#1C1917" />
                <rect x="55" y="65" width="8" height="15" fill="#1C1917" />
                <rect x="75" y="70" width="10" height="8" fill="#1C1917" />
                <rect x="90" y="55" width="15" height="8" fill="#1C1917" />
                <rect x="90" y="85" width="12" height="12" fill="#1C1917" />
                <rect x="50" y="90" width="15" height="10" fill="#1C1917" />
              </svg>
            </div>

            <a
              href={projectInfo.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-amber-300 hover:text-amber-200 underline flex items-center gap-1.5"
            >
              <span>https://hcmc-pg.github.io/HCMC-web/</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Thank You & Q&A Box */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-900 uppercase">
              <MessageSquare className="w-4 h-4" />
              <span>Kính Chúc Quý Ban Giám Khảo Sức Khỏe</span>
            </div>
            <p className="text-xs text-stone-600">
              Nhóm nghiên cứu xin trân trọng lắng nghe các câu hỏi và đóng góp từ Ban Giám khảo!
            </p>
          </div>
        </div>
      </div>

      {/* Footer reference */}
      <div className="text-xs text-stone-400 border-t border-stone-200 pt-3 flex justify-between">
        <span>Tác giả: Hồ Ngọc Thư & Nguyễn Thanh Trúc · GVHD: Th.s Hoàng Thị Tú Anh</span>
        <span className="font-mono text-stone-500">TP. Hồ Chí Minh, 09/2026</span>
      </div>
    </div>
  );
};
