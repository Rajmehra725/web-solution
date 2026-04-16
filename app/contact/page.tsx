"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Message Sent Successfully 🚀");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#0b1220] text-white px-4 md:px-10 py-16">

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h1 custom={1} variants={fadeUp} className="text-4xl font-bold">
          Contact Us 🚀
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} className="text-gray-300 mt-3">
          Let’s build your business together. Fill the form and we will get back to you within 24 hours.
        </motion.p>
      </motion.section>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4 backdrop-blur-lg"
        >
          <motion.h2 custom={1} variants={fadeUp} className="text-2xl font-bold">
            Send Message
          </motion.h2>

          <motion.input
            custom={2}
            variants={fadeUp}
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none"
            placeholder="Your Name"
            required
          />

          <motion.input
            custom={3}
            variants={fadeUp}
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none"
            placeholder="Phone Number"
            required
          />

          <motion.textarea
            custom={4}
            variants={fadeUp}
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none h-32"
            placeholder="Your Message"
            required
          />

          <motion.button
            custom={5}
            variants={fadeUp}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {/* INFO CARD */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >

          {/* CONTACT INFO */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-xl font-bold">Contact Info</h2>

            <p className="text-gray-300 mt-3">📧 support@websolutions.com</p>
            <p className="text-gray-300">📞 +91-9039189902</p>
            <p className="text-gray-300">📍 India</p>
          </div>

          {/* SOCIAL */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-xl font-bold">Follow Us</h2>

            <div className="flex gap-4 mt-4">
              <a className="hover:text-blue-400">Facebook</a>
              <a className="hover:text-pink-400">Instagram</a>
              <a className="hover:text-cyan-400">LinkedIn</a>
              <a className="hover:text-red-400">YouTube</a>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl">
            <h3 className="font-bold text-lg">Need Quick Response?</h3>
            <p className="text-sm text-white/80 mt-1">
              We usually respond within 1–2 hours during working time.
            </p>
          </div>

        </motion.div>
      </div>
    </main>
  );
}