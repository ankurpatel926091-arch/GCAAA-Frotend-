import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Award, ArrowRight, CheckCircle2, Ticket, Sparkles } from 'lucide-react';

export const EventSection = () => {
  // Live Countdown calculation to November 28, 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-11-28T10:00:00').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scheduleItems = [
    { time: '10:00 AM', title: 'Registration & Welcome Tea', desc: 'Badge collection & morning networking' },
    { time: '11:30 AM', title: 'Annual GBM Proceedings', desc: 'Association updates & key addresses' },
    { time: '01:30 PM', title: 'Fellowship Lunch', desc: 'Inter-batch networking across faculty & alumni' },
    { time: '03:30 PM', title: 'Jubilee Batch Felicitation', desc: 'Honoring Batch 2001 (25 Yrs) & 1986 (40 Yrs)' },
    { time: '06:00 PM', title: 'Cultural Night & Dinner', desc: 'Musical evening, memories & gala dinner' },
  ];

  return (
    <section id="events" className="bg-white text-neutral-900 py-12 sm:py-16 border-b border-neutral-200">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        
        {/* ========================================================
            1. SECTION HEADER
        ======================================================== */}
        <div className="mb-8 max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#B70D2B] mb-1.5">
            Flagship Gathering · 2026
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
            Alumni GBM &amp; <span className="text-[#B70D2B]">Dharohar 2026</span>
          </h2>
          <div className="mt-2.5 h-1 w-14 bg-[#B70D2B]" />
        </div>

        {/* ========================================================
            2. EVENT HERO CARD & LIVE COUNTDOWN (BLACK & RED THEME)
        ======================================================== */}
        <div className="bg-neutral-950 text-white rounded-xl p-6 sm:p-8 mb-10 shadow-2xl border border-neutral-800 relative overflow-hidden">
          {/* Subtle Red Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Event Spotlight Headline & Milestones */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-red-400 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Mark Your Calendars
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                Celebrate Milestone Jubilees at Your Alma Mater
              </h3>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Join alumni and faculty on <strong>November 28, 2026</strong> to celebrate the 
                <strong> Ruby Jubilee (1986)</strong> &amp; <strong>Silver Jubilee (2001)</strong> at FOAP Lucknow.
              </p>

              {/* Event Location & Date Chips */}
              <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-semibold text-neutral-300">
                <span className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded">
                  <Calendar className="w-3.5 h-3.5 text-red-500" /> 28th Nov 2026
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded">
                  <MapPin className="w-3.5 h-3.5 text-red-500" /> FOAP, AKTU, Lucknow
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded">
                  <Clock className="w-3.5 h-3.5 text-red-500" /> 10:00 AM Onwards
                </span>
              </div>
            </div>

            {/* Right: Live Countdown Clock & RSVP */}
            <div className="lg:col-span-5 bg-neutral-900/90 border border-neutral-800 p-5 sm:p-6 rounded-xl shadow-xl flex flex-col justify-between">
              <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 text-center mb-3">
                Countdown to Event Day
              </p>

              {/* Countdown Numbers */}
              <div className="grid grid-cols-4 gap-2 text-center mb-4">
                <div className="bg-black/80 border border-neutral-800 py-2.5 px-1 rounded-lg">
                  <span className="block text-xl sm:text-2xl font-extrabold text-white font-mono">{timeLeft.days}</span>
                  <span className="text-[9px] uppercase font-bold text-neutral-400">Days</span>
                </div>
                <div className="bg-black/80 border border-neutral-800 py-2.5 px-1 rounded-lg">
                  <span className="block text-xl sm:text-2xl font-extrabold text-white font-mono">{timeLeft.hours}</span>
                  <span className="text-[9px] uppercase font-bold text-neutral-400">Hours</span>
                </div>
                <div className="bg-black/80 border border-neutral-800 py-2.5 px-1 rounded-lg">
                  <span className="block text-xl sm:text-2xl font-extrabold text-white font-mono">{timeLeft.minutes}</span>
                  <span className="text-[9px] uppercase font-bold text-neutral-400">Mins</span>
                </div>
                <div className="bg-black/80 border border-neutral-800 py-2.5 px-1 rounded-lg">
                  <span className="block text-xl sm:text-2xl font-extrabold text-red-500 font-mono">{timeLeft.seconds}</span>
                  <span className="text-[9px] uppercase font-bold text-neutral-400">Secs</span>
                </div>
              </div>

              {/* RSVP Direct Button */}
              <Link
                to="/contact"
                className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Ticket className="w-4 h-4" /> Register &amp; Reserve Your Seat
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================
            3. TWO CARDS: JUBILEE SPOTLIGHT (LEFT) & SCHEDULE (RIGHT)
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: JUBILEE HONORS */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900">
              Milestone Jubilees in Focus
            </h3>

            {/* Ruby Jubilee Card */}
            <div className="bg-neutral-50 border-l-4 border-red-600 border border-neutral-200 p-4 rounded-r shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-700">40th Anniversary</span>
                <span className="bg-red-100 text-red-800 text-[11px] font-black px-2 py-0.5 rounded">BATCH 1986</span>
              </div>
              <h4 className="text-base font-bold text-neutral-900">Ruby Jubilee Batch</h4>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Honoring 40 years of pioneering architectural practice across India.
              </p>
            </div>

            {/* Silver Jubilee Card */}
            <div className="bg-neutral-50 border-l-4 border-amber-500 border border-neutral-200 p-4 rounded-r shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">25th Anniversary</span>
                <span className="bg-amber-100 text-amber-900 text-[11px] font-black px-2 py-0.5 rounded">BATCH 2001</span>
              </div>
              <h4 className="text-base font-bold text-neutral-900">Silver Jubilee Batch</h4>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Celebrating 25 years of design innovation and leadership.
              </p>
            </div>
          </div>

          {/* RIGHT: TENTATIVE DAY SCHEDULE / ITINERARY */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 p-5 sm:p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-4">
              <div>
                <h3 className="text-lg font-extrabold text-neutral-900">Event Day Itinerary</h3>
                <p className="text-[11px] text-neutral-500">Saturday, 28 November 2026</p>
              </div>
              <span className="bg-neutral-200 text-neutral-800 text-[11px] font-bold px-2.5 py-0.5 rounded">
                Full Day
              </span>
            </div>

            <div className="space-y-2.5">
              {scheduleItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 bg-white border border-neutral-200 rounded hover:border-red-600/40 transition-colors">
                  <span className="text-[11px] font-mono font-bold text-red-600 shrink-0 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    {item.time}
                  </span>
                  <div className="truncate">
                    <h5 className="text-xs font-bold text-neutral-900 truncate">{item.title}</h5>
                    <p className="text-[11px] text-neutral-500 truncate">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
