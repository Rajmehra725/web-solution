"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

export default function GraphicsClient() {
  return (
    <main className=" p-6 min-h-screen bg-[#0b1220] text-white overflow-hidden">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative p-8 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute w-72 h-72 bg-white/30 blur-[120px] top-0 left-0 animate-pulse"></div>

        <h1 className="text-3xl md:text-4xl font-bold">
          Graphics Design Services 🎨
        </h1>

        <p className="mt-3 text-white/90 max-w-2xl">
          Build a strong brand identity with creative, modern and
          high-quality graphic designs that attract customers.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-5 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Get Free Design Quote
        </Link>
      </motion.section>

      {/* SERVICES */}
      <section className="mt-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-bold"
        >
          What We Design
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {[
            "Logo Design (Brand Identity)",
            "Social Media Posts",
            "Business Banners",
            "Flyers & Posters",
            "YouTube Thumbnails",
            "Marketing Creatives",
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              ✔ {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY DESIGN */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10"
      >
        <h2 className="text-2xl font-bold">
          Why Graphic Design Matters?
        </h2>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>✔ First impression of your brand</li>
          <li>✔ Increases customer trust</li>
          <li>✔ Boosts marketing performance</li>
          <li>✔ Improves engagement & conversions</li>
        </ul>
      </motion.section>

      {/* PROCESS */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          Our Design Process
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Understanding",
              desc: "We understand your brand & goals.",
            },
            {
              title: "Creative Design",
              desc: "Modern and visually attractive designs.",
            },
            {
              title: "Final Delivery",
              desc: "High-quality files with revisions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.07 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mt-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-bold"
        >
          Benefits of Our Design Service
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {[
            "Professional brand identity",
            "Eye-catching creatives",
            "Better customer engagement",
            "Affordable pricing",
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              ✔ {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mt-16 text-center p-10 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500"
      >
        <h2 className="text-3xl font-bold">
          Need Professional Designs? 🎨
        </h2>

        <p className="mt-3 text-white/90">
          Let’s create stunning visuals for your business.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 transition"
        >
          Start Designing
        </Link>
      </motion.section>

    </main>
  );
}