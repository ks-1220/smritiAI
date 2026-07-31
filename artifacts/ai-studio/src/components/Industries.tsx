import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Home,
  GraduationCap,
  Users,
  Scale,
  Utensils,
  HardHat,
  Briefcase,
  Dumbbell,
} from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    icon: HeartPulse,
    description: "Intake, triage and appointment flows.",
  },
  {
    name: "Real Estate",
    icon: Home,
    description: "Listing enquiries qualified around the clock.",
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "Admissions and student support at scale.",
  },
  {
    name: "Recruitment",
    icon: Users,
    description: "Screening, scheduling and candidate updates.",
  },
  {
    name: "Legal",
    icon: Scale,
    description: "Case intake with confidential document handling.",
  },
  {
    name: "Restaurants",
    icon: Utensils,
    description: "Reservations, orders and review recovery.",
  },
  {
    name: "Construction",
    icon: HardHat,
    description: "Quote requests routed to the right crew.",
  },
  {
    name: "Consultants",
    icon: Briefcase,
    description: "Discovery calls booked without the back-and-forth.",
  },
  {
    name: "Gyms",
    icon: Dumbbell,
    description: "Trials, memberships and retention nudges.",
  },
];

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
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

  const Icon = industry.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl bg-[#111111] border border-white/5 p-7 flex flex-col gap-4 overflow-hidden cursor-default transition-all duration-300"
      style={{
        background: hovered ? "#161616" : "#111111",
        borderColor: hovered ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.05)",
      }}
    >
      {/* Cursor radial glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(280px circle at ${glowPos.x}% ${glowPos.y}%, rgba(124,92,255,0.08) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <Icon
          size={22}
          strokeWidth={1.5}
          className="text-[#7B7B7B] transition-colors duration-300"
          style={{ color: hovered ? "#B8B8B8" : "#7B7B7B" }}
        />
      </div>

      <div className="relative z-10">
        <h3 className="text-[18px] font-bold text-white mb-1.5 leading-snug">{industry.name}</h3>
        <p className="text-[14px] text-[#7B7B7B] leading-relaxed">{industry.description}</p>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7B7B7B] uppercase mb-4">Industries</p>
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-tight">
            Built for every sector.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {industries.map((ind, index) => (
            <IndustryCard key={ind.name} industry={ind} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
