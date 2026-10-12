import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import dharoharImg from '@/assets/images/dharohar.png';

export const DharoharSection = () => {
  return (
    <section id="dharohar" className="bg-white text-neutral-900 py-14 sm:py-20 border-b border-neutral-200">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        
        {/* ========================================================
            1. MAIN SECTION HEADING AT THE TOP (FULL WIDTH)
        ======================================================== */}
        <div className="mb-10 max-w-4xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#B70D2B] mb-2">
            GCAAA Alumni Meet · 2026
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight">
            DHAROHAR <span className="text-[#B70D2B] font-serif font-black">धरोहर 2026</span>
          </h2>

          <div className="mt-3.5 h-1 w-16 bg-[#B70D2B]" />
        </div>

        {/* ========================================================
            2. TWO-COLUMN LAYOUT: FULL UN-ZOOMED IMAGE + CONTENT
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: DHAROHAR PHOTO (NATURAL 16:9 RATIO - NO ZOOM / NO CROPPING) */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden border border-neutral-200 shadow-lg rounded-sm bg-neutral-100">
              <img
                src={dharoharImg}
                alt="GCA Alumni Meet DHAROHAR 2026"
                className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <div className="mt-2 text-right">
              <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                Annual General Body Meeting · 28 November 2026
              </span>
            </div>
          </div>

          {/* RIGHT: CONCISE CONTENT, DETAILS & ACTION BUTTONS */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-neutral-700 mb-3.5">
              Alumni Meets, named <strong>Dharohar</strong>, serve as a vibrant platform for reconnecting with
              former students, celebrating shared memories, and building a strong professional network.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-neutral-700 mb-5">
              The GCA Alumni Association invites you to its Annual General Body Meeting (GBM) as we proudly
              celebrate the <strong className="text-neutral-900">Ruby Jubilee (Batch 1986)</strong> and{' '}
              <strong className="text-neutral-900">Silver Jubilee (Batch 2001)</strong>.
            </p>

            {/* Event Highlights Card */}
            <div className="space-y-3 bg-neutral-50 p-4 sm:p-5 rounded border border-neutral-200 mb-6">
              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <Calendar className="w-4 h-4 text-[#B70D2B] shrink-0" />
                <span><strong className="text-neutral-900">Date:</strong> 28 November 2026 (Saturday)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <MapPin className="w-4 h-4 text-[#B70D2B] shrink-0" />
                <span><strong className="text-neutral-900">Venue:</strong> FOAP, AKTU, Tagore Marg, Lucknow</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <Users className="w-4 h-4 text-[#B70D2B] shrink-0" />
                <span><strong className="text-neutral-900">Milestone:</strong> Ruby Jubilee ('86) &amp; Silver Jubilee ('01)</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                to="/contact"
                className="bg-[#B70D2B] hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 shadow transition-all active:scale-95 flex items-center gap-2"
              >
                Register / RSVP <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="border border-neutral-300 hover:border-neutral-900 text-neutral-800 font-bold text-xs uppercase tracking-wider px-6 py-3.5 transition-all"
              >
                Event Details
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
