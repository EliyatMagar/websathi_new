"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We build responsive, high-performance websites and web applications using the latest technologies. From simple landing pages to complex SaaS platforms, we deliver solutions that drive business growth.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Web Application Development",
        "CMS Development (WordPress, Shopify)",
        "API Integration",
        "Performance Optimization",
      ],
      cta: "Start Your Project",
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description:
        "Transform your online store with our comprehensive e-commerce solutions...",
      features: [
        "Shopify & WooCommerce Development",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Mobile-Optimized Shopping",
        "SEO for E-commerce",
        "Analytics & Reporting",
      ],
      cta: "Boost Your Sales",
    },
    {
      id: 3,
      title: "Video Editing",
      description:
        "Professional video editing services that bring your stories to life...",
      features: [
        "Corporate Video Production",
        "Social Media Video Content",
        "Animation & Motion Graphics",
        "Color Grading & Correction",
        "Audio Enhancement",
        "YouTube & TikTok Optimization",
      ],
      cta: "Edit Your Videos",
    },
    {
      id: 4,
      title: "Graphic Design",
      description:
        "Creative graphic design that communicates your brand's message...",
      features: [
        "Logo & Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
        "UI/UX Design",
        "Print Design",
        "Infographics & Presentations",
      ],
      cta: "Design Your Brand",
    },
    {
      id: 5,
      title: "Digital Marketing",
      description:
        "Data-driven digital marketing strategies that increase your visibility...",
      features: [
        "SEO & Content Marketing",
        "Social Media Marketing",
        "PPC & Google Ads",
        "Email Marketing",
        "Analytics & ROI Tracking",
        "Conversion Rate Optimization",
      ],
      cta: "Grow Your Business",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* ----------------------------------------------------
            HERO SECTION (ANIMATED)
      ---------------------------------------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#142d54] mb-6">
            Our <span className="text-[#e28c39]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We offer comprehensive digital solutions to help your business grow.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#e28c39] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#d17d2a] transition-all duration-300 shadow-lg"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center border-2 border-[#142d54] text-[#142d54] px-8 py-3 rounded-xl font-semibold hover:bg-[#142d54] hover:text-white transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ----------------------------------------------------
            SERVICES LIST (ALTERNATING + ANIMATED)
      ---------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* TEXT SIDE */}
              <div className="lg:w-1/2">
                <div className={`${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="inline-block px-4 py-2 bg-[#e28c39]/10 rounded-full mb-6">
                    <span className="text-[#e28c39] font-semibold">
                      Service {service.id}
                    </span>
                  </div>

                  <h2 className="text-4xl font-bold text-[#142d54] mb-6">
                    {service.title}
                  </h2>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#142d54] mb-4">
                      What We Offer:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#e28c39] mr-3 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-[#142d54] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1e3a6b] transition-all duration-300 shadow-md"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* IMAGE / NUMBER BLOCK */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2"
              >
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#142d54] to-[#e28c39] opacity-90"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl font-bold text-white mb-4 opacity-80">
                        {String(service.id).padStart(2, "0")}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-lg">
                        Professional {service.title.toLowerCase()}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
            CTA SECTION (ANIMATED)
      ---------------------------------------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#142d54]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Let's discuss how we can help you grow your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#e28c39] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#d17d2a] transition-all duration-300 shadow-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>

            <Link
              href="tel:+1234567890"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#142d54] transition-all duration-300"
            >
              Call Now: (123) 456-7890
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
