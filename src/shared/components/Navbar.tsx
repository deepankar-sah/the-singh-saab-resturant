"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import gsap from "gsap";

/**
 * Sticky Navbar Component for The Singh Saab.
 * Features:
 * - GSAP animated header shrink on scroll.
 * - Responsive mobile slide-in menu drawer.
 * - Outline-style gold buttons and hover text-grow transitions.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksContainerRef = useRef<HTMLDivElement>(null);

  // Toggle mobile menu drawer
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // GSAP animation for header shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navRef.current, {
          height: "70px",
          backgroundColor: "rgba(15, 15, 15, 0.95)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(navRef.current, {
          height: "88px",
          backgroundColor: "rgba(15, 15, 15, 0.8)",
          borderBottom: "1px solid rgba(58, 50, 32, 0.3)",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP animation for mobile menu open/close
  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling
      document.body.style.overflow = "hidden";
      
      // Animate drawer in
      gsap.to(menuRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power4.out",
      });

      // Animate link items in (staggered)
      const links = menuRef.current?.querySelectorAll(".mobile-link");
      if (links) {
        gsap.fromTo(
          links,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, delay: 0.1, ease: "power3.out" }
        );
      }
    } else {
      document.body.style.overflow = "unset";
      
      // Animate drawer out
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Our Story", href: "/story" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 h-[88px] flex items-center bg-dark-bg/85 backdrop-blur-md border-b border-border-bronze/30 transition-all"
        id="navbar"
      >
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
          
          {/* Brand Logo & Wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full border border-gold-primary/30 overflow-hidden logo-mark shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:border-gold-accent transition-all duration-300">
              <Image
                src="/logo.jpeg"
                alt="The Singh Saab Logo"
                fill
                priority
                sizes="40px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="font-italiana text-xl md:text-2xl text-gold-primary tracking-[0.1em] uppercase text-glow group-hover:text-gold-accent transition-colors duration-300">
              THE SINGH SAAB
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div ref={linksContainerRef} className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-lora text-sm tracking-wider uppercase transition-colors duration-300 gold-reveal-line py-1 ${
                    isActive
                      ? "text-gold-primary font-semibold"
                      : "text-text-champagne/80 hover:text-gold-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Reservation Phone CTA */}
          <div className="hidden md:block">
            <a
              href="tel:09418814444"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-bronze to-gold-primary text-dark-black font-lora text-xs font-bold px-6 py-3 rounded-[2px] uppercase tracking-widest hover:from-gold-accent hover:to-gold-primary transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone size={14} />
              Call to Book
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gold-primary hover:text-gold-accent p-2 transition-colors"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-[280px] sm:w-[320px] bg-dark-black border-l border-border-bronze/50 z-50 shadow-[0_0_50px_rgba(0,0,0,0.8)] translate-x-full flex flex-col justify-between py-12 px-8 md:hidden"
      >
        <div className="flex flex-col gap-12">
          {/* Mobile Drawer Header */}
          <div className="flex justify-between items-center">
            <span className="font-italiana text-lg text-gold-primary tracking-wider uppercase">
              NAVIGATION
            </span>
            <button
              onClick={toggleMenu}
              className="text-gold-primary hover:text-gold-accent p-1"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`mobile-link font-lora text-lg tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "text-gold-primary font-bold" : "text-text-champagne/70 hover:text-gold-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Contact Footer Details */}
        <div className="mobile-link flex flex-col gap-4 border-t border-border-bronze/30 pt-8">
          <span className="font-lora text-xs text-text-champagne/50 tracking-wider">
            RESERVATIONS & CONTACT
          </span>
          <a
            href="tel:09418814444"
            className="flex items-center gap-3 bg-gold-primary text-dark-black font-lora font-bold text-sm justify-center py-4 rounded-[2px] uppercase tracking-widest hover:bg-gold-accent transition-colors"
          >
            <Phone size={16} />
            094188 14444
          </a>
          <span className="font-hanken text-xs text-text-champagne/60 text-center">
            Dimna Road, Mango, Jamshedpur
          </span>
        </div>
      </div>
    </>
  );
}
