import heroBg from '@/assets/images/clg.png';
import { AboutSection } from '@/components/home/AboutSection';
import { NoticesSection } from '@/components/home/NoticesSection';
import { DharoharSection } from '@/components/home/DharoharSection';
import { EventSection } from '@/components/home/EventSection';
import { WelcomeMessagesSection } from '@/components/home/WelcomeMessagesSection';
import { GallerySection } from '@/components/home/GallerySection';
import { AlumniLegacySection } from '@/components/home/AlumniLegacySection';
import { PastSponsorsSection } from '@/components/home/PastSponsorsSection';
import { HeritageCtaSection } from '@/components/common/HeritageCtaSection';

export const HomePage = () => {
  const tickerItems = [
    { prefix: 'Ruby Jubilee Batch — ', highlight: '1986' },
    { prefix: 'Reconnect with the GCAAA Alumni Community', highlight: null },
    { prefix: 'GCAAA Alumni Meet — ', highlight: '28 November 2026' },
    { prefix: 'Silver Jubilee Batch — ', highlight: '2001' },
  ];

  return (
    <div className="w-full bg-neutral-950 text-white">

      {/* ========================================================
          1. HERO SECTION (IMAGE ONLY)
      ======================================================== */}
      <section className="relative w-full h-[45vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] min-h-[260px] sm:min-h-[440px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-105 contrast-100 saturate-125"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </section>

      {/* ========================================================
          2. MARQUEE TICKER (OUTSIDE HERO — ALWAYS VISIBLE)
      ======================================================== */}
      <div className="relative w-full bg-black border-t-2 border-b-2 border-red-600 overflow-hidden shadow-2xl shadow-red-950/30 py-3 sm:py-3.5">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center shrink-0">
              <span className="text-white font-semibold text-[11px] sm:text-sm md:text-base tracking-wide flex items-center hover:text-red-400 transition-colors">
                <span>{item.prefix}</span>
                {item.highlight && (
                  <span className="text-red-500 font-extrabold ml-1">{item.highlight}</span>
                )}
              </span>
              <span className="text-red-500 mx-4 sm:mx-6 md:mx-8 text-xs sm:text-sm select-none drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]">
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>

      

      {/* ========================================================
          8. ALUMNI LEGACY
      ======================================================== */}
      <AlumniLegacySection />

      {/* ========================================================
          4. NOTICES & ANNOUNCEMENTS SECTION (CIRCULARS & NOTICES)
      ======================================================== */}
      <NoticesSection />

      {/* ========================================================
          5. DHAROHAR 2026 SECTION
      ======================================================== */}
      <DharoharSection />

      {/* ========================================================
          5. EVENT SECTION
      ======================================================== */}
      <EventSection />

      {/* ========================================================
          6. GALLERY SECTION
      ======================================================== */}
      <GallerySection />

      {/* ========================================================
          7. WELCOME MESSAGES
      ======================================================== */}
      <WelcomeMessagesSection />

      {/* ========================================================
          3. ABOUT SECTION
      ======================================================== */}
      <AboutSection />
      

      {/* ========================================================
          9. PAST SPONSORS SECTION
      ======================================================== */}
      <PastSponsorsSection />

      {/* ========================================================
          10. HERITAGE STAMP & SKYLINE CTA SECTION
      ======================================================== */}
      <HeritageCtaSection />
    </div>
  );
};