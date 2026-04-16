"use client";

import { motion } from "framer-motion";


export default function Page({ params }: any) {
  return (
    <>
      

      <main className="md:ml-64 p-6">
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold"
        >
          {params.slug.replace("-", " ")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3"
        >
          We provide professional {params.slug.replace("-", " ")} services
          with SEO optimized strategy.
        </motion.p>

      </main>
    </>
  );
}