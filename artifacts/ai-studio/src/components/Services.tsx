import { motion } from "framer-motion";
import { Check, Code2, Bot, Workflow } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 size={24} />,
      title: "Premium Website",
      description: "A foundational digital presence engineered for speed, conversion, and brand authority.",
      label: "Foundation",
      features: [
        "Responsive Custom Design",
        "High-Converting Landing Pages",
        "Technical SEO & Analytics",
        "Headless CMS Integration",
        "Performance Optimization",
        "Contact & Lead Forms"
      ]
    },
    {
      icon: <Bot size={24} />,
      title: "Website + AI",
      description: "Transform your site into an active employee that qualifies leads and books meetings 24/7.",
      label: "Most Popular",
      isPopular: true,
      features: [
        "Everything in Foundation",
        "Custom AI Knowledge Base",
        "Conversational Lead Qualification",
        "Automated Meeting Booking",
        "WhatsApp Integration",
        "Basic CRM Sync"
      ]
    },
    {
      icon: <Workflow size={24} />,
      title: "Business Automation",
      description: "End-to-end operational automation. Connect your entire tech stack and eliminate manual work.",
      label: "Enterprise",
      features: [
        "Everything in Website + AI",
        "Complex Workflow Automation",
        "Advanced CRM Customization",
        "Custom AI Agents",
        "Real-time Data Dashboards",
        "Custom API Integrations"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[800px] mx-auto mb-20"
        >
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-[18px] text-secondary-foreground">
            We don't just build websites. We build automated revenue systems tailored to your operational complexity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative bg-[#111111] rounded-[24px] p-8 border card-hover transition-all duration-500 flex flex-col ${
                service.isPopular ? "border-accent/50" : "border-white/5"
              }`}
            >
              {service.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {service.label}
                </div>
              )}
              
              {!service.isPopular && (
                <div className="absolute top-8 right-8 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {service.label}
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                service.isPopular ? "bg-accent/20 text-accent" : "bg-white/5 text-white"
              }`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-secondary-foreground mb-8 text-[15px] leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="h-[1px] w-full bg-white/5 mb-8" />

              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-[15px] text-secondary-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
