/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import contentDataRaw from './data/contentData.json';
import { PresentationData, SlideData } from './types/presentation';
import { Navigation } from './components/Navigation';
import { SlideController } from './components/SlideController';
import { SlideIndexDrawer } from './components/SlideIndexDrawer';

import { SlideCover } from './components/slides/SlideCover';
import { SlideProblem } from './components/slides/SlideProblem';
import { SlideObjectives } from './components/slides/SlideObjectives';
import { SlideTaxonomy } from './components/slides/SlideTaxonomy';
import { SlideArchitecture } from './components/slides/SlideArchitecture';
import { SlideMethodology } from './components/slides/SlideMethodology';
import { SlideBaseline } from './components/slides/SlideBaseline';
import { SlideLearningImpact } from './components/slides/SlideLearningImpact';
import { SlideUserExperience } from './components/slides/SlideUserExperience';
import { SlideContributions } from './components/slides/SlideContributions';
import { SlideRoadmap } from './components/slides/SlideRoadmap';
import { SlideConclusion } from './components/slides/SlideConclusion';

const data = contentDataRaw as unknown as PresentationData;

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isIndexOpen, setIsIndexOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const slideRef = useRef<HTMLDivElement>(null);
  const currentSlide = data.slides[currentSlideIndex];

  // GSAP animation on slide change
  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, scale: 0.985, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
  }, [currentSlideIndex]);

  // Slideshow auto-play effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlideIndex((prev) => {
          if (prev < data.slides.length - 1) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 7000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.min(prev + 1, data.slides.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideIndex(data.slides.length - 1);
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        setIsIndexOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        setIsIndexOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Render individual slide component
  const renderSlideContent = (slide: SlideData) => {
    switch (slide.id) {
      case 'cover':
        return (
          <SlideCover
            slide={slide}
            projectInfo={data.projectInfo}
          />
        );
      case 'context-problem':
        return <SlideProblem slide={slide} />;
      case 'objectives-hypothesis':
        return <SlideObjectives slide={slide} />;
      case 'cultural-spaces':
        return <SlideTaxonomy slide={slide} />;
      case 'system-architecture-ai':
        return <SlideArchitecture slide={slide} />;
      case 'methodology-procedure':
        return <SlideMethodology slide={slide} />;
      case 'pretest-baseline':
        return <SlideBaseline slide={slide} />;
      case 'learning-impact-results':
        return <SlideLearningImpact slide={slide} />;
      case 'ux-ai-evaluation':
        return <SlideUserExperience slide={slide} />;
      case 'scientific-novelty-contributions':
        return <SlideContributions slide={slide} />;
      case 'limitations-roadmap':
        return <SlideRoadmap slide={slide} />;
      case 'conclusion-qa':
        return (
          <SlideConclusion
            slide={slide}
            projectInfo={data.projectInfo}
          />
        );
      default:
        return <SlideCover slide={slide} projectInfo={data.projectInfo} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-925 text-stone-900 flex flex-col justify-between selection:bg-amber-900 selection:text-white">
      {/* Top Bar with clean presentation controls */}
      <Navigation
        projectInfo={data.projectInfo}
        onOpenSlideIndex={() => setIsIndexOpen((prev) => !prev)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onJumpToSlide={(idx) => setCurrentSlideIndex(idx)}
      />

      {/* Main Presentation Stage */}
      <main className="flex-1 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden bg-gradient-to-b from-stone-900 via-stone-925 to-stone-950">
        <div className="w-full max-w-[1400px] flex items-center justify-center">
          {/* 16:9 Presentation Canvas Container */}
          <div
            ref={slideRef}
            className="w-full aspect-[16/9.3] md:aspect-[16/9] bg-[#FBF9F5] rounded-2xl md:rounded-3xl shadow-2xl border border-stone-700/60 flex flex-col justify-between overflow-hidden relative"
            style={{
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.75), 0 0 50px rgba(180, 83, 9, 0.08)',
            }}
          >
            {renderSlideContent(currentSlide)}
          </div>
        </div>
      </main>

      {/* Bottom Navigation Dock */}
      <SlideController
        currentIndex={currentSlideIndex}
        totalSlides={data.slides.length}
        onNext={() => setCurrentSlideIndex((prev) => Math.min(prev + 1, data.slides.length - 1))}
        onPrev={() => setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))}
        onJump={(idx) => setCurrentSlideIndex(idx)}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying((prev) => !prev)}
        onPrint={handlePrint}
        demoUrl={data.projectInfo.demoUrl}
      />

      {/* Slide Thumbnails Drawer (Triggered by 'Danh Mục Slides' button or 'M') */}
      <SlideIndexDrawer
        isOpen={isIndexOpen}
        onClose={() => setIsIndexOpen(false)}
        slides={data.slides}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={(idx) => setCurrentSlideIndex(idx)}
      />
    </div>
  );
}
