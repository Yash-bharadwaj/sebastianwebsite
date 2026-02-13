
import React, { useState } from 'react';

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/rickysebastian10/?hl=en',
  facebook: 'https://www.facebook.com/hostmasterrickysebastian/',
  linkedin: 'https://www.linkedin.com/in/ricky-sebastian-0251b343/',
  whatsapp: 'https://wa.me/919619204243',
};

const SocialIcon = ({ type, href }: { type: 'instagram' | 'facebook' | 'linkedin' | 'whatsapp'; href: string }) => {
  const configs = {
    instagram: {
      color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
      label: 'Instagram'
    },
    facebook: {
      color: 'bg-[#1877F2]',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
      label: 'Facebook'
    },
    linkedin: {
      color: 'bg-[#0077B5]',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>,
      label: 'LinkedIn'
    },
    whatsapp: {
      color: 'bg-[#25D366]',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
      label: 'WhatsApp'
    }
  };

  const config = configs[type];

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 hover:scale-110"
      aria-label={config.label}
    >
      {/* Brand Color Background with Low Opacity */}
      <div className={`absolute inset-0 rounded-2xl ${config.color} opacity-10 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Glass Layer */}
      <div className="absolute inset-0 rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg group-hover:bg-transparent group-hover:border-transparent transition-all" />
      
      {/* Icon */}
      <div className="relative z-10 text-slate-900 dark:text-white group-hover:text-white transition-colors">
        {config.icon}
      </div>
    </a>
  );
};

const WHATSAPP_NUMBER = '919619204243';

const ContactPage: React.FC = () => {
  const [formType, setFormType] = useState<'host' | 'events'>('host');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inquiryType = formType === 'host' ? 'Book Emcee' : 'Book R Events';
    const text = [
      `*${inquiryType}*`,
      '',
      `*Name:* ${name || '—'}`,
      `*Email:* ${email || '—'}`,
      `*Event Date & Location:* ${eventDate || '—'}`,
      '',
      `*Message:*`,
      message || '—'
    ].join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white dark:bg-[#0E0E11] min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic mb-8 sm:mb-10 text-slate-900 dark:text-white leading-tight">
            Let's Start a <br /> Conversation.
          </h1>
          <p className="text-base sm:text-xl text-slate-500 dark:text-slate-400 font-light max-w-xl">
            Whether you need a professional host for your stage or a structured plan for your next event, we are ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20">
          {/* Left: Direct Contact Info */}
          <div className="lg:col-span-4 space-y-10 sm:space-y-16">
            <div>
              <h3 className="text-xs uppercase tracking-[0.4em] opacity-40 font-bold mb-6">Inquiries</h3>
              <p className="text-xl font-serif italic text-slate-900 dark:text-white mb-2">
                <a href="mailto:ricky.sebastian1983@gmail.com" className="hover:underline">ricky.sebastian1983@gmail.com</a>
              </p>
              <p className="text-xl font-serif italic text-slate-900 dark:text-white mb-2 mt-4">
                <a href="mailto:info@r-events.in" className="hover:underline">info@r-events.in</a>
              </p>
              <p className="text-xl font-serif italic text-slate-900 dark:text-white mt-4 mb-2">WhatsApp or Call</p>
              <a href="https://wa.me/919619204243" target="_blank" rel="noopener noreferrer" className="text-xl font-serif italic text-slate-900 dark:text-white hover:underline block">+91 96192 04243</a>
              <p className="text-sm uppercase tracking-widest opacity-60 mt-2 mb-1">Alternate</p>
              <a href="https://wa.me/918291465411" target="_blank" rel="noopener noreferrer" className="text-xl font-serif italic text-slate-900 dark:text-white hover:underline block">+91 82914 65411</a>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-[0.4em] opacity-40 font-bold mb-6">Location</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light">
                Mumbai, India <br />
                Available for travel worldwide.
              </p>
            </div>

            <div className="space-y-6">
               <h3 className="text-xs uppercase tracking-[0.4em] opacity-40 font-bold">Follow & Reach Out</h3>
               <div className="flex flex-wrap gap-4">
                  <SocialIcon type="instagram" href={SOCIAL_LINKS.instagram} />
                  <SocialIcon type="facebook" href={SOCIAL_LINKS.facebook} />
                  <SocialIcon type="linkedin" href={SOCIAL_LINKS.linkedin} />
                  <SocialIcon type="whatsapp" href={SOCIAL_LINKS.whatsapp} />
               </div>
            </div>
          </div>

          {/* Right: Minimalist Form */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-[3rem] border border-slate-900/5 dark:border-white/5 relative overflow-hidden">
              {/* Subtle Ambient Background Gradient */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-wrap gap-6 sm:space-x-8 mb-8 sm:mb-12">
                  <button 
                    onClick={() => setFormType('host')}
                    className={`text-xs sm:text-sm uppercase tracking-widest transition-all py-2 min-h-[44px] ${formType === 'host' ? 'text-slate-900 dark:text-white font-bold border-b-2 border-slate-900 dark:border-white pb-2' : 'opacity-40 hover:opacity-60'}`}
                  >
                    Book Emcee
                  </button>
                  <button 
                    onClick={() => setFormType('events')}
                    className={`text-xs sm:text-sm uppercase tracking-widest transition-all py-2 min-h-[44px] ${formType === 'events' ? 'text-slate-900 dark:text-white font-bold border-b-2 border-slate-900 dark:border-white pb-2' : 'opacity-40 hover:opacity-60'}`}
                  >
                    Book R Events
                  </button>
                </div>

                <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Your Name</label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent border-b border-slate-900/10 dark:border-white/10 py-3 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors" placeholder="Full Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Email Address</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-b border-slate-900/10 dark:border-white/10 py-3 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors" placeholder="email@company.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Event Date & Location</label>
                    <input type="text" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="w-full bg-transparent border-b border-slate-900/10 dark:border-white/10 py-3 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors" placeholder="DD/MM/YYYY, City" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Message</label>
                    <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-transparent border-b border-slate-900/10 dark:border-white/10 py-3 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 sm:py-6 bg-slate-900 text-white dark:bg-white dark:text-black font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase text-xs hover:bg-slate-800 dark:hover:bg-slate-200 transition-all rounded-full mt-6 sm:mt-8 shadow-xl min-h-[48px]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
