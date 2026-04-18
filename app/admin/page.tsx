"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Contact = {
  _id: string;
  name: string;
  phone: string;
  message: string;
  createdAt: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
};

export default function AdminPage() {
  const [data, setData] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH DATA
  const fetchContacts = async () => {
    try {
      const res = await fetch("https://starnewsbackend.onrender.com/api/contact");
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // 🔥 DELETE
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message?")) return;

    try {
      await fetch(`https://starnewsbackend.onrender.com/api/contact/${id}`, {
        method: "DELETE",
      });

      // 🔥 UI Update
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b1220] text-white p-6">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Admin Dashboard 🚀
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : data.length === 0 ? (
        <p className="text-center text-gray-400">No messages yet</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {data.map((item, i) => (
            <motion.div
              key={item._id}
              custom={i}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg hover:scale-[1.02] transition"
            >
              {/* NAME */}
              <h2 className="text-xl font-bold">{item.name}</h2>

              {/* PHONE */}
              <p className="text-gray-300 mt-1">📞 {item.phone}</p>

              {/* MESSAGE */}
              <p className="text-gray-400 mt-3 text-sm">
                {item.message}
              </p>

              {/* DATE */}
              <p className="text-xs text-gray-500 mt-3">
                {new Date(item.createdAt).toLocaleString()}
              </p>

              {/* ACTIONS */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
                >
                  Delete
                </button>

                <button
                  className="bg-blue-500 px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition"
                >
                  View
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      )}
    </main>
  );
}