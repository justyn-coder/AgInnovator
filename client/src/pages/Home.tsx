import { Link } from "wouter";
import logoImage from "@/assets/images/logo.png";
import { ArrowRight, Leaf, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#1a1a1a]" style={{ fontFamily: "'Source Serif 4', serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-[#f7f5f0]/90 backdrop-blur-md border-b border-[#e5e0d5]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#e5e0d5] flex items-center justify-center overflow-hidden">
            <img src={logoImage} alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-[#1a3a0a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Canadian Ag Innovation
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1a3a0a] leading-[1.1] mb-6 max-w-4xl">
          Canada's ag innovation ecosystem is powerful. <br className="hidden md:block" />
          <span className="text-[#c5a55a]">It's also a maze.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#1a1a1a] max-w-3xl mb-8 leading-relaxed font-light">
          99 programs. Funding, pilot sites, accelerators, events — mapped, scored, and connected. The Canadian Ag Innovation Navigator helps you find what's next in under 60 seconds.
        </p>
        
        <p className="text-sm md:text-base text-[#666] max-w-3xl mb-16 leading-relaxed italic border-l-2 border-[#c5a55a] pl-4 text-left">
          Built on Bioenterprise Canada's 2024 National Roundtable recommendation for "a centralized, easily accessible roadmap of services and resources for entrepreneurs to navigate the commercialization pathway."
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          
          {/* Entrepreneur Card */}
          <Link href="/navigator" onClick={() => localStorage.setItem("ag_nav_mode", "e")}>
            <div className="group relative p-8 rounded-2xl bg-white border border-[#e5e0d5] hover:border-[#1a3a0a] transition-all duration-300 shadow-sm hover:shadow-lg text-left cursor-pointer h-full flex flex-col">
              <div className="absolute top-6 right-6 text-[#e5e0d5] group-hover:text-[#c5a55a] transition-colors">
                <ArrowRight className="w-6 h-6" />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#1a3a0a] text-white flex items-center justify-center mb-6 group-hover:bg-[#2d5016] transition-colors">
                <Leaf className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a0a] mb-3">I'm building something</h3>
              <p className="text-[#666] text-base leading-relaxed mb-6 flex-grow">
                Find funding, pilot sites, and the right sequence for your stage.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-[#c5a55a] uppercase tracking-wider">
                <span>Entrepreneur Mode</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Ecosystem Card */}
          <Link href="/navigator" onClick={() => localStorage.setItem("ag_nav_mode", "ec")}>
            <div className="group relative p-8 rounded-2xl bg-[#f0f2f5] border border-[#d1d8e0] hover:border-[#1e3a5f] transition-all duration-300 shadow-sm hover:shadow-lg text-left cursor-pointer h-full flex flex-col">
              <div className="absolute top-6 right-6 text-[#d1d8e0] group-hover:text-[#2e86ab] transition-colors">
                <ArrowRight className="w-6 h-6" />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center mb-6 group-hover:bg-[#2e86ab] transition-colors">
                <Map className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">I'm building the ecosystem</h3>
              <p className="text-[#5a6577] text-base leading-relaxed mb-6 flex-grow">
                Find gaps, overlaps, and partnership opportunities across 99 programs.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-[#2e86ab] uppercase tracking-wider">
                <span>Ecosystem Intelligence Mode</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>
      </main>

      {/* Feature snapshot */}
      <section className="border-t border-b border-[#e5e0d5] bg-white py-12 px-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center text-[#1a1a1a] font-medium text-sm md:text-base">
          <span>39 funding programs</span>
          <span className="hidden md:inline text-[#c5a55a]">·</span>
          <span>9 pilot sites</span>
          <span className="hidden md:inline text-[#c5a55a]">·</span>
          <span>11 accelerators</span>
          <span className="hidden md:inline text-[#c5a55a]">·</span>
          <span>10 events</span>
          <span className="hidden md:inline text-[#c5a55a]">·</span>
          <span className="font-semibold text-[#1a3a0a]">Alberta deep, national included</span>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 text-center text-[#666] text-sm max-w-4xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <p className="mb-2">V0 — Alberta live. SK & MB expanding. Data from Bioenterprise 2024, Alberta Innovates, RDAR, AAFC, Sustainable CAP.</p>
        <p>Built by Justyn Szymczyk.</p>
      </footer>
    </div>
  );
}