import React from 'react';
import { SlideData } from '../../types/presentation';
import { Award, Compass, Microscope, Lightbulb, Users2, CheckCircle2 } from 'lucide-react';

interface SlideContributionsProps {
  slide: SlideData;
}

export const SlideContributions: React.FC<SlideContributionsProps> = ({ slide }) => {
  const getContributionIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Lightbulb className="w-4 h-4 text-amber-900" />;
      case 1: return <Microscope className="w-4 h-4 text-blue-900" />;
      case 2: return <Compass className="w-4 h-4 text-emerald-900" />;
      case 3: return <Users2 className="w-4 h-4 text-rose-900" />;
      default: return <Award className="w-4 h-4 text-stone-900" />;
    }
  };

  return (
    <div className="h-full flex flex-col justify-between py-4 px-4 md:px-10">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-900 uppercase">
            <span>{slide.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Tiêu chuẩn đánh giá KHKT cấp Thành phố</span>
          </div>
          <span className="text-xs font-mono text-stone-400">SLIDE 10/12</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
          {slide.title}
        </h2>
        <p className="text-sm md:text-base text-stone-600 mt-1">
          {slide.headline}
        </p>
      </div>

      {/* Main Grid: 4 Pillars of Contribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-auto py-2">
        {slide.contributions?.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm hover:border-amber-900/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-stone-100">
                  {getContributionIcon(idx)}
                </div>
                <div>
                  <div className="text-[10px] font-mono text-stone-400">Trụ cột 0{idx + 1}</div>
                  <h3 className="text-sm font-bold text-stone-900">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="my-2.5">
                <span className="text-[11px] font-semibold text-amber-950 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 inline-block">
                  {item.badge}
                </span>
              </div>

              <ul className="space-y-2 pt-2 text-xs text-stone-600">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-400 text-right">
              Mục 7 Báo Cáo KHKT
            </div>
          </div>
        ))}
      </div>

      {/* Footer reference */}
      <div className="text-xs text-stone-400 border-t border-stone-200 pt-3">
        Đánh giá theo Thông tư số 32/2018/TT-BGDĐT và Quy chế Cuộc thi Khoa học Kĩ thuật học sinh trung học.
      </div>
    </div>
  );
};
