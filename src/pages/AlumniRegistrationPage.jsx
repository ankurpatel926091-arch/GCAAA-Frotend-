import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  Send,
  CheckCircle2,
  Award,
  Users,
  Building2,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  FileCheck,
} from 'lucide-react';

export const AlumniRegistrationPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlTab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(urlTab === 'membership' ? 'membership' : 'register');

  useEffect(() => {
    if (urlTab === 'membership') {
      setActiveTab('membership');
    } else if (urlTab === 'register') {
      setActiveTab('register');
    }
  }, [urlTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // Alumni Registration & RSVP State
  const [formData, setFormData] = useState({
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
    membershipInterest: true,
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Life Membership Form State
  const [membershipData, setMembershipData] = useState({
    salutation: 'Ar.',
    fullName: '',
    email: '',
    phone: '',
    batchYear: '',
    degree: 'B.Arch',
    coaNumber: '',
    currentAddress: '',
    city: '',
    state: '',
    pinCode: '',
    designation: '',
    firmName: '',
  });
  const [membershipSubmitted, setMembershipSubmitted] = useState(false);

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSubmitMembership = (e) => {
    e.preventDefault();
    setMembershipSubmitted(true);
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
            Official GCAAA Portal
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-serif tracking-tight leading-tight">
            Alumni Registration &amp;{' '}
            <span className="text-[#B70D2B] underline decoration-red-400/60 underline-offset-8">
              Membership Portal
            </span>
          </h1>

          <p className="mt-5 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Register your profile in the official GCAAA database, confirm attendance for{' '}
            <strong>Dharohar 2026</strong>, or apply for verified <strong>Life Membership</strong>.
          </p>
        </div>
      </section>

      {/* ========================================================
          2. QUICK BENEFIT PILLARS
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-200/90 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B70D2B] flex items-center justify-center shrink-0 shadow-xs">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#B70D2B] uppercase tracking-wider">Global Directory</p>
              <h3 className="text-base font-extrabold text-neutral-900 mt-0.5">3,500+ Alumni Network</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Connect with batchmates and seniors across India and internationally.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-200/90 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B70D2B] flex items-center justify-center shrink-0 shadow-xs">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#B70D2B] uppercase tracking-wider">Dharohar 2026 Meet</p>
              <h3 className="text-base font-extrabold text-neutral-900 mt-0.5">Saturday, 28 Nov 2026</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Ruby Jubilee (1986) &amp; Silver Jubilee (2001) grand celebrations at FOAP.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-200/90 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B70D2B] flex items-center justify-center shrink-0 shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#B70D2B] uppercase tracking-wider">Life Membership</p>
              <h3 className="text-base font-extrabold text-neutral-900 mt-0.5">Lifetime Voting &amp; Credentials</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Voting rights in the Annual GBM, official certificate, and directory listing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. MAIN INTERACTIVE FORM SECTION
      ======================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
          
          {/* Form Tabs Navigation */}
          <div className="flex border-b border-neutral-200 bg-neutral-100/70 p-2 gap-2">
            <button
              type="button"
              onClick={() => handleTabChange('register')}
              className={`flex-1 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'register'
                  ? 'bg-[#B70D2B] text-white shadow-md'
                  : 'text-neutral-700 hover:bg-neutral-200/80'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Alumni Registration &amp; Dharohar 2026 RSVP</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('membership')}
              className={`flex-1 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'membership'
                  ? 'bg-[#B70D2B] text-white shadow-md'
                  : 'text-neutral-700 hover:bg-neutral-200/80'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Apply for Life Membership</span>
            </button>
          </div>

          <div className="p-6 sm:p-10">
            {/* ==============================================
                TAB 1: ALUMNI REGISTRATION & RSVP FORM
            ============================================== */}
            {activeTab === 'register' && (
              <div>
                {/* Event Highlight Banner inside form */}
                <div className="mb-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded">
                      FLAGSHIP REUNION · 2026
                    </span>
                    <h4 className="text-sm font-black text-amber-950">
                      Annual Alumni Meet &amp; GBM — 28th November 2026
                    </h4>
                    <p className="text-xs text-amber-900">
                      Celebrating Ruby Jubilee (1986) &amp; Silver Jubilee (2001) cohorts at Lucknow.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-amber-900 bg-white/80 px-3 py-1.5 rounded-lg border border-amber-200 whitespace-nowrap shadow-xs">
                    📍 FOAP AKTU Auditorium, Lucknow
                  </span>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-10 px-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-4">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-black text-emerald-950">
                      Registration Received Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Thank you,{' '}
                      <strong>
                        {formData.salutation} {formData.fullName || 'Alumnus'}
                      </strong>
                      ! Your profile has been added to the GCAAA database, and RSVP recorded for <strong>Dharohar 2026</strong>.
                    </p>

                    <div className="bg-white/80 border border-emerald-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5 text-neutral-700">
                      <p><strong>Batch / Passout Year:</strong> {formData.batchYear || 'Alumnus'}</p>
                      <p><strong>Attendance Mode:</strong> {formData.attendance}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Phone:</strong> {formData.phone}</p>
                    </div>

                    <p className="text-xs text-emerald-700">
                      Confirmation copy and entry passes will be sent to your registered email.
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="w-full sm:w-auto bg-[#B70D2B] hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow"
                      >
                        Submit Another Profile
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
                  <form onSubmit={handleSubmitRegistration} className="space-y-4">
                    {/* Name with Salutation */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.salutation}
                          onChange={(e) => setFormData({ ...formData, salutation: e.target.value })}
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
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                          value={formData.batchYear}
                          onChange={(e) => setFormData({ ...formData, batchYear: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                          placeholder="e.g. 2001 (Silver Jubilee) or 1986"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Degree / Course
                        </label>
                        <select
                          value={formData.degree}
                          onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
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
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
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
                          value={formData.firm}
                          onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                          placeholder="e.g. Principal Architect, Design Studio"
                        />
                      </div>
                    </div>

                    {/* Attendance Mode & Dietary */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Dharohar 2026 Attendance
                        </label>
                        <select
                          value={formData.attendance}
                          onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:outline-none"
                        >
                          <option value="Attending Solo">Attending Solo</option>
                          <option value="Attending with Spouse">Attending with Spouse</option>
                          <option value="Attending with Family">Attending with Family</option>
                          <option value="Unable to Attend (Register Only)">Unable to Attend in Person (Register in Directory Only)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Dietary Preference
                        </label>
                        <select
                          value={formData.dietary}
                          onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:outline-none"
                        >
                          <option value="Vegetarian">Vegetarian</option>
                          <option value="Non-Vegetarian">Non-Vegetarian</option>
                          <option value="Jain Food">Jain Food</option>
                        </select>
                      </div>
                    </div>

                    {/* Life Membership Checkbox */}
                    <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-200/80 flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="membershipInterest"
                        checked={formData.membershipInterest}
                        onChange={(e) => setFormData({ ...formData, membershipInterest: e.target.checked })}
                        className="mt-0.5 w-4 h-4 text-red-600 rounded border-neutral-300 focus:ring-red-500 cursor-pointer"
                      />
                      <label htmlFor="membershipInterest" className="text-xs text-neutral-800 cursor-pointer">
                        <strong className="font-bold text-[#B70D2B]">Apply for Official Life Membership:</strong>{' '}
                        Yes, please send me Life Membership verification details and credentials.
                      </label>
                    </div>

                    {/* Message / Memories */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Memories or Message for Dharohar 2026 Souvenir (Optional)
                      </label>
                      <textarea
                        rows="3"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                        placeholder="Share a message or memories for your batchmates and faculty..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#B70D2B] hover:bg-neutral-900 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-lg shadow-red-950/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Complete Registration &amp; Confirm RSVP</span>
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* ==============================================
                TAB 2: LIFE MEMBERSHIP APPLICATION
            ============================================== */}
            {activeTab === 'membership' && (
              <div>
                <div className="mb-6 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#B70D2B] text-xs font-extrabold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" /> Verified Alumnus Status
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 font-serif">
                    GCAAA Life Membership Application
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Life Membership is open to all graduates of Government College of Architecture (GCA) and FOAP-AKTU. 
                    Members receive an official membership certificate, voting rights in the Annual GBM, and access to the verified global directory.
                  </p>
                </div>

                {membershipSubmitted ? (
                  <div className="text-center py-10 px-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-4">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-black text-emerald-950">
                      Application Submitted Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{membershipData.salutation} {membershipData.fullName}</strong>. 
                      Your Life Membership application has been received by the GCAAA Secretariat. 
                      Our membership bureau will review your details and email the verification confirmation.
                    </p>
                    <button
                      type="button"
                      onClick={() => setMembershipSubmitted(false)}
                      className="bg-[#B70D2B] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitMembership} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Salutation <span className="text-red-600">*</span>
                        </label>
                        <select
                          value={membershipData.salutation}
                          onChange={(e) => setMembershipData({ ...membershipData, salutation: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl"
                        >
                          <option value="Ar.">Ar.</option>
                          <option value="Prof.">Prof.</option>
                          <option value="Dr.">Dr.</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={membershipData.fullName}
                          onChange={(e) => setMembershipData({ ...membershipData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl"
                          placeholder="Your complete name as per degree"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={membershipData.email}
                          onChange={(e) => setMembershipData({ ...membershipData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Mobile Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={membershipData.phone}
                          onChange={(e) => setMembershipData({ ...membershipData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Batch / Year <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={membershipData.batchYear}
                          onChange={(e) => setMembershipData({ ...membershipData, batchYear: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl"
                          placeholder="Passout Year"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Degree Course
                        </label>
                        <select
                          value={membershipData.degree}
                          onChange={(e) => setMembershipData({ ...membershipData, degree: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl"
                        >
                          <option value="B.Arch">B.Arch</option>
                          <option value="M.Arch">M.Arch</option>
                          <option value="MURP">MURP</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Council of Architecture (COA) No.
                        </label>
                        <input
                          type="text"
                          value={membershipData.coaNumber}
                          onChange={(e) => setMembershipData({ ...membershipData, coaNumber: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl"
                          placeholder="CA/YYYY/XXXXX (Optional)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Current Postal Address
                      </label>
                      <input
                        type="text"
                        value={membershipData.currentAddress}
                        onChange={(e) => setMembershipData({ ...membershipData, currentAddress: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl"
                        placeholder="House / Office, Street, Area"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          City
                        </label>
                        <input
                          type="text"
                          value={membershipData.city}
                          onChange={(e) => setMembershipData({ ...membershipData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          State / Country
                        </label>
                        <input
                          type="text"
                          value={membershipData.state}
                          onChange={(e) => setMembershipData({ ...membershipData, state: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          PIN / Postal Code
                        </label>
                        <input
                          type="text"
                          value={membershipData.pinCode}
                          onChange={(e) => setMembershipData({ ...membershipData, pinCode: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#B70D2B] hover:bg-neutral-900 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-lg transition-all cursor-pointer"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>Submit Life Membership Application</span>
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
