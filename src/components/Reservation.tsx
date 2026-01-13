'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservation" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark)]/95 to-[var(--dark)]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Rezervasyon</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold mb-6">
              Masanızı<br />Ayırtın
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Özel anlarınız için yerinizi garantileyin. Online rezervasyon yapın veya bizi arayın.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[var(--primary)] flex items-center justify-center text-[var(--dark)]">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="text-sm text-gray-400 uppercase tracking-wider block mb-1">
                    Telefon
                  </span>
                  <a href="tel:+905015352939" className="text-lg font-medium hover:text-[var(--primary)] transition-colors">
                    0501 535 29 39
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[var(--primary)] flex items-center justify-center text-[var(--dark)]">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-sm text-gray-400 uppercase tracking-wider block mb-1">
                    E-posta
                  </span>
                  <a href="mailto:info@barneygastro.com" className="text-lg font-medium hover:text-[var(--primary)] transition-colors">
                    info@barneygastro.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--dark-lighter)] p-8 lg:p-10 rounded-3xl border border-white/5"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-16"
              >
                <CheckCircle size={64} className="mx-auto text-green-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-2">Rezervasyonunuz Alındı!</h3>
                <p className="text-gray-400">En kısa sürede sizinle iletişime geçeceğiz.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium uppercase tracking-wider text-gray-300 block mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[var(--dark)] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium uppercase tracking-wider text-gray-300 block mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[var(--dark)] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium uppercase tracking-wider text-gray-300 block mb-2">
                      Tarih
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[var(--dark)] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium uppercase tracking-wider text-gray-300 block mb-2">
                      Saat
                    </label>
                    <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[var(--dark)] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[var(--primary)] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Saat Seçin</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium uppercase tracking-wider text-gray-300 block mb-2">
                    Kişi Sayısı
                  </label>
                  <select
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[var(--dark)] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[var(--primary)] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Kişi Sayısı</option>
                    <option value="1">1 Kişi</option>
                    <option value="2">2 Kişi</option>
                    <option value="3">3 Kişi</option>
                    <option value="4">4 Kişi</option>
                    <option value="5">5 Kişi</option>
                    <option value="6">6 Kişi</option>
                    <option value="7-10">7-10 Kişi</option>
                    <option value="10+">10+ Kişi</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium uppercase tracking-wider text-gray-300 block mb-2">
                    Özel İstekler (Opsiyonel)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Varsa özel isteklerinizi belirtin..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[var(--dark)] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[var(--primary)] text-[var(--dark)] font-semibold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-[var(--primary-light)] hover:shadow-lg hover:shadow-[var(--primary)]/30"
                >
                  <span>Rezervasyon Yap</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
