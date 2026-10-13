import { Link } from 'react-router-dom';
import { Mail, Globe, ArrowRight, UserPlus } from 'lucide-react';
import stampBuildingImg from '@/assets/images/GCAAA_college_building.jpg';
import logoImg from '@/assets/images/logo.png';
import skylineImg from '@/assets/images/print.png';

export const HeritageCtaSection = () => {
  return (
    <section className="relative w-full bg-white text-neutral-900 pt-16 sm:pt-24 pb-0 overflow-hidden border-t border-neutral-200 select-none">
      {/* 1. Subtle Architectural Flowing Curves (Top-Left Background) */}
      <svg
        className="absolute top-0 left-0 w-80 sm:w-[500px] h-80 sm:h-[500px] text-red-500/[0.08] pointer-events-none -z-0"
        viewBox="0 0 500 500"
        fill="none"
      >
        {Array.from({ length: 16 }).map((_, idx) => (
          <path
            key={idx}
            d={`M -50 ${30 + idx * 16} C 160 ${-30 + idx * 12}, 280 ${110 + idx * 14}, 480 ${280 + idx * 12}`}
            stroke="currentColor"
            strokeWidth="1.2"
          />
        ))}
      </svg>

      {/* 2. Right Side Subtle Heritage Gold Arch Decorative Silhouette (from brochure) */}
      <div
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-16 lg:w-24 h-72 lg:h-96 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 100% 50%, #c48b2c 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">

        {/* ========================================================
            TOP: COMMEMORATIVE POSTAGE STAMP & GOLD SEAL
        ======================================================== */}
        <div className="relative mb-10 sm:mb-12 inline-flex flex-col items-center group">
          {/* Golden Seal Circle (Properly positioned above the stamp without clipping) */}
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg z-0 mb-[-26px] sm:mb-[-32px] border-2 border-amber-400/50 flex items-center justify-center relative"
            style={{
              background:
                'radial-gradient(circle at 35% 30%, #f3ce7a 0%, #c48b2c 55%, #7a4a0c 100%)',
              boxShadow: '0 8px 24px rgba(196, 139, 44, 0.35)',
            }}
          >
            {/* Subtle inner metallic bevel */}
            <div className="w-[86%] h-[86%] rounded-full border border-amber-200/40 opacity-75" />
          </div>

          {/* Realistic Perforated Stamp Card */}
          <div
            className="relative z-10 bg-white p-3 sm:p-3.5 -rotate-3 group-hover:rotate-0 transition-transform duration-500 w-64 sm:w-76"
            style={{
              filter: 'drop-shadow(0 16px 36px rgba(0,0,0,0.16)) drop-shadow(0 4px 10px rgba(0,0,0,0.08))',
              backgroundImage:
                'radial-gradient(circle at 0px 50%, transparent 4px, white 5px), radial-gradient(circle at 100% 50%, transparent 4px, white 5px)',
            }}
          >
            {/* Stamp Perforated Outer Border */}
            <div className="border-2 border-dashed border-neutral-300 p-1 bg-white">
              <div className="border border-neutral-200 overflow-hidden bg-white shadow-2xs">
                {/* Red Stamp Header Strip */}
                <div className="bg-[#B70D2B] text-white px-3 py-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold tracking-tight leading-none font-serif">
                    26
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase font-sans">
                    GCAAA Lucknow
                  </span>
                </div>

                {/* Stamp Building Image */}
                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={stampBuildingImg}
                    alt="GCAAA Lucknow 2001 Batch Stamp"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                  <span
                    style={{ writingMode: 'vertical-rl' }}
                    className="rotate-180 absolute left-1.5 bottom-2 text-white font-extrabold text-[11px] sm:text-xs tracking-widest drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                  >
                    2001 BATCH
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Postal Cancellation Ring & Wavy Postmark */}
          <div className="absolute -bottom-6 -right-8 sm:-bottom-8 sm:-right-12 z-20 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center pointer-events-none select-none">
            {/* Circular Postmark Ring */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-neutral-600/40 p-1 flex items-center justify-center -rotate-12">
              <div className="w-full h-full rounded-full border border-dashed border-neutral-600/50 flex items-center justify-center text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-neutral-600/70 text-center leading-tight">
                GCAAA<br />LUCKNOW
              </div>
            </div>
            {/* Wavy cancellation ink lines */}
            <svg className="w-12 h-16 text-neutral-600/40 -ml-2" viewBox="0 0 40 60" fill="none">
              <path d="M0 15 Q 10 5, 20 15 T 40 15" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 25 Q 10 15, 20 25 T 40 25" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 35 Q 10 25, 20 35 T 40 35" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 45 Q 10 35, 20 45 T 40 45" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* ========================================================
            CENTER: INSTITUTIONAL HEADLINE & DETAILS
        ======================================================== */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-neutral-900 leading-tight font-serif tracking-tight">
              Government College of Architecture
            </h2>
            <h3 className="text-lg sm:text-2xl font-bold text-neutral-900 mt-1">
              Alumni Association (GCAAA)
            </h3>
          </div>

          <div className="h-0.5 w-16 bg-[#B70D2B] mx-auto rounded-full" />

          {/* Address Details */}
          <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-0.5">
            <p className="font-semibold text-neutral-800">Faculty of Architecture &amp; Planning (FOAP)</p>
            <p>Dr. APJ Abdul Kalam Technical University (AKTU)</p>
            <p>Tagore Marg, Lucknow, Uttar Pradesh. 226007</p>
            <p className="font-bold tracking-wider text-neutral-900 pt-0.5">INDIA</p>
          </div>

          {/* Contact Details */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-neutral-700">
            <p className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#B70D2B]" />
              <span className="text-neutral-500">Contact:</span>
              <a
                href="mailto:gcaaa07@gmail.com"
                className="font-bold hover:text-[#B70D2B] transition-colors"
              >
                gcaaa07@gmail.com
              </a>
            </p>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <p className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#B70D2B]" />
              <span className="text-neutral-500">Website:</span>
              <a
                href="https://gcaalumniassociation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-[#B70D2B] transition-colors"
              >
                gcaalumniassociation.com
              </a>
            </p>
          </div>

          {/* CTA Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#B70D2B] hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-md shadow-red-900/20 transition-all hover:-translate-y-0.5"
            >
              <UserPlus className="w-4 h-4" />
              <span>Connect With GCAAA</span>
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-900 text-neutral-800 hover:text-white border border-neutral-300 hover:border-neutral-900 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-xs transition-all hover:-translate-y-0.5"
            >
              <span>Dharohar 2026</span>
              <ArrowRight className="w-4 h-4 text-[#B70D2B]" />
            </Link>
          </div>
        </div>

      </div>

      {/* ========================================================
          BOTTOM: GCAAA EMBLEM + ARCHITECTURAL SKYLINE BACKDROP
      ======================================================== */}
      <div className="relative mt-10 sm:mt-14 w-full">
        {/* Centered GCAAA Logo Overlapping Top of Skyline */}
        <div className="relative z-20 flex justify-center -mb-8 sm:-mb-12">
          <div className="bg-white/90 backdrop-blur-xs p-2 sm:p-3 rounded-2xl shadow-lg border border-neutral-200/80">
            <img
              src={logoImg}
              alt="GCAAA Emblem"
              className="h-16 sm:h-22 w-auto object-contain"
            />
          </div>
        </div>

        {/* Full-width Architectural Skyline Backdrop (fading softly at top) */}
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-transparent via-neutral-50 to-neutral-100/60 border-b border-neutral-200">
          <img
            src={skylineImg}
            alt="Architectural City Skyline Sketch"
            className="w-full max-w-[1400px] mx-auto h-40 sm:h-56 md:h-72 object-cover object-top opacity-85 block pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};
