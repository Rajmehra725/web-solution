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

  // 🔥 FORM STATE
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // 🔥 HANDLE CHANGE
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 SUBMIT (CONNECTED TO BACKEND)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message Sent Successfully 🚀");

        // 🔥 RESET FORM
        setForm({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }

    setLoading(false);
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
          Let’s build your business together.
        </motion.p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4 backdrop-blur-lg"
        >
          <h2 className="text-2xl font-bold">Send Message</h2>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none"
            placeholder="Your Name"
            required
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none"
            placeholder="Phone Number"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none h-32"
            placeholder="Your Message"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* INFO */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-xl font-bold">Contact Info</h2>
            <p className="text-gray-300 mt-3">📧 support@websolutions.com</p>
            <p className="text-gray-300">📞 +91-9039189902</p>
            <p className="text-gray-300">📍 India</p>
          </div>
        </div>

      </div>
    </main>
  );
}