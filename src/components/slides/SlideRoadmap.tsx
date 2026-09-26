import React from 'react';
import { SlideData } from '../../types/presentation';
import { AlertTriangle, Rocket, Sparkles, Map, Glasses, Bot } from 'lucide-react';

interface SlideRoadmapProps {
  slide: SlideData;
}

export const SlideRoadmap: React.FC<SlideRoadmapProps> = ({ slide }) => {
  return (
    <div className="h-full flex flex-col justify-between py-4 px-4 md:px-10">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-900 uppercase">
            <span>{slide.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Khách quan học thuật & Tầm nhìn tương lai</span>
          </div>
          <span className="text-xs font-mono text-stone-400">SLIDE 11/12</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
          {slide.title}
        </h2>
        <p className="text-sm md:text-base text-stone-600 mt-1">
          {slide.headline}
        </p>
      </div>

      {/* Main Grid: Limitations vs Future Roadmap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left Column: Honest Scientific Limitations */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-800" />
            <span>Ba Ranh Giới & Hạn Chế Hiện Tại</span>
          </div>

          {slide.limitations?.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-3.5 rounded-xl border border-stone-200/90 shadow-sm space-y-1"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-stone-100 text-stone-700 font-mono text-xs flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <h3 className="text-xs font-bold text-stone-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-[11px] text-stone-600 pl-7 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          <div className="p-3 bg-stone-100 rounded-xl text-[11px] text-stone-600 border border-stone-200">
            💬 <em>"Nhóm nghiên cứu cam kết duy trì tính trung thực học thuật, không thổi phồng kết quả và tập trung giải quyết các tồn tại kỹ thuật."</em>
          </div>
        </div>

        {/* Right Column: 3-Stage Development Roadmap */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1 flex items-center gap-1.5">
            <Rocket className="w-3.5 h-3.5 text-amber-800" />
            <span>Lộ Trình Phát Triển 3 Giai Đoạn (2026 - 2028)</span>
          </div>

          <div className="space-y-3">
            {slide.roadmap?.map((step, sIdx) => (
              <div
                key={sIdx}
                className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-900/10 text-amber-900 shrink-0 mt-0.5">
                    {sIdx === 0 && <Map className="w-4 h-4" />}
                    {sIdx === 1 && <Bot className="w-4 h-4" />}
                    {sIdx === 2 && <Glasses className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-amber-900 uppercase">
                        {step.stage}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-stone-900 mt-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer reference */}
      <div className="text-xs text-stone-400 border-t border-stone-200 pt-3">
        Mục 3.4 Báo Cáo KHKT: Ưu điểm, hạn chế và định hướng phát triển bền vững.
      </div>
    </div>
  );
};
