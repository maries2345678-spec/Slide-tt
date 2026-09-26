import React from 'react';
import { SlideData } from '../../types/presentation';
import { HorizontalBarChart } from '../charts/HorizontalBarChart';
import { Layers, Smartphone, BookOpen, AlertCircle } from 'lucide-react';

interface SlideProblemProps {
  slide: SlideData;
}

export const SlideProblem: React.FC<SlideProblemProps> = ({ slide }) => {
  // Chart data from survey Table 3.1
  const barrierChartData = [
    { label: 'Nội dung phân tán, khó tổng hợp', rate: 55.5, highlight: true, subtext: 'Rào cản lớn nhất của học sinh THPT' },
    { label: 'Thiếu hình ảnh, video minh họa', rate: 48.0, highlight: false, subtext: 'Tài liệu chủ yếu là văn bản dài' },
    { label: 'Nội dung chưa hấp dẫn, khô khan', rate: 42.5, highlight: false, subtext: 'Chưa gắn liền với trải nghiệm thực tế' },
    { label: 'Khó tìm nguồn thông tin tin cậy', rate: 39.0, highlight: false, subtext: 'Dễ tiếp xúc thông tin chưa kiểm chứng' },
    { label: 'Không biết bắt đầu tìm hiểu từ đâu', rate: 34.5, highlight: false, subtext: 'Thiếu lộ trình học tập di sản có cấu trúc' },
  ];

  return (
    <div className="h-full flex flex-col justify-between py-4 px-4 md:px-10">
      {/* Slide Header Banner */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-900 uppercase">
            <span>{slide.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Khảo sát tiền trạm N=100</span>
          </div>
          <span className="text-xs font-mono text-stone-400">SLIDE 02/12</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
          {slide.title}
        </h2>
        <p className="text-sm md:text-base text-stone-600 mt-1">
          {slide.headline}
        </p>
      </div>

      {/* Main 2-Column Presentation Layout: Left = Key Insights & Contradictions, Right = Data Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-3 items-stretch">
        {/* Left Column: 4 Metrics & 3 Contradictions */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
          {/* 4 Quantified Pain Points Cards */}
          <div className="grid grid-cols-2 gap-3">
            {slide.stats?.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-mono font-bold text-amber-900 tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-stone-900 mt-0.5">
                    {stat.label}
                  </div>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div
                    className="bg-amber-800 h-full rounded-full"
                    style={{ width: stat.value }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 3 Contradictions in local culture education */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
              3 Mâu Thuẫn Cốt Lõi Cần Giải Quyết
            </span>

            <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-amber-900/10 text-amber-900 shrink-0 mt-0.5">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-stone-900">Nhu cầu cao (82%) vs Học liệu phân tán (55.5%): </span>
                <span className="text-stone-600">Học sinh mong muốn tìm hiểu nhưng không có nguồn học liệu số chính thống, tập trung.</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-amber-900/10 text-amber-900 shrink-0 mt-0.5">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-stone-900">Thói quen trực quan (83.2%) vs Tài liệu đơn điệu: </span>
                <span className="text-stone-600">Học sinh chuộng infographic, video, bản đồ thay vì tài liệu thuần chữ truyền thống.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dedicated Chart Visualization */}
        <div className="lg:col-span-6 h-full">
          <HorizontalBarChart
            title="Khó Khăn Phổ Biến Khi Tìm Hiểu Văn Hóa Địa Phương"
            subtitle="Tỉ lệ phản hồi khảo sát trước can thiệp (Bảng 3.1)"
            items={barrierChartData}
            benchmark={50}
            benchmarkLabel="Ngưỡng đa số"
          />
        </div>
      </div>

      {/* Slide Footer */}
      <div className="border-t border-stone-200 pt-2 flex items-center justify-between text-xs text-stone-500">
        <span>Cơ sở thực tiễn: Báo cáo khảo sát học sinh THPT Bình Phú (Tháng 9/2026).</span>
        <span className="font-mono text-amber-900 font-semibold">Tỉ lệ cần thiết: 82.0%</span>
      </div>
    </div>
  );
};
