import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      industry: "Real Estate Brokerage",
      company: "Luxury Properties Inc.",
      metrics: [
        { label: "Lead Response Time", before: "4 hours", after: "Instant" },
        { label: "Time Saved/Week", value: "32 hours" },
        { label: "Conversion Increase", value: "+45%" }
      ]
    },
    {
      industry: "Private Healthcare Clinic",
      company: "Wellness Medical Center",
      metrics: [
        { label: "Appointment Booking", before: "Manual Phone", after: "100% Automated" },
        { label: "No-Show Rate", value: "-60%" },
        { label: "Patient Satisfaction", value: "99%" }
      ]
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
        >
          <div className="max-w-[600px]">
            <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight mb-6">
              Real Results.
            </h2>
            <p className="text-[18px] text-secondary-foreground">
              We measure success in hours saved and revenue generated. Here is what happens when you implement serious AI systems.
            </p>
          </div>
          <a href="#contact" className="text-white flex items-center gap-2 hover:text-accent transition-colors animated-underline pb-1 font-medium">
            View All Cases <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12 card-hover transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white tracking-wide uppercase">
                  {study.industry}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-10">{study.company}</h3>

              <div className="space-y-6">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-secondary-foreground text-[15px] mb-2 sm:mb-0">{metric.label}</span>
                    
                    {metric.before ? (
                      <div className="flex items-center gap-3 text-[15px]">
                        <span className="text-muted-foreground line-through">{metric.before}</span>
                        <span className="text-white">→</span>
                        <span className="text-accent font-bold">{metric.after}</span>
                      </div>
                    ) : (
                      <span className="text-2xl font-bold text-accent">{metric.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
