"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="px-5 sm:px-8 py-24 sm:py-32 lg:py-40 relative">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 label text-ink/60 mb-10"
        >
          <span className="hairline w-10" />
          <span>The Story</span>
          <span className="hairline w-10" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 serif text-ink leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            A taste of Korea,
            <br />
            <span className="italic">on a Toronto corner.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5 space-y-5 text-[15px] leading-[1.85] text-ink/85"
          >
            <p>
              For as long as anyone can remember, Kim&rsquo;s has been the
              little cart on Yonge Street &mdash; the kind of place regulars
              discover by accident and never stop coming back to.
            </p>
            <p>
              We make Korean street snacks the old way: kimchi pancakes pressed
              fresh on the griddle, fish cake skewers simmering in clear broth,
              boongeopang stuffed with red bean or vanilla custard. Nothing
              precious. Just hot, cheap, and good.
            </p>
            <p className="serif italic text-2xl text-deep pt-2">
              &ldquo;Stand beside the cart and eat &mdash; it&rsquo;s the most
              nostalgic experience.&rdquo;
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 sm:mt-24 pt-12 border-t border-ink/20 grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8"
        >
          {[
            { k: "$3", v: "Starting Price" },
            { k: "10+", v: "Menu Favorites" },
            { k: "★ 4.5", v: "Google Rating" },
            { k: "1k+", v: "Reviews" },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              className="text-center"
            >
              <div className="serif italic text-5xl sm:text-6xl text-ink">{s.k}</div>
              <div className="label text-ink/55 mt-3">{s.v}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
