"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WebsiteClient() {

  const features = [
    "Fast Loading Performance",
    "SEO Optimized Structure",
    "Mobile Responsive Design",
    "Modern UI/UX Design",
    "Secure & Scalable Architecture",
    "High Conversion Landing Pages",
  ];

  const packages = [
    {
      name: "Basic Website",
      price: "₹5,999",
      desc: "Static business website with modern UI",
    },
    {
      name: "Business Website",
      price: "₹12,999",
      desc: "Dynamic website with admin panel",
    },
    {
      name: "Premium Website",
      price: "₹25,999",
      desc: "Full SEO + advanced business features",
    },
  ];

  const process = [
    "Requirement Analysis",
    "UI/UX Design",
    "Development",
    "SEO Optimization",
    "Launch & Support",
  ];

  const faqs = [
    {
      q: "How long does website take?",
      a: "Usually 3–7 days depending on project size.",
    },
    {
      q: "Will website be SEO friendly?",
      a: "Yes, all websites are fully optimized for Google ranking.",
    },
    {
      q: "Do you provide support?",
      a: "Yes, we provide full support after delivery.",
    },
  ];

  return (
    <main className=" min-h-screen bg-[#0b1220] text-white px-4 sm:px-6 lg:px-10 py-8">

      {/* HERO */}
      <section className="rounded-2xl p-6 md:p-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-5xl font-bold leading-tight"
        >
          Professional Website Development Services for Business Growth
        </motion.h1>

        <p className="mt-4 text-white/80 max-w-2xl text-sm md:text-base">
          We build fast, SEO optimized, mobile friendly websites using Next.js,
          React and modern UI/UX design that helps your business grow online.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="bg-white text-black px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold"
          >
            Get Free Consultation
          </Link>

          <Link
            href="/services"
            className="border border-white px-5 py-2 md:px-6 md:py-3 rounded-lg"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Choose Our Websites?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
            >
              ✔ {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mt-14 grid md:grid-cols-2 gap-8 items-center">

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Modern Web Development Solutions
          </h2>

          <p className="text-gray-400 mt-3 text-sm md:text-base">
            We build SEO-friendly websites that load fast, rank higher on Google,
            and convert visitors into customers.
          </p>

          <ul className="mt-5 space-y-2 text-gray-300 text-sm md:text-base">
            <li>✔ Next.js Development</li>
            <li>✔ Tailwind CSS UI Design</li>
            <li>✔ API Integration</li>
            <li>✔ SEO Optimization</li>
          </ul>
        </div>

        <div className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-2xl">
          <p className="text-gray-300 text-sm md:text-base">
            We focus on performance, SEO ranking and business growth — not just design.
          </p>
        </div>

      </section>

      {/* PROCESS */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Our Development Process
        </h2>

        <div className="grid md:grid-cols-5 gap-4 text-center">
          {process.map((step, i) => (
            <div
              key={i}
              className="p-4 bg-white/5 border border-white/10 rounded-xl"
            >
              <p className="text-blue-400 font-bold">{i + 1}</p>
              <p className="text-sm mt-2">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Website Packages
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl"
            >
              <h3 className="text-lg md:text-xl font-bold">{pkg.name}</h3>
              <p className="text-blue-400 mt-2 text-lg">{pkg.price}</p>
              <p className="text-gray-400 mt-2 text-sm">{pkg.desc}</p>

              <Link
                href="/contact"
                className="inline-block mt-4 bg-blue-600 px-4 py-2 rounded-lg"
              >
                Order Now
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-gray-400 text-sm mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center p-8 md:p-12 rounded-2xl bg-gradient-to-r from-green-500 via-blue-600 to-purple-600">

        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to Build Your Website?
        </h2>

        <p className="mt-3 text-white/80 text-sm md:text-base">
          Get a high-performance SEO optimized website today.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold"
        >
          Start Now
        </Link>

      </section>

    </main>
  );
}