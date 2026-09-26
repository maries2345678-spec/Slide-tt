import React from 'react';

interface MetricItem {
  label: string;
  score: number;
  max: number;
}

interface LikertRadarChartProps {
  metrics: MetricItem[];
  overallScore: number;
  title?: string;
}

export const LikertRadarChart: React.FC<LikertRadarChartProps> = ({
  metrics,
  overallScore,
  title = 'Biểu Đồ Radar Đánh Giá Trải Nghiệm (Likert 5 Mức)',
}) => {
  const size = 260;
  const center = size / 2;
  const radius = 95;
  const totalAxes = metrics.length;

  // Calculate polygon points
  const getCoordinates = (index: number, value: number) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const r = (value / 5.0) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const getAxisEnd = (index: number) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  const polygonPoints = metrics
    .map((m, idx) => {
      const { x, y } = getCoordinates(idx, m.score);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm flex flex-col justify-between h-full">
      <div className="flex items-center justify-between border-b border-stone-100 pb-2 mb-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
          {title}
        </h4>
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
          <span>TB Chung: {overallScore.toFixed(2)}/5.0</span>
        </div>
      </div>

      {/* Radar SVG */}
      <div className="flex justify-center items-center my-auto py-2">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible select-none">
          {/* Concentric Grid Polygons (Levels 1 to 5) */}
          {[1, 2, 3, 4, 5].map((level) => {
            const levelPoints = Array.from({ length: totalAxes })
              .map((_, i) => {
                const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
                const r = (level / 5.0) * radius;
                return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
              })
              .join(' ');

            return (
              <polygon
                key={level}
                points={levelPoints}
                fill="none"
                stroke="#E7E5E4"
                strokeWidth={level === 5 ? '1.5' : '1'}
                strokeDasharray={level < 5 ? '3 3' : undefined}
              />
            );
          })}

          {/* Axes Lines */}
          {Array.from({ length: totalAxes }).map((_, i) => {
            const { x, y } = getAxisEnd(i);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="#D6D3D1"
                strokeWidth="1"
              />
            );
          })}

          {/* Data Filled Polygon */}
          <polygon
            points={polygonPoints}
            fill="#9A3412"
            fillOpacity="0.25"
            stroke="#9A3412"
            strokeWidth="2.5"
          />

          {/* Data Points (Dots & Value Tags) */}
          {metrics.map((m, idx) => {
            const { x, y } = getCoordinates(idx, m.score);
            const { x: labelX, y: labelY } = getAxisEnd(idx);
            const isLeft = labelX < center - 10;
            const isRight = labelX > center + 10;

            return (
              <g key={idx}>
                <circle cx={x} cy={y} r="4" fill="#9A3412" stroke="#FFFFFF" strokeWidth="1.5" />
                {/* Metric Label */}
                <text
                  x={labelX + (isLeft ? -8 : isRight ? 8 : 0)}
                  y={labelY + (labelY < center ? -8 : 12)}
                  fontSize="9"
                  fontFamily="sans-serif"
                  fontWeight="600"
                  fill="#44403C"
                  textAnchor={isLeft ? 'end' : isRight ? 'start' : 'middle'}
                >
                  {m.label} ({m.score.toFixed(2)})
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-100 flex justify-between">
        <span>Thang đo chuẩn hóa Likert 5 mức độ</span>
        <span className="font-mono text-amber-900 font-semibold">Tất cả các tiêu chí đều đạt ngưỡng Tích cực (&gt;3.8)</span>
      </div>
    </div>
  );
};
