import React from 'react';

interface BarItem {
  label: string;
  rate: number;
  highlight?: boolean;
  subtext?: string;
}

interface HorizontalBarChartProps {
  title: string;
  subtitle?: string;
  items: BarItem[];
  benchmark?: number;
  benchmarkLabel?: string;
}

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  title,
  subtitle,
  items,
  benchmark,
  benchmarkLabel,
}) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between border-b border-stone-100 pb-2 mb-3">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
              {title}
            </h4>
            {subtitle && (
              <p className="text-[11px] text-stone-500 mt-0.5">{subtitle}</p>
            )}
          </div>
          {benchmark && (
            <div className="text-[11px] font-mono text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
              {benchmarkLabel || 'Điểm mốc'}: {benchmark}%
            </div>
          )}
        </div>

        {/* Bars List */}
        <div className="space-y-3.5 pt-1">
          {items.map((item, idx) => {
            const isTop = idx === 0 || item.highlight;
            return (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className={`truncate max-w-[280px] ${isTop ? 'font-semibold text-stone-900' : 'text-stone-700'}`}>
                    {item.label}
                  </span>
                  <span className={`font-mono tabular-nums ${isTop ? 'font-bold text-amber-900' : 'font-medium text-stone-600'}`}>
                    {item.rate.toFixed(1)}%
                  </span>
                </div>

                <div className="relative w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      isTop ? 'bg-amber-900' : 'bg-stone-400'
                    }`}
                    style={{ width: `${Math.min(100, item.rate)}%` }}
                  />
                  {benchmark && (
                    <div
                      className="absolute top-0 bottom-0 w-[2px] bg-red-400 z-10"
                      style={{ left: `${benchmark}%` }}
                    />
                  )}
                </div>

                {item.subtext && (
                  <p className="text-[10px] text-stone-400">{item.subtext}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-[11px] text-stone-400 pt-3 border-t border-stone-100 mt-3 flex justify-between">
        <span>N=100 học sinh THPT Bình Phú</span>
        <span className="font-mono">Đo lường định lượng</span>
      </div>
    </div>
  );
};
