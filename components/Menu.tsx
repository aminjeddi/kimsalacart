"use client";

import { motion } from "framer-motion";

type Item = {
  name: string;
  desc: string;
  price: string;
  qty?: string;
  tags?: Array<"vegi" | "signature">;
};

type Section = { name: string; items: Item[] };

const sections: Section[] = [
  {
    name: "Pan-Fried",
    items: [
      {
        name: "Kimchi Pancake",
        desc: "Pan-fried, savoury flour-based pancake with spicy cabbage. Spicy or teriyaki sauce.",
        price: "5.00",
        qty: "1 pc",
        tags: ["vegi", "signature"],
      },
      {
        name: "Beef Dumpling",
        desc: "Pan-fried beef dumplings with spicy or teriyaki sauce.",
        price: "1.50",
        qty: "2 pcs",
      },
      {
        name: "Rice Cake",
        desc: "Pan-fried chewy rice cake with spicy or teriyaki sauce.",
        price: "2.00",
        qty: "1 skewer",
        tags: ["vegi"],
      },
      {
        name: "Seafood Ball",
        desc: "Pan-fried mixed seafood balls with spicy or teriyaki sauce.",
        price: "3.00",
        qty: "4 pcs",
      },
      {
        name: "Kim-mari",
        desc: "Glass noodles stuffed in fried laver (seaweed) with spicy or teriyaki sauce.",
        price: "3.00",
        qty: "3 pcs",
        tags: ["vegi"],
      },
      {
        name: "Rice Cake & Sausage",
        desc: "2 pcs beef sausage and 2 pcs rice cake on a skewer with spicy or teriyaki sauce.",
        price: "3.00",
        qty: "1 skewer",
      },
      {
        name: "Baby Crabs",
        desc: "Deep-fried, seasoned battered baby crabs with spicy or teriyaki sauce.",
        price: "3.50",
        qty: "4 pc",
      },
    ],
  },
  {
    name: "From the Grill",
    items: [
      {
        name: "Chicken Breast",
        desc: "Grilled chicken brushed with spicy or teriyaki sauce.",
        price: "3.50",
        qty: "1 skewer",
      },
      {
        name: "Pork Belly",
        desc: "Grilled pork belly with spicy or teriyaki sauce.",
        price: "3.50",
        qty: "1 skewer",
      },
      {
        name: "Meat Ball",
        desc: "Grilled meatballs with spicy or teriyaki sauce.",
        price: "3.50",
        qty: "4 pcs",
      },
    ],
  },
  {
    name: "From the Pot",
    items: [
      {
        name: "Fish Cake with Soup",
        desc: "Skewered fish cake simmered in clear, savoury broth. The thing you order on a cold night.",
        price: "1.50",
        qty: "1 skewer",
        tags: ["signature"],
      },
      {
        name: "Thick Noodle Soup",
        desc: "Hand-cut thick noodles in warming, savoury broth.",
        price: "6.00",
      },
    ],
  },
  {
    name: "Waffles",
    items: [
      {
        name: "Red Bean Waffle",
        desc: "Fish-shaped waffles filled with sweet red bean paste, hot from the iron.",
        price: "4.50",
        qty: "3 pcs",
        tags: ["signature"],
      },
      {
        name: "Custard Waffle",
        desc: "Fish-shaped waffles filled with warm vanilla custard. Crispy outside, molten inside.",
        price: "4.50",
        qty: "2 pcs",
        tags: ["signature"],
      },
    ],
  },
];

function TagPill({ tag }: { tag: NonNullable<Item["tags"]>[number] }) {
  const map = {
    vegi: "Vegi",
    signature: "Signature",
  } as const;
  return (
    <span className="align-middle label rounded-full border border-ink/50 text-ink/70 px-2.5 py-1 ml-3">
      {map[tag]}
    </span>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="px-5 sm:px-8 py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 label text-ink/60 mb-8">
            <span className="hairline w-10" />
            <span>The Menu</span>
            <span className="hairline w-10" />
          </div>
          <h2
            className="serif text-ink leading-[1.02]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Small bites,
            <br />
            <span className="italic">big nostalgia.</span>
          </h2>
          <p className="mono text-[14px] text-ink/75 mt-8 max-w-md mx-auto leading-relaxed">
            A short, honest menu. Cash or debit only. Prices may shift with the
            seasons &mdash; what&rsquo;s hot off the griddle today might be
            tomorrow&rsquo;s favorite.
          </p>
        </motion.div>

        <div className="mt-24 sm:mt-28 space-y-24">
          {sections.map((sec, si) => (
            <div key={sec.name}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="flex items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
              >
                <div className="hairline flex-1 max-w-[60px] sm:max-w-[140px]" />
                <span className="label text-ink/60">0{si + 1}</span>
                <h3 className="serif italic text-3xl sm:text-4xl whitespace-nowrap">
                  {sec.name}
                </h3>
                <div className="hairline flex-1 max-w-[60px] sm:max-w-[140px]" />
              </motion.div>

              <div className="space-y-9 max-w-3xl mx-auto">
                {sec.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
                      <h4 className="serif text-2xl sm:text-[28px] text-ink group-hover:text-deep transition-colors flex-1 min-w-0">
                        {item.name}
                        {item.tags?.map((t) => (
                          <TagPill key={t} tag={t} />
                        ))}
                      </h4>
                      <div className="hidden sm:block flex-1 border-b border-dotted border-ink/35 translate-y-[-6px]" />
                      <span className="serif text-xl sm:text-2xl text-ink whitespace-nowrap">
                        ${item.price}
                        {item.qty && (
                          <span className="label text-ink/55 ml-2">/ {item.qty}</span>
                        )}
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] text-ink/70 leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 flex flex-col items-center gap-6"
        >
          <a
            href="https://www.ubereats.com/ca/store/kims-a-la-cart-red-bean-waffle/9ohkgU_QSjqAy0F7Sda7zA"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-ink text-paper px-10 py-4 serif text-lg rounded-full overflow-hidden min-w-[280px]"
          >
            <span className="absolute inset-0 bg-deep translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative">Order on Uber Eats</span>
            <span className="relative transition-transform group-hover:translate-x-1">→</span>
          </a>
          <p className="label text-ink/55 text-center">
            Or stop by &mdash; Cash &amp; Debit at the cart
          </p>
        </motion.div>
      </div>
    </section>
  );
}
