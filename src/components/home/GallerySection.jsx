import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Camera } from 'lucide-react';

// Extracted Authentic Reunion & Dharohar Photos
import imgCourtyard from '@/assets/gallery/gallery_1_courtyard.png';
import imgDharoharStage from '@/assets/gallery/gallery_2_dharohar_stage.png';
import imgAlumniGathering from '@/assets/gallery/gallery_3_alumni_gathering.png';
import imgLampLighting from '@/assets/gallery/gallery_4_lamp_lighting.png';
import imgYellowCelebration from '@/assets/gallery/gallery_5_yellow_celebration.png';
import imgStampHeritage from '@/assets/gallery/gallery_6_stamp_heritage.png';
import imgFacultyMeet from '@/assets/gallery/gallery_7_faculty_meet.png';
import imgLawnReunion from '@/assets/gallery/gallery_8_lawn_reunion.png';
import imgCheeringAlumni from '@/assets/gallery/gallery_9_cheering_alumni.png';
import imgStageConclave from '@/assets/gallery/gallery_10_stage_conclave.png';
import imgKurtaFellowship from '@/assets/gallery/gallery_11_kurta_fellowship.png';
import imgTraditionalMeet from '@/assets/gallery/gallery_12_traditional_meet.png';
import imgHeritageSteps from '@/assets/gallery/gallery_13_heritage_steps.png';
import imgEveningDinner from '@/assets/gallery/gallery_14_evening_dinner.png';
import imgBatch2001Cohort from '@/assets/gallery/gallery_15_batch_2001_cohort.png';

export const galleryItems = [
  {
    id: 1,
    src: imgHeritageSteps,
    title: 'Heritage Steps Batch Reunion',
    subtitle: 'Classic gathering on the iconic red-brick steps of GCA Lucknow',
    category: 'campus',
    badge: 'Reunion Classic',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 2,
    src: imgDharoharStage,
    title: 'Dharohar 2026 Celebration Stage',
    subtitle: 'Silver & Ruby Jubilee batches felictation ceremony',
    category: 'dharohar',
    badge: 'Stage Ceremony',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 3,
    src: imgBatch2001Cohort,
    title: 'Silver Jubilee 2001 Cohort Sheet',
    subtitle: 'Commemorative postal cohort — Leaders in Practice & Design',
    category: 'cohort',
    badge: 'Batch 2001',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 4,
    src: imgCourtyard,
    title: 'Courtyard Pergola Gathering',
    subtitle: 'Alumni sharing fond memories under the campus pergolas',
    category: 'campus',
    badge: 'Campus Life',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 5,
    src: imgLampLighting,
    title: 'Deep Prajjwalan Ceremony',
    subtitle: 'Auspicious lamp lighting by patron architects and faculty',
    category: 'tradition',
    badge: 'Inauguration',
    aspect: 'aspect-square',
  },
  {
    id: 6,
    src: imgYellowCelebration,
    title: 'Dharohar Traditional Festivity',
    subtitle: 'Batchmates dressed in festive yellow kurtas celebrating Dharohar',
    category: 'dharohar',
    badge: 'Celebrations',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 7,
    src: imgStampHeritage,
    title: 'Heritage Corridors Postal Stamp',
    subtitle: 'Official GCAAA commemorative philatelic stamp edition',
    category: 'tradition',
    badge: 'Heritage Stamp',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 8,
    src: imgLawnReunion,
    title: 'Dharohar Lawn Fellowship',
    subtitle: 'Joyous gathering on the lush green campus lawns',
    category: 'dharohar',
    badge: 'Campus Greens',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 9,
    src: imgStageConclave,
    title: 'Grand Alumni Conclave',
    subtitle: 'Architects and faculty assemble on the main conclave podium',
    category: 'dharohar',
    badge: 'Grand Assembly',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 10,
    src: imgAlumniGathering,
    title: 'Batch Brotherhood & Smiles',
    subtitle: 'Moments of warmth and reconnecting across generations',
    category: 'campus',
    badge: 'Camaraderie',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 11,
    src: imgTraditionalMeet,
    title: 'Traditional Saree & Kurta Gala',
    subtitle: 'Celebrating Indian architectural culture and community',
    category: 'tradition',
    badge: 'Cultural Gala',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 12,
    src: imgEveningDinner,
    title: 'Reunion Gala Dinner & Mementos',
    subtitle: 'An evening of nostalgia, laughter, and lifelong connections',
    category: 'tradition',
    badge: 'Evening Gala',
    aspect: 'aspect-[4/3]',
  },
];

const categories = [
  { key: 'all', label: 'All Photos (सभी तस्वीरें)' },
  { key: 'dharohar', label: 'Dharohar Meets (धरोहर उत्सव)' },
  { key: 'campus', label: 'Campus & Steps (परिसर एवं बैच)' },
  { key: 'cohort', label: 'Silver Jubilee 2001 (बैच 2001)' },
  { key: 'tradition', label: 'Ceremonies & Gala (परंपरा एवं डिनर)' },
];

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
    }
  };

  const prevPhoto = (e) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredItems.length]);

  return (
    <section className="relative w-full bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 text-neutral-900 overflow-hidden">
      {/* Background Decorative Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ========================================================
            HEADER
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-red-500" />
            <span>MEMORIES & REUNIONS • यादें और धरोहर</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight uppercase">
            GLIMPSES OF <span className="text-red-600">DHAROHAR</span> & ALUMNI MEETS
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-red-600" />
            <span className="text-red-600 text-base">🏛️</span>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-red-600" />
          </div>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Relive cherished moments from past Dharohar conclaves, batch silver & ruby jubilees,
            traditional lamp lightings, and timeless reunions at the Government College of Architecture Lucknow.
          </p>

          {/* Filter Tabs */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all uppercase tracking-wider ${
                  activeCategory === cat.key
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 ring-2 ring-red-400/40'
                    : 'bg-neutral-100 border border-neutral-200 text-neutral-700 hover:border-red-500/50 hover:text-red-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================
            GALLERY GRID
        ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group cursor-pointer relative bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-red-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-red-100 hover:-translate-y-1 ${
                index >= 6 ? 'hidden sm:block' : ''
              }`}
            >
              <div className="p-2.5 sm:p-3 bg-white">
                <div className="relative overflow-hidden rounded-lg bg-neutral-100 aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Minimal Hover Overlay — sirf halka gradient + title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <h4 className="text-xs font-bold text-white line-clamp-1">
                      {item.title}
                    </h4>
                  </div>

                  {/* Expand Icon Badge */}
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 border border-neutral-200 text-neutral-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-red-600" />
                  </div>
                </div>

                {/* Bottom Card Caption */}
                <div className="pt-2.5 sm:pt-3 px-1 flex items-center justify-between">
                  <div className="truncate pr-2">
                    <p className="text-xs font-bold text-neutral-800 group-hover:text-red-600 transition-colors truncate">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                      {item.badge}
                    </p>
                  </div>
                  <span className="text-red-600 font-bold text-xs select-none">◆</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            BOTTOM ACTIONS
        ======================================================== */}
        <div className="mt-10 sm:mt-14 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-neutral-50 border border-neutral-200 p-4 sm:p-5 rounded-2xl shadow-sm w-full md:w-auto">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-neutral-900">Have photos from past Dharohar meets or college days?</p>
                <p className="text-[11px] sm:text-xs text-neutral-600">Share your batch photos to be featured in the official GCAAA archive.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full md:w-auto md:ml-6 shrink-0">
              <Link
                to="/gallery"
                className="w-full sm:w-auto text-center px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md shadow-red-600/30"
              >
                View Full Gallery
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center px-5 py-2.5 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-700 text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
              >
                Contribute Photos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          FULLSCREEN LIGHTBOX MODAL
      ======================================================== */}
      {selectedPhotoIndex !== null && filteredItems[selectedPhotoIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-8 animate-fadeIn"
        >
          {/* Top Bar with Title & Close */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white z-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-red-600 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                {filteredItems[selectedPhotoIndex].badge}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-neutral-300">
                {selectedPhotoIndex + 1} / {filteredItems.length}
              </span>
            </div>
            <button
              onClick={closeLightbox}
              className="p-1.5 sm:p-2 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:bg-red-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevPhoto}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-white hover:bg-red-600 transition-colors z-20"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextPhoto}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-white hover:bg-red-600 transition-colors z-20"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center px-2"
          >
            <div className="relative p-1.5 sm:p-2 bg-neutral-900 rounded-xl sm:rounded-2xl border-2 border-red-600/50 shadow-2xl overflow-hidden">
              <img
                src={filteredItems[selectedPhotoIndex].src}
                alt={filteredItems[selectedPhotoIndex].title}
                className="max-h-[60vh] sm:max-h-[70vh] max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Caption below image */}
            <div className="mt-3 sm:mt-4 text-center max-w-xl">
              <h3 className="text-sm sm:text-lg font-bold text-white">
                {filteredItems[selectedPhotoIndex].title}
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5 sm:mt-1">
                {filteredItems[selectedPhotoIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};