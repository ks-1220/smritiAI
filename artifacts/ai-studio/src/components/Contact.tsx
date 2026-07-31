import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0B0B0B] border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight mb-6 leading-tight">
              Let's Build Something Serious.
            </h2>
            <p className="text-[18px] text-secondary-foreground mb-12">
              Book a discovery call to discuss your operations, current bottlenecks, and how custom AI systems can scale your capacity.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@axiom.ai" className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">hello@axiom.ai</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <MessageCircle size={20} />
                </div>
                <span className="text-lg font-medium">WhatsApp Us</span>
              </a>
              <div className="flex items-center gap-4 text-white group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span className="text-lg font-medium">London, UK & Global Remote</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111111] p-8 md:p-10 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send an Inquiry</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-foreground">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-foreground">Company</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none"
                  placeholder="Tell us about your operations..."
                />
              </div>

              <button className="w-full py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-all glow-hover mt-4">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
