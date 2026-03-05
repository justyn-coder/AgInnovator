import { Link } from "wouter";
import logoImage from "@/assets/images/logo.png";
import { ArrowRight, Leaf, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-green-100 selection:text-green-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center overflow-hidden">
            <img src={logoImage} alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-zinc-800">
            Canadian Ag Innovation
          </span>
        </div>
        <div className="flex gap-4">
          <Link href="/navigator">
            <Button variant="ghost" className="text-zinc-500 hover:text-zinc-900 font-medium">
              Launch App
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold tracking-wide uppercase mb-8 border border-green-100">
          <Leaf className="w-3 h-3" />
          <span>The Roadmap to Growth</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6 max-w-4xl">
          Navigate the future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-800">
            agriculture innovation.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-12 leading-relaxed">
          Access 99 carefully curated programs across Alberta and Canada. 
          Funding, pilot sites, and accelerators — mapped to your specific stage and situation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          <Link href="/navigator" onClick={() => localStorage.setItem("ag_nav_mode", "e")}>
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-zinc-100 to-white border border-zinc-200 hover:border-green-200 transition-all duration-300 shadow-sm hover:shadow-md text-left cursor-pointer h-full">
              <div className="absolute top-4 right-4 text-zinc-300 group-hover:text-green-600 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">For Entrepreneurs</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Find the right funding, accelerator, or pilot site for your specific agtech stage and situation.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/navigator" onClick={() => localStorage.setItem("ag_nav_mode", "ec")}>
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-zinc-100 to-white border border-zinc-200 hover:border-emerald-200 transition-all duration-300 shadow-sm hover:shadow-md text-left cursor-pointer h-full">
              <div className="absolute top-4 right-4 text-zinc-300 group-hover:text-emerald-600 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-700 flex items-center justify-center mb-6 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors border border-zinc-200 group-hover:border-emerald-200">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Ecosystem View</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Analyze gaps, identify partnership opportunities, and understand the structural landscape.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Feature snapshot */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x divide-zinc-200/50">
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">99</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Curated Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">39</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Funding Options</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">9</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Pilot Sites</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">12</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Accelerators</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-zinc-400 text-sm">
        <p>Built for the Bioenterprise Canada 2024 ecosystem analysis.</p>
      </footer>
    </div>
  );
}