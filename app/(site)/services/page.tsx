"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We build responsive, high-performance websites and web applications using the latest technologies. From simple landing pages to complex SaaS platforms, we deliver solutions that drive business growth.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Web Application Development",
        "CMS Development (WordPress, Shopify)",
        "API Integration",
        "Performance Optimization"
      ],
      image: "/services/web-development.jpg",
      alt: "Web Development Services",
      cta: "Start Your Project"
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description: "Transform your online store with our comprehensive e-commerce solutions. We create seamless shopping experiences that convert visitors into loyal customers and boost your sales.",
      features: [
        "Shopify & WooCommerce Development",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Mobile-Optimized Shopping",
        "SEO for E-commerce",
        "Analytics & Reporting"
      ],
      image: "/services/ecommerce.jpg",
      alt: "E-commerce Solutions",
      cta: "Boost Your Sales"
    },
    {
      id: 3,
      title: "Video Editing",
      description: "Professional video editing services that bring your stories to life. From corporate videos to social media content, we create engaging visual narratives that captivate your audience.",
      features: [
        "Corporate Video Production",
        "Social Media Video Content",
        "Animation & Motion Graphics",
        "Color Grading & Correction",
        "Audio Enhancement",
        "YouTube & TikTok Optimization"
      ],
      image: "/services/video-editing.jpg",
      alt: "Video Editing Services",
      cta: "Edit Your Videos"
    },
    {
      id: 4,
      title: "Graphic Design",
      description: "Creative graphic design that communicates your brand's message effectively. Our designs are not just visually appealing but also strategically crafted to achieve your business goals.",
      features: [
        "Logo & Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
        "UI/UX Design",
        "Print Design",
        "Infographics & Presentations"
      ],
      image: "/services/graphic-design.jpg",
      alt: "Graphic Design Services",
      cta: "Design Your Brand"
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies that increase your online visibility and drive qualified leads. We help you reach the right audience at the right time with the right message.",
      features: [
        "SEO & Content Marketing",
        "Social Media Marketing",
        "PPC & Google Ads",
        "Email Marketing Campaigns",
        "Analytics & ROI Tracking",
        "Conversion Rate Optimization"
      ],
      image: "/services/digital-marketing.jpg",
      alt: "Digital Marketing Services",
      cta: "Grow Your Business"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#142d54] mb-6">
              Our <span className="text-[#e28c39]">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              We offer comprehensive digital solutions to help your business thrive in the modern digital landscape. 
              Each service is tailored to meet your specific needs and goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#e28c39] text-white px-8 py-3 rounded-xl font-semibold
                hover:bg-[#d17d2a] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center border-2 border-[#142d54] text-[#142d54] px-8 py-3 rounded-xl font-semibold
                hover:bg-[#142d54] hover:text-white transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services List - Alternating Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={service.id} className="mb-32 last:mb-0">
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                {/* Text Content - Alternates sides */}
                <div className="lg:w-1/2">
                  <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="inline-block px-4 py-2 bg-[#e28c39]/10 rounded-full mb-6">
                      <span className="text-[#e28c39] font-semibold">Service {service.id}</span>
                    </div>
                    <h2 className="text-4xl font-bold text-[#142d54] mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#142d54] mb-4">What We Offer:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#e28c39] mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-[#142d54] text-white px-8 py-3 rounded-xl font-semibold
                      hover:bg-[#1e3a6b] transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Image - Alternates sides */}
                <div className="lg:w-1/2">
                  <div className={`relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl ${
                    index % 2 === 0 ? 'lg:mr-0' : 'lg:ml-0'
                  }`}>
                    {/* Placeholder image - replace with actual images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#142d54] to-[#e28c39] opacity-90"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl font-bold text-white mb-4 opacity-80">
                          {service.id.toString().padStart(2, '0')}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {service.title}
                        </h3>
                        <p className="text-white/80 text-lg">
                          Professional {service.title.toLowerCase()} services
                        </p>
                      </div>
                    </div>
                    {/* Uncomment and replace with actual Image component */}
                    {/* <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#142d54]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss how we can help you achieve your business goals with our comprehensive services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#e28c39] text-white px-8 py-4 rounded-xl font-semibold text-lg
              hover:bg-[#d17d2a] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
            <Link
              href="tel:+1234567890"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg
              hover:bg-white hover:text-[#142d54] transition-all duration-300"
            >
              Call Now: (123) 456-7890
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}