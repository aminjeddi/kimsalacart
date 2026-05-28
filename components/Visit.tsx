"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Monday", time: "12:00 — 11:00 PM" },
  { day: "Tuesday", time: "12:00 — 11:00 PM" },
  { day: "Wednesday", time: "12:00 — 11:00 PM" },
  { day: "Thursday", time: "12:00 — 11:00 PM" },
  { day: "Friday", time: "12:00 PM — 12:00 AM" },
  { day: "Saturday", time: "12:00 PM — 12:00 AM" },
  { day: "Sunday", time: "Closed" },
];

const MAP =
  "https://www.google.com/maps/search/?api=1&query=5323+Yonge+St+North+York+ON+M2N+5R4";

export default function Visit() {
  return (
    <section
      id="visit"
      className="px-5 sm:px-8 py-24 sm:py-32 lg:py-40 border-t border-ink/20"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 label text-ink/60 mb-8">
            <span className="hairline w-10" />
            <span>Find the Cart</span>
            <span className="hairline w-10" />
          </div>
          <h2
            className="serif italic text-ink leading-[1.02]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Come say hi.
          </h2>
          <p className="mono text-[14px] text-ink/75 mt-6 max-w-md mx-auto leading-relaxed">
            No tables. No tablecloths. Just a cart on a busy corner, and
            something hot in a paper tray.
          </p>
        </motion.div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <p className="label text-ink/55 mb-4">Where</p>
              <h3 className="serif italic text-4xl sm:text-5xl text-ink">
                5323 Yonge St.
              </h3>
              <div className="mt-5 space-y-1 serif text-xl text-ink/85">
                <div>North York, ON M2N 5R4</div>
                <div>Steps from Finch Station</div>
              </div>
            </div>

            <div>
              <p className="label text-ink/55 mb-4">Good to know</p>
              <ul className="space-y-3 serif text-lg text-ink/85">
                <li className="flex gap-3">
                  <span className="text-ink/50">·</span> Cash &amp; debit only &mdash; no credit
                </li>
                <li className="flex gap-3">
                  <span className="text-ink/50">·</span> Open-air cart, no seating
                </li>
                <li className="flex gap-3">
                  <span className="text-ink/50">·</span> Lines can be long &mdash; worth the wait
                </li>
                <li className="flex gap-3">
                  <span className="text-ink/50">·</span> Wait times shared at the window
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={MAP}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-ink text-paper px-9 py-4 serif text-lg rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-deep translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <span className="relative">Get Directions</span>
                <span className="relative transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://www.instagram.com/kimsalacart/"
                target="_blank"
                rel="noreferrer"
                className="serif italic text-lg text-ink hover:text-deep transition-colors underline underline-offset-[6px] decoration-ink/30"
              >
                @kimsalacart
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="label text-ink/55 mb-4">Hours</p>
            <div className="border-y border-ink/25">
              {hours.map((h, i) => (
                <motion.div
                  key={h.day}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-baseline justify-between gap-3 py-4 border-t border-ink/15 first:border-t-0"
                >
                  <span className="serif text-xl text-ink">{h.day}</span>
                  <span className="flex-1 mx-4 border-b border-dotted border-ink/25 translate-y-[-6px]" />
                  <span className="mono text-[13px] text-ink/80 whitespace-nowrap">
                    {h.time}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="mono text-[12px] text-ink/55 mt-5 leading-relaxed">
              Weather-dependent. On the rare snowy or rainy day, we may close
              early &mdash; check our IG before making the trip.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
