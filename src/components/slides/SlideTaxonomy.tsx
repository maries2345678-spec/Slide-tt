import React, { useState } from 'react';
import { SlideData } from '../../types/presentation';
import { MapPin, Globe, Compass, Landmark, Building2, ShoppingBag, Palette, Waves } from 'lucide-react';

interface SlideTaxonomyProps {
  slide: SlideData;
}

export const SlideTaxonomy: React.FC<SlideTaxonomyProps> = ({ slide }) => {
  const [selectedSpaceIndex, setSelectedSpaceIndex] = useState<number>(0);

  const getSpaceIcon = (index: string) => {
    switch (index) {
      case '01': return <Landmark className="w-4 h-4 text-amber-900" />;
      case '02': return <Building2 className="w-4 h-4 text-stone-800" />;
      case '03': return <ShoppingBag className="w-4 h-4 text-amber-800" />;
      case '04': return <Palette className="w-4 h-4 text-rose-800" />;
      case '05': return <Waves className="w-4 h-4 text-blue-800" />;
      default: return <Compass className="w-4 h-4 text-stone-800" />;
    }
  };

  const activeSpace = slide.spaces?.[selectedSpaceIndex] || slide.spaces?.[0];

  return (
    <div className="h-full flex flex-col justify-between py-4 px-4 md:px-10">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-900 uppercase">
            <span>{slide.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Khung UNESCO Historic Urban Landscape (HUL)</span>
          </div>
          <span className="text-xs font-mono text-stone-400">SLIDE 04/12</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
          {slide.title}
        </h2>
        <p className="text-sm md:text-base text-stone-600 mt-1">
          {slide.headline}
        </p>
      </div>

      {/* Main Interactive Taxonomy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left Column: 5 Spaces Tabs / List */}
        <div className="lg:col-span-5 space-y-2">
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1 flex items-center justify-between">
            <span>5 Trụ Cột Không Gian Văn Hóa</span>
            <span className="font-mono text-amber-900 font-semibold">21 Học Liệu</span>
          </div>

          {slide.spaces?.map((space, idx) => {
            const isSelected = selectedSpaceIndex === idx;
            return (
              <div
                key={space.index}
                onClick={() => setSelectedSpaceIndex(idx)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-white border-amber-900/50 shadow-md ring-1 ring-amber-900/20'
                    : 'bg-stone-50/80 border-stone-200 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-amber-900 text-white' : 'bg-stone-200/70 text-stone-700'}`}>
                    {getSpaceIcon(space.index)}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-stone-400">Không gian {space.index}</div>
                    <div className={`text-sm font-semibold ${isSelected ? 'text-stone-900' : 'text-stone-700'}`}>
                      {space.name}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-mono px-2 py-1 bg-stone-100 rounded text-stone-600">
                  {space.items.length} điểm
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Space Deep Dive & Heritage Items */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          {activeSpace && (
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <div className="border-b border-stone-100 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-amber-900 tracking-wider">
                    Phân Tích Chi Tiết Không Gian {activeSpace.index}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    {activeSpace.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-amber-800" />
                  <span>TP.HCM · Bình Dương · BR-VT</span>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">
                  Giá trị cốt lõi & Mục tiêu giáo dục
                </span>
                <p className="text-sm text-stone-700 leading-relaxed bg-amber-50/50 p-3 rounded-xl border border-amber-100/60">
                  {activeSpace.focus}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-stone-400 block mb-2">
                  Danh mục học liệu tiêu biểu trong kho số ({activeSpace.items.length} học liệu)
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {activeSpace.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center gap-2 hover:bg-stone-100 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-800 shrink-0" />
                      <span className="text-xs md:text-sm font-medium text-stone-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Selection Principles Checklist */}
              <div className="pt-2 border-t border-stone-100 grid grid-cols-4 gap-2 text-center text-[11px] text-stone-500">
                <div className="bg-stone-50 p-1.5 rounded">1. Tính tiêu biểu</div>
                <div className="bg-stone-50 p-1.5 rounded">2. Tính đa dạng</div>
                <div className="bg-stone-50 p-1.5 rounded">3. Tính chính xác</div>
                <div className="bg-stone-50 p-1.5 rounded">4. Chuẩn THPT 2018</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer reference */}
      <div className="text-xs text-stone-400 border-t border-stone-200 pt-3 flex justify-between">
        <span>Tiếp cận Cảnh quan Đô thị Lịch sử (UNESCO Recommendation on the Historic Urban Landscape, 2011).</span>
        <span className="font-mono text-stone-500">21/21 Học liệu hoàn thiện</span>
      </div>
    </div>
  );
};
