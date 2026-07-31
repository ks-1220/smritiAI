import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does an engagement take?",
    answer:
      "A Foundation or Website + AI project typically takes 4–6 weeks from kick-off to launch. Enterprise-level automations run 8–12 weeks depending on integration complexity.",
  },
  {
    question: "Do you work with our existing stack?",
    answer:
      "Yes. We integrate with whatever your team already uses — Salesforce, HubSpot, Notion, Google Workspace, or custom ERPs. If it has an API, we can connect it.",
  },
  {
    question: "Where does the assistant get its answers?",
    answer:
      "We train it on your own content: documents, FAQs, product specs, pricing guides, and any internal knowledge base you share with us. It only answers from what you approve.",
  },
  {
    question: "Who owns the code and the data?",
    answer:
      "You do. Once a project is paid in full, all code, configurations, and trained models are yours. We build on open or standard platforms so you're never locked in.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer a 30-day bug-fix guarantee on every project. Beyond that, optional retainer packages cover ongoing improvements, hosting, and model retraining.",
  },
  {
    question: "Why don't you publish fixed prices?",
    answer:
      "Because no two businesses have the same workflows or integration requirements. We scope every project individually to give you an honest number — not a padded estimate.",
  },
];

export default function FAQ() {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:sticky md:top-32"
          >
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7B7B7B] uppercase mb-6">FAQ</p>
            <h2 className="text-[40px] md:text-[52px] font-bold text-white tracking-tight leading-[1.1]">
              Answers, before<br />you ask.
            </h2>
          </motion.div>

          {/* Right column — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-0 border-b border-white/8"
                >
                  <AccordionTrigger className="text-left text-[16px] font-medium text-white hover:text-white/80 py-5 hover:no-underline transition-colors [&>svg]:text-[#7B7B7B] [&>svg]:shrink-0">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] text-[#B8B8B8] leading-relaxed pb-5 pt-0">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
