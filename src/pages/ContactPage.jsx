import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    batch: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Get in Touch</h1>
        <p className="mt-4 text-neutral-400 text-lg">
          Have questions or want to collaborate? Send us a message.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information Panel */}
        <div className="bg-black/90 p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between shadow-lg">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-6 text-neutral-300 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Tagore Marg, Hazratganj, Lucknow – 226007, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <a href="mailto:gca_lko@rediffmail.com" className="hover:text-red-400 transition-colors">
                  gca_lko@rediffmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <a href="tel:05222740152" className="hover:text-red-400 transition-colors">
                  0522-2740152
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-900 text-xs text-neutral-500">
            Office Hours: Monday - Friday, 9:00 AM - 5:00 PM
          </div>
        </div>

        {/* Contact Form Panel */}
        <div className="md:col-span-2 bg-neutral-900/90 p-8 rounded-2xl border border-neutral-800 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 bg-red-950/70 border border-red-800/60 text-red-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Thank you for contacting us!</h3>
              <p className="text-neutral-400 text-sm">We have received your message and will get back to you shortly.</p>
              <Button variant="secondary" onClick={() => setSubmitted(false)}>Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-all"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Batch / Passout Year
                </label>
                <input
                  type="text"
                  value={formData.batch}
                  onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-all"
                  placeholder="e.g. 2018"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full mt-2">
                <Send className="w-4 h-4 mr-1.5" /> Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
