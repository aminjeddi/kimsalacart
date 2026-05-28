"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative px-5 sm:px-8 pt-32 sm:pt-40 pb-20 lg:pb-28 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center gap-3 label text-ink/70 mb-8"
        >
          <span className="hairline w-10" />
          <span>Toronto</span>
          <span className="hairline w-10" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="serif italic text-center text-ink leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 14vw, 13rem)" }}
        >
          kim&rsquo;s <span className="not-italic">a la</span>
          <br />
          cart.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mono text-center text-[15px] sm:text-base leading-relaxed max-w-xl mx-auto mt-10 sm:mt-12 text-ink/85"
        >
          A little Korean street food cart that&rsquo;s been warming up
          Toronto winters for years. Crispy kimchi pancakes, fish cake soup,
          custard waffles &mdash; eaten standing up, the way it should be.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <a
            href="https://www.ubereats.com/ca/store/kims-a-la-cart-red-bean-waffle/9ohkgU_QSjqAy0F7Sda7zA"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-ink text-paper px-10 py-4 serif text-lg rounded-full overflow-hidden min-w-[260px]"
          >
            <span className="absolute inset-0 bg-deep translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative">Order on Uber Eats</span>
            <span className="relative transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#menu"
            className="serif italic text-lg text-ink hover:text-deep transition-colors underline underline-offset-[6px] decoration-ink/30 hover:decoration-deep"
          >
            See the menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-16 sm:mt-20 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 label text-ink/60"
        >
          <span>5323 Yonge St.</span>
          <span className="text-ink/40">✦</span>
          <span>Cash / Debit</span>
          <span className="text-ink/40">✦</span>
          <span>Open Air</span>
          <span className="text-ink/40">✦</span>
          <span>★ 4.5 · 1k+ Reviews</span>
        </motion.div>
      </div>
    </section>
  );
}
