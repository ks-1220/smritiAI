import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-accent/30 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Workflow />
        <Industries />
        <Process />
        <CaseStudies />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
