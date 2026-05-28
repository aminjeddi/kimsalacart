"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    quote:
      "This place is our go to for cold nights! Owners are super nice. Snacks are all super tasty &mdash; the fish cake with soup is the move.",
    author: "Pourya P.",
    meta: "Local Guide · 108 reviews",
    rating: 5,
  },
  {
    quote:
      "Highlight of my work day. Food is always tasty and filling. Try the baby crabs and the custard fishcakes!",
    author: "Arash B.",
    meta: "Local Guide · 56 reviews",
    rating: 5,
  },
  {
    quote:
      "I love Kim&rsquo;s primarily for the experience. Eating the fish cake soup when it&rsquo;s snowy in the winter &mdash; it really feels like Asia.",
    author: "Firmament",
    meta: "Local Guide · 245 reviews",
    rating: 5,
  },
  {
    quote:
      "Affordable and fun to try different things. The kimchi pancake is always my fave &mdash; freshly made, hits the spot every time.",
    author: "Kinki",
    meta: "Local Guide · 34 reviews",
    rating: 5,
  },
  {
    quote:
      "10 dollars is good for one person snacking. Custard and red bean waffles, fish cake, rice cake &mdash; all delicious. 10/10.",
    author: "hiharry",
    meta: "Local Guide · 73 reviews",
    rating: 5,
  },
  {
    quote:
      "A street food revelation. Tender beef dumplings, perfectly seasoned chicken skewers, and a bustling atmosphere that&rsquo;s a global gastronomic adventure.",
    author: "Amir S.",
    meta: "Local Guide · 45 reviews",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="px-5 sm:px-8 py-24 sm:py-32 lg:py-40 border-t border-ink/20"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20 sm:mb-24"
        >
          <div className="flex items-center justify-center gap-3 label text-ink/60 mb-8">
            <span className="hairline w-10" />
            <span>Kind Words</span>
            <span className="hairline w-10" />
          </div>
          <h2
            className="serif italic text-ink leading-[1.02]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            What folks say
            <br />
            <span className="not-italic">at the cart.</span>
          </h2>
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="serif italic text-4xl text-ink">4.5</span>
            <span className="text-ink tracking-widest text-xl">★★★★★</span>
            <span className="label text-ink/60">Google · 1,000+ reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="group p-7 sm:p-8 border border-ink/20 rounded-2xl bg-cream/30 hover:bg-cream/60 transition-colors"
            >
              <div className="text-ink tracking-widest mb-5">★★★★★</div>
              <blockquote
                className="serif text-[19px] leading-[1.55] text-ink/90"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${r.quote}&rdquo;` }}
              />
              <figcaption className="mt-7 pt-5 border-t border-ink/15">
                <div className="serif italic text-lg text-ink">{r.author}</div>
                <div className="label text-ink/55 mt-1">{r.meta}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 label text-ink hover:text-deep transition-colors underline underline-offset-[6px] decoration-ink/30"
          >
            Read more on Google →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
