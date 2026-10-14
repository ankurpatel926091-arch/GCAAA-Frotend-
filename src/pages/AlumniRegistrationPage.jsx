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
  Camera,
  MapPin,
  Briefcase,
  CreditCard,
  FileText,
  User,
  Check,
  Printer,
  Info,
  ChevronDown,
  ChevronUp,
  Search,
} from 'lucide-react';
import logoImg from '@/assets/images/logo.png';

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

  // Life Membership Form State (Based on Official GCAAA Membership Registration Form)
  const [membershipData, setMembershipData] = useState({
    // 1. Name in Full
    salutation: 'Ar.',
    firstName: '',
    middleName: '',
    surName: '',
    // 2. Professional Qualification
    qualifications: ['B.Arch.'],
    specialisation: '',
    // 3. Passing out Year
    passingYear: '',
    // 4. Occupation
    occupation: 'Selfemployed',
    // 5. Details of Occupation
    organization: '',
    designation: '',
    email: '',
    // 6. Address
    officeStreet: '',
    officeCity: '',
    officeCountry: 'India',
    officePhone: '',
    sameAsOffice: false,
    residenceStreet: '',
    residenceCity: '',
    residenceCountry: 'India',
    residencePhone: '',
    // 7. Membership Fee
    paymentMode: 'Cheque',
    amount: '2000',
    // 8. Details of Cheque
    chequeNo: '',
    drawnOnBank: '',
    chequeDate: '',
    // Photo & Signature
    photoPreview: null,
    applicantSignature: '',
    agreedToRules: true,
  });
  const [membershipSubmitted, setMembershipSubmitted] = useState(false);
  const [openSection, setOpenSection] = useState('eligibility');

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMembershipData((prev) => ({
          ...prev,
          photoPreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSameAsOfficeChange = (checked) => {
    setMembershipData((prev) => ({
      ...prev,
      sameAsOffice: checked,
      ...(checked
        ? {
            residenceStreet: prev.officeStreet,
            residenceCity: prev.officeCity,
            residenceCountry: prev.officeCountry,
            residencePhone: prev.officePhone,
          }
        : {}),
    }));
  };

  const handleOfficeFieldChange = (field, value) => {
    setMembershipData((prev) => {
      const updated = { ...prev, [field]: value };
      if (prev.sameAsOffice) {
        if (field === 'officeStreet') updated.residenceStreet = value;
        if (field === 'officeCity') updated.residenceCity = value;
        if (field === 'officeCountry') updated.residenceCountry = value;
        if (field === 'officePhone') updated.residencePhone = value;
      }
      return updated;
    });
  };

  const handleQualificationToggle = (val) => {
    setMembershipData((prev) => {
      const current = prev.qualifications || [];
      const updated = current.includes(val)
        ? current.filter((item) => item !== val)
        : [...current, val];
      return { ...prev, qualifications: updated };
    });
  };

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
      <section
        className={`mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 transition-all duration-300 ${
          activeTab === 'membership' ? 'max-w-[1440px]' : 'max-w-5xl'
        }`}
      >
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
              <span>Alumni Life Time Membership Registration </span>
            </button>
          </div>

          <div className="p-4 sm:p-7 lg:p-9">
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
                TAB 2: LIFE MEMBERSHIP APPLICATION (OFFICIAL GCAAA FORM)
            ============================================== */}
            {activeTab === 'membership' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* --------------------------------------------------
                    LEFT COLUMN: OFFICIAL GCAAA REGISTRATION FORM
                -------------------------------------------------- */}
                <div className="space-y-6">
                  {/* Official Paper Form Header Badge */}
                  <div className="border-2 border-neutral-800 rounded-2xl p-4 sm:p-6 bg-neutral-50/80 shadow-sm relative overflow-hidden">
                    {/* Decorative top red strip */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-[#B70D2B] to-neutral-900" />

                  <div className="flex flex-col md:flex-row items-center justify-between gap-5 border-b border-neutral-300 pb-5">
                    <div className="flex items-center gap-4 text-center md:text-left">
                      <img
                        src={logoImg}
                        alt="GCAAA Logo"
                        className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-xs"
                      />
                      <div>
                        <h2 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight font-serif uppercase">
                          GCA Alumni Association
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-700 font-medium">
                          Faculty of Architecture, GBTU (now FOAP, AKTU), Tagore Marg, Lucknow, U.P. – 226007
                        </p>
                        <p className="text-xs text-[#B70D2B] font-bold">
                          Contact: contact.gcaaa@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-center">
                      <span className="inline-block px-4 py-2 bg-neutral-900 text-white text-xs sm:text-sm font-black uppercase tracking-widest rounded-lg shadow-sm">
                        MEMBERSHIP REGISTRATION FORM
                      </span>
                    </div>
                  </div>

                  <div className="pt-3.5 flex items-start gap-2 text-xs sm:text-sm text-neutral-800 italic leading-relaxed">
                    <span className="font-bold text-neutral-900 not-italic shrink-0">Declaration:</span>
                    <span>
                      &ldquo;Kindly enroll me as member of GCA Alumni Association. I hereby agree to abide by the rules &amp; regulations of GCAAA.&rdquo;
                    </span>
                  </div>
                </div>

                {membershipSubmitted ? (
                  <div className="text-center py-12 px-6 bg-emerald-50/80 border-2 border-emerald-300 rounded-2xl space-y-5">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                        Form Successfully Registered
                      </span>
                      <h3 className="text-2xl font-black text-emerald-950 font-serif pt-1">
                        Membership Application Submitted!
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
                        Thank you, <strong>{membershipData.salutation} {membershipData.firstName} {membershipData.middleName} {membershipData.surName}</strong>. 
                        Your official enrollment form has been registered with the GCAAA Secretariat.
                      </p>
                    </div>

                    <div className="bg-white border border-emerald-200 rounded-2xl p-5 max-w-xl mx-auto text-left text-xs space-y-2 text-neutral-700 shadow-sm">
                      <div className="grid grid-cols-2 gap-2 border-b border-neutral-100 pb-2">
                        <div>
                          <span className="text-neutral-400 block text-[10px] uppercase font-bold">Qualification:</span>
                          <strong>{(membershipData.qualifications || []).join(', ') || 'B.Arch.'}</strong>
                        </div>
                        <div>
                          <span className="text-neutral-400 block text-[10px] uppercase font-bold">Passing out Year:</span>
                          <strong>{membershipData.passingYear || 'N/A'}</strong>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 border-b border-neutral-100 pb-2">
                        <div>
                          <span className="text-neutral-400 block text-[10px] uppercase font-bold">Occupation:</span>
                          <strong>{membershipData.occupation}</strong>
                        </div>
                        <div>
                          <span className="text-neutral-400 block text-[10px] uppercase font-bold">Organization:</span>
                          <strong>{membershipData.organization || 'Independent'}</strong>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 border-b border-neutral-100 pb-2">
                        <div>
                          <span className="text-neutral-400 block text-[10px] uppercase font-bold">Payment Mode:</span>
                          <strong className="text-emerald-700">{membershipData.paymentMode} (₹ {membershipData.amount})</strong>
                        </div>
                        <div>
                          <span className="text-neutral-400 block text-[10px] uppercase font-bold">
                            {membershipData.paymentMode === 'Cheque' ? 'Cheque No:' : 'Reference:'}
                          </span>
                          <strong>{membershipData.chequeNo || 'Cash Receipt Pending'}</strong>
                        </div>
                      </div>

                      <div className="pt-1">
                        <span className="text-neutral-400 block text-[10px] uppercase font-bold">Residence Address:</span>
                        <p className="text-neutral-800">
                          {membershipData.residenceStreet}, {membershipData.residenceCity}, {membershipData.residenceCountry} (Ph: {membershipData.residencePhone})
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-600 max-w-md mx-auto">
                      Official Membership No. and Certificate will be issued after document verification by the GCAAA Executive Committee.
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-300 hover:bg-neutral-100 text-neutral-800 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-xs"
                      >
                        <Printer className="w-4 h-4" />
                        <span>Print Application Copy</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setMembershipSubmitted(false)}
                        className="w-full sm:w-auto bg-[#B70D2B] hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md"
                      >
                        Submit Another Form
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitMembership} className="space-y-7">
                    
                    {/* ========================================================
                        SECTION 1: NAME IN FULL + RECENT PHOTO
                    ======================================================== */}
                    <div className="flex flex-col sm:flex-row gap-5 items-start bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs">
                      <div className="flex-1 space-y-4 w-full">
                        <div className="border-b border-neutral-200 pb-2">
                          <h4 className="text-sm font-black text-neutral-900 uppercase tracking-wider flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#B70D2B] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                            <span>1. Name in Full: <span className="text-xs font-normal text-neutral-500 lowercase">(as recorded on academic certificate)</span></span>
                            <span className="text-red-600">*</span>
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                              Salutation
                            </label>
                            <select
                              value={membershipData.salutation}
                              onChange={(e) => setMembershipData({ ...membershipData, salutation: e.target.value })}
                              className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden font-bold"
                            >
                              <option value="Ar.">Ar.</option>
                              <option value="Prof.">Prof.</option>
                              <option value="Dr.">Dr.</option>
                              <option value="Mr.">Mr.</option>
                              <option value="Ms.">Ms.</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                              (First Name) <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={membershipData.firstName}
                              onChange={(e) => setMembershipData({ ...membershipData, firstName: e.target.value })}
                              placeholder="First Name"
                              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                              (Middle Name)
                            </label>
                            <input
                              type="text"
                              value={membershipData.middleName}
                              onChange={(e) => setMembershipData({ ...membershipData, middleName: e.target.value })}
                              placeholder="Middle Name"
                              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                              (Sur Name) <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={membershipData.surName}
                              onChange={(e) => setMembershipData({ ...membershipData, surName: e.target.value })}
                              placeholder="Sur Name"
                              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Photo Upload Box (Passport Photo Frame matching paper form) */}
                      <div className="w-full sm:w-32 shrink-0 flex flex-col items-center justify-center p-3 rounded-xl bg-neutral-50 border-2 border-dashed border-neutral-300 text-center">
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-2">
                          Recent Photo
                        </label>
                        <div className="w-24 sm:w-28 h-32 sm:h-36 bg-white border border-neutral-300 rounded-lg overflow-hidden flex flex-col items-center justify-center relative group cursor-pointer shadow-2xs">
                          {membershipData.photoPreview ? (
                            <img
                              src={membershipData.photoPreview}
                              alt="Applicant"
                              className="w-full h-full object-cover object-top"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center p-2 text-neutral-400">
                              <Camera className="w-6 h-6 mb-1 text-neutral-400" />
                              <span className="text-[10px] font-bold uppercase tracking-wider leading-tight text-neutral-500">
                                Recent Photo
                              </span>
                              <span className="text-[9px] text-neutral-400 mt-0.5">Click to upload</span>
                            </div>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                        </div>
                        {membershipData.photoPreview ? (
                          <button
                            type="button"
                            onClick={() => setMembershipData({ ...membershipData, photoPreview: null })}
                            className="mt-2 text-[10px] font-bold text-red-600 hover:underline"
                          >
                            Remove Photo
                          </button>
                        ) : (
                          <span className="text-[10px] text-neutral-400 mt-1.5">Passport size</span>
                        )}
                      </div>
                    </div>

                    {/* ========================================================
                        SECTION 2 & 3: QUALIFICATION & PASSING OUT YEAR
                    ======================================================== */}
                    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-5">
                      {/* 2. Professional Qualification */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-black text-neutral-900 uppercase tracking-wider flex items-center gap-2 border-b border-neutral-200 pb-2">
                          <span className="w-6 h-6 rounded-full bg-[#B70D2B] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                          <span>2. Professional Qualification:</span>
                        </h4>

                        <div className="flex flex-wrap items-center gap-5 pt-1">
                          <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-800 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={membershipData.qualifications?.includes('B.Arch.')}
                              onChange={() => handleQualificationToggle('B.Arch.')}
                              className="w-4 h-4 text-red-600 rounded focus:ring-red-500 accent-red-600"
                            />
                            <span>B.Arch.</span>
                          </label>

                          <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-800 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={membershipData.qualifications?.includes('Diploma in Arch.')}
                              onChange={() => handleQualificationToggle('Diploma in Arch.')}
                              className="w-4 h-4 text-red-600 rounded focus:ring-red-500 accent-red-600"
                            />
                            <span>Diploma in Arch.</span>
                          </label>

                          <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-800 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={membershipData.qualifications?.includes('Other')}
                              onChange={() => handleQualificationToggle('Other')}
                              className="w-4 h-4 text-red-600 rounded focus:ring-red-500 accent-red-600"
                            />
                            <span>Other Post-Graduation</span>
                          </label>
                        </div>

                        <div className="pt-2">
                          <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                            Specialisation
                          </label>
                          <input
                            type="text"
                            value={membershipData.specialisation}
                            onChange={(e) => setMembershipData({ ...membershipData, specialisation: e.target.value })}
                            placeholder="e.g. Urban Design, Heritage Conservation, Landscape, Planning, Interior"
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden"
                          />
                        </div>
                      </div>

                      {/* 3. Passing out Year */}
                      <div className="space-y-3 pt-3 border-t border-neutral-100">
                        <h4 className="text-sm font-black text-neutral-900 uppercase tracking-wider flex items-center gap-2 border-b border-neutral-200 pb-2">
                          <span className="w-6 h-6 rounded-full bg-[#B70D2B] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                          <span>3. Passing out Year: <span className="text-xs font-normal text-neutral-500 lowercase">(as per academic calender)</span></span>
                          <span className="text-red-600">*</span>
                        </h4>

                        <div className="pt-2">
                          <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                            Graduation Year (4 Digits)
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              maxLength={4}
                              value={membershipData.passingYear}
                              onChange={(e) => setMembershipData({ ...membershipData, passingYear: e.target.value.replace(/\D/g, '') })}
                              placeholder="YYYY (e.g. 1986, 2001)"
                              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden font-bold tracking-widest text-neutral-900"
                            />
                            <Calendar className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                          <span className="text-[10px] text-neutral-500 mt-1 block">
                            E.g. Batch of 1986 (Ruby Jubilee) or Batch of 2001 (Silver Jubilee)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ========================================================
                        SECTION 4 & 5: OCCUPATION & DETAILS OF OCCUPATION
                    ======================================================== */}
                    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-5">
                      {/* 4. Occupation */}
                      <div>
                        <h4 className="text-sm font-black text-neutral-900 uppercase tracking-wider flex items-center gap-2 border-b border-neutral-200 pb-2">
                          <span className="w-6 h-6 rounded-full bg-[#B70D2B] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                          <span>4. Occupation:</span>
                          <span className="text-red-600">*</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                          <label
                            className={`p-4 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                              membershipData.occupation === 'Selfemployed'
                                ? 'border-[#B70D2B] bg-red-50/70 text-neutral-900 shadow-xs'
                                : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-700'
                            }`}
                          >
                            <input
                              type="radio"
                              name="occupation"
                              value="Selfemployed"
                              checked={membershipData.occupation === 'Selfemployed'}
                              onChange={(e) => setMembershipData({ ...membershipData, occupation: e.target.value })}
                              className="w-4 h-4 text-red-600 accent-red-600"
                            />
                            <div>
                              <strong className="text-xs sm:text-sm font-extrabold block">Selfemployed</strong>
                              <span className="text-[11px] text-neutral-500">Private Architectural Practice / Firm Owner / Freelance Consultant</span>
                            </div>
                          </label>

                          <label
                            className={`p-4 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                              membershipData.occupation === 'Service'
                                ? 'border-[#B70D2B] bg-red-50/70 text-neutral-900 shadow-xs'
                                : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-700'
                            }`}
                          >
                            <input
                              type="radio"
                              name="occupation"
                              value="Service"
                              checked={membershipData.occupation === 'Service'}
                              onChange={(e) => setMembershipData({ ...membershipData, occupation: e.target.value })}
                              className="w-4 h-4 text-red-600 accent-red-600"
                            />
                            <div>
                              <strong className="text-xs sm:text-sm font-extrabold block">Service</strong>
                              <span className="text-[11px] text-neutral-500">Govt. Organization / Corporate Firm / Academic / Institutional</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      {/* 5. Details of Occupation */}
                      <div className="pt-2">
                        <h4 className="text-sm font-black text-neutral-900 uppercase tracking-wider flex items-center gap-2 border-b border-neutral-200 pb-2 mb-3">
                          <span className="w-6 h-6 rounded-full bg-[#B70D2B] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
                          <span>5. Details of Occupation:</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                              Organization
                            </label>
                            <input
                              type="text"
                              value={membershipData.organization}
                              onChange={(e) => setMembershipData({ ...membershipData, organization: e.target.value })}
                              placeholder="Firm / College / Department Name"
                              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                              Designation
                            </label>
                            <input
                              type="text"
                              value={membershipData.designation}
                              onChange={(e) => setMembershipData({ ...membershipData, designation: e.target.value })}
                              placeholder="e.g. Principal Architect / Partner / Professor"
                              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                              E-mail <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={membershipData.email}
                              onChange={(e) => setMembershipData({ ...membershipData, email: e.target.value })}
                              placeholder="contact@architect.com"
                              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ========================================================
                        SECTION 6: ADDRESS (OFFICE & RESIDENCE)
                    ======================================================== */}
                    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-4">
                      <h4 className="text-sm font-black text-neutral-900 uppercase tracking-wider flex items-center gap-2 border-b border-neutral-200 pb-2">
                        <span className="w-6 h-6 rounded-full bg-[#B70D2B] text-white flex items-center justify-center text-xs font-bold shrink-0">6</span>
                        <span>6. Address:</span>
                      </h4>

                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                        {/* Office Address Card */}
                        <div className="bg-neutral-50 p-4 sm:p-5 rounded-xl border border-neutral-200 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-black text-neutral-900 uppercase tracking-wider border-b border-neutral-200 pb-2">
                            <Building2 className="w-4 h-4 text-[#B70D2B]" />
                            <span>Office Address</span>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                              Street
                            </label>
                            <input
                              type="text"
                              value={membershipData.officeStreet}
                              onChange={(e) => handleOfficeFieldChange('officeStreet', e.target.value)}
                              placeholder="Office / Chamber / Suite No., Street, Area"
                              className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:border-red-600 outline-hidden"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                                City
                              </label>
                              <input
                                type="text"
                                value={membershipData.officeCity}
                                onChange={(e) => handleOfficeFieldChange('officeCity', e.target.value)}
                                placeholder="City"
                                className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:border-red-600 outline-hidden"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                                Country
                              </label>
                              <input
                                type="text"
                                value={membershipData.officeCountry}
                                onChange={(e) => handleOfficeFieldChange('officeCountry', e.target.value)}
                                placeholder="Country"
                                className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:border-red-600 outline-hidden"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                              Phone
                            </label>
                            <input
                              type="tel"
                              value={membershipData.officePhone}
                              onChange={(e) => handleOfficeFieldChange('officePhone', e.target.value)}
                              placeholder="Office Phone / Landline / Mobile"
                              className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:border-red-600 outline-hidden"
                            />
                          </div>
                        </div>

                        {/* Residence Address Card */}
                        <div className="bg-neutral-50 p-4 sm:p-5 rounded-xl border border-neutral-200 space-y-3">
                          <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                            <span className="flex items-center gap-2 text-xs font-black text-neutral-900 uppercase tracking-wider">
                              <MapPin className="w-4 h-4 text-[#B70D2B]" />
                              <span>Residence Address</span>
                            </span>
                            <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#B70D2B] cursor-pointer hover:underline">
                              <input
                                type="checkbox"
                                checked={membershipData.sameAsOffice}
                                onChange={(e) => handleSameAsOfficeChange(e.target.checked)}
                                className="w-3.5 h-3.5 text-red-600 rounded accent-red-600"
                              />
                              <span>(Same as office address)</span>
                            </label>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                              Street
                            </label>
                            <input
                              type="text"
                              disabled={membershipData.sameAsOffice}
                              value={membershipData.residenceStreet}
                              onChange={(e) => setMembershipData({ ...membershipData, residenceStreet: e.target.value })}
                              placeholder="House / Flat No., Street, Colony"
                              className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                                membershipData.sameAsOffice
                                  ? 'bg-neutral-200/60 border-neutral-300 text-neutral-500 cursor-not-allowed'
                                  : 'bg-white border-neutral-300 focus:border-red-600'
                              }`}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                                City
                              </label>
                              <input
                                type="text"
                                disabled={membershipData.sameAsOffice}
                                value={membershipData.residenceCity}
                                onChange={(e) => setMembershipData({ ...membershipData, residenceCity: e.target.value })}
                                placeholder="City"
                                className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                                  membershipData.sameAsOffice
                                    ? 'bg-neutral-200/60 border-neutral-300 text-neutral-500 cursor-not-allowed'
                                    : 'bg-white border-neutral-300 focus:border-red-600'
                                }`}
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                                Country
                              </label>
                              <input
                                type="text"
                                disabled={membershipData.sameAsOffice}
                                value={membershipData.residenceCountry}
                                onChange={(e) => setMembershipData({ ...membershipData, residenceCountry: e.target.value })}
                                placeholder="Country"
                                className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                                  membershipData.sameAsOffice
                                    ? 'bg-neutral-200/60 border-neutral-300 text-neutral-500 cursor-not-allowed'
                                    : 'bg-white border-neutral-300 focus:border-red-600'
                                }`}
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                              Phone <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              disabled={membershipData.sameAsOffice}
                              value={membershipData.residencePhone}
                              onChange={(e) => setMembershipData({ ...membershipData, residencePhone: e.target.value })}
                              placeholder="Personal Mobile / Phone Number"
                              className={`w-full px-3 py-2 text-xs rounded-lg border outline-hidden ${
                                membershipData.sameAsOffice
                                  ? 'bg-neutral-200/60 border-neutral-300 text-neutral-500 cursor-not-allowed'
                                  : 'bg-white border-neutral-300 focus:border-red-600'
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ========================================================
                        SECTION 7 & 8: MEMBERSHIP FEE & CHEQUE DETAILS
                    ======================================================== */}
                    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-5">
                      {/* 7. Membership Fee */}
                      <div>
                        <h4 className="text-sm font-black text-neutral-900 uppercase tracking-wider flex items-center justify-between border-b border-neutral-200 pb-2">
                          <span className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#B70D2B] text-white flex items-center justify-center text-xs font-bold shrink-0">7</span>
                            <span>7. Membership Fee:</span>
                          </span>
                          <span className="text-xs font-black text-[#B70D2B] bg-red-50 px-3 py-1 rounded-md border border-red-200">
                            Amount: ₹ {membershipData.amount || '2,000'} (Life Membership)
                          </span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
                          <label
                            className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                              membershipData.paymentMode === 'Cheque'
                                ? 'border-[#B70D2B] bg-red-50/70 text-neutral-900 shadow-xs'
                                : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-700'
                            }`}
                          >
                            <input
                              type="radio"
                              name="paymentMode"
                              value="Cheque"
                              checked={membershipData.paymentMode === 'Cheque'}
                              onChange={(e) => setMembershipData({ ...membershipData, paymentMode: e.target.value })}
                              className="w-4 h-4 text-red-600 accent-red-600"
                            />
                            <span className="text-xs sm:text-sm font-bold">Cheque</span>
                          </label>

                          <label
                            className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                              membershipData.paymentMode === 'Cash'
                                ? 'border-[#B70D2B] bg-red-50/70 text-neutral-900 shadow-xs'
                                : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-700'
                            }`}
                          >
                            <input
                              type="radio"
                              name="paymentMode"
                              value="Cash"
                              checked={membershipData.paymentMode === 'Cash'}
                              onChange={(e) => setMembershipData({ ...membershipData, paymentMode: e.target.value })}
                              className="w-4 h-4 text-red-600 accent-red-600"
                            />
                            <span className="text-xs sm:text-sm font-bold">Cash</span>
                          </label>

                          <label
                            className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                              membershipData.paymentMode === 'Online'
                                ? 'border-[#B70D2B] bg-red-50/70 text-neutral-900 shadow-xs'
                                : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-700'
                            }`}
                          >
                            <input
                              type="radio"
                              name="paymentMode"
                              value="Online"
                              checked={membershipData.paymentMode === 'Online'}
                              onChange={(e) => setMembershipData({ ...membershipData, paymentMode: e.target.value })}
                              className="w-4 h-4 text-red-600 accent-red-600"
                            />
                            <span className="text-xs sm:text-sm font-bold">Online / NEFT / UPI</span>
                          </label>
                        </div>
                      </div>

                      {/* 8. Details of Cheque */}
                      <div className="pt-2">
                        <h4 className="text-sm font-black text-neutral-900 uppercase tracking-wider flex items-center gap-2 border-b border-neutral-200 pb-2 mb-3">
                          <span className="w-6 h-6 rounded-full bg-[#B70D2B] text-white flex items-center justify-center text-xs font-bold shrink-0">8</span>
                          <span>8. Details of Cheque:</span>
                        </h4>

                        {membershipData.paymentMode === 'Cheque' ? (
                          <div className="space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                              <div>
                                <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                                  Cheque No. <span className="text-red-600">*</span>
                                </label>
                                <input
                                  type="text"
                                  required={membershipData.paymentMode === 'Cheque'}
                                  value={membershipData.chequeNo}
                                  onChange={(e) => setMembershipData({ ...membershipData, chequeNo: e.target.value })}
                                  placeholder="e.g. 000421"
                                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                                  Drawn on Bank <span className="text-red-600">*</span>
                                </label>
                                <input
                                  type="text"
                                  required={membershipData.paymentMode === 'Cheque'}
                                  value={membershipData.drawnOnBank}
                                  onChange={(e) => setMembershipData({ ...membershipData, drawnOnBank: e.target.value })}
                                  placeholder="Bank Name & Branch"
                                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                                  Date <span className="text-red-600">*</span>
                                </label>
                                <input
                                  type="date"
                                  required={membershipData.paymentMode === 'Cheque'}
                                  value={membershipData.chequeDate}
                                  onChange={(e) => setMembershipData({ ...membershipData, chequeDate: e.target.value })}
                                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:border-red-600 focus:bg-white outline-hidden font-bold"
                                />
                              </div>
                            </div>

                            <p className="text-xs text-neutral-800 bg-amber-50/90 p-3.5 rounded-xl border border-amber-300">
                              ℹ️ <strong>Instructions:</strong> (Cheques to be drawn in favour of{' '}
                              <strong className="text-neutral-900">&ldquo;GCA Alumni Association&rdquo;</strong>, Lucknow, payable at Lucknow.)
                            </p>
                          </div>
                        ) : membershipData.paymentMode === 'Cash' ? (
                          <div className="bg-neutral-50 p-4 sm:p-5 rounded-xl border border-neutral-200 text-xs text-neutral-700 space-y-2">
                            <p className="font-bold text-neutral-900 text-sm">💵 Cash Payment Instructions:</p>
                            <p className="leading-relaxed">
                              Life Membership cash fee of <strong>₹ 2,000</strong> can be deposited directly with the GCAAA Treasurer at the Alumni Association Office, FOAP-AKTU Campus, Lucknow, or at the Registration Desk during Dharohar 2026 on 28th November.
                            </p>
                            <p className="text-emerald-700 font-bold bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                              ✓ Official Cash Receipt will be issued to you by the Secretariat.
                            </p>
                          </div>
                        ) : (
                          <div className="bg-neutral-50 p-4 sm:p-5 rounded-xl border border-neutral-200 text-xs text-neutral-700 space-y-3">
                            <p className="font-bold text-neutral-900 text-sm">🏦 GCAAA Bank Account for Online NEFT / RTGS / UPI:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-white p-3.5 rounded-xl border border-neutral-200">
                              <p><strong>Account Name:</strong> GCA Alumni Association</p>
                              <p><strong>Bank:</strong> Central Bank of India</p>
                              <p><strong>Branch:</strong> FOAP, Tagore Marg, Lucknow</p>
                              <p><strong>Account Type:</strong> Current Account</p>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                                UTR / Transaction Reference ID
                              </label>
                              <input
                                type="text"
                                value={membershipData.chequeNo}
                                onChange={(e) => setMembershipData({ ...membershipData, chequeNo: e.target.value })}
                                placeholder="Enter 12-digit UTR / UPI Reference Number"
                                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:border-red-600 outline-hidden"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ========================================================
                        SIGNATURE OF APPLICANT & DECLARATION
                    ======================================================== */}
                    <div className="bg-neutral-50 p-5 sm:p-6 rounded-2xl border border-neutral-200 space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={membershipData.agreedToRules}
                          onChange={(e) => setMembershipData({ ...membershipData, agreedToRules: e.target.checked })}
                          className="w-4 h-4 mt-0.5 text-red-600 rounded accent-red-600 shrink-0"
                        />
                        <span className="text-xs text-neutral-700 leading-relaxed font-medium">
                          I hereby agree to abide by the rules &amp; regulations of GCAAA. All information provided above is accurate and true to the best of my knowledge as per my academic certificate.
                        </span>
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-neutral-200 items-end">
                        <div>
                          <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                            Signature of Applicant (Type Full Name) <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={membershipData.applicantSignature}
                            onChange={(e) => setMembershipData({ ...membershipData, applicantSignature: e.target.value })}
                            placeholder="Type Your Full Name to Sign Digitally"
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:border-red-600 outline-hidden font-serif italic text-neutral-900 font-bold"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                            Date of Application
                          </label>
                          <input
                            type="text"
                            readOnly
                            value={new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-200/60 border border-neutral-300 rounded-xl text-neutral-600 font-bold"
                          />
                        </div>
                      </div>
                    </div>

                    

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#B70D2B] hover:bg-neutral-900 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-xl shadow-xl shadow-red-950/20 transition-all hover:scale-[1.005] active:scale-[0.99] cursor-pointer"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>Submit Membership Registration Form</span>
                    </button>
                  </form>
                )}
                </div>

                {/* --------------------------------------------------
                    RIGHT COLUMN: EXISTING MEMBERS & MEMBERSHIP PROCESS
                -------------------------------------------------- */}
                <div className="space-y-6 lg:sticky lg:top-24">
                  {/* Top Two Action Cards (Matches Reference Site Top Right) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Red Card: Existing Members */}
                    <Link
                      to="/alumni-data-list"
                      className="group relative overflow-hidden rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] p-4 sm:p-5 text-white shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all flex flex-col justify-between min-h-[135px] border border-red-600 cursor-pointer"
                    >
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-red-100 bg-black/20 px-2.5 py-0.5 rounded-full mb-2">
                          <Users className="w-3.5 h-3.5" />
                          Existing Members?
                        </span>
                        <h4 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                          Know your GCAAA membership number.
                        </h4>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs font-bold text-red-100">
                        <span className="underline underline-offset-4 decoration-red-300">Search Directory</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </Link>

                    {/* Orange Card: New Registration */}
                    <div className="relative overflow-hidden rounded-xl bg-[#FB8C00] p-4 sm:p-5 text-white shadow-md flex flex-col justify-between min-h-[135px] border border-amber-500">
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-100 bg-black/20 px-2.5 py-0.5 rounded-full mb-2">
                          <Award className="w-3.5 h-3.5" />
                          Online Portal
                        </span>
                        <h4 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                          New Registration
                        </h4>
                      </div>
                      <p className="mt-3 text-xs font-medium text-amber-100 leading-snug">
                        Fill the official Life Membership form on the left
                      </p>
                    </div>
                  </div>

                  {/* Section Title: Process of receiving Membership */}
                  <div className="pt-1">
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight font-serif">
                      Process of receiving Membership
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1">
                      Official guidelines, eligibility criteria, and member entitlements.
                    </p>
                  </div>

                  {/* Accordion Panels */}
                  <div className="space-y-3">
                    {/* 1. Eligibility of Application */}
                    <div className="overflow-hidden rounded-xl border border-neutral-200 shadow-2xs">
                      <button
                        type="button"
                        onClick={() => toggleSection('eligibility')}
                        className={`w-full text-left px-4 py-3.5 flex items-center justify-between font-bold text-xs sm:text-sm transition-colors cursor-pointer ${
                          openSection === 'eligibility'
                            ? 'bg-[#FB8C00] text-white'
                            : 'bg-white hover:bg-neutral-50 text-neutral-800'
                        }`}
                      >
                        <span>Eligibility of Application</span>
                        {openSection === 'eligibility' ? (
                          <ChevronUp className="w-4 h-4 shrink-0 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 shrink-0 text-neutral-500" />
                        )}
                      </button>
                      {openSection === 'eligibility' && (
                        <div className="bg-white p-5 text-xs text-neutral-700 space-y-2.5 border-t border-neutral-200">
                          <ul className="space-y-2 list-disc list-outside pl-4 marker:text-neutral-400 leading-relaxed">
                            <li>
                              Any person who has passed degree course in Architecture i.e. <strong>B. Arch.</strong> from a recognized University or Govt. College of Architecture (GCA Lucknow / Faculty of Architecture AKTU / GBTU).
                            </li>
                            <li>
                              Possess a 5-year Architectural Degree recognized by <strong>Council of Architecture (COA)</strong>, India and living / working in Lucknow, across India or abroad.
                            </li>
                            <li>
                              Nominated or recommended by at least one active GCAAA member or registered alumnus.
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* 2. Membership Benefits */}
                    <div className="overflow-hidden rounded-xl border border-neutral-200 shadow-2xs">
                      <button
                        type="button"
                        onClick={() => toggleSection('benefits')}
                        className={`w-full text-left px-4 py-3.5 flex items-center justify-between font-bold text-xs sm:text-sm transition-colors cursor-pointer ${
                          openSection === 'benefits'
                            ? 'bg-[#FB8C00] text-white'
                            : 'bg-white hover:bg-neutral-50 text-neutral-800'
                        }`}
                      >
                        <span>Membership Benefits</span>
                        {openSection === 'benefits' ? (
                          <ChevronUp className="w-4 h-4 shrink-0 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 shrink-0 text-neutral-500" />
                        )}
                      </button>
                      {openSection === 'benefits' && (
                        <div className="bg-white p-5 text-xs text-neutral-700 space-y-2.5 border-t border-neutral-200">
                          <ul className="space-y-2 list-disc list-outside pl-4 marker:text-neutral-400 leading-relaxed">
                            <li>
                              <strong>Official Life Membership ID &amp; Certificate:</strong> Issued by GCA Alumni Association with permanent enrollment number.
                            </li>
                            <li>
                              <strong>Voting Rights in AGM / GBM:</strong> Full voting privileges and participatory rights in the Annual General Body Meetings.
                            </li>
                            <li>
                              <strong>Verified Directory Listing:</strong> Listing in the global searchable Alumni Directory at{' '}
                              <Link to="/alumni-data-list" className="text-[#B70D2B] font-bold underline hover:text-neutral-900">
                                /alumni-data-list
                              </Link>.
                            </li>
                            <li>
                              <strong>Reunion &amp; Event Privileges:</strong> Priority registration, special seating, and discounted delegate passes for events such as <strong>Dharohar 2026</strong>.
                            </li>
                            <li>
                              <strong>Professional Networking:</strong> Connect with distinguished alumni architects, academicians, planners, and industry leaders globally.
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* 3. Fee Details */}
                    <div className="overflow-hidden rounded-xl border border-neutral-200 shadow-2xs">
                      <button
                        type="button"
                        onClick={() => toggleSection('fee')}
                        className={`w-full text-left px-4 py-3.5 flex items-center justify-between font-bold text-xs sm:text-sm transition-colors cursor-pointer ${
                          openSection === 'fee'
                            ? 'bg-[#FB8C00] text-white'
                            : 'bg-white hover:bg-neutral-50 text-neutral-800'
                        }`}
                      >
                        <span>Fee Details</span>
                        {openSection === 'fee' ? (
                          <ChevronUp className="w-4 h-4 shrink-0 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 shrink-0 text-neutral-500" />
                        )}
                      </button>
                      {openSection === 'fee' && (
                        <div className="bg-white p-5 text-xs text-neutral-700 space-y-2.5 border-t border-neutral-200">
                          <ul className="space-y-2 list-disc list-outside pl-4 marker:text-neutral-400 leading-relaxed">
                            <li>
                              <strong>Life Membership Fee:</strong> ₹ 2,000/- (Rupees Two Thousand Only) — One-time lifetime contribution.
                            </li>
                            <li>
                              <strong>Mode of Payment:</strong> Cheque, Demand Draft (DD), NEFT, IMPS, RTGS, or Online UPI.
                            </li>
                            <li>
                              <strong>Payment In Favour Of:</strong> <em>&ldquo;Govt. College of Architecture Alumni Association&rdquo;</em>, Payable at Lucknow.
                            </li>
                            <li>
                              <strong>Receipt &amp; Acknowledgment:</strong> Digital receipt is generated and registered upon account clearance by the Treasurer.
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* 4. Remarks */}
                    <div className="overflow-hidden rounded-xl border border-neutral-200 shadow-2xs">
                      <button
                        type="button"
                        onClick={() => toggleSection('remarks')}
                        className={`w-full text-left px-4 py-3.5 flex items-center justify-between font-bold text-xs sm:text-sm transition-colors cursor-pointer ${
                          openSection === 'remarks'
                            ? 'bg-[#FB8C00] text-white'
                            : 'bg-white hover:bg-neutral-50 text-neutral-800'
                        }`}
                      >
                        <span>Remarks</span>
                        {openSection === 'remarks' ? (
                          <ChevronUp className="w-4 h-4 shrink-0 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 shrink-0 text-neutral-500" />
                        )}
                      </button>
                      {openSection === 'remarks' && (
                        <div className="bg-white p-5 text-xs text-neutral-700 space-y-2.5 border-t border-neutral-200">
                          <ul className="space-y-2 list-disc list-outside pl-4 marker:text-neutral-400 leading-relaxed">
                            <li>
                              Please ensure all spellings of your full name match your Council of Architecture (COA) registration or degree certificate.
                            </li>
                            <li>
                              Both Office and Residence addresses are recorded to ensure safe courier delivery of official certificates and reunion souvenirs.
                            </li>
                            <li>
                              If paying via UPI or NEFT, please note the 12-digit UTR number and mention it accurately under payment details.
                            </li>
                            <li>
                              For any queries, please write to Secretariat at <span className="font-bold text-[#B70D2B]">contact.gcaaa@gmail.com</span>.
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Red Note at bottom (matches reference photo) */}
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 flex items-start gap-3">
                    <Info className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-xs font-medium leading-relaxed">
                      <strong className="font-extrabold text-red-700">Note:</strong> Before filling the form get ready with the COA certificate / academic degree, Payment proof (Cheque / UTR number), and Passport size photo for upload.
                    </p>
                  </div>

                  {/* Directory Search Quick Banner */}
                  <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
                    <div>
                      <h5 className="text-xs font-black uppercase tracking-wider text-amber-400">
                        Already Registered?
                      </h5>
                      <p className="text-xs text-neutral-300 mt-0.5">
                        Verify your details or search for batchmates in the directory.
                      </p>
                    </div>
                    <Link
                      to="/alumni-data-list"
                      className="shrink-0 px-4 py-2 bg-white text-neutral-900 hover:bg-neutral-100 font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>View Directory</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
