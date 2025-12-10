"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  Users,
  Code2,
  Megaphone,
  Brush,
  ShieldCheck,
  Layers,
  Eye
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#f5f8fb]">

      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-gradient-to-r from-[#142d54] to-[#20457a] text-white py-32 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold"
        >
          About WebSathi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 max-w-2xl mx-auto text-gray-200 text-lg md:text-xl"
        >
          Building impactful digital solutions since <span className="text-[#e28c39] font-semibold">2025</span>.
          Empowering businesses with technology that drives growth and innovation.
        </motion.p>

        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#e28c39]/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#e28c39]/20 rounded-full translate-x-1/3 translate-y-1/3" />
      </section>

      {/* ---------------- OUR JOURNEY ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#142d54] text-center mb-16">Our Journey</h2>

        <div className="relative border-l-2 border-[#e28c39] ml-8">
          {/* Timeline Items */}
          {[
            {
              year: "July 2025",
              title: "Founded WebSathi",
              desc: "WebSathi was established with a vision to empower businesses using modern technology."
            },
            {
              year: "Mid-July 2025",
              title: "First Client – Consultancy Website",
              desc: "Our first client was a consultancy website from Australia. This project helped us set a strong foundation for quality delivery."
            },
            {
              year: "August 2025",
              title: "Small Projects",
              desc: "Completed several small projects including portfolio websites and basic apps for startups."
            },
            {
              year: "September 2025",
              title: "Full E-commerce Platform",
              desc: "Delivered our first full e-commerce platform for a supermarket, marking a milestone in handling larger projects."
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-12 relative pl-12"
            >
              <div className="absolute -left-7 top-1 w-5 h-5 rounded-full bg-[#e28c39]" />
              <p className="text-[#e28c39] font-semibold text-lg">{item.year}</p>
              <h4 className="text-2xl font-bold text-[#142d54] mt-1">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- MISSION & VISION ---------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 bg-[#f8fbff] rounded-3xl shadow-lg hover:shadow-xl transition-all"
          >
            <Target className="w-12 h-12 text-[#e28c39]" />
            <h3 className="text-3xl font-bold text-[#142d54] mt-4">Our Mission</h3>
            <p className="text-gray-700 mt-4">Empower businesses with modern, reliable, and scalable digital solutions that drive growth.</p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-12 bg-[#f8fbff] rounded-3xl shadow-lg hover:shadow-xl transition-all"
          >
            <Eye className="w-12 h-12 text-[#e28c39]" />
            <h3 className="text-3xl font-bold text-[#142d54] mt-4">Our Vision</h3>
            <p className="text-gray-700 mt-4">Become a globally recognized tech partner known for quality, trust, and innovation.</p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#142d54] mb-8">What We Do</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Full-service digital solutions to help your business grow efficiently.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: <Code2 className="w-10 h-10 text-[#e28c39]" />, title: "Custom Web & Software Development", desc: "High-performance, secure, scalable solutions." },
            { icon: <Megaphone className="w-10 h-10 text-[#e28c39]" />, title: "Digital Marketing", desc: "SEO, content strategy, ads & more to reach the right audience." },
            { icon: <Brush className="w-10 h-10 text-[#e28c39]" />, title: "Graphic Design", desc: "Intuitive designs that enhance brand identity." },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#e28c39]/10 rounded-full mx-auto">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-[#142d54] mt-4">{service.title}</h4>
              <p className="text-gray-700 mt-2 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- TEAM / EXPERTS ---------------- */}
      <section className="py-24 bg-[#f5f8fb] text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#142d54] mb-6">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">10+ passionate experts who craft meaningful digital solutions.</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center bg-[#e28c39]/20 text-[#142d54] font-semibold px-10 py-6 rounded-3xl shadow-xl"
        >
          <Users className="w-10 h-10 mr-4" /> 10+ Experts
        </motion.div>
      </section>

      {/* ---------------- IMPACT STATS ---------------- */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        {[
          { num: "50+", label: "Projects Delivered" },
          { num: "5+", label: "Years Experience" },
          { num: "98%", label: "Happy Clients" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-12 hover:shadow-2xl transition-all"
          >
            <p className="text-4xl font-bold text-[#e28c39]">{stat.num}</p>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </section>

    </div>
  );
}
