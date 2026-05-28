"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 pt-24 sm:pt-32 pb-12 border-t border-ink/25 bg-cream/30">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <h3
            className="serif italic text-ink leading-[0.95]"
            style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
          >
            kim&rsquo;s a la cart.
          </h3>
          <a
            href="#top"
            className="inline-block mt-10 label text-ink/70 hover:text-deep transition-colors"
          >
            ↑ Back to top
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-10 pt-12 border-t border-ink/20">
          <div>
            <p className="label text-ink/55 mb-3">Find Us</p>
            <p className="serif italic text-xl text-ink leading-relaxed">
              5323 Yonge St.
              <br />
              North York, ON
            </p>
          </div>

          <div>
            <p className="label text-ink/55 mb-3">Follow</p>
            <div className="space-y-1.5 serif italic text-xl text-ink">
              <a
                href="https://www.instagram.com/kimsalacart/"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-deep transition-colors"
              >
                @kimsalacart
              </a>
              <a
                href="https://www.ubereats.com/ca/store/kims-a-la-cart-red-bean-waffle/9ohkgU_QSjqAy0F7Sda7zA"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-deep transition-colors"
              >
                Uber Eats
              </a>
            </div>
          </div>

          <div>
            <p className="label text-ink/55 mb-3">Heads Up</p>
            <p className="mono text-[13px] text-ink/75 leading-relaxed">
              Cash &amp; debit only. No reservations. Eaten standing up &mdash;
              the way street food is meant to be.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-ink/15 flex flex-col sm:flex-row items-center justify-between gap-4 label text-ink/55">
          <span>© {new Date().getFullYear()} Kim&rsquo;s A La Cart. All rights reserved.</span>
          <span>Made in Toronto · Hot from the cart</span>
        </div>
      </div>
    </footer>
  );
}
