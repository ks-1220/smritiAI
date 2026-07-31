import { motion } from "framer-motion";
import { Calendar, MessageCircle, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    icon: Calendar,
    label: "Calendly",
    value: "Book a 30-minute discovery call",
    href: "#",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+1 (555) 013-8820",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/company/aureon-systems",
    href: "#",
  },
  {
    icon: Mail,
    label: "Email",
    value: "studio@aureon.systems",
    href: "mailto:studio@aureon.systems",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7B7B7B] uppercase mb-6">Contact</p>
            <h2 className="text-[40px] md:text-[52px] font-bold text-white tracking-tight leading-[1.1] mb-6">
              Start with a<br />conversation.
            </h2>
            <p className="text-[16px] text-[#B8B8B8] leading-relaxed mb-12 max-w-[400px]">
              Tell us what's manual today. We'll come back with a scope, a timeline and the honest version of what automation will and won't fix.
            </p>

            <div className="space-y-0 divide-y divide-white/6">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-5 py-5 group transition-colors"
                >
                  <div className="w-8 flex items-center justify-center shrink-0">
                    <Icon size={18} strokeWidth={1.5} className="text-[#7B7B7B] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[14px] text-[#7B7B7B] w-24 shrink-0">{label}</span>
                    <span className="text-[14px] text-[#B8B8B8] group-hover:text-white transition-colors duration-200 flex-1">
                      {value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right column — form card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111111] rounded-2xl border border-white/6 p-8"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-[13px] font-medium text-[#B8B8B8]">Name</label>
                <input
                  type="text"
                  className="w-full bg-[#0B0B0B] border border-white/8 rounded-xl px-4 py-3 text-[15px] text-white placeholder:text-[#4a4a4a] focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/40 transition-all"
                  placeholder="Jane Okafor"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-medium text-[#B8B8B8]">Work email</label>
                <input
                  type="email"
                  className="w-full bg-[#0B0B0B] border border-white/8 rounded-xl px-4 py-3 text-[15px] text-white placeholder:text-[#4a4a4a] focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/40 transition-all"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-medium text-[#B8B8B8]">What should we automate?</label>
                <textarea
                  rows={5}
                  className="w-full bg-[#0B0B0B] border border-white/8 rounded-xl px-4 py-3 text-[15px] text-white placeholder:text-[#4a4a4a] focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/40 transition-all resize-none"
                  placeholder="We lose enquiries after hours and re-key everything into our CRM."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent text-white text-[15px] font-medium rounded-xl hover:bg-accent/90 transition-all duration-200"
                style={{ boxShadow: "0 0 24px rgba(124,92,255,0.25)" }}
              >
                Send enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
