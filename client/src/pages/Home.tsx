import { Link } from "wouter";
import { ArrowRight, Leaf, Map, QrCode, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import bestInShowLogo from "@/assets/images/bestinshow-tagline-logo.png";

export default function Home() {
  const [showQr, setShowQr] = useState(false);
  const [siteUrl, setSiteUrl] = useState("");

  useEffect(() => {
    setSiteUrl(window.location.origin);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#1a1a1a] relative flex flex-col" style={{ fontFamily: "'Source Serif 4', serif" }}>
      
      {/* Hero Section */}
      <main className="flex-1 pt-16 pb-12 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1a3a0a] leading-[1.1] mb-12 max-w-4xl">
          Canada's ag innovation ecosystem is powerful. <br className="hidden md:block" />
          <span className="text-[#c5a55a]">It's also a maze.</span>
        </h1>
        
        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-16" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          
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

        <p className="text-xl md:text-2xl text-[#1a1a1a] max-w-3xl mb-8 leading-relaxed font-light">
          99 programs. Funding, pilot sites, accelerators, events — mapped, scored, and connected. The Canadian Ag Innovation Navigator helps you find what's next in under 60 seconds.
        </p>
        
        <p className="text-sm md:text-base text-[#666] max-w-3xl mb-8 leading-relaxed italic border-l-2 border-[#c5a55a] pl-4 text-left">
          Built on Bioenterprise Canada's 2024 National Roundtable recommendation for "a centralized, easily accessible roadmap of services and resources for entrepreneurs to navigate the commercialization pathway."
        </p>
      </main>

      {/* Demo Banner */}
      <section className="border-t border-[#e5e0d5] bg-white py-6 px-6 mt-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-4 text-center text-[#1a1a1a] font-medium">
          <span className="text-lg font-bold text-[#1a3a0a]">Demo Version 1.0</span>
          <button 
            onClick={() => setShowQr(true)}
            className="p-2 rounded-full hover:bg-[#f0f2f5] text-[#1a3a0a] transition-colors"
            title="Share with QR Code"
          >
            <QrCode className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* QR Code Overlay */}
      {showQr && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl relative" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <button 
              onClick={() => setShowQr(false)}
              className="absolute top-4 right-4 p-1 text-[#666] hover:text-[#1a1a1a] hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#1a3a0a] mb-2">Share Navigator</h3>
              <p className="text-sm text-[#666] mb-6">Scan this QR code to open the app on another device.</p>
              <div className="bg-white p-4 border border-[#e5e0d5] rounded-xl flex justify-center inline-block mx-auto mb-4">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(siteUrl)}`} 
                  alt="QR Code"
                  className="w-48 h-48"
                />
              </div>
              <p className="text-xs text-[#c5a55a] font-medium break-all">{siteUrl}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
