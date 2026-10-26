import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Train,
  Plane,
  Car,
  ExternalLink,
  Navigation,
} from 'lucide-react';
import buildingHeroImg from '@/assets/images/GCAAA_college_building.jpg';
import { submitContactMessage } from '@/Api/contactPageApi';
import contactPageContent from '@/data/contactPageContent';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({ name: '', phone: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const phoneDigits = formData.phone.replace(/\D/g, '');
    const errors = {
      name: !name || !/\p{L}/u.test(name) || !/^[\p{L}\p{M} .'-]+$/u.test(name)
        ? 'Enter a valid name using letters only.'
        : '',
      phone: !(/^[6-9]\d{9}$/.test(phoneDigits) || /^91[6-9]\d{9}$/.test(phoneDigits))
        ? 'Enter a valid 10-digit mobile number.'
        : '',
    };
    setFieldErrors(errors);
    if (errors.name || errors.phone) return;

    setIsSubmitting(true);
    setSubmitError('');
    try {
      await submitContactMessage({ ...formData, name, phone: formData.phone.trim() });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      setSubmitError(error.friendlyMessage || error?.response?.data?.message || error.message || 'Failed to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const { hero, headquarters, form, campus } = contactPageContent;
  const transitIcons = { train: Train, plane: Plane, car: Car };
  const phoneLink = (phone) => phone.replace(/[^\d+]/g, '');

  return (
    <div className="w-full bg-white text-neutral-900">
      {/* ========================================================
          1. SLEEK MINIMAL HERO BANNER
      ======================================================== */}
      <section className="relative overflow-hidden py-12 sm:py-16 flex items-center justify-center border-b border-neutral-300">
        <img
          src={buildingHeroImg}
          alt="Government College of Architecture"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase font-serif drop-shadow-md">
            {hero.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-neutral-300 mt-2 font-semibold">
            <Link to="/" className="hover:text-red-400 transition-colors">
              {hero.breadcrumbHome}
            </Link>
            <span className="text-red-500 font-bold">—</span>
            <span className="text-red-400">{hero.breadcrumbContact}</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. MAIN CONTENT: CONTACT INFO (LEFT) + FORM (RIGHT)
      ======================================================== */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* LEFT COLUMN: SECRETARIAT DETAILS & OFFICE BEARERS */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <div className="bg-neutral-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-800 space-y-6 relative overflow-hidden flex-1 flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B70D2B]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-red-950/70 text-red-400 border border-red-800/40 text-[11px] font-bold uppercase tracking-wider mb-2">
                  {headquarters.badge}
                </span>
                <h3 className="text-xl font-black text-white font-serif">
                  {headquarters.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  {headquarters.subtitle}
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm text-neutral-300">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-red-400 mt-0.5">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">{headquarters.addressLabel}</p>
                    <p className="text-white text-xs sm:text-sm mt-0.5 leading-relaxed font-medium">
                      {headquarters.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-red-400">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">{headquarters.phoneLabel}</p>
                    <a
                      href={`tel:${phoneLink(headquarters.phone)}`}
                      className="text-white text-xs sm:text-sm mt-0.5 font-semibold hover:text-red-400 transition-colors inline-block"
                    >
                      {headquarters.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-red-400">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">{headquarters.emailLabel}</p>
                    <a
                      href={`mailto:${headquarters.email}`}
                      className="text-white text-xs sm:text-sm mt-0.5 font-semibold hover:text-red-400 transition-colors inline-block"
                    >
                      {headquarters.email}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-red-400">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">{headquarters.officeHoursLabel}</p>
                    <p className="text-neutral-300 text-xs sm:text-sm mt-0.5">
                      {headquarters.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Bearers Hotline */}
              <div className="pt-4 border-t border-neutral-800 space-y-3 mt-auto">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  {headquarters.bearersHeading}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {headquarters.bearers.map((bearer) => (
                    <div key={`${bearer.role}-${bearer.name}`} className="p-3 bg-neutral-900/90 rounded-xl border border-neutral-800">
                      <p className="text-neutral-400 font-medium text-[11px]">{bearer.role}</p>
                      <p className="text-white font-bold mt-0.5">{bearer.name}</p>
                      <a href={`tel:${phoneLink(bearer.phone)}`} className="text-red-400 hover:text-red-300 font-semibold block mt-1">
                        {bearer.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CLEAN & NORMAL CONTACT FORM */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-6 sm:p-10 h-full flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-neutral-900 font-serif">
                {form.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                {form.description}
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-10 px-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl space-y-4 flex-1 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-emerald-950">
                  {form.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  {form.successMessage.replace('{name}', formData.name)}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setSubmitError('');
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'General Inquiry',
                      message: '',
                    });
                  }}
                  className="bg-[#B70D2B] hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow"
                >
                  {form.sendAnotherLabel}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 flex-1 flex flex-col justify-center">
                {submitError && (
                  <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {submitError}
                  </p>
                )}
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    {form.nameLabel} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    maxLength={120}
                    aria-invalid={Boolean(fieldErrors.name)}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
                    }}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                    placeholder={form.namePlaceholder}
                  />
                  {fieldErrors.name && <p role="alert" className="mt-1.5 text-xs text-red-600">{fieldErrors.name}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      {form.emailLabel} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                      placeholder={form.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      {form.phoneLabel} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      maxLength={16}
                      aria-invalid={Boolean(fieldErrors.phone)}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: '' });
                      }}
                      className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                      placeholder={form.phonePlaceholder}
                    />
                    {fieldErrors.phone && <p role="alert" className="mt-1.5 text-xs text-red-600">{fieldErrors.phone}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    {form.subjectLabel}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:outline-none"
                  >
                    {form.subjectOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    {form.messageLabel} <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                    placeholder={form.messagePlaceholder}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#B70D2B] hover:bg-neutral-900 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg shadow-red-950/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : form.submitLabel}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================
          3. CAMPUS ACCESSIBILITY & HOW TO REACH
      ======================================================== */}
      <section className="bg-neutral-50/70 border-t border-neutral-200/80 py-14 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">

          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-[11px] font-extrabold uppercase tracking-widest mb-3.5 shadow-2xs">
              {campus.badge}
            </div>

            <h2 className="text-2xl sm:text-4xl font-black font-serif text-neutral-900 tracking-tight leading-snug">
              {campus.title}
            </h2>

            <p className="mt-3.5 text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              {campus.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

            {/* Left Column: Key Transit Distance */}
            <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 p-5 sm:p-7 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-5 text-neutral-900">
                  <Navigation className="w-5 h-5 text-red-600 rotate-45 shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-serif">
                    {campus.transitHeading}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {campus.transitStops.map((stop) => {
                    const TransitIcon = transitIcons[stop.icon];
                    return (
                      <div key={`${stop.name}-${stop.distance}`} className="p-3.5 sm:p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-neutral-50/80 transition-colors flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5 border border-red-100/60">
                          <TransitIcon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-neutral-900">{stop.name}</h4>
                          <p className="text-[11px] sm:text-xs text-neutral-500 mt-1">{stop.distance}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-50/60 border border-red-200/80 mt-2">
                <p className="text-xs font-bold text-[#B70D2B]">{campus.landmarkLabel}</p>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  {campus.landmark}
                </p>
              </div>
            </div>

            {/* Right Column: Embedded Map */}
            <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 overflow-hidden shadow-xs relative min-h-[440px] sm:min-h-[480px] flex">
              <a
                href={campus.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-neutral-800 text-xs font-semibold shadow-md border border-neutral-200 backdrop-blur-xs transition-all hover:shadow-lg"
              >
                <span>{campus.openMapLabel}</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
              </a>

              <iframe
                title={campus.mapTitle}
                src={campus.mapEmbedUrl}
                className="w-full h-full min-h-[440px] sm:min-h-[480px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};