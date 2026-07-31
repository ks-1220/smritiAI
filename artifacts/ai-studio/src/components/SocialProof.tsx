import { motion } from "framer-motion";

export default function SocialProof() {
  const stats = [
    { label: "Businesses Automated", value: "50+" },
    { label: "Hours Saved Monthly", value: "12,000+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "ROI Average", value: "3.5x" },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-[#0B0B0B]/50 backdrop-blur-sm">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="text-[32px] md:text-[48px] font-bold text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-[15px] font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
