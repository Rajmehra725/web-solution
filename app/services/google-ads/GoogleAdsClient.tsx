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

export default function GoogleAdsClient() {
  return (
    <main className=" p-6 min-h-screen bg-[#0b1220] text-white overflow-hidden">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden"
      >
        <div className="absolute w-72 h-72 bg-white/30 blur-[120px] top-0 left-0 animate-pulse"></div>

        <h1 className="text-3xl md:text-4xl font-bold">
          Google Ads Management Services 🚀
        </h1>

        <p className="mt-3 text-white/90 max-w-2xl">
          Run high-converting PPC campaigns, generate instant leads and
          maximize your ROI with our expert Google Ads strategies.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-5 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Get Free Consultation
        </Link>
      </motion.section>

      {/* WHY GOOGLE ADS */}
      <section className="mt-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-bold"
        >
          Why Google Ads?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {[
            "Instant traffic to your website",
            "Highly targeted audience reach",
            "High conversion leads",
            "Pay only for clicks (PPC model)",
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

      {/* STRATEGY */}
      <section className="mt-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-bold"
        >
          Our Google Ads Strategy
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            "Keyword Research",
            "Campaign Setup",
            "Ad Copy Optimization",
            "Landing Page Optimization",
            "Conversion Tracking",
            "Performance Scaling",
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
              <p className="text-purple-400 font-bold">{i + 1}</p>
              <p className="mt-2">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          Results You Can Expect
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "More Leads",
              desc: "Generate high-quality inquiries instantly.",
            },
            {
              title: "More Sales",
              desc: "Increase conversions with optimized campaigns.",
            },
            {
              title: "Brand Growth",
              desc: "Build strong visibility in your niche.",
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

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mt-16 text-center p-10 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600"
      >
        <h2 className="text-3xl font-bold">
          Ready to Scale with Google Ads? 🚀
        </h2>

        <p className="mt-3 text-white/90">
          Start your campaign today and get high-quality leads.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 transition"
        >
          Start Now
        </Link>
      </motion.section>

    </main>
  );
}