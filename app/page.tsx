"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Home() {
  const services = [
    { name: "Website Development", slug: "website-development" },
    { name: "SEO Services", slug: "seo-services" },
    { name: "Google Ads", slug: "google-ads" },
    { name: "Social Media Marketing", slug: "social-media-marketing" },
    { name: "GMB Optimization", slug: "gmb-optimization" },
    { name: "WhatsApp API", slug: "whatsapp-api" },
    { name: "Graphics Design", slug: "graphics-design" },
  ];

  const stats = [
    { label: "Projects Delivered", value: 100 },
    { label: "Happy Clients", value: 50 },
    { label: "Leads Generated", value: 10000 },
    { label: "Support", value: 24 },
  ];

  // Counter Animation
  const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value]);

    return <>{count}+</>;
  };

  return (
    <>
    <main className="min-h-screen bg-[#0b1220] text-white px-4 md:px-10 py-8 overflow-hidden">

        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="show"
          className="relative rounded-2xl p-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute w-72 h-72 bg-pink-500 blur-[120px] opacity-30 top-0 left-0 animate-pulse"></div>

          <motion.h1 custom={1} variants={fadeUp} className="text-3xl md:text-5xl font-bold">
            Grow Your Business with Digital Power 🚀
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} className="mt-4 text-white/90 text-lg max-w-3xl">
            We create high-converting websites, rank you on Google and generate real leads.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            <Link href="/services" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Explore Services
            </Link>
            <Link href="/contact" className="border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Free Consultation
            </Link>
          </motion.div>
        </motion.section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-6 rounded-xl text-center backdrop-blur-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold text-blue-400">
                <Counter value={s.value} />
              </h3>
              <p className="text-sm text-gray-300">{s.label}</p>
            </motion.div>
          ))}
        </section>

        {/* SERVICES */}
        <section className="mt-14">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold mb-6">
            Our Services
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition cursor-pointer"
              >
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Result-driven marketing strategy for growth.
                </p>
                <Link href={`/services/${s.slug}`} className="text-blue-400 text-sm mt-4 inline-block">
                  View Details →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <ul className="mt-5 space-y-2 text-gray-300">
              <li>✔ ROI Focused Strategy</li>
              <li>✔ High Converting Ads</li>
              <li>✔ Fast Websites</li>
              <li>✔ Affordable Pricing</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-gray-300 mt-2">
              Help businesses scale with smart digital systems.
            </p>
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 text-center p-12 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 shadow-2xl"
        >
          <h2 className="text-3xl font-bold">Let’s Grow 🚀</h2>
          <Link href="/contact" className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 transition">
            Get Started
          </Link>
        </motion.section>

      </main>

      
    </>
  );
}