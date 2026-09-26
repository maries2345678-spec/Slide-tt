import React, { useState } from 'react';
import { SlideData } from '../../types/presentation';
import { Calendar, Users, CheckCircle, Clock, FileSpreadsheet, ChevronRight } from 'lucide-react';

interface SlideMethodologyProps {
  slide: SlideData;
}

export const SlideMethodology: React.FC<SlideMethodologyProps> = ({ slide }) => {
  const [activeStep, setActiveStep] = useState<number>(5); // default highlighting Phase 6 (Triển khai thực nghiệm N=100)

  return (
    <div className="h-full flex flex-col justify-between py-4 px-4 md:px-10">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-900 uppercase">
            <span>{slide.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Mô hình thực nghiệm bán chuẩn (Quasi-experiment)</span>
          </div>
          <span className="text-xs font-mono text-stone-400">SLIDE 06/12</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
          {slide.title}
        </h2>
        <p className="text-sm md:text-base text-stone-600 mt-1">
          {slide.headline}
        </p>
      </div>

      {/* Main Grid: 7-phase Timeline & Demographics N=100 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left: 7-step Timeline Rail */}
        <div className="lg:col-span-8 space-y-2">
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-800" />
              <span>Tiến Trình 7 Giai Đoạn Nghiên Cứu (22/7/2026 - 22/9/2026)</span>
            </span>
            <span className="text-[11px] text-stone-400">Nhấp vào từng bước để xem chi tiết</span>
          </div>

          <div className="grid grid-cols-1 gap-2 max-h-[340px] overflow-y-auto pr-1">
            {slide.timelineSteps?.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-amber-900/60 shadow-sm ring-1 ring-amber-900/20'
                      : 'bg-stone-50/80 border-stone-200/90 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-amber-900 text-white' : 'bg-stone-200 text-stone-700'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-stone-400">{step.phase}</div>
                      <div className={`text-xs md:text-sm font-semibold ${isSelected ? 'text-stone-900' : 'text-stone-700'}`}>
                        {step.title}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <span className="hidden sm:inline-block text-[11px] font-medium text-amber-900 bg-amber-50 px-2 py-0.5 rounded">
                      Đang xem
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed preview of selected step */}
          {slide.timelineSteps && slide.timelineSteps[activeStep] && (
            <div className="p-3 bg-amber-50/60 border border-amber-200/70 rounded-xl text-xs text-stone-700 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-900">
                  {slide.timelineSteps[activeStep].phase}: {slide.timelineSteps[activeStep].title}
                </span>
                <p className="text-stone-600 mt-0.5">
                  {slide.timelineSteps[activeStep].detail}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right: Demographics & Research rigor */}
        <div className="lg:col-span-4 space-y-3.5">
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-800" />
            <span>Mẫu Khảo Sát & Độ Tin Cậy</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-stone-100 pb-2">
              <span className="text-xs text-stone-500">Kích thước mẫu (N)</span>
              <span className="text-xl font-mono font-bold text-amber-900 tabular-nums">100 Học sinh</span>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Địa bàn nghiên cứu:</span>
                <span className="font-semibold text-stone-900">THPT Bình Phú, Bình Dương</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Khối lớp tham gia:</span>
                <span className="font-semibold text-stone-900">Lớp 10, 11 và 12</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Công cụ khảo sát:</span>
                <span className="font-semibold text-stone-900">Pre-test & Post-test đối chứng</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Thời gian khảo sát:</span>
                <span className="font-semibold text-stone-900">13/9 - 17/9/2026</span>
              </div>
            </div>

            {/* Scientific Rigor Checklist */}
            <div className="pt-2 border-t border-stone-100 space-y-1 text-[11px] text-stone-600">
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Bảo mật danh tính & tự nguyện</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Trùng khớp 100% câu hỏi kiến thức Pre-Post</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Thang đo Likert 5 mức độ chuẩn hóa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer reference */}
      <div className="text-xs text-stone-400 border-t border-stone-200 pt-3">
        Tiến trình hoàn tất nghiệm thu và báo cáo khoa học ngày 22/09/2026.
      </div>
    </div>
  );
};
