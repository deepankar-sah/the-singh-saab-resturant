import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Globe, Camera } from "lucide-react";

/**
 * Global Footer Component for The Singh Saab.
 * Features:
 * - Clean responsive multi-column layout.
 * - Brand details, contact information, and operating hours.
 * - Quick links to menu, story, and gallery.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-black border-t border-border-bronze/30 w-full z-10 relative">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-5"></div>
      
      {/* Upper Footer: Branding & Details */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* Column 1: Brand Pitch */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
          <span className="font-italiana text-2xl md:text-3xl text-gold-primary tracking-widest uppercase text-glow">
            THE SINGH SAAB
          </span>
          <p className="font-lora text-sm text-text-champagne/70 leading-relaxed max-w-md">
            A premium fine-dining destination in Jamshedpur, offering an exquisite multi-cuisine culinary repertoire. Experience noir luxury with curated ambiance and service delivered with soul.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border-bronze flex items-center justify-center text-text-champagne hover:text-gold-primary hover:border-gold-primary transition-all duration-300 hover:scale-[1.05]"
              aria-label="Facebook Link"
            >
              <Globe size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border-bronze flex items-center justify-center text-text-champagne hover:text-gold-primary hover:border-gold-primary transition-all duration-300 hover:scale-[1.05]"
              aria-label="Instagram Link"
            >
              <Camera size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Hours & Details */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-6">
          <span className="font-italiana text-lg text-gold-primary tracking-wider uppercase">
            RESTAURANT DETAILS
          </span>
          <div className="flex flex-col gap-4 font-hanken text-sm text-text-champagne/80">
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-gold-primary shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-text-ivory">Hours of Operation</span>
                <span className="block text-xs mt-1">Open Daily: 12:00 PM – 11:00 PM</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-gold-primary shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-text-ivory">Contact Reservations</span>
                <a href="tel:09418814444" className="block text-xs mt-1 hover:text-gold-primary transition-colors">
                  094188 14444
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Location Coordinates */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
          <span className="font-italiana text-lg text-gold-primary tracking-wider uppercase">
            FIND US
          </span>
          <div className="flex items-start gap-3 font-hanken text-sm text-text-champagne/80">
            <MapPin size={18} className="text-gold-primary shrink-0 mt-0.5" />
            <div>
              <span className="block font-semibold text-text-ivory">Address</span>
              <span className="block text-xs leading-relaxed mt-1">
                Dimna Road, near old check post, Adarsh Nagar, Baglagora, Mango, Jamshedpur, Jharkhand 831012
              </span>
              <a
                href="https://maps.google.com/?q=The+Singh+Saab+Jamshedpur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold-primary text-xs mt-3 border-b border-transparent hover:border-gold-primary transition-all pb-0.5"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Navigation & Copyright */}
      <div className="border-t border-border-bronze/20 bg-dark-bg/60 py-8 relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright notice with signature tagline */}
          <div className="text-center md:text-left">
            <span className="font-hanken text-xs text-text-champagne/40 tracking-wider uppercase block">
              © {currentYear} THE SINGH SAAB. ALL RIGHTS RESERVED.
            </span>
            <span className="font-lora italic text-xs text-text-champagne/60 mt-1 block">
              "Every texture chosen with intent. Every detail built with soul."
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-lora text-xs uppercase tracking-wider text-text-champagne/60">
            <Link href="/menu" className="hover:text-gold-primary transition-colors">
              Menu
            </Link>
            <Link href="/story" className="hover:text-gold-primary transition-colors">
              Our Story
            </Link>
            <Link href="/gallery" className="hover:text-gold-primary transition-colors">
              Gallery
            </Link>
            <Link href="/privacy" className="hover:text-gold-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
