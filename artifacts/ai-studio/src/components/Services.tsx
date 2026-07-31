import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    label: "PACKAGE ONE",
    title: "Premium Website",
    description: "A fast, editorial-grade site engineered to convert — the foundation everything else builds on.",
    includesLabel: "Includes:",
    features: [
      "Responsive Website",
      "Landing Pages",
      "SEO",
      "Analytics",
      "CMS",
      "Performance Optimization",
      "Contact Forms",
    ],
    isPopular: false,
  },
  {
    label: "PACKAGE TWO",
    title: "Website + AI",
    description: "Your site answers, qualifies and books — an assistant that works every hour you don't.",
    includesLabel: "Everything in Premium Website, plus:",
    features: [
      "AI Chatbot",
      "Knowledge Base",
      "WhatsApp Integration",
      "Appointment Booking",
      "Lead Qualification",
      "CRM Integration",
      "Email Notifications",
      "Google Calendar",
    ],
    isPopular: true,
  },
  {
    label: "PACKAGE THREE",
    title: "Business Automation",
    description: "Operations that run themselves, with agents, dashboards and integrations across your stack.",
    includesLabel: "Everything in Website + AI, plus:",
    features: [
      "Workflow Automation",
      "CRM Automation",
      "AI Agents",
      "Lead Scoring",
      "WhatsApp Automation",
      "Dashboards",
      "Reports",
      "Internal Tools",
      "API Integrations",
    ],
    isPopular: false,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x, y });
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-2xl border border-white/6 bg-[#111111] overflow-hidden transition-all duration-300"
      style={{
        boxShadow: hovered
          ? service.isPopular
            ? "0 0 0 1px rgba(124,92,255,0.4), 0 20px 40px rgba(0,0,0,0.4)"
            : "0 0 0 1px rgba(255,255,255,0.08), 0 20px 40px rgba(0,0,0,0.4)"
          : undefined,
      }}
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(320px circle at ${glowPos.x}% ${glowPos.y}%, rgba(124,92,255,0.10) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full p-8">
        {/* Label row */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[11px] font-semibold tracking-[0.18em] text-[#7B7B7B] uppercase">
            {service.label}
          </span>
          {service.isPopular && (
            <span className="bg-accent text-white text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full">
              Most chosen
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[28px] font-bold text-white leading-tight mb-3">{service.title}</h3>

        {/* Description */}
        <p className="text-[15px] text-[#B8B8B8] leading-relaxed mb-8">{service.description}</p>

        {/* Divider + includes label */}
        <div className="bg-white/5 rounded-lg px-4 py-2.5 mb-6">
          <span className="text-[13px] text-[#B8B8B8]">{service.includesLabel}</span>
        </div>

        {/* Features */}
        <ul className="space-y-3 flex-1">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check size={15} className="text-accent shrink-0" />
              <span className="text-[14px] text-[#B8B8B8]">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="mt-8 w-full py-3 rounded-xl border border-white/10 bg-white/4 text-white text-[14px] font-medium hover:border-accent/40 hover:bg-white/7 transition-all duration-300">
          Request a scope
        </button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="solutions" className="py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] mb-20"
        >
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7B7B7B] uppercase mb-4">Solutions</p>
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-tight">
            Three packages.<br />One clear path forward.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
