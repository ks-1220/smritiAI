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
  Dumbbell 
} from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Healthcare", icon: <HeartPulse size={28} strokeWidth={1.5} /> },
    { name: "Real Estate", icon: <Home size={28} strokeWidth={1.5} /> },
    { name: "Education", icon: <GraduationCap size={28} strokeWidth={1.5} /> },
    { name: "Recruitment", icon: <Users size={28} strokeWidth={1.5} /> },
    { name: "Legal", icon: <Scale size={28} strokeWidth={1.5} /> },
    { name: "Restaurants", icon: <Utensils size={28} strokeWidth={1.5} /> },
    { name: "Construction", icon: <HardHat size={28} strokeWidth={1.5} /> },
    { name: "Consultants", icon: <Briefcase size={28} strokeWidth={1.5} /> },
    { name: "Gyms & Fitness", icon: <Dumbbell size={28} strokeWidth={1.5} /> }
  ];

  return (
    <section id="industries" className="py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[800px] mx-auto mb-20"
        >
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight mb-6">
            Built for Every Industry
          </h2>
          <p className="text-[18px] text-secondary-foreground">
            Our AI solutions adapt to the specific workflows and vocabulary of your sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-accent/30 hover:bg-[#151515] transition-all group"
            >
              <div className="text-white/60 group-hover:text-accent transition-colors duration-300">
                {ind.icon}
              </div>
              <h3 className="text-white font-medium text-lg tracking-wide">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
