"use client";

const items = [
  "Kimchi Pancake",
  "Fish Cake Soup",
  "Custard Waffle",
  "Red Bean Waffle",
  "Beef Dumpling",
  "Chicken Breast",
  "Rice Cake",
  "Kim-mari",
  "Baby Crabs",
  "5323 Yonge St.",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-ink/25 overflow-hidden bg-cream/40">
      <div className="flex marquee-track py-6 whitespace-nowrap">
        {row.map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-6 serif italic text-2xl sm:text-3xl text-ink"
          >
            {it}
            <span className="text-ink/60 not-italic text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
