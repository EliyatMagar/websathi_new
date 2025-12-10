"use client";

import { motion } from "framer-motion";
import {
  Code2,
  ShoppingCart,
  Megaphone,
  ArrowRight,
  ShieldCheck,
  Users,
  Sparkles,
  BadgeCheck,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function HomeServicesSection() {
  const homeServices = [
    {
      id: 1,
      title: "Custom Software & Web Development",
      description:
        "We create high-performance, scalable, and secure websites and applications tailored exactly to your business needs.",
      icon: <Code2 className="w-10 h-10 text-[#e28c39]" />,
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description:
        "From product management to payment gateways — we build fast, profitable, and customer-focused online stores.",
      icon: <ShoppingCart className="w-10 h-10 text-[#e28c39]" />,
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "SEO, ads, branding & content strategies designed to help your business attract more customers and grow faster.",
      icon: <Megaphone className="w-10 h-10 text-[#e28c39]" />,
    },
  ];

  const trustPoints = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#142d54]" />,
      title: "Reliable & Transparent",
      text: "Clear communication, no hidden costs, and on-time delivery.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#142d54]" />,
      title: "Client-Centric Approach",
      text: "We focus on understanding your business first, then we build what fits best.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#142d54]" />,
      title: "Quality-Driven Results",
      text: "Every project we build is crafted with precision and long-term growth in mind.",
    },
  ];

  return (
    <section className="py-28 bg-[#f5f8fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#142d54]"
        >
          Smart Digital Solutions Built with
          <span className="bg-linear-to-r from-[#e28c39] to-[#ffb36b] bg-clip-text text-transparent ml-2">
            Trust & Quality
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mt-4"
        >
          At WebSathi, we don’t just deliver services — we become your technology partner.
          Our mission is to help your business grow online with reliable, future-ready solutions.
        </motion.p>

        {/* Highlighted Trust & Quality Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white border border-[#e4ebf3] shadow-lg rounded-3xl p-10 max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">

            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <BadgeCheck className="w-16 h-16 text-[#e28c39] drop-shadow-md" />
              <p className="text-2xl font-bold text-[#142d54] mt-3">Trusted by Businesses</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <Award className="w-16 h-16 text-[#e28c39] drop-shadow-md" />
              <p className="text-2xl font-bold text-[#142d54] mt-3">Quality First Approach</p>
            </motion.div>
          </div>

          <p className="text-gray-700 text-sm max-w-xl mx-auto mt-6">
            Every project we build goes through strict quality checks, security testing, 
            performance optimization, and long-term scalability planning — ensuring you get 
            a product that delivers real results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {homeServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#142d54] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center bg-[#142d54] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1e3a6b] transition-all duration-300 shadow-md"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center border-2 border-[#142d54] text-[#142d54] px-8 py-4 rounded-xl font-semibold hover:bg-[#142d54] hover:text-white transition-all duration-300"
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Why Trust WebSathi */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#142d54] mb-10">Why Businesses Trust WebSathi</h3>

          <div className="grid sm:grid-cols-3 gap-10">
            {trustPoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-[#142d54] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Numbers */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-[#e28c39]">50+ Projects</p>
            <p className="text-gray-600 text-sm">Delivered Successfully</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#e28c39]">5+ Years</p>
            <p className="text-gray-600 text-sm">Combined Experience</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#e28c39]">98% Satisfaction</p>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
