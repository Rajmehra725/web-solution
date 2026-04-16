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

export default function GMBClient() {
  return (
    <main className=" p-6 min-h-screen bg-[#0b1220] text-white overflow-hidden">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative p-8 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 overflow-hidden"
      >
        {/* Glow Effect */}
        <div className="absolute w-72 h-72 bg-white/30 blur-[120px] top-0 left-0 animate-pulse"></div>

        <h1 className="text-3xl md:text-4xl font-bold">
          GMB Optimization Services 📍
        </h1>

        <p className="mt-3 text-white/90 max-w-2xl">
          Rank higher on Google Maps and attract more local customers with
          optimized Google Business Profile.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-5 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Get Free GMB Audit
        </Link>
      </motion.section>

      {/* WHY GMB */}
      <section className="mt-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-bold"
        >
          Why Google My Business?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {[
            "Appear on Google Maps",
            "Get local customers easily",
            "Increase calls & store visits",
            "Build trust with reviews",
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

      {/* PROCESS */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10"
      >
        <h2 className="text-2xl font-bold">
          Our GMB Optimization Process
        </h2>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>✔ Business Profile Setup & Verification</li>
          <li>✔ Keyword Optimization</li>
          <li>✔ Category & Services Setup</li>
          <li>✔ High Quality Image Uploads</li>
          <li>✔ Review Strategy & Management</li>
          <li>✔ Local Ranking Optimization</li>
        </ul>
      </motion.section>

      {/* FEATURES */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          What We Improve
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Profile Ranking",
              desc: "Rank higher on Google Maps search.",
            },
            {
              title: "Customer Reviews",
              desc: "Improve reputation with positive reviews.",
            },
            {
              title: "Local Leads",
              desc: "Get more calls and nearby inquiries.",
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
          Benefits of GMB Optimization
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {[
            "Higher ranking on Google Maps",
            "Increased local visibility",
            "More calls & visits",
            "Better trust & credibility",
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
        className="mt-16 text-center p-10 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500"
      >
        <h2 className="text-3xl font-bold">
          Want More Local Customers? 📍
        </h2>

        <p className="mt-3 text-white/90">
          Optimize your Google Business profile and grow locally.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 transition"
        >
          Start GMB Optimization
        </Link>
      </motion.section>

    </main>
  );
}