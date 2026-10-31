import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Camera, Loader2 } from 'lucide-react';
import { getPublishedGalleryPhotos } from '@/Api/galleryApi';

export const galleryItems = [];

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [categories, setCategories] = useState([
    { key: 'all', label: 'All Photos', count: 0 },
    { key: 'gbm', label: 'GBM 2025', count: 0 },
    { key: 'dharohar', label: 'Dharohar & Reunions', count: 0 },
  ]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);

  const ITEMS_PER_PAGE = 12;

  // Fetch photos from backend
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    const params = {
      page: currentPage,
      limit: ITEMS_PER_PAGE,
    };

    if (activeCategory && activeCategory !== 'all') {
      params.category = activeCategory;
    }

    getPublishedGalleryPhotos(params)
      .then((res) => {
        if (!isMounted) return;
        if (res && res.success && Array.isArray(res.data)) {
          const formatted = res.data.map((p) => ({
            ...p,
            id: p.id || p._id,
            src: p.imageUrl || p.url,
            title: p.title || p.caption || '',
          }));
          setPhotos(formatted);

          if (res.pagination) {
            setTotalPages(res.pagination.totalPages || 1);
            setTotalPhotos(res.pagination.total || 0);
          }

          if (Array.isArray(res.categories) && res.categories.length > 0) {
            setCategories(res.categories);
          }
        }
      })
      .catch((err) => {
        console.error('Failed to load gallery photos in home section:', err);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [activeCategory, currentPage]);

  // Switch category and reset page
  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

  // Change page and smooth scroll to section header
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (sectionRef.current) {
      const topOffset = sectionRef.current.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null && photos.length > 0) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const prevPhoto = (e) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null && photos.length > 0) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + photos.length) % photos.length
      );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 text-neutral-900 overflow-hidden"
    >
      {/* Background Decorative Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ========================================================
            HEADER
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-red-500" />
            <span>MEMORIES &amp; REUNIONS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight uppercase">
            GLIMPSES OF <span className="text-red-600">DHAROHAR</span> &amp; ALUMNI MEETS
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-red-600" />
            <span className="text-red-600 text-base">🏛️</span>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-red-600" />
          </div>

          {/* Filter Tabs with Live Photo Counts */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              const count = cat.count !== undefined ? cat.count : 0;
              return (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all uppercase tracking-wider flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 ring-2 ring-red-400/40'
                      : 'bg-neutral-100 border border-neutral-200 text-neutral-700 hover:border-red-500/50 hover:text-red-600'
                  }`}
                >
                  <span>{cat.label}</span>
                  {count > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                        isActive
                          ? 'bg-white text-red-600'
                          : 'bg-neutral-200/80 text-neutral-600'
                      }`}
                      style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            GALLERY GRID (Pure Photos without text, 12 per page)
        ======================================================== */}
        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3 text-neutral-500">
            <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
            <p className="text-xs font-semibold">Loading photographs...</p>
          </div>
        ) : photos.length === 0 ? (
          <div className="py-16 text-center text-neutral-500 text-sm font-medium">
            No photographs found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {photos.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer relative bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200/90 hover:border-red-600 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 aspect-[4/3]"
              >
                <img
                  src={item.src}
                  alt={item.title || ''}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Hover Dark Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/95 backdrop-blur-xs text-red-600 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================
            PAGINATION CONTROLS (12 items per page)
        ======================================================== */}
        {totalPages > 1 && (
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 pt-6">
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              Showing Page <span className="font-bold text-neutral-900">{currentPage}</span> of{' '}
              <span className="font-bold text-neutral-900">{totalPages}</span> ({totalPhotos} photos)
            </p>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || isLoading}
                className="inline-flex items-center gap-1 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-bold border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4 text-neutral-600" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                if (
                  pageNum === 1 ||
                  pageNum === totalPages ||
                  (pageNum >= currentPage - 2 && pageNum <= currentPage + 2)
                ) {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`min-w-[34px] sm:min-w-[38px] h-[34px] sm:h-[38px] rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center transition-all cursor-pointer ${
                        pageNum === currentPage
                          ? 'bg-red-600 text-white shadow-md shadow-red-600/30 ring-2 ring-red-400/40 font-black'
                          : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-red-50/50 hover:text-red-600 hover:border-red-300 shadow-xs'
                      }`}
                      style={{
                        fontFamily:
                          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        fontVariantNumeric: 'lining-nums tabular-nums',
                      }}
                    >
                      {pageNum}
                    </button>
                  );
                }
                if (pageNum === currentPage - 3 || pageNum === currentPage + 3) {
                  return (
                    <span key={pageNum} className="text-neutral-400 text-xs px-1">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || isLoading}
                className="inline-flex items-center gap-1 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-bold border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer"
                aria-label="Next Page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            BOTTOM ACTIONS
        ======================================================== */}
        <div className="mt-10 sm:mt-14 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-neutral-50 border border-neutral-200 p-4 sm:p-5 rounded-2xl shadow-sm w-full">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-neutral-900">
                  Have photos from past Dharohar meets or college days?
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-600">
                  Share your batch photos to be featured in the official GCAAA archive.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full md:w-auto shrink-0">
              <Link
                to="/gallery"
                className="w-full sm:w-auto text-center px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md shadow-red-600/30"
              >
                View Full Gallery {totalPhotos > 0 && `(${totalPhotos} Photos)`}
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
          FULLSCREEN LIGHTBOX MODAL (Pure High-Res Photo)
      ======================================================== */}
      {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          {/* Top Header Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
            <span
              className="text-xs font-semibold text-neutral-300 bg-neutral-900/80 px-3 py-1.5 rounded-full border border-neutral-700"
              style={{
                fontFamily:
                  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontVariantNumeric: 'lining-nums tabular-nums',
              }}
            >
              {selectedPhotoIndex + 1} / {photos.length}
            </span>

            <button
              onClick={closeLightbox}
              className="p-2 sm:p-2.5 rounded-full bg-neutral-900/90 border border-neutral-700 text-white hover:bg-red-600 transition-colors cursor-pointer shadow-lg"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-neutral-900/80 hover:bg-red-600 border border-neutral-700 text-white transition-colors z-20 cursor-pointer shadow-lg"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-neutral-900/80 hover:bg-red-600 border border-neutral-700 text-white transition-colors z-20 cursor-pointer shadow-lg"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Lightbox Center Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] flex items-center justify-center p-2"
          >
            <div className="relative p-1 sm:p-2 bg-neutral-900/95 rounded-2xl border border-neutral-700/80 shadow-2xl overflow-hidden">
              <img
                src={photos[selectedPhotoIndex].src}
                alt=""
                className="max-h-[80vh] sm:max-h-[84vh] max-w-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
