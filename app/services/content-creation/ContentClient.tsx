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

export default function ContentClient() {
  return (
    <main className=" p-6 min-h-screen bg-[#0b1220] text-white overflow-hidden">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative p-8 rounded-2xl bg-gradient-to-r from-yellow-500 to-pink-500 overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute w-72 h-72 bg-white/30 blur-[120px] top-0 left-0 animate-pulse"></div>

        <h1 className="text-3xl md:text-4xl font-bold">
          Content Creation Services ✍️
        </h1>

        <p className="mt-3 text-white/90 max-w-2xl">
          We create SEO-friendly, high-converting content that drives traffic,
          builds trust and increases sales.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-5 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Get Free Content Plan
        </Link>
      </motion.section>

      {/* WHY CONTENT */}
      <section className="mt-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-bold"
        >
          Why Content Matters?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {[
            "Improves Google ranking (SEO)",
            "Builds brand authority",
            "Increases website traffic",
            "Boosts conversions & sales",
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

      {/* TYPES */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10"
      >
        <h2 className="text-2xl font-bold">
          Types of Content We Create
        </h2>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>✔ Blog Articles (SEO Optimized)</li>
          <li>✔ Website Content Writing</li>
          <li>✔ Social Media Captions</li>
          <li>✔ Ad Copywriting (Google & Meta Ads)</li>
          <li>✔ Product Descriptions</li>
        </ul>
      </motion.section>

      {/* STRATEGY */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          Our Content Strategy
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Research",
              desc: "Keyword & audience research for better targeting.",
            },
            {
              title: "Creation",
              desc: "High-quality SEO optimized content writing.",
            },
            {
              title: "Optimization",
              desc: "Content optimized for ranking & engagement.",
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
          Benefits of Our Content Service
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {[
            "Higher Google ranking",
            "Better audience engagement",
            "Strong brand authority",
            "Increased leads & sales",
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
        className="mt-16 text-center p-10 rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-500"
      >
        <h2 className="text-3xl font-bold">
          Need High Quality Content? ✍️
        </h2>

        <p className="mt-3 text-white/90">
          Let’s create content that drives real business growth.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 transition"
        >
          Start Content Plan
        </Link>
      </motion.section>

    </main>
  );
}