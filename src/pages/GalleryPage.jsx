import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Filter, Award, ArrowRight } from 'lucide-react';

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
import imgNiraj from '@/assets/gallery/gallery_16_alumni_niraj.png';
import imgPooja from '@/assets/gallery/gallery_17_alumni_pooja.png';
import imgSandeep from '@/assets/gallery/gallery_18_alumni_sandeep.png';

export const allGalleryItems = [
  {
    id: 1,
    src: imgHeritageSteps,
    title: 'Heritage Steps Batch Reunion',
    subtitle: 'Classic gathering on the iconic red-brick steps of GCA Lucknow',
    category: 'campus',
    badge: 'Campus Steps',
    year: '2024',
  },
  {
    id: 2,
    src: imgDharoharStage,
    title: 'Dharohar Stage Celebration',
    subtitle: 'Silver & Ruby Jubilee batches felicitation with ceremony backdrop',
    category: 'dharohar',
    badge: 'Main Stage',
    year: '2025',
  },
  {
    id: 3,
    src: imgBatch2001Cohort,
    title: 'Silver Jubilee 2001 Cohort Sheet',
    subtitle: 'Commemorative philatelic cohort honoring Batch 2001 architects',
    category: 'cohort',
    badge: 'Batch 2001',
    year: '2001 - 2026',
  },
  {
    id: 4,
    src: imgCourtyard,
    title: 'Courtyard Pergola Gathering',
    subtitle: 'Alumni sharing memories and laughter under campus pergola shades',
    category: 'campus',
    badge: 'Courtyard',
    year: '2023',
  },
  {
    id: 5,
    src: imgLampLighting,
    title: 'Deep Prajjwalan Ceremony',
    subtitle: 'Inaugural lamp lighting by distinguished alumni architects & faculty',
    category: 'ceremony',
    badge: 'Inaugural',
    year: '2025',
  },
  {
    id: 6,
    src: imgYellowCelebration,
    title: 'Dharohar Traditional Festivity',
    subtitle: 'Batchmates in matching yellow ethnic kurtas on the conclave stage',
    category: 'dharohar',
    badge: 'Festive Meet',
    year: '2025',
  },
  {
    id: 7,
    src: imgStampHeritage,
    title: 'Heritage Corridors Postal Stamp',
    subtitle: 'Commemorative postage stamp depicting college arched corridors',
    category: 'heritage',
    badge: 'Postal Heritage',
    year: '2001 - 2026',
  },
  {
    id: 8,
    src: imgLawnReunion,
    title: 'Dharohar Green Lawn Gathering',
    subtitle: 'Alumni groups enjoying informal campus conversations on lush greens',
    category: 'campus',
    badge: 'Campus Greens',
    year: '2024',
  },
  {
    id: 9,
    src: imgStageConclave,
    title: 'Grand Alumni Conclave',
    subtitle: 'All participating delegates and faculty on the auditorium dais',
    category: 'dharohar',
    badge: 'Conclave Assembly',
    year: '2025',
  },
  {
    id: 10,
    src: imgAlumniGathering,
    title: 'Brotherhood & Shared Smiles',
    subtitle: 'Unbroken bonds of batchmates reconnecting across decades',
    category: 'campus',
    badge: 'Reunion Bond',
    year: '2024',
  },
  {
    id: 11,
    src: imgFacultyMeet,
    title: 'Senior Faculty & Architect Patrons',
    subtitle: 'Esteemed teachers and architects standing together at the conclave',
    category: 'heritage',
    badge: 'Faculty Patrons',
    year: '2025',
  },
  {
    id: 12,
    src: imgTraditionalMeet,
    title: 'Cultural Traditional Gala',
    subtitle: 'Architects and families in formal ethnic attire celebrating heritage',
    category: 'ceremony',
    badge: 'Cultural Night',
    year: '2024',
  },
  {
    id: 13,
    src: imgEveningDinner,
    title: 'Alumni Banquet & Dinner',
    subtitle: 'An evening of nostalgic reflections, mementos, and musical evening',
    category: 'ceremony',
    badge: 'Gala Dinner',
    year: '2025',
  },
  {
    id: 14,
    src: imgCheeringAlumni,
    title: 'Joyful Moments & Cheering',
    subtitle: 'Candid smiles during the batch felicitation ceremony',
    category: 'dharohar',
    badge: 'Celebrations',
    year: '2025',
  },
  {
    id: 15,
    src: imgKurtaFellowship,
    title: 'Senior Alumni Fellowship',
    subtitle: 'Traditional kurta gathering celebrating architectural brotherhood',
    category: 'ceremony',
    badge: 'Fellowship',
    year: '2024',
  },
  {
    id: 16,
    src: imgNiraj,
    title: 'Ar. Niraj Dubey',
    subtitle: 'Batch 2001 Silver Jubilee Cohort — Leaders in Practice',
    category: 'cohort',
    badge: 'Silver Jubilee',
    year: 'Batch 2001',
  },
  {
    id: 17,
    src: imgPooja,
    title: 'Ar. Pooja Singh',
    subtitle: 'Batch 2001 Silver Jubilee Cohort — Institutional Pride',
    category: 'cohort',
    badge: 'Silver Jubilee',
    year: 'Batch 2001',
  },
  {
    id: 18,
    src: imgSandeep,
    title: 'Ar. Sandeep Singh',
    subtitle: 'Batch 2001 Silver Jubilee Cohort — Design Innovation',
    category: 'cohort',
    badge: 'Silver Jubilee',
    year: 'Batch 2001',
  },
];

const categoryTabs = [
  { key: 'all', label: 'All Photos (सभी)' },
  { key: 'dharohar', label: 'Dharohar Meets' },
  { key: 'campus', label: 'Campus & Steps' },
  { key: 'cohort', label: 'Silver Jubilee 2001' },
  { key: 'ceremony', label: 'Ceremonies & Gala' },
  { key: 'heritage', label: 'Heritage & Faculty' },
];

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? allGalleryItems
    : allGalleryItems.filter((item) => item.category === activeCategory);

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

  return (
    <div className="w-full bg-neutral-950 text-white min-h-screen">
      {/* ========================================================
          HERO BANNER
      ======================================================== */}
      <section className="relative bg-gradient-to-b from-black via-neutral-900 to-neutral-950 border-b border-neutral-800 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/70 border border-red-800/60 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-red-500" />
            <span>ARCHIVES & DHAROHAR REUNIONS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            GCAAA PHOTO <span className="text-red-500">GALLERY</span> & AWARDS
          </h1>

          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A visual retrospective of Government College of Architecture Lucknow: memorable batch reunions,
            Dharohar conclaves, Silver & Ruby Jubilees, campus traditions, and distinguished alumni cohorts.
          </p>

          {/* Categories Pill Filters */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categoryTabs.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  activeCategory === cat.key
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/40 ring-2 ring-red-400/50'
                    : 'bg-neutral-900/90 border border-neutral-800 text-neutral-300 hover:border-red-600/50 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          GALLERY GRID
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-800">
          <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Showing <span className="text-red-500 font-extrabold">{filteredItems.length}</span> Photographs
          </p>
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span>Click photo to enlarge</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer relative bg-neutral-900/90 rounded-xl overflow-hidden border border-neutral-800 hover:border-red-600/70 transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/40 hover:-translate-y-1"
            >
              <div className="p-3 bg-neutral-900">
                <div className="relative overflow-hidden rounded-lg bg-black aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Red Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-black/60 px-2 py-0.5 rounded w-max border border-red-500/40 mb-1">
                      {item.badge}
                    </span>
                    <h4 className="text-xs font-bold text-white line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-neutral-300 line-clamp-1 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5 text-red-400" />
                  </div>
                </div>

                <div className="pt-3 px-1 flex items-center justify-between">
                  <div className="truncate pr-2">
                    <p className="text-xs font-bold text-neutral-200 group-hover:text-red-400 transition-colors truncate">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                      {item.badge} • {item.year}
                    </p>
                  </div>
                  <span className="text-red-600 font-bold text-xs select-none">◆</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            CONTRIBUTE CALL TO ACTION
        ======================================================== */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-red-950/40 via-neutral-900 to-red-950/40 border border-red-900/50 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-red-600/30">
            <Sparkles className="w-7 h-7" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Help Us Preserve 50+ Years of Memories
          </h3>
          <p className="mt-3 text-neutral-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Do you have rare batch photos, annual architectural festival memories, or convocation pictures?
            Submit them to the GCAAA editorial team to be archived forever.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-wider uppercase rounded-lg shadow-lg shadow-red-600/30 transition-all"
            >
              Submit Batch Photos <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-white text-neutral-200 text-xs font-bold tracking-wider uppercase rounded-lg transition-all"
            >
              Upcoming Dharohar 2026 Meet
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          FULLSCREEN LIGHTBOX MODAL
      ======================================================== */}
      {selectedPhotoIndex !== null && filteredItems[selectedPhotoIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">
                {filteredItems[selectedPhotoIndex].badge}
              </span>
              <span className="text-xs font-semibold text-neutral-300">
                {selectedPhotoIndex + 1} / {filteredItems.length}
              </span>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:bg-red-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-white hover:bg-red-600 transition-colors z-20"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-white hover:bg-red-600 transition-colors z-20"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
          >
            <div className="relative p-2 bg-neutral-900 rounded-2xl border-2 border-red-600/50 shadow-2xl overflow-hidden">
              <img
                src={filteredItems[selectedPhotoIndex].src}
                alt={filteredItems[selectedPhotoIndex].title}
                className="max-h-[70vh] max-w-full object-contain rounded-lg"
              />
            </div>

            <div className="mt-4 text-center max-w-xl">
              <h3 className="text-lg font-bold text-white">
                {filteredItems[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {filteredItems[selectedPhotoIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
