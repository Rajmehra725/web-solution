"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    name: "Website Development",
    desc: "High-performance websites built for speed, SEO and conversions.",
    icon: "🌐",
    slug: "website-development",
  },
  {
    name: "SEO Services",
    desc: "Rank your website on Google and get organic traffic.",
    icon: "📈",
    slug: "seo-services",
  },
  {
    name: "Google Ads",
    desc: "Generate instant leads with high ROI campaigns.",
    icon: "💰",
    slug: "google-ads",
  },
  {
    name: "Social Media Marketing",
    desc: "Build brand awareness and grow audience online.",
    icon: "📱",
    slug: "social-media-marketing",
  },
  {
    name: "GMB Optimization",
    desc: "Improve your local ranking and get more calls.",
    icon: "📍",
    slug: "gmb-optimization",
  },
  {
    name: "WhatsApp API",
    desc: "Automate your business communication easily.",
    icon: "💬",
    slug: "whatsapp-api",
  },
  {
    name: "Graphics Design",
    desc: "Creative and modern designs for your brand.",
    icon: "🎨",
    slug: "graphics-design",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

export default function ServicesClient() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white px-4 md:px-10 py-8 overflow-hidden">

      {/* HERO (SEO IMPORTANT) */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Digital Marketing Services for Business Growth 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          We offer SEO services, Google Ads, social media marketing and website development
          to help you generate leads and grow your business online.
        </motion.p>
      </section>

      {/* SERVICES */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service, i) => (
          <motion.article
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg relative overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition"></div>

            <div className="text-3xl">{service.icon}</div>

            <h2 className="text-xl font-semibold mt-4">
              {service.name}
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              {service.desc}
            </p>

            <Link
              href={`/services/${service.slug}`}
              className="inline-block mt-4 text-blue-400 text-sm"
            >
              Learn More →
            </Link>
          </motion.article>
        ))}

      </section>

      {/* PROCESS */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["Research", "Strategy", "Execution", "Growth"].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl"
            >
              <p className="text-blue-400 font-bold">{i + 1}</p>
              <p className="mt-2">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center p-12 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600">
        <h2 className="text-3xl font-bold">
          Start Growing Your Business Today 🚀
        </h2>

        <p className="mt-3 text-white/80">
          Get free consultation and boost your online presence.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 transition"
        >
          Contact Now
        </Link>
      </section>

    </main>
  );
}