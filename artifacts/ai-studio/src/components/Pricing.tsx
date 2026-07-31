import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Foundation",
      target: "For establishing a premium digital presence.",
      highlight: false
    },
    {
      name: "Website + AI",
      target: "For businesses wanting to automate lead qualification.",
      highlight: true
    },
    {
      name: "Enterprise",
      target: "For complex operations needing full automation.",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-[#0B0B0B] border-y border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[800px] mx-auto mb-20"
        >
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight mb-6">
            Transparent Pricing
          </h2>
          <p className="text-[18px] text-secondary-foreground">
            No hidden fees. We quote based on the specific complexity and value of the automation we build for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 rounded-[24px] flex flex-col h-full border ${
                plan.highlight 
                  ? "bg-accent/5 border-accent/30 relative" 
                  : "bg-[#111111] border-white/5"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-secondary-foreground text-sm mb-10">{plan.target}</p>

              <div className="mt-auto pt-8 flex flex-col gap-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground text-sm uppercase tracking-wider">Starting from</span>
                  <span className="text-white font-medium px-3 py-1 bg-white/5 rounded-md text-sm border border-white/10">Custom Quote</span>
                </div>
                
                <a
                  href="#contact"
                  className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                    plan.highlight
                      ? "bg-accent text-white hover:bg-accent/90 glow-hover"
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  Book Consultation
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
