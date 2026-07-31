import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take from discovery to launch?",
      answer: "A standard Foundation or Website + AI project typically takes 4-6 weeks. Enterprise-level business automations can take 8-12 weeks depending on the complexity of your integrations and workflows."
    },
    {
      question: "What makes you different from a typical agency?",
      answer: "We are software engineers, not just marketers. We build programmatic, data-driven systems that integrate deeply into your business operations (CRMs, scheduling, internal databases) rather than just designing pretty front-ends."
    },
    {
      question: "Do I own the code and the systems?",
      answer: "Yes. Once the project is paid in full, you own all the IP, codebases, and configurations. We build on open or standard enterprise platforms (Vercel, AWS, standard CMSs) so you are never locked in to proprietary systems."
    },
    {
      question: "Can you integrate with my existing tools?",
      answer: "Absolutely. We specialize in API integrations. Whether you use Salesforce, HubSpot, custom ERPs, WhatsApp Business, Calendly, or obscure industry-specific software, if it has an API, we can connect it."
    },
    {
      question: "What support do I get after launch?",
      answer: "We offer ongoing retainer packages for continuous improvement, hosting management, and API maintenance. Even without a retainer, we offer a 30-day bug-fix guarantee post-launch."
    },
    {
      question: "Do I need technical knowledge to manage this?",
      answer: "No. We build custom dashboards and command centers that allow you to manage the AI, view analytics, and control the site without touching a line of code. It's built for business owners."
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[48px] font-bold text-white tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10 py-2">
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-secondary-foreground leading-relaxed pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
