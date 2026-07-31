import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MousePointerClick, MessageSquare, UserCheck, Database, Calendar, MessageCircle, LayoutDashboard } from "lucide-react";

const steps = [
  { id: "01", icon: MousePointerClick, title: "Website Visitor", description: "A prospect lands on your high-performance site." },
  { id: "02", icon: MessageSquare, title: "AI Assistant", description: "The AI agent engages instantly, answers questions, and qualifies the lead." },
  { id: "03", icon: UserCheck, title: "Lead Qualification", description: "Prospects are scored and filtered against your ideal customer criteria." },
  { id: "04", icon: Database, title: "CRM", description: "Lead data and conversation history sync to your CRM automatically." },
  { id: "05", icon: Calendar, title: "Calendar", description: "Qualified leads self-book a meeting without any manual coordination." },
  { id: "06", icon: MessageCircle, title: "WhatsApp", description: "Automated follow-ups and confirmations are sent via WhatsApp." },
  { id: "07", icon: LayoutDashboard, title: "Sales Dashboard", description: "Your team reviews the full picture and closes with complete context." },
];

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 30%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 relative bg-[#0B0B0B]" ref={containerRef}>
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] mb-20"
        >
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7B7B7B] uppercase mb-4">Workflow</p>
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-tight">
            How it works<br />in your business.
          </h2>
          <p className="mt-5 text-[18px] text-[#B8B8B8]">
            A seamless automated pipeline that turns traffic into booked meetings.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-[560px] mx-auto">
          {/* Background track */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/5" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-[19px] top-0 w-[2px] bg-accent origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-start gap-8 py-6"
                >
                  {/* Node */}
                  <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-[#111111] border border-accent/40 flex items-center justify-center shadow-[0_0_12px_rgba(124,92,255,0.2)]">
                    <Icon size={16} className="text-accent" strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="pt-1.5">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[11px] font-mono tracking-wider text-accent">{step.id}</span>
                      <h3 className="text-[16px] font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-[14px] text-[#7B7B7B] leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
