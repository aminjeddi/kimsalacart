"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-sm py-3" : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#top" className="serif italic text-2xl sm:text-[26px] text-ink tracking-tight">
          Kim&rsquo;s
        </a>

        <nav className="hidden md:flex items-center gap-9 lg:gap-12 label text-ink/85">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative group">
              <span className="group-hover:text-deep transition-colors">{l.label}</span>
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-ink transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="https://www.ubereats.com/ca/store/kims-a-la-cart-red-bean-waffle/9ohkgU_QSjqAy0F7Sda7zA"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-ink text-paper px-5 py-2 rounded-full label hover:bg-deep transition-colors"
        >
          Order <span aria-hidden>→</span>
        </a>

        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-paper/95 backdrop-blur-sm"
          >
            <div className="px-6 py-8 flex flex-col items-center gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="serif italic text-4xl text-ink"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
