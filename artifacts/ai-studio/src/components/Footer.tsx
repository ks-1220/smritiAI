import { Link } from "wouter";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <Link href="/" className="text-xl font-black tracking-tight text-white flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
              <div className="w-2 h-2 bg-accent rounded-sm" />
            </div>
            AXIOM
          </Link>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#solutions" className="text-sm font-medium text-secondary-foreground hover:text-white transition-colors">Solutions</a>
            <a href="#process" className="text-sm font-medium text-secondary-foreground hover:text-white transition-colors">Process</a>
            <a href="#industries" className="text-sm font-medium text-secondary-foreground hover:text-white transition-colors">Industries</a>
            <a href="#pricing" className="text-sm font-medium text-secondary-foreground hover:text-white transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-5">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Axiom Automation Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
