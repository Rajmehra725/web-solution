import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white border-t border-white/10 mt-10">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-blue-400">
              Web Solutions & DM
            </h2>

            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              We help businesses grow with SEO, Ads, Website Development,
              Social Media Marketing & complete digital solutions.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-5">

              {/* Instagram */}
              <a href="#" className="hover:scale-110 transition">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.49 4.49 0 0 0 12 7.5zm0 7.5A3 3 0 1 1 15 12a3 3 0 0 1-3 3zm4.75-8.75a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="hover:scale-110 transition">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14.2 6h2.3v3h-2c-.6 0-1 .4-1 1V12h3l-.5 3h-2.5v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="hover:scale-110 transition">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm1 6H3v12h2V9zm5 0H8v12h2v-6c0-3 4-3 4 0v6h2v-7c0-5-5-5-6-3V9z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="hover:scale-110 transition">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 12s0-4.4-.6-6.4c-.4-1.3-1.4-2.3-2.7-2.7C17.7 2 12 2 12 2s-5.7 0-7.7.6C3 3 2 4 1.6 5.3.9 7.3.9 12 .9 12s0 4.7.7 6.7c.4 1.3 1.4 2.3 2.7 2.7C6.3 22 12 22 12 22s5.7 0 7.7-.6c1.3-.4 2.3-1.4 2.7-2.7.6-2 .6-6.7.6-6.7zM10 15V9l6 3-6 3z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/seo-services" className="hover:text-white">SEO Services</Link></li>
              <li><Link href="/services/google-ads" className="hover:text-white">Google Ads</Link></li>
              <li><Link href="/services/social-media-marketing" className="hover:text-white">Social Media</Link></li>
              <li><Link href="/services/website-development" className="hover:text-white">Web Development</Link></li>
              <li><Link href="/services/gmb-optimization" className="hover:text-white">GMB Optimization</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@websolutions.com</li>
              <li>Phone: +91-9039189902</li>
              <li>Location: India</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-5 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Web Solutions & Digital Marketing. All rights reserved.
        </div>

      </div>

    </footer>
  );
}