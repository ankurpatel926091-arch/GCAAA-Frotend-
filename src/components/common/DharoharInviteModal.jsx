import { useState, useEffect } from 'react';
import { X, Calendar, MapPin, CheckCircle2, Sparkles, Send, Users } from 'lucide-react';
import logoImg from '@/assets/images/logo.png';

export const DharoharInviteModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '',
    city: '',
    attendingType: 'Attending Solo',
  });

  // Automatically trigger modal shortly after website loads
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('dharohar_invite_dismissed');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 900); // 900ms smooth delay after page load

      return () => clearTimeout(timer);
    }
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('dharohar_invite_dismissed', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Mark as dismissed so they aren't prompted again this session
    sessionStorage.setItem('dharohar_invite_dismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-xl bg-white text-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden  animate-scaleUp max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Top Decorative Crimson Header Band */}
        <div className="h-2 w-full bg-gradient-to-r from-neutral-900 via-[#B70D2B] to-red-600 shrink-0" />

        {/* Modal Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#B70D2B] text-neutral-600 hover:text-white flex items-center justify-center transition-colors shadow-xs"
          aria-label="Close Pop-up"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto px-5 sm:px-8 pt-6 pb-6 space-y-5">
          {/* Header Block */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#B70D2B] text-[11px] font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              DHAROHAR 2026 · GCAAA ALUMNI MEET
            </div>

            <div className="flex items-center justify-center gap-3 pt-1">
  {logoImg && (
    <img
      src={logoImg}
      alt="GCAAA Logo"
      className="h-16 w-auto object-contain shrink-0"
    />
  )}
  <h2 className="text-xl sm:text-2xl font-black text-neutral-900 leading-tight font-serif text-left sm:text-center">
    Join Alumni and Faculty on{' '}
    <span className="text-[#B70D2B] underline decoration-red-300 underline-offset-4">
      November 28, 2026
    </span>
  </h2>
</div>

            <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Celebrate the <strong className="text-neutral-900">Ruby Jubilee (Batch &apos;86)</strong> &amp;{' '}
              <strong className="text-neutral-900">Silver Jubilee (Batch &apos;01)</strong> at FOAP-AKTU Lucknow. Reconnect with batchmates, mentors, and faculty!
            </p>
          </div>

          {/* Quick Event Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2 px-3 bg-neutral-50 rounded-xl border border-neutral-200/80 text-[11px] text-neutral-700">
            <span className="flex items-center gap-1.5 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-[#B70D2B]" />
              <span>Saturday, 28 Nov 2026</span>
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#B70D2B]" />
              <span>FOAP (AKTU) Tagore Marg, Lucknow</span>
            </span>
          </div>

          {/* Form / Submitted Success View */}
          {submitted ? (
            <div className="text-center py-8 px-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-3">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-emerald-950">
                RSVP Received Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || 'Alumnus'}</strong>! We are excited to welcome you back on <strong>November 28, 2026</strong>. Details and entry passes will be sent to your email.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="bg-[#B70D2B] hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all shadow"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                    placeholder="e.g. Ar. Rahul Verma"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    WhatsApp / Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                    placeholder="e.g. 9876543210"
                  />
                </div>
              </div>

              {/* Email & Batch Year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                    placeholder="alumnus@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Graduation Batch / Year <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.batch}
                    onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                    placeholder="e.g. 2001 (Silver Jubilee)"
                  />
                </div>
              </div>

              {/* City & Attending Option */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Current City / Location
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                    placeholder="e.g. Lucknow / Delhi / Mumbai"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Attendance Option
                  </label>
                  <select
                    value={formData.attendingType}
                    onChange={(e) => setFormData({ ...formData, attendingType: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 focus:bg-white focus:ring-2 focus:ring-[#B70D2B] focus:border-[#B70D2B] focus:outline-none transition-all"
                  >
                    <option value="Attending Solo">Attending Solo</option>
                    <option value="Attending with Family/Spouse">Attending with Family / Spouse</option>
                    <option value="Faculty / Former Faculty">Faculty / Former Faculty</option>
                    <option value="Interested in Sponsoring">Interested in Sponsoring</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#B70D2B] hover:bg-neutral-900 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-lg shadow-red-950/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm RSVP · Join November 28 Meet</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-neutral-400 pt-1">
                By submitting, you agree to receive event updates from GCAAA Secretariat.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
