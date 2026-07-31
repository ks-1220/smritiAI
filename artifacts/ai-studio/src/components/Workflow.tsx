import { motion } from "framer-motion";
import { MousePointerClick, MessageSquare, Calendar, Database, LineChart } from "lucide-react";

export default function Workflow() {
  const steps = [
    {
      id: "01",
      icon: <MousePointerClick size={24} />,
      title: "Website Visitor",
      description: "A prospect lands on your high-performance website."
    },
    {
      id: "02",
      icon: <MessageSquare size={24} />,
      title: "AI Assistant Interacts",
      description: "The AI agent engages them instantly, answers questions, and qualifies the lead based on your criteria."
    },
    {
      id: "03",
      icon: <Calendar size={24} />,
      title: "Meeting Booked",
      description: "Qualified leads are automatically routed to a calendar integration to book a consultation."
    },
    {
      id: "04",
      icon: <Database size={24} />,
      title: "CRM Sync",
      description: "Lead details and chat history are instantly pushed to your CRM without manual data entry."
    },
    {
      id: "05",
      icon: <LineChart size={24} />,
      title: "Sales Dashboard",
      description: "You review the unified dashboard, ready to close the deal with full context."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#0B0B0B]">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[800px] mx-auto mb-24"
        >
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight mb-6">
            How it Works in Your Business
          </h2>
          <p className="text-[18px] text-secondary-foreground">
            A seamless, automated pipeline that turns traffic into qualified meetings.
          </p>
        </motion.div>

        <div className="relative max-w-[800px] mx-auto">
          {/* Animated central line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-accent"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className={`flex flex-col gap-3 ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                    <span className="text-accent font-mono text-sm tracking-wider">STEP {step.id}</span>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    <p className="text-secondary-foreground leading-relaxed text-[15px] max-w-[320px]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111111] border border-accent flex items-center justify-center text-accent z-10 shadow-[0_0_15px_rgba(124,92,255,0.3)]">
                  {step.icon}
                </div>

                {/* Empty Side for balance */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
