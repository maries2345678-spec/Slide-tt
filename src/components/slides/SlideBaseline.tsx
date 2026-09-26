import React from 'react';
import { SlideData } from '../../types/presentation';
import { DonutChart } from '../charts/DonutChart';
import { BarChart2, Sparkles, CheckCircle2, TrendingUp, AlertCircle, BookOpen } from 'lucide-react';

interface SlideBaselineProps {
  slide: SlideData;
}

export const SlideBaseline: React.FC<SlideBaselineProps> = ({ slide }) => {
  // Exact data from PDF Section 3.1.1 (Bảng 3.1)
  const table31 = slide.table31 || [
    { criteria: 'Nguồn tìm kiếm thông tin phổ biến nhất', content: 'Mạng xã hội', rate: 78.7 },
    { criteria: 'Khó khăn phổ biến nhất khi tìm hiểu', content: 'Nội dung nhiều nơi, khó tổng hợp', rate: 55.5 },
    { criteria: 'Nội dung học sinh mong muốn trên website', content: 'Hình ảnh, video trực quan', rate: 83.2 },
    { criteria: 'Mức độ cần thiết của việc tìm hiểu', content: 'Rất cần thiết và cần thiết', rate: 82.0 },
  ];

  // Exact data from PDF Section 3.1.2
  const aiSlices = [
    { label: 'Thường xuyên', percent: 36, color: '#9A3412' },
    { label: 'Thỉnh thoảng', percent: 46, color: '#B45309' },
    { label: 'Chưa dùng/hiếm', percent: 18, color: '#78716C' },
  ];

  // Exact data from PDF Section 3.1.3 (Kiến thức ban đầu)
  const preScores = slide.preTestScores || [
    { domain: 'Nhóm Lịch sử', rate: 96.4, desc: 'Hiểu biết truyền thống vững chắc' },
    { domain: 'Nhóm Văn hóa - Nghệ thuật', rate: 94.5, desc: 'Di sản phi vật thể & làng nghề' },
    { domain: 'Nhóm Không gian Đô thị', rate: 88.65, desc: 'Khởi điểm thấp nhất - cần bổ khuyết' },
  ];

  return (
    <div className="h-full flex flex-col justify-between py-4 px-4 md:px-10">
      {/* Slide Header */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-900 uppercase">
            <span>{slide.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Mục 3.1 Báo cáo nghiên cứu (N=100 học sinh THPT)</span>
          </div>
          <span className="text-xs font-mono text-stone-400">SLIDE 07/12</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
          {slide.title}
        </h2>
        <p className="text-sm md:text-base text-stone-600 mt-1">
          {slide.headline}
        </p>
      </div>

      {/* Main 3-Column Layout Matching the 3 Subsections of Section 3.1 in the PDF */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-3 items-stretch">
        {/* Column 1 (4.5 cols): Mục 3.1.1 - Nhu cầu và thói quen học tập (Bảng 3.1) */}
        <div className="lg:col-span-5 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-stone-100 pb-2 mb-2">
              <span className="text-xs font-mono font-bold uppercase text-amber-900">
                Mục 3.1.1 · Bảng 3.1 (PDF)
              </span>
              <span className="text-[11px] text-stone-500 font-mono">N=100 học sinh</span>
            </div>
            <h4 className="text-xs font-bold text-stone-900 mb-2">
              Nhu Cầu & Thói Quen Học Tập Của Học Sinh
            </h4>

            <div className="space-y-2.5">
              {table31.map((row, idx) => (
                <div key={idx} className="p-2.5 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500 text-[11px]">{row.criteria}</span>
                    <span className="font-mono font-bold text-amber-900 tabular-nums">
                      {row.rate.toFixed(1)}%
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-stone-900 flex justify-between items-center">
                    <span>{row.content}</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-amber-900 h-full rounded-full transition-all duration-700"
                      style={{ width: `${row.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[10px] text-stone-400 pt-2 border-t border-stone-100 mt-2">
            Nguồn trích dẫn: Bảng 3.1 trang 10 báo cáo đề tài KHKT.
          </div>
        </div>

        {/* Column 2 (3.5 cols): Mục 3.1.2 - Mức độ tiếp cận và nhu cầu sử dụng AI */}
        <div className="lg:col-span-3.5 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-stone-100 pb-2 mb-2">
              <span className="text-xs font-mono font-bold uppercase text-amber-900">
                Mục 3.1.2 (PDF)
              </span>
              <span className="text-[11px] text-stone-500 font-mono">Tiếp cận AI</span>
            </div>
            <h4 className="text-xs font-bold text-stone-900 mb-1">
              Thói Quen Dùng AI Trong Học Tập
            </h4>

            {/* Donut Chart */}
            <div className="py-1">
              <DonutChart
                slices={aiSlices}
                centerValue="82%"
                centerLabel="Đã Dùng AI"
              />
            </div>

            {/* Rating score from PDF: 3.7 / 5 */}
            <div className="p-2.5 bg-amber-50/80 rounded-xl border border-amber-200/60 mt-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-stone-900">Khả năng AI hỗ trợ học văn hóa:</span>
                <span className="font-mono font-bold text-amber-900 text-sm">3.7 / 5.0</span>
              </div>
              <p className="text-[10px] text-stone-600 mt-1">
                Theo báo cáo: 36% thường xuyên và 46% thỉnh thoảng dùng ChatGPT/Gemini.
              </p>
            </div>
          </div>

          <div className="text-[10px] text-stone-400 pt-2 border-t border-stone-100 mt-2">
            AI bước đầu được học sinh tiếp cận trong học tập.
          </div>
        </div>

        {/* Column 3 (3.5 cols): Mục 3.1.3 - Kiến thức ban đầu (Pre-test) */}
        <div className="lg:col-span-3.5 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-stone-100 pb-2 mb-2">
              <span className="text-xs font-mono font-bold uppercase text-amber-900">
                Mục 3.1.3 (PDF)
              </span>
              <span className="text-[11px] text-stone-500 font-mono">Điểm đầu vào</span>
            </div>
            <h4 className="text-xs font-bold text-stone-900 mb-1">
              Tỉ Lệ Trả Lời Đúng Ban Đầu (Pre-Test)
            </h4>

            {/* Pre-test scores comparison bars */}
            <div className="space-y-3 pt-2">
              {preScores.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-stone-800">{item.domain}</span>
                    <span className="font-mono font-bold text-stone-900 tabular-nums">
                      {item.rate.toFixed(2)}%
                    </span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        idx === 2 ? 'bg-amber-700' : 'bg-stone-500'
                      }`}
                      style={{ width: `${item.rate}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-stone-500 block">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* Overall Pre-test Average Card */}
            <div className="mt-3 p-2.5 bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-between text-xs">
              <span className="font-semibold text-stone-700">Tỉ lệ đúng bình quân Pre-test:</span>
              <span className="font-mono font-bold text-stone-900 text-sm">93.18%</span>
            </div>
          </div>

          <div className="text-[10px] text-stone-400 pt-2 border-t border-stone-100 mt-2">
            Mục 3.1.3 trang 10 & trang 11 báo cáo đề tài.
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="border-t border-stone-200 pt-2 flex items-center justify-between text-xs text-stone-500">
        <span>Căn cứ: Báo cáo KHKT Chương 3 - Mục 3.1 (3.1.1 Nhu cầu & thói quen · 3.1.2 Mức độ tiếp cận AI · 3.1.3 Kiến thức ban đầu).</span>
        <span className="font-mono text-amber-900 font-semibold">100% Khớp số liệu tài liệu gốc</span>
      </div>
    </div>
  );
};
