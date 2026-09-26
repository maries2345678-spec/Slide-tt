import React, { useState } from 'react';
import { SlideData } from '../../types/presentation';
import { BarComparisonChart } from '../charts/BarComparisonChart';
import { TrendingUp, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface SlideLearningImpactProps {
  slide: SlideData;
}

export const SlideLearningImpact: React.FC<SlideLearningImpactProps> = ({ slide }) => {
  const [selectedDomainIndex, setSelectedDomainIndex] = useState<number>(1); // Highlight Cultural Arts by default

  const tableData = slide.comparisonTable || [];
  const selectedDomain = tableData[selectedDomainIndex] || tableData[1];

  return (
    <div className="h-full flex flex-col justify-between py-4 px-4 md:px-10">
      {/* Slide Header Banner */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-900 uppercase">
            <span>{slide.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Đối chiếu Pre-test vs Post-test (N=100)</span>
          </div>
          <span className="text-xs font-mono text-stone-400">SLIDE 08/12</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 mt-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900">
            {slide.title}
          </h2>
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold font-mono">
            <TrendingUp className="w-4 h-4" />
            <span>Toàn hệ thống: +1.59% (93.18% → 94.77%)</span>
          </div>
        </div>
        <p className="text-sm md:text-base text-stone-600 mt-1">
          {slide.headline}
        </p>
      </div>

      {/* Main 2-Column Presentation Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-3 items-stretch">
        {/* Left Column (7 cols): The Interactive SVG Dual-Bar Chart */}
        <div className="lg:col-span-7 h-full">
          <BarComparisonChart
            data={tableData}
            selectedIndex={selectedDomainIndex}
            onSelectDomain={(idx) => setSelectedDomainIndex(idx)}
          />
        </div>

        {/* Right Column (5 cols): In-depth Analytical Evidence */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {/* Active Domain Deep-Dive Card */}
          <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-md">
            <div className="flex items-center justify-between text-xs text-amber-400 mb-1">
              <span className="uppercase tracking-widest font-mono">Điểm Nhấn Thực Nghiệm</span>
              <span className="font-mono font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                {selectedDomain.delta}
              </span>
            </div>
            <h3 className="text-base font-serif font-bold text-white mb-2">
              {selectedDomain.domain}
            </h3>

            <div className="grid grid-cols-2 gap-3 py-2 border-y border-stone-800 text-xs">
              <div>
                <span className="text-stone-400 block text-[11px]">Trước can thiệp</span>
                <span className="text-2xl font-mono font-bold text-stone-300 tabular-nums">
                  {selectedDomain.preTest.toFixed(1)}%
                </span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Sau can thiệp</span>
                <span className="text-2xl font-mono font-bold text-amber-400 tabular-nums">
                  {selectedDomain.postTest.toFixed(1)}%
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-300 mt-3 leading-relaxed">
              💡 <strong>Phân tích khoa học:</strong> {selectedDomain.significance}
            </p>
          </div>

          {/* 3 Core Scientific Deductions */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm space-y-2">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
              3 Luận Điểm Chứng Minh Giả Thuyết Khoa Học
            </span>
            <ul className="space-y-1.5 text-xs text-stone-700">
              <li className="flex items-start gap-2">
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-stone-900">Văn hóa - Nghệ thuật tăng vượt trội (+3.3%):</strong> Âm thanh Đờn ca tài tử và hình ảnh sơn mài giúp chuyển hóa kiến thức phi vật thể trừu tượng thành trải nghiệm trực quan.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-stone-900">Không gian đô thị vượt mốc 90% (+1.35%):</strong> Khắc phục lỗ hổng kiến thức liên vùng về Bình Dương và Bà Rịa - Vũng Tàu.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-stone-900">Tính bền vững:</strong> Điểm số tăng đồng đều trên toàn bộ 100 học sinh, không có hiện tượng học vẹt nhờ phương pháp gợi mở tư duy của Ba Son AI.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="border-t border-stone-200 pt-2 flex items-center justify-between text-xs text-stone-500">
        <span>Bảng 3.2: So sánh tỉ lệ đúng theo nhóm kiến thức (Pre-test vs Post-test).</span>
        <span className="font-mono text-stone-700">Mức độ tin cậy P &lt; 0.05</span>
      </div>
    </div>
  );
};
