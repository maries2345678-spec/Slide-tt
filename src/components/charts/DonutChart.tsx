import React from 'react';

interface Slice {
  label: string;
  percent: number;
  color: string;
}

interface DonutChartProps {
  slices: Slice[];
  centerLabel?: string;
  centerValue?: string;
  title?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  slices,
  centerLabel = 'Tổng cộng',
  centerValue = '100%',
  title,
}) => {
  const size = 180;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercent = 0;

  return (
    <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-sm flex flex-col items-center justify-between">
      {title && (
        <div className="w-full text-left text-xs font-semibold uppercase tracking-wider text-stone-700 border-b border-stone-100 pb-2 mb-2">
          {title}
        </div>
      )}

      {/* SVG Donut */}
      <div className="relative flex items-center justify-center my-2">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
          {/* Base background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#F5F5F4"
            strokeWidth={strokeWidth}
          />
          {/* Slices */}
          {slices.map((slice, i) => {
            const strokeDasharray = `${(slice.percent / 100) * circumference} ${circumference}`;
            const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
            accumulatedPercent += slice.percent;

            return (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={slice.color}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-700 hover:opacity-80"
              />
            );
          })}
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="text-xl font-mono font-bold text-stone-900 tabular-nums">
            {centerValue}
          </span>
          <span className="text-[10px] text-stone-500 uppercase tracking-wider">
            {centerLabel}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="w-full space-y-1.5 pt-2 border-t border-stone-100 text-xs">
        {slices.map((slice, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: slice.color }}
              />
              <span className="text-stone-700 text-[11px] truncate max-w-[130px]">
                {slice.label}
              </span>
            </div>
            <span className="font-mono font-bold text-stone-900 tabular-nums text-xs">
              {slice.percent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
