import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  Users,
  Award,
  Building2,
  Navigation,
  Train,
  Plane,
  Car,
  FileText,
} from 'lucide-react';
import { HeritageCtaSection } from '@/components/common/HeritageCtaSection';

export const ContactPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlTab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(urlTab === 'enquiry' ? 'enquiry' : 'rsvp');

  // Keep state in sync if query param changes
  useEffect(() => {
    if (urlTab === 'enquiry') {
      setActiveTab('enquiry');
    } else if (urlTab === 'rsvp') {
      setActiveTab('rsvp');
    }
  }, [urlTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // RSVP Form State
  const [rsvpData, setRsvpData] = useState({
    salutation: 'Ar.',
    fullName: '',
    email: '',
    phone: '',
    batchYear: '',
    degree: 'B.Arch',
    city: '',
    firm: '',
    attendance: 'Attending Solo',
    dietary: 'Vegetarian',
    message: '',
  });
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  // General Enquiry Form State
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '',
    topic: 'Life Membership Enquiry',
    message: '',
  });
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setRsvpSubmitted(true);
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySubmitted(true);
  };

  return (
    <div className="w-full bg-white text-neutral-900">
      {/* ========================================================
          1. HERO HEADER BANNER
      ======================================================== */}
      <section className="relative py-16 sm:py-20 bg-neutral-950 text-white text-center border-b border-neutral-900 overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            GCAAA SECRETARIAT &amp; ALUMNI PORTAL
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-serif tracking-tight leading-tight">
            Connect With Us &amp; RSVP for{' '}
            <span className="text-[#B70D2B] underline decoration-red-400/60 underline-offset-8">
              Dharohar 2026
            </span>
          </h1>

          <p className="mt-5 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Register your presence for the Annual Alumni Meet on <strong>November 28, 2026</strong>, 
            apply for Life Membership, or connect directly with the Executive Committee office bearers.
          </p>
        </div>
      </section>

      {/* ========================================================
          2. THREE QUICK EVENT & SECRETARIAT STAT CARDS
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: Dharohar Meet */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-200/90 flex items-start gap-4 hover:border-red-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B70D2B] flex items-center justify-center shrink-0 shadow-xs">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#B70D2B] uppercase tracking-wider">Mega Alumni Reunion</p>
              <h3 className="text-base font-extrabold text-neutral-900 mt-0.5">Saturday, 28 Nov 2026</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Ruby Jubilee (&apos;86) &amp; Silver Jubilee (&apos;01) at FOAP Campus, Lucknow.
              </p>
            </div>
          </div>

          {/* Card 2: Secretariat Office */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-200/90 flex items-start gap-4 hover:border-red-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B70D2B] flex items-center justify-center shrink-0 shadow-xs">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#B70D2B] uppercase tracking-wider">Secretariat Headquarters</p>
              <h3 className="text-base font-extrabold text-neutral-900 mt-0.5">Tagore Marg, Lucknow</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                FOAP (AKTU) Campus · Mon - Fri, 9:00 AM – 5:00 PM IST
              </p>
            </div>
          </div>

          {/* Card 3: Helplines */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-200/90 flex items-start gap-4 hover:border-red-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B70D2B] flex items-center justify-center shrink-0 shadow-xs">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#B70D2B] uppercase tracking-wider">Direct Assistance</p>
              <h3 className="text-base font-extrabold text-neutral-900 mt-0.5">0522-2740152</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                General Secretary &amp; Office Bearer Helplines available below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. MAIN CONTENT: CONTACT INFO (LEFT) + FORMS (RIGHT)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ====================================================
              LEFT COLUMN: SECRETARIAT INFO & OFFICE BEARERS
          ==================================================== */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Info Card */}
            <div className="bg-neutral-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-800 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B70D2B]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-red-950/70 text-red-400 border border-red-800/40 text-[11px] font-bold uppercase tracking-wider mb-2">
                  OFFICIAL SECRETARIAT
                </span>
                <h3 className="text-xl font-black text-white font-serif">
                  Government College of Architecture Alumni Association
                </h3>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  Faculty of Architecture &amp; Planning (AKTU), Lucknow
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm text-neutral-300">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-red-400 mt-0.5">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Campus Address</p>
                    <p className="text-white text-xs sm:text-sm mt-0.5 leading-relaxed font-medium">
                      Tagore Marg, Hazratganj, Lucknow – 226007, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Landline */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-red-400">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">College Office Landline</p>
                    <a
                      href="tel:05222740152"
                      className="text-white text-xs sm:text-sm mt-0.5 font-semibold hover:text-red-400 transition-colors inline-block"
                    >
                      0522-2740152
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-red-400">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Official Email</p>
                    <a
                      href="mailto:gca_lko@rediffmail.com"
                      className="text-white text-xs sm:text-sm mt-0.5 font-semibold hover:text-red-400 transition-colors inline-block"
                    >
                      gca_lko@rediffmail.com
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-red-400">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Office Hours</p>
                    <p className="text-neutral-300 text-xs sm:text-sm mt-0.5">
                      Monday to Friday: 9:00 AM – 5:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Office Bearers Hotline Box */}
              <div className="pt-4 border-t border-neutral-800 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Key Office Bearer Contacts
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* President */}
                  <div className="p-3 bg-neutral-900/90 rounded-xl border border-neutral-800">
                    <p className="text-neutral-400 font-medium text-[11px]">President</p>
                    <p className="text-white font-bold mt-0.5">Ar. Anupam Mittal</p>
                    <a
                      href="tel:9415010301"
                      className="text-red-400 hover:text-red-300 font-semibold block mt-1"
                    >
                      +91 94150 10301
                    </a>
                  </div>

                  {/* General Secretary */}
                  <div className="p-3 bg-neutral-900/90 rounded-xl border border-neutral-800">
                    <p className="text-neutral-400 font-medium text-[11px]">General Secretary</p>
                    <p className="text-white font-bold mt-0.5">Ar. Vishal Gulati</p>
                    <a
                      href="tel:9415025946"
                      className="text-red-400 hover:text-red-300 font-semibold block mt-1"
                    >
                      +91 94150 25946
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Life Membership Info Box */}
            <div className="bg-red-50/70 border border-red-200 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#B70D2B] font-bold text-sm">
                <Award className="w-5 h-5 text-[#B70D2B]" />
                <span>Life Membership of GCAAA</span>
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                All degree holders of GCA / FOAP-AKTU are eligible to become Life Members. 
                Members receive official alumni credentials, voting privileges in the GBM, 
                and invitations to international architect conclaves.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs text-[#B70D2B] font-bold">
                <Users className="w-4 h-4" />
                <span>Over 3,000+ Alumni Connected Worldwide</span>
              </div>
            </div>
          </div>

          {/* ====================================================
              RIGHT COLUMN: INTERACTIVE FORM TABS (RSVP / ENQUIRY)
          ==================================================== */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
            {/* Top Navigation Tabs */}
            <div className="flex border-b border-neutral-200 bg-neutral-100/70 p-1.5 gap-1.5">
              <button
                type="button"
                onClick={() => handleTabChange('rsvp')}
                className={`flex-1 py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'rsvp'
                    ? 'bg-[#B70D2B] text-white shadow-md'
                    : 'text-neutral-700 hover:bg-neutral-200/80'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Dharohar 2026 RSVP &amp; Meet</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('enquiry')}
                className={`flex-1 py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'enquiry'
                    ? 'bg-[#B70D2B] text-white shadow-md'
                    : 'text-neutral-700 hover:bg-neutral-200/80'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>General Secretariat Query</span>
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {/* ==============================================
                  TAB 1: DHAROHAR 2026 RSVP FORM
              ============================================== */}
              {activeTab === 'rsvp' && (
                <div>
                  {/* Event Highlight Banner inside form */}
                  <div className="mb-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded">
                        ALUMNI MEET &amp; GBM
                      </span>
                      <h4 className="text-sm font-black text-amber-950">
                        Saturday, November 28, 2026
                      </h4>
                      <p className="text-xs text-amber-900">
                        Celebrating Ruby Jubilee (&apos;86) &amp; Silver Jubilee (&apos;01) at Lucknow
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-amber-900 bg-white/80 px-3 py-1.5 rounded-lg border border-amber-200 whitespace-nowrap shadow-xs">
                      📍 FOAP AKTU Auditorium
                    </span>
                  </div>

                  {rsvpSubmitted ? (
                    <div className="text-center py-10 px-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-4">
                      <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="text-2xl font-black text-emerald-950">
                        RSVP Received Successfully!
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                        Thank you,{' '}
                        <strong>
                          {rsvpData.salutation} {rsvpData.fullName || 'Alumnus'}
                        </strong>
                        ! We are thrilled to welcome you back for <strong>Dharohar 2026</strong> on{' '}
                        <strong>Saturday, November 28, 2026</strong>.
                      </p>

                      <div className="bg-white/80 border border-emerald-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5 text-neutral-700">
                        <p><strong>Batch / Year:</strong> {rsvpData.batchYear || 'Alumnus'}</p>
                        <p><strong>Attendance Mode:</strong> {rsvpData.attendance}</p>
                        <p><strong>Email:</strong> {rsvpData.email}</p>
                        <p><strong>Phone:</strong> {rsvpData.phone}</p>
                      </div>

                      <p className="text-xs text-emerald-700">
                        Confirmation copy and entry passes will be sent to your registered email.
                      </p>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => setRsvpSubmitted(false)}
                          className="w-full sm:w-auto bg-[#B70D2B] hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow"
                        >
                          Submit Another Registration
                        </button>
                        <Link
                          to="/events"
                          className="w-full sm:w-auto border border-neutral-300 hover:border-neutral-900 text-neutral-800 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all"
                        >
                          View Event Schedule
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleRsvpSubmit} className="space-y-4">
                      {/* Name with Salutation */}
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <div className="flex gap-2">
                          <select
                            value={rsvpData.salutation}
                            onChange={(e) => setRsvpData({ ...rsvpData, salutation: e.target.value })}
                            className="w-24 px-2.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:outline-none"
                          >
                            <option value="Ar.">Ar.</option>
                            <option value="Prof.">Prof.</option>
                            <option value="Dr.">Dr.</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                          </select>
                          <input
                            type="text"
                            required
                            value={rsvpData.fullName}
                            onChange={(e) => setRsvpData({ ...rsvpData, fullName: e.target.value })}
                            className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            Email Address <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={rsvpData.email}
                            onChange={(e) => setRsvpData({ ...rsvpData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                            placeholder="alumnus@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            WhatsApp / Mobile Number <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={rsvpData.phone}
                            onChange={(e) => setRsvpData({ ...rsvpData, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      {/* Batch & Degree */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            Batch / Passout Year <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={rsvpData.batchYear}
                            onChange={(e) => setRsvpData({ ...rsvpData, batchYear: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                            placeholder="e.g. 2001 (Silver Jubilee) or 1986"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            Degree / Course
                          </label>
                          <select
                            value={rsvpData.degree}
                            onChange={(e) => setRsvpData({ ...rsvpData, degree: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:outline-none"
                          >
                            <option value="B.Arch">B.Arch (Architecture)</option>
                            <option value="M.Arch">M.Arch</option>
                            <option value="MURP">MURP (Urban Planning)</option>
                            <option value="Interior Design">Interior Design</option>
                            <option value="Ph.D.">Ph.D. / Research Scholar</option>
                          </select>
                        </div>
                      </div>

                      {/* City & Firm */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            Current City &amp; Country
                          </label>
                          <input
                            type="text"
                            value={rsvpData.city}
                            onChange={(e) => setRsvpData({ ...rsvpData, city: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                            placeholder="e.g. Lucknow / Delhi NCR / Dubai"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            Firm / Organization &amp; Role
                          </label>
                          <input
                            type="text"
                            value={rsvpData.firm}
                            onChange={(e) => setRsvpData({ ...rsvpData, firm: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                            placeholder="e.g. Principal Architect, Design Studio"
                          />
                        </div>
                      </div>

                      {/* Attendance Mode & Dietary */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            Attendance Category
                          </label>
                          <select
                            value={rsvpData.attendance}
                            onChange={(e) => setRsvpData({ ...rsvpData, attendance: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:outline-none"
                          >
                            <option value="Attending Solo">Attending Solo</option>
                            <option value="Attending with Spouse">Attending with Spouse</option>
                            <option value="Attending with Family">Attending with Family</option>
                            <option value="Faculty / Former Faculty">Faculty / Former Faculty</option>
                            <option value="Interested in Event Sponsorship">Interested in Event Sponsorship</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            Dietary Preference
                          </label>
                          <select
                            value={rsvpData.dietary}
                            onChange={(e) => setRsvpData({ ...rsvpData, dietary: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:outline-none"
                          >
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Non-Vegetarian">Non-Vegetarian</option>
                            <option value="Jain Food">Jain Food</option>
                          </select>
                        </div>
                      </div>

                      {/* Message / Special Note */}
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Memories / Message for Dharohar 2026 Souvenir (Optional)
                        </label>
                        <textarea
                          rows="3"
                          value={rsvpData.message}
                          onChange={(e) => setRsvpData({ ...rsvpData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                          placeholder="Share a message for batchmates or faculty..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-[#B70D2B] hover:bg-neutral-900 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-lg shadow-red-950/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Confirm RSVP · Register for Dharohar 2026</span>
                      </button>

                      <p className="text-[11px] text-center text-neutral-500 pt-1">
                        By submitting, you agree to receive event communications and pass confirmations from GCAAA Secretariat.
                      </p>
                    </form>
                  )}
                </div>
              )}

              {/* ==============================================
                  TAB 2: GENERAL SECRETARIAT ENQUIRY
              ============================================== */}
              {activeTab === 'enquiry' && (
                <div>
                  <div className="mb-6 space-y-1">
                    <h3 className="text-lg font-bold text-neutral-900 font-serif">
                      Send a Message to GCAAA Secretariat
                    </h3>
                    <p className="text-xs text-neutral-600">
                      For official correspondence, membership inquiries, document verification, or general questions.
                    </p>
                  </div>

                  {enquirySubmitted ? (
                    <div className="text-center py-10 px-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-4">
                      <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="text-2xl font-black text-emerald-950">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{enquiryData.name}</strong>. Your query has been forwarded to the GCAAA Secretariat. Our office bearers will respond within 24 to 48 business hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setEnquirySubmitted(false)}
                        className="bg-[#B70D2B] hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleEnquirySubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            Your Name <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={enquiryData.name}
                            onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            Email Address <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={enquiryData.email}
                            onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            Contact Number <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={enquiryData.phone}
                            onChange={(e) => setEnquiryData({ ...enquiryData, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                            Batch / Passout Year (If Alumnus)
                          </label>
                          <input
                            type="text"
                            value={enquiryData.batch}
                            onChange={(e) => setEnquiryData({ ...enquiryData, batch: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                            placeholder="e.g. 2015"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Subject / Inquiry Category
                        </label>
                        <select
                          value={enquiryData.topic}
                          onChange={(e) => setEnquiryData({ ...enquiryData, topic: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:outline-none"
                        >
                          <option value="Life Membership Enquiry">Life Membership Enquiry</option>
                          <option value="Dharohar 2026 Sponsorship / Stalls">Dharohar 2026 Sponsorship / Stalls</option>
                          <option value="Alumni Directory & Contact Update">Alumni Directory &amp; Contact Update</option>
                          <option value="Transcript & College Verification">Transcript &amp; College Verification</option>
                          <option value="General Feedback / Suggestion">General Feedback / Suggestion</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Message Details <span className="text-red-600">*</span>
                        </label>
                        <textarea
                          rows="4"
                          required
                          value={enquiryData.message}
                          onChange={(e) => setEnquiryData({ ...enquiryData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                          placeholder="How can the Secretariat assist you?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-[#B70D2B] hover:bg-neutral-900 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message to Secretariat</span>
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          4. CAMPUS LOCATION & GOOGLE MAP EMBED
      ======================================================== */}
      <section className="w-full bg-neutral-100 py-16 sm:py-20 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B70D2B] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              CAMPUS ACCESSIBILITY
            </span>
            <h2 className="text-3xl font-black text-neutral-900 font-serif mt-3">
              How to Reach FOAP AKTU Campus, Lucknow
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
              Located on Tagore Marg in Hazratganj, adjacent to the historic Lucknow University and Gomti Riverfront.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Transit Route Info (5 Cols) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#B70D2B]" />
                  <span>Key Transit Distance</span>
                </h3>

                <div className="space-y-3.5 text-xs text-neutral-700">
                  {/* Railway */}
                  <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                    <Train className="w-5 h-5 text-[#B70D2B] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-900">Charbagh Railway Station (LKO)</p>
                      <p className="text-neutral-500 mt-0.5">Approx. 5.2 km · 15 to 20 minutes by cab/auto</p>
                    </div>
                  </div>

                  {/* Airport */}
                  <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                    <Plane className="w-5 h-5 text-[#B70D2B] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-900">Chaudhary Charan Singh Airport (LKO)</p>
                      <p className="text-neutral-500 mt-0.5">Approx. 16.5 km · 35 to 45 minutes via Amar Shaheed Path / Metro</p>
                    </div>
                  </div>

                  {/* Roadways */}
                  <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                    <Car className="w-5 h-5 text-[#B70D2B] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-900">Kaiserbagh Bus Terminal</p>
                      <p className="text-neutral-500 mt-0.5">Approx. 2.8 km · 10 minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Landmark Note */}
              <div className="p-4 bg-red-50/70 border border-red-200/80 rounded-xl text-xs text-neutral-700 space-y-1">
                <p className="font-bold text-[#B70D2B]">Campus Landmark:</p>
                <p>
                  Near Hanuman Setu Temple and Arts College, opposite Lucknow University Law Faculty, Tagore Marg, Hazratganj.
                </p>
              </div>
            </div>

            {/* Embedded Google Map (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-md min-h-[350px] relative">
              <iframe
                title="GCA FOAP AKTU Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4893112261543!2d80.9329402758999!3d26.856172676680504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0a514d7a8f%3A0xb35515320e8b2b73!2sFaculty%20of%20Architecture%20and%20Planning%2C%20AKTU!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[380px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. HERITAGE CALL TO ACTION FOOTER
      ======================================================== */}
      {/* <HeritageCtaSection /> */}
    </div>
  );
};
