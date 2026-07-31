import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We analyze your operations to find the highest-ROI automation opportunities."
    },
    {
      number: "02",
      title: "Design",
      description: "We map out the architecture of your website, AI agents, and CRM workflows."
    },
    {
      number: "03",
      title: "Build",
      description: "Our engineers construct your systems using enterprise-grade tech stacks."
    },
    {
      number: "04",
      title: "Launch",
      description: "We deploy the systems, train your team, and monitor performance."
    }
  ];

  return (
    <section id="process" className="py-32 bg-[#0B0B0B] border-y border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[800px] mx-auto mb-24"
        >
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight mb-6">
            From Discovery to Launch
          </h2>
          <p className="text-[18px] text-secondary-foreground">
            A precise, predictable methodology for transforming your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="text-[80px] md:text-[120px] font-black text-white/5 leading-none absolute -top-8 md:-top-12 left-0 select-none">
                {step.number}
              </div>
              <div className="relative z-10 pt-8">
                <div className="w-12 h-[2px] bg-accent mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-[15px] text-secondary-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
