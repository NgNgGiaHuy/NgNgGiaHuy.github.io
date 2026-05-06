import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-[30px] p-6 sm:p-8 shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button onClick={onClose} className="absolute top-5 right-5 sm:top-6 sm:right-6 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <h3 className="font-black uppercase text-2xl sm:text-3xl text-[#D7E2EA] mb-2 tracking-tight">Get in touch</h3>
            <p className="text-[#D7E2EA]/60 font-light text-sm sm:text-base mb-6 sm:mb-8">Fill out the form below and I'll get back to you directly at nguyenngocgiahuy77@gmail.com.</p>

            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4 sm:gap-5">
              {/* NOTE: User needs to replace this with their Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs sm:text-sm font-medium text-[#D7E2EA]/80 uppercase tracking-wider">Name</label>
                <input type="text" name="name" id="name" required className="bg-transparent border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA]/60 transition-colors" placeholder="Your name" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs sm:text-sm font-medium text-[#D7E2EA]/80 uppercase tracking-wider">Email</label>
                <input type="email" name="email" id="email" required className="bg-transparent border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA]/60 transition-colors" placeholder="your@email.com" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium text-[#D7E2EA]/80 uppercase tracking-wider">Message</label>
                <textarea name="message" id="message" required rows={4} className="bg-transparent border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA]/60 transition-colors resize-none" placeholder="How can I help you automate?"></textarea>
              </div>

              <button type="submit" className="mt-2 bg-[#D7E2EA] text-[#0C0C0C] font-black uppercase tracking-widest py-3.5 sm:py-4 rounded-xl hover:bg-white transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
