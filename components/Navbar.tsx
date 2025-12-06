"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.jpg"
                  alt="WebSathi"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
              <span className="text-2xl font-extrabold text-[#142d54] tracking-tight">
                WebSathi
              </span>
            </Link>

            {/* CENTERED DESKTOP MENU */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center gap-8">
                <NavLink href="/" isActive={pathname === "/"}>
                  Home
                </NavLink>
                <NavLink 
                  href="/services" 
                  isActive={pathname.startsWith("/services")}
                >
                  Services
                </NavLink>
                <NavLink 
                  href="/portfolio" 
                  isActive={pathname.startsWith("/portfolio")}
                >
                  Portfolio
                </NavLink>
                <NavLink 
                  href="/technology" 
                  isActive={pathname.startsWith("/technology")}
                >
                  Technology
                </NavLink>
                <NavLink 
                  href="/about" 
                  isActive={pathname.startsWith("/about")}
                >
                  About Us
                </NavLink>
                <NavLink 
                  href="/blog" 
                  isActive={pathname.startsWith("/blog")}
                >
                  Blogs
                </NavLink>
                <NavLink 
                  href="/career" 
                  isActive={pathname.startsWith("/career")}
                >
                  Career
                </NavLink>
              </div>
            </div>

            {/* CONTACT BUTTON - Right aligned */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact" 
                    ? "bg-[#d17d2a] border-[#d17d2a]" 
                    : "bg-[#e28c39] border-[#e28c39]"
                } text-white px-6 py-3 rounded-xl font-medium hover:bg-[#d17d2a] transition-all duration-300 shadow-md hover:shadow-xl border`}
              >
                Contact us
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-[#142d54] hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl animate-slideDown">
            <div className="px-4 py-3 space-y-1">
              <MobileLink 
                href="/" 
                isActive={pathname === "/"}
                closeMenu={() => setIsOpen(false)}
              >
                Home
              </MobileLink>
              <MobileLink 
                href="/services" 
                isActive={pathname.startsWith("/services")}
                closeMenu={() => setIsOpen(false)}
              >
                Services
              </MobileLink>
              <MobileLink 
                href="/portfolio" 
                isActive={pathname.startsWith("/portfolio")}
                closeMenu={() => setIsOpen(false)}
              >
                Portfolio
              </MobileLink>
              <MobileLink 
                href="/technology" 
                isActive={pathname.startsWith("/technology")}
                closeMenu={() => setIsOpen(false)}
              >
                Technology
              </MobileLink>
              <MobileLink 
                href="/about" 
                isActive={pathname.startsWith("/about")}
                closeMenu={() => setIsOpen(false)}
              >
                About Us
              </MobileLink>
              <MobileLink 
                href="/blog" 
                isActive={pathname.startsWith("/blog")}
                closeMenu={() => setIsOpen(false)}
              >
                Blogs
              </MobileLink>
              <MobileLink 
                href="/career" 
                isActive={pathname.startsWith("/career")}
                closeMenu={() => setIsOpen(false)}
              >
                Career
              </MobileLink>
              
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`block mt-4 ${
                  pathname === "/contact" 
                    ? "bg-[#d17d2a]" 
                    : "bg-[#e28c39]"
                } text-white px-6 py-3 rounded-xl text-center font-medium hover:bg-[#d17d2a] transition-all duration-300 shadow-md`}
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* SPACER */}
      <div className="h-20"></div>
    </>
  );
}

/* ---------------------- COMPONENTS ---------------------- */

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink = ({ href, children, isActive }: NavLinkProps) => (
  <Link
    href={href}
    className={`font-medium relative group transition-colors duration-300 ${
      isActive 
        ? "text-[#e28c39]" 
        : "text-[#142d54] hover:text-[#e28c39]"
    }`}
  >
    {children}
    <span 
      className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-[#e28c39] via-[#e28c39] to-transparent transition-all duration-500 ${
        isActive 
          ? "w-full opacity-100" 
          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
      }`}
    ></span>
  </Link>
);

interface MobileLinkProps {
  href: string;
  children: React.ReactNode;
  closeMenu: () => void;
  isActive: boolean;
}

const MobileLink = ({ 
  href, 
  children, 
  closeMenu,
  isActive
}: MobileLinkProps) => (
  <Link
    href={href}
    onClick={closeMenu}
    className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 relative overflow-hidden ${
      isActive
        ? "bg-[#e28c39] text-white"
        : "text-[#142d54] hover:bg-gray-50 hover:text-[#e28c39]"
    }`}
  >
    {children}
    {isActive && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-white to-transparent opacity-70"></span>
    )}
  </Link>
);