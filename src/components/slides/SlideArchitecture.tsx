import React from 'react';
import { SlideData } from '../../types/presentation';
import { Bot, Layout, Award, ShieldAlert, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

interface SlideArchitectureProps {
  slide: SlideData;
}

export const SlideArchitecture: React.FC<SlideArchitectureProps> = ({ slide }) => {
  return (
    <div className="h-full flex flex-col justify-between py-4 px-4 md:px-10">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-900 uppercase">
            <span>{slide.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Kỹ thuật & Công nghệ Giáo dục</span>
          </div>
          <span className="text-xs font-mono text-stone-400">SLIDE 05/12</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900">
            {slide.title}
          </h2>
        </div>
        <p className="text-sm md:text-base text-stone-600 mt-1">
          {slide.headline}
        </p>
      </div>

      {/* Main Grid: 4 Core Architecture Pillars + AI Ethics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2">
        {/* Left: 4 Architectural Pillars */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {slide.pillars?.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-stone-200/90 shadow-sm hover:border-amber-900/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-amber-900/10 text-amber-900">
                    {idx === 0 && <Layout className="w-4 h-4" />}
                    {idx === 1 && <Bot className="w-4 h-4" />}
                    {idx === 2 && <Terminal className="w-4 h-4" />}
                    {idx === 3 && <Award className="w-4 h-4" />}
                  </div>
                  <h3 className="text-sm font-semibold text-stone-900">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {idx === 1 && (
                <div className="mt-3 p-2 bg-amber-50/70 border border-amber-200/60 rounded-lg text-[11px] text-amber-950 font-mono">
                  💡 Cơ chế Socratic: Gợi ý dẫn xuất thay vì mớm đáp án.
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Socratic Flow & AI Ethics Card */}
        <div className="lg:col-span-4 space-y-3.5">
          {/* Socratic AI Demo Callout */}
          <div className="bg-stone-900 text-stone-100 p-4 rounded-xl border border-stone-800">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <Bot className="w-4 h-4" />
              <span>Ba Son AI: Trợ Lý Socratic</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 bg-stone-800 rounded text-stone-300">
                <span className="text-amber-300 font-semibold">HS hỏi:</span> "Bến Nhà Rồng có ý nghĩa gì?"
              </div>
              <div className="p-2 bg-stone-800/80 rounded text-stone-200 border-l-2 border-amber-500 pl-2.5">
                <span className="text-amber-400 font-semibold">Ba Son AI:</span> "Em hãy liên hệ ngày 5/6/1911 và người thanh niên Nguyễn Tất Thành bước lên tàu Amiral Latouche-Tréville nhé!"
              </div>
            </div>
          </div>

          {/* AI Ethics & Student Responsibility */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-900 uppercase">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-800" />
              <span>Đạo Đức AI Học Đường</span>
            </div>
            <p className="text-[11px] text-stone-500">
              Khung nội dung giáo dục trí tuệ nhân tạo cho học sinh phổ thông:
            </p>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {slide.aiEthicsPrinciples?.map((principle, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-snug">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer reference */}
      <div className="text-xs text-stone-400 border-t border-stone-200 pt-3">
        Kiến trúc: GitHub Pages Web SPA · Bố cục Modular Module-based Layout · Tích hợp Prompt AI 5 Cấp độ.
      </div>
    </div>
  );
};
