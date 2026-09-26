import React from 'react';
import { SlideData } from '../../types/presentation';
import { LikertRadarChart } from '../charts/LikertRadarChart';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

interface SlideUserExperienceProps {
  slide: SlideData;
}

export const SlideUserExperience: React.FC<SlideUserExperienceProps> = ({ slide }) => {
  // Radar metrics mapped from survey Table 3.3
  const radarMetrics = [
    { label: 'Giao diện & Học liệu', score: 4.04, max: 5.0 },
    { label: 'Hứng thú học tập', score: 4.00, max: 5.0 },
    { label: 'Hoạt động cùng AI', score: 3.87, max: 5.0 },
    { label: 'Prompt AI dễ dùng', score: 3.88, max: 5.0 },
    { label: 'Prompt AI hiệu quả', score: 3.86, max: 5.0 },
  ];

  return (
    <div className="h-full flex flex-col justify-between py-4 px-4 md:px-10">
      {/* Slide Header */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-900 uppercase">
            <span>{slide.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Khảo sát Post-test Thang đo Likert 5 Mức (N=100)</span>
          </div>
          <span className="text-xs font-mono text-stone-400">SLIDE 09/12</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 mt-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900">
            {slide.title}
          </h2>
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-950 px-3 py-1 rounded-full text-xs font-bold font-mono">
            <Star className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
            <span>Điểm trung bình toàn diện: 3.97 / 5.00</span>
          </div>
        </div>
        <p className="text-sm md:text-base text-stone-600 mt-1">
          {slide.headline}
        </p>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-3 items-stretch">
        {/* Left Column: Radar Chart */}
        <div className="lg:col-span-6 h-full">
          <LikertRadarChart
            metrics={radarMetrics}
            overallScore={3.97}
            title="Đồ Thị Radar 5 Trọng Số Trải Nghiệm Học Sinh"
          />
        </div>

        {/* Right Column: 3 Likert Clusters + Student Voices */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
          {/* 3 Metric Score Strips */}
          <div className="space-y-2">
            <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-stone-900">01. Giao diện và Học liệu trực quan</div>
                <div className="text-[11px] text-stone-500">Bố cục Modular, infographic và bản đồ số</div>
              </div>
              <div className="text-right">
                <span className="text-xl font-mono font-bold text-amber-900 tabular-nums">4.04</span>
                <span className="text-xs text-stone-400">/5.0</span>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-stone-900">02. Mức độ Hứng thú & Tự học</div>
                <div className="text-[11px] text-stone-500">Kích thích tinh thần tìm hiểu di sản địa phương</div>
              </div>
              <div className="text-right">
                <span className="text-xl font-mono font-bold text-amber-900 tabular-nums">4.00</span>
                <span className="text-xs text-stone-400">/5.0</span>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-stone-900">03. Hoạt động tương tác cùng AI</div>
                <div className="text-[11px] text-stone-500">Prompt AI hỗ trợ đào sâu và cố vấn học tập</div>
              </div>
              <div className="text-right">
                <span className="text-xl font-mono font-bold text-amber-900 tabular-nums">3.87</span>
                <span className="text-xs text-stone-400">/5.0</span>
              </div>
            </div>
          </div>

          {/* Qualitative Student Feedback Cards */}
          <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/90 text-xs text-stone-700 space-y-2">
            <div className="flex items-center gap-1.5 font-semibold text-stone-900 uppercase text-[11px]">
              <MessageSquareQuote className="w-4 h-4 text-amber-800" />
              <span>Phản hồi định tính tiêu biểu từ học sinh</span>
            </div>
            <p className="italic text-stone-600 bg-white p-2.5 rounded-lg border border-stone-100">
              "Giao diện trực quan, đọc không bị ngợp thông tin như sách chữ. Trợ lý AI gợi ý cách tư duy lịch sử rất thông minh thay vì đưa ngay đáp án."
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-stone-200 pt-2 flex items-center justify-between text-xs text-stone-500">
        <span>Bảng 3.3: Kết quả đánh giá sản phẩm của học sinh (Thang đo 5 mức).</span>
        <span className="font-mono text-stone-700">Độ tin cậy Cronbach's Alpha &gt; 0.82</span>
      </div>
    </div>
  );
};
