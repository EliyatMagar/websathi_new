"use client";

import Link from "next/link";
import { ArrowRight, Star, Zap, Globe, Rocket } from "lucide-react";
import { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#eaf3ff] overflow-hidden">
      
      {/* 📌 Spotlight Glow Behind Text */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#142d54]/20 rounded-full blur-[160px]"></div>

      {/* Soft Motion Gradient Streaks */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-[#e08936]/40 to-transparent blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-tl from-[#142d54]/30 to-transparent blur-[160px] animate-pulse"></div>

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
          Shaping Tomorrow through Extraordinary Tech
          <br />

          {/* Highlight with animated underline */}
          <span className="relative inline-block mt-2 text-[#e08936]">
            Empowering Minds, Elevating Tech!
            <span className="absolute left-0 bottom-[-4px] w-full h-[6px] bg-[#e08936]/40 rounded-full animate-underline"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#3b4b63] mt-6 max-w-3xl mx-auto">
          We design and build intelligent digital experiences that help businesses grow faster and smarter.
        </p>

        {/* Reviews */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-[#e08936] fill-[#e08936]" />
          ))}
          <span className="text-[#142d54] font-medium">Rated 5.0 by 100+ clients</span>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#142d54] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0d1e38] transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 7s ease-in-out infinite 2s;
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