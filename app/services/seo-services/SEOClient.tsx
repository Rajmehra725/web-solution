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

export default function SEOClient() {
  return (
    <main className=" p-6 min-h-screen bg-[#0b1220] text-white overflow-hidden">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative p-8 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 overflow-hidden"
      >
        <div className="absolute w-72 h-72 bg-white/30 blur-[120px] top-0 left-0 animate-pulse"></div>

        <h1 className="text-3xl md:text-4xl font-bold">
          SEO Services 🚀
        </h1>

        <p className="mt-3 text-white/90 max-w-2xl">
          Rank higher on Google, get organic traffic and generate high-quality
          leads with our result-driven SEO strategies.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-5 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Get Free SEO Audit
        </Link>
      </motion.section>

      {/* WHY SEO */}
      <section className="mt-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-bold"
        >
          Why SEO is Important?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {[
            "Get free organic traffic from Google",
            "Long-term business growth",
            "Increase brand visibility",
            "Higher conversion rate",
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              ✔ {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mt-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-bold"
        >
          Our SEO Process
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            "SEO Audit",
            "Keyword Research",
            "On-Page SEO",
            "Technical SEO",
            "Off-Page SEO",
            "Tracking & Growth",
          ].map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.07 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl text-center"
            >
              <p className="text-blue-400 font-bold">{i + 1}</p>
              <p className="mt-2">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TYPES */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          Types of SEO Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "On-Page SEO",
              desc: "Optimize content, meta tags and structure.",
            },
            {
              title: "Off-Page SEO",
              desc: "Build backlinks and domain authority.",
            },
            {
              title: "Technical SEO",
              desc: "Improve speed, indexing and performance.",
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
          Benefits of SEO
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {[
            "Rank on Google first page",
            "Increase organic leads",
            "Improve website authority",
            "Long-term business growth",
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
        className="mt-16 text-center p-10 rounded-2xl bg-gradient-to-r from-blue-600 to-green-500"
      >
        <h2 className="text-3xl font-bold">
          Want to Rank #1 on Google? 🚀
        </h2>

        <p className="mt-3 text-white/90">
          Get a free SEO audit and start growing your business today.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 transition"
        >
          Start SEO Now
        </Link>
      </motion.section>

    </main>
  );
}