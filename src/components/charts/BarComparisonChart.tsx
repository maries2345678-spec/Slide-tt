import React, { useState } from 'react';

interface DataPoint {
  domain: string;
  preTest: number;
  postTest: number;
  delta: string;
  deltaValue: number;
  significance: string;
}

interface BarComparisonChartProps {
  data: DataPoint[];
  onSelectDomain?: (index: number) => void;
  selectedIndex?: number;
}

export const BarComparisonChart: React.FC<BarComparisonChartProps> = ({
  data,
  onSelectDomain,
  selectedIndex = 1,
}) => {
  const [viewMode, setViewMode] = useState<'comparison' | 'growth'>('comparison');

  // Chart coordinate math
  const chartHeight = 220;
  const minY = 85;
  const maxY = 100;
  const yRange = maxY - minY;

  const getY = (val: number) => {
    const clamped = Math.max(minY, Math.min(maxY, val));
    return chartHeight - ((clamped - minY) / yRange) * (chartHeight - 40) - 20;
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm flex flex-col justify-between h-full">
      {/* Chart Top Header & Mode Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-amber-900 font-semibold block">
            Biểu Đồ So Sánh Thực Nghiệm (N=100)
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Tỉ Lệ Trả Lời Đúng (%) Pre-Test vs Post-Test
          </h4>
        </div>

        <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs font-medium">
          <button
            onClick={() => setViewMode('comparison')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              viewMode === 'comparison'
                ? 'bg-white text-stone-900 shadow-sm font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Đối Chiếu Cột Kép
          </button>
          <button
            onClick={() => setViewMode('growth')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              viewMode === 'growth'
                ? 'bg-amber-900 text-white shadow-sm font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Mức Tăng Trưởng (+%)
          </button>
        </div>
      </div>

      {/* SVG Chart Canvas */}
      <div className="relative py-2 my-auto">
        {viewMode === 'comparison' ? (
          <div className="w-full">
            <svg viewBox="0 0 540 230" className="w-full h-auto overflow-visible select-none">
              {/* Horizontal Gridlines */}
              {[85, 90, 95, 100].map((tick) => {
                const y = getY(tick);
                return (
                  <g key={tick}>
                    <line
                      x1="45"
                      y1={y}
                      x2="520"
                      y2={y}
                      stroke="#E7E5E4"
                      strokeDasharray="4 4"
                      strokeWidth="1"
                    />
                    <text
                      x="40"
                      y={y + 4}
                      fill="#A8A29E"
                      fontSize="10"
                      fontFamily="monospace"
                      textAnchor="end"
                    >
                      {tick}%
                    </text>
                  </g>
                );
              })}

              {/* Baseline axis */}
              <line x1="45" y1={chartHeight} x2="520" y2={chartHeight} stroke="#D6D3D1" strokeWidth="1.5" />

              {/* Grouped Bars */}
              {data.map((item, idx) => {
                const groupX = 65 + idx * 115;
                const preY = getY(item.preTest);
                const postY = getY(item.postTest);
                const preH = chartHeight - preY;
                const postH = chartHeight - postY;
                const isSelected = selectedIndex === idx;

                return (
                  <g
                    key={idx}
                    className="cursor-pointer group"
                    onClick={() => onSelectDomain && onSelectDomain(idx)}
                  >
                    {/* Highlight Backdrop */}
                    {isSelected && (
                      <rect
                        x={groupX - 10}
                        y="10"
                        width="100"
                        height={chartHeight - 5}
                        rx="8"
                        fill="#F59E0B"
                        fillOpacity="0.08"
                        stroke="#B45309"
                        strokeOpacity="0.25"
                      />
                    )}

                    {/* Pre-test Bar */}
                    <rect
                      x={groupX}
                      y={preY}
                      width="36"
                      height={preH}
                      rx="4"
                      fill="#A8A29E"
                      className="transition-all duration-500 group-hover:fill-stone-500"
                    />
                    <text
                      x={groupX + 18}
                      y={preY - 6}
                      fill="#78716C"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {item.preTest.toFixed(1)}%
                    </text>

                    {/* Post-test Bar */}
                    <rect
                      x={groupX + 44}
                      y={postY}
                      width="36"
                      height={postH}
                      rx="4"
                      fill={idx === 1 ? '#9A3412' : '#C2410C'}
                      className="transition-all duration-500 group-hover:opacity-90"
                    />
                    <text
                      x={groupX + 62}
                      y={postY - 6}
                      fill="#9A3412"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {item.postTest.toFixed(1)}%
                    </text>

                    {/* Category Label under X axis */}
                    <text
                      x={groupX + 40}
                      y={chartHeight + 18}
                      fill={isSelected ? '#1C1917' : '#57534E'}
                      fontSize="10"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      textAnchor="middle"
                    >
                      {item.domain.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-3 text-xs pt-2 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-stone-400 inline-block" />
                <span className="text-stone-600">Trước can thiệp (Pre-test)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-amber-900 inline-block" />
                <span className="text-amber-950 font-semibold">Sau khi dùng HCMC CultureHub (Post-test)</span>
              </div>
            </div>
          </div>
        ) : (
          /* Growth Delta View */
          <div className="space-y-3 py-2">
            {data.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => onSelectDomain && onSelectDomain(idx)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-50/60 border-amber-900/40 shadow-sm'
                      : 'bg-stone-50 border-stone-200/80 hover:bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="font-semibold text-stone-900">{item.domain}</span>
                    <span className="font-mono font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded text-xs tabular-nums">
                      {item.delta}
                    </span>
                  </div>
                  {/* Delta growth bar */}
                  <div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-amber-800 h-full rounded-full transition-all duration-700"
                      style={{ width: `${Math.max(4, (item.deltaValue / 3.5) * 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-stone-500 mt-1 font-mono">
                    <span>{item.preTest.toFixed(1)}% → {item.postTest.toFixed(1)}%</span>
                    <span className="italic">{item.significance.slice(0, 45)}...</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Chart Footer callout */}
      <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
        <span>💡 Nhấp vào từng cột để xem phân tích chi tiết</span>
        <span className="font-mono text-amber-900 font-semibold">Văn hóa - Nghệ thuật tăng cao nhất: +3.3%</span>
      </div>
    </div>
  );
};
