"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const services = [
    { name: "SEO Services", desc: "Rank on Google", href: "/services/seo-services" },
    { name: "Google Ads", desc: "Get instant leads", href: "/services/google-ads" },
    { name: "Social Media", desc: "Grow Instagram & FB", href: "/services/social-media" },
    { name: "Website Dev", desc: "Fast modern websites", href: "/services/website-development" },
    { name: "GMB Optimization", desc: "Local ranking boost", href: "/services/gmb-optimization" },
    { name: "Content Creation", desc: "SEO blogs & content", href: "/services/content-creation" },
    { name: "Graphics Design", desc: "Logos & creatives", href: "/services/graphics-design" },
    { name: "WhatsApp API", desc: "Automation system", href: "/services/whatsapp-api" },
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="hidden md:flex fixed top-0 left-0 w-full h-16 z-50
      bg-[#0b1220]/70 backdrop-blur-xl border-b border-white/10
      items-center justify-between px-10">

        {/* LOGO */}
        <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
          WS & DM
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-8 text-sm text-white">

          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          {/* ================= SERVICES MEGA MENU ================= */}
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <span className="cursor-pointer hover:text-cyan-400 transition">
              Services ▾
            </span>

            <AnimatePresence>
              {serviceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 w-[600px]
                  bg-[#0f172a]/95 backdrop-blur-xl
                  border border-white/10 rounded-2xl shadow-2xl p-5"
                >
                  <div className="grid grid-cols-2 gap-3">

                    {services.map((s, i) => (
                      <Link
                        key={i}
                        href={s.href}
                        className="p-3 rounded-xl hover:bg-cyan-500/10 transition"
                      >
                        <p className="font-semibold text-cyan-300">{s.name}</p>
                        <p className="text-xs text-gray-400">{s.desc}</p>
                      </Link>
                    ))}

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="hover:text-cyan-400 transition">
            About
          </Link>

          <Link href="/blog" className="hover:text-cyan-400 transition">
            Blog
          </Link>

          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500
          hover:scale-105 transition font-medium"
        >
          Get Quote
        </Link>
      </header>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden flex justify-between items-center px-4 py-3
      bg-[#0b1220]/90 backdrop-blur border-b border-white/10 fixed w-full z-50">

        <h1 className="font-bold text-cyan-400">WS & DM</h1>

        <button onClick={() => setOpen(true)} className="text-2xl text-white">
          ☰
        </button>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 z-40"
            />

            {/* drawer */}
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 left-0 h-full w-72 bg-[#0f172a] z-50 p-5 text-white"
            >
              {/* header */}
              <div className="flex justify-between mb-6">
                <h2 className="text-cyan-400 font-bold">WS & DM</h2>
                <button onClick={() => setOpen(false)}>✕</button>
              </div>

              {/* links */}
              <nav className="flex flex-col gap-4 text-sm">

                <Link href="/" onClick={() => setOpen(false)}>Home</Link>

                <div>
                  <p className="text-gray-400 mb-2">Services</p>

                  <div className="flex flex-col gap-2 ml-2">
                    {services.map((s, i) => (
                      <Link
                        key={i}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="hover:text-cyan-400"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
                <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
              </nav>

              {/* CTA */}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block mt-6 text-center
                bg-gradient-to-r from-cyan-500 to-indigo-500
                py-2 rounded-lg"
              >
                Get Free Quote
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* spacing */}
      <div className="h-16" />
    </>
  );
}