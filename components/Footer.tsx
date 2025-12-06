"use client";

import Link from "next/link";
import { FC } from "react";
import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: FC<{ className?: string }>;
  color: string;
}

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  const quickLinks: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services: NavItem[] = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-apps" },
    { name: "UI/UX Design", href: "/services/design" },
    { name: "Cloud Solutions", href: "/services/cloud" },
  ];

  const socialLinks: SocialLink[] = [
    { name: "Facebook", href: "#", icon: Facebook, color: "hover:text-blue-600" },
    { name: "Twitter", href: "#", icon: Twitter, color: "hover:text-blue-400" },
    { name: "LinkedIn", href: "#", icon: Linkedin, color: "hover:text-blue-700" },
    { name: "GitHub", href: "#", icon: Github, color: "hover:text-gray-900" },
    { name: "Email", href: "mailto:hello@websathi.com", icon: Mail, color: "hover:text-[#e28c39]" },
  ];

  return (
    <footer className="bg-[#142d54] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#e28c39] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold">WebSathi</span>
            </div>

            <p className="text-[#d9dce1] mb-6 max-w-md leading-relaxed">
              Building innovative digital solutions that drive business growth.
              We specialize in web development, mobile applications, and cloud
              solutions tailored to your needs.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon: Icon, color }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#d9dce1] flex items-center hover:text-[#e28c39] transition-colors group"
                  >
                    <span className="w-2 h-2 bg-[#e28c39] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-[#d9dce1] flex items-center hover:text-[#e28c39] transition-colors group"
                  >
                    <span className="w-2 h-2 bg-[#e28c39] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
            <p className="text-[#d9dce1] mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#e28c39] text-white placeholder:text-white/50"
              />
              <button className="bg-[#e28c39] px-6 py-3 rounded-lg font-medium hover:bg-[#d17d2a] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#d9dce1]">
            © {currentYear} WebSathi. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-[#d9dce1] hover:text-[#e28c39]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#d9dce1] hover:text-[#e28c39]">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-[#d9dce1] hover:text-[#e28c39]">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}