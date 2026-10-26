import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import logoImg from '@/assets/images/logo.png';
// ✅ Apna CodeCrafter logo yahan import karo (path apne folder ke hisaab se adjust karo)
import codeCrafterLogo from '@/assets/images/image.png';

export const Footer = () => {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribedEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setSubscribedEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-black text-white border-t border-neutral-900 mt-auto">

      {/* ========================================================
          MAIN FOOTER MULTI-COLUMN GRID
      ======================================================== */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-9 lg:gap-7">

          {/* COLUMN 1: BRAND IDENTITY & ABOUT */}
          <div className="lg:col-span-4 space-y-3">
            <Link to="/" className="inline-flex items-center gap-3 group">
              {logoImg ? (
                <img
                  src={logoImg}
                  alt="GCAAA Logo"
                  className="h-14 w-auto object-contain bg-white/5 p-1 rounded-lg border border-neutral-800 group-hover:border-red-600/60 transition-colors"
                />
              ) : (
                <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center text-white font-black text-2xl">
                  G
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight uppercase leading-tight group-hover:text-red-400 transition-colors">
                  GCAAA
                </span>
                <span className="text-xs font-bold text-neutral-400 tracking-wider uppercase leading-none mt-0.5">
                  Alumni Association
                </span>
                <span className="text-xs text-red-500 font-semibold tracking-wide uppercase mt-1">
                  Est. 1976 · Lucknow
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed text-left sm:text-justify">
              GCAAA unites seasoned architects, graduates, and faculty under one collaborative umbrella — fostering brotherhood, design excellence, and our timeless campus heritage.
            </p>

            <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-900 text-neutral-400 text-sm space-y-1.5">
              <p className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                Institutional Affiliation
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Faculty of Architecture &amp; Planning (FOAP), Dr. A.P.J. Abdul Kalam Technical University, Lucknow.
              </p>
            </div>

          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-red-600" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to="/" className="hover:text-red-400 hover:translate-x-1 transition-all inline-block">Home Portal</Link></li>
              <li><Link to="/about" className="hover:text-red-400 hover:translate-x-1 transition-all inline-block">About Association</Link></li>
              <li><Link to="/events" className="hover:text-red-400 hover:translate-x-1 transition-all inline-block">Dharohar 2026 Meet</Link></li>
              <li><Link to="/committee" className="hover:text-red-400 hover:translate-x-1 transition-all inline-block">Executive Committee</Link></li>
              <li><Link to="/gallery" className="hover:text-red-400 hover:translate-x-1 transition-all inline-block">Gallery &amp; Awards</Link></li>
              <li><Link to="/publications" className="hover:text-red-400 hover:translate-x-1 transition-all inline-block">Souvenirs &amp; Publications</Link></li>
              <li><Link to="/contact" className="hover:text-red-400 hover:translate-x-1 transition-all inline-block">Contact Secretariat</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: KEY INITIATIVES */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-red-600" />
              Key Initiatives
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/events" className="hover:text-red-400 transition-colors flex items-center justify-between group">
                  <span>Ruby Jubilee (Batch 1986)</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-red-400 transition-colors flex items-center justify-between group">
                  <span>Silver Jubilee (Batch 2001)</span>
                </Link>
              </li>
              <li><Link to="/registration" className="hover:text-red-400 transition-colors block">Alumni Life Membership</Link></li>
              <li><Link to="/gallery" className="hover:text-red-400 transition-colors block">Heritage &amp; Philatelic Stamps</Link></li>
              <li><Link to="/about" className="hover:text-red-400 transition-colors block">Student Mentorship Circles</Link></li>
              <li><Link to="/events" className="hover:text-red-400 transition-colors block">Annual GBM Proceedings</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: HEADQUARTERS */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-red-600" />
              Headquarters
            </h4>

            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">Tagore Marg, Hazratganj, Lucknow – 226007, Uttar Pradesh, India</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-red-500 shrink-0" />
                <a href="tel:+919839270036" className="hover:text-red-400 font-semibold text-white transition-colors">+91 98392 70036</a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-red-500 shrink-0" />
                <a href="mailto:gcaaa07@gmail.com" className="hover:text-red-400 font-semibold text-neutral-300 transition-colors">gcaaa07@gmail.com</a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">09:00 AM – 06:00 PM</p>
                  <p className="text-xs text-neutral-500">Monday to Saturday</p>
                </div>
              </div>

              <div className="pt-1">
                <Link to="/registration" className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-950/80 hover:bg-red-600 text-red-400 hover:text-white border border-red-800/80 text-xs font-bold uppercase tracking-wider rounded transition-all">
                  Register As Alumnus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================
          BOTTOM COPYRIGHT BAR — SINGLE LINE & LEFT ALIGNED
      ======================================================== */}
      <div className="border-t border-neutral-900 bg-neutral-950/90 py-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 flex flex-col lg:flex-row items-center justify-start gap-3 lg:gap-6">

          {/* LEFT: Precision Crafted + Logo */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="text-xs sm:text-sm text-neutral-400 text-center sm:text-left leading-relaxed sm:whitespace-nowrap">
              Precision Crafted with Digital Intelligence by
            </span>
            <a
              href="https://www.codecrafter.co.in/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodeCrafter"
              className="shrink-0 opacity-90 hover:opacity-100 transition-opacity flex items-center"
            >
              <img
                src={codeCrafterLogo}
                alt="CodeCrafter"
                className="h-6 sm:h-7 w-auto object-contain brightness-0 invert"
              />
            </a>
          </div>

          {/* SEPARATOR (Desktop only) */}
          <span className="hidden lg:block text-neutral-700">|</span>

          {/* RIGHT: Copyright text */}
          <p className="text-xs sm:text-sm text-neutral-400 text-center lg:text-left leading-relaxed sm:whitespace-nowrap">
            © {new Date().getFullYear()} Government College of Architecture Alumni Association. All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};