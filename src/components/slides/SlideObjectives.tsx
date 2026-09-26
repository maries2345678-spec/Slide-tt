import React from 'react';
import { SlideData } from '../../types/presentation';
import { Target, HelpCircle, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface SlideObjectivesProps {
  slide: SlideData;
}

export const SlideObjectives: React.FC<SlideObjectivesProps> = ({ slide }) => {
  return (
    <div className="h-full flex flex-col justify-between py-4 px-4 md:px-10">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-900 uppercase">
            <span>{slide.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Định hướng nghiên cứu KHKT</span>
          </div>
          <span className="text-xs font-mono text-stone-400">SLIDE 03/12</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
          {slide.title}
        </h2>
        <p className="text-sm md:text-base text-stone-600 mt-1">
          {slide.headline}
        </p>
      </div>

      {/* Main Grid: 3 Research Questions + Scientific Hypothesis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-3">
        {/* Left: 3 Research Questions */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
            <span>Ba Câu Hỏi Nghiên Cứu Cốt Lõi</span>
          </div>

          {slide.researchQuestions?.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-stone-200/90 shadow-sm hover:border-amber-900/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-900/10 text-amber-900 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {item.number}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-stone-900 leading-snug">
                    {item.question}
                  </h3>
                  <div className="flex items-start gap-1.5 text-xs text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                    <ArrowRight className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                    <span><strong className="text-stone-900">Giải pháp:</strong> {item.answer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Scientific Hypothesis & Validation Framework */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1 flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-amber-800" />
            <span>Giả Thuyết Khoa Học & Chuẩn Đánh Giá</span>
          </div>

          <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl shadow-md border border-stone-800 relative overflow-hidden">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
              Giả Thuyết Trung Tâm (Core Hypothesis)
            </div>
            <p className="text-sm md:text-base font-serif italic text-stone-200 leading-relaxed">
              "{slide.hypothesis?.core}"
            </p>

            <div className="mt-4 pt-3 border-t border-stone-800 flex items-center gap-2 text-xs text-stone-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tiêu chuẩn thẩm định: {slide.hypothesis?.validationMetric}</span>
            </div>
          </div>

          {/* Research Objectives Triad */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
            <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
              3 Mục Tiêu Cụ Thể Cần Đạt
            </div>
            <ul className="space-y-1.5 text-xs text-stone-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
                <span><strong>Hệ thống hóa:</strong> 21 học liệu theo 5 nhóm chủ đề Cảnh quan đô thị lịch sử.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
                <span><strong>Đổi mới công nghệ:</strong> Tích hợp Prompt AI định hướng tư duy & Gamification.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
                <span><strong>Kiểm định thực nghiệm:</strong> Đánh giá mức độ tăng trưởng tri thức và độ hữu dụng.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer reference */}
      <div className="text-xs text-stone-400 border-t border-stone-200 pt-3">
        Cơ sở phương pháp: Thiết kế nghiên cứu bán thực nghiệm (Quasi-experimental Design) đối chứng trước - sau.
      </div>
    </div>
  );
};
