import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-beige min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6 uppercase tracking-tight">{t('contact.title')}</h1>
          <p className="text-sm tracking-widest uppercase opacity-60 max-w-md">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 text-center"
              >
                <h3 className="font-serif text-3xl mb-4">Thank You</h3>
                <p className="text-sm opacity-60 uppercase tracking-widest leading-relaxed">
                  Your message has been received.<br/>Our team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-ink/20 py-4 focus:outline-none focus:border-gold transition-colors peer placeholder-transparent text-sm"
                    placeholder={t('contact.form.name')}
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 top-4 text-[10px] tracking-widest uppercase opacity-40 transition-all pointer-events-none
                      peer-focus:-top-4 peer-focus:text-gold peer-focus:opacity-100
                      peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:opacity-100"
                  >
                    {t('contact.form.nameLabel')}
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-ink/20 py-4 focus:outline-none focus:border-gold transition-colors peer placeholder-transparent text-sm"
                    placeholder={t('contact.form.email')}
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 top-4 text-[10px] tracking-widest uppercase opacity-40 transition-all pointer-events-none
                      peer-focus:-top-4 peer-focus:text-gold peer-focus:opacity-100
                      peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:opacity-100"
                  >
                    {t('contact.form.emailLabel')}
                  </label>
                </div>

                <div className="relative group">
                  <textarea 
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-ink/20 py-4 focus:outline-none focus:border-gold transition-colors peer placeholder-transparent resize-none text-sm"
                    placeholder={t('contact.form.message')}
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 top-4 text-[10px] tracking-widest uppercase opacity-40 transition-all pointer-events-none
                      peer-focus:-top-4 peer-focus:text-gold peer-focus:opacity-100
                      peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:opacity-100"
                  >
                    {t('contact.form.messageLabel')}
                  </label>
                </div>

                <button 
                  type="submit"
                  className="px-16 py-5 bg-ink text-beige text-xs tracking-[0.4em] uppercase hover:bg-gold transition-all duration-500 w-full md:w-auto shadow-xl hover:shadow-2xl active:scale-[0.98]"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xs tracking-widest uppercase text-gold mb-4">{t('contact.info.hq')}</h3>
                <p className="font-serif text-xl leading-relaxed">
                  Avenida da Liberdade 110<br />
                  1250-146 Lisbon<br />
                  Portugal
                </p>
              </div>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-gold mb-4">{t('contact.info.direct')}</h3>
                <div className="space-y-4">
                  <p className="font-serif text-xl">
                    <a href="mailto:inquiries@elements.pt" className="hover:text-gold transition-colors">inquiries@elements.pt</a>
                  </p>
                  <p className="font-serif text-xl">
                    <a href="tel:+351210000000" className="hover:text-gold transition-colors">+351 210 000 000</a>
                  </p>
                  <p className="font-serif text-xl mt-4">
                    <a href="https://wa.me/351910000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                      WhatsApp <span className="text-sm">↗</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-ink/5 relative overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101666.90385732104!2d-8.118742449999999!3d37.0786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab161c81fb02f%3A0x400ebbde49036d0!2sVilamoura%2C%20Quarteira!5e0!3m2!1sen!2spt!4v1650000000000!5m2!1sen!2spt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Elements Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
