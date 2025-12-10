"use client";

import Link from "next/link";
import { ArrowRight, Star, Zap, Globe, Rocket } from "lucide-react";
import { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section
    
      className="relative w-full min-h-screen flex items-center justify-center 
      bg-linear-to-br from-[#eaf3ff] via-[#dce8f7] to-[#c8d6eb] overflow-hidden"
    >
      {/* Spotlight Glow Behind Text */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#142d54]/20 rounded-full blur-[160px]"></div>

      {/* Soft Motion Gradient Streaks */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-linear-to-br from-[#e08936]/40 to-transparent blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-linear-to-tl from-[#142d54]/30 to-transparent blur-[160px] animate-pulse"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-1/3 animate-bounce-slow">
        <Zap className="w-10 h-10 text-[#e08936]/70" />
      </div>
      <div className="absolute bottom-32 left-16 animate-bounce-slower">
        <Globe className="w-10 h-10 text-[#142d54]/60" />
      </div>
      <div className="absolute top-64 left-1/4 animate-bounce-slowest">
        <Rocket className="w-10 h-10 text-[#e08936]/60" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#142d54] leading-tight">
          Build Your Digital Future with WebSathi
          <br />
          <span className="relative inline-block mt-2 text-[#e08936]">
            Websites That Grow Your Business
            <span className="absolute left-0 bottom-1 w-full h-1.5 bg-[#e08936]/40 rounded-full animate-underline"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#3b4b63] mt-6 max-w-3xl mx-auto">
          WebSathi helps businesses and entrepreneurs go online with modern,
          fast, and SEO-optimized websites, branding, and digital solutions
          that drive growth and engagement.
        </p>

        {/* Reviews */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-[#e08936] fill-[#e08936]"
            />
          ))}
          <span className="text-[#142d54] font-medium">
            Rated 5.0 by 100+ clients
          </span>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#142d54] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0d1e38] transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            Get Quotation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center bg-[#e08936] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c9782c] transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes underline {
          0% { width: 0%; opacity: 0; }
          100% { width: 100%; opacity: 1; }
        }
        .animate-underline {
          animation: underline 1.4s ease forwards;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
        .animate-bounce-slower {
          animation: bounce-slow 5.5s infinite;
        }
        .animate-bounce-slowest {
          animation: bounce-slow 7s infinite;
        }
      `}</style>
    </section>
  );
}
