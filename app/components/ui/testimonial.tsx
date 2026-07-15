"use client";

import { motion } from "framer-motion";
import {
  IconQuote,
  IconStarFilled,
  IconSparkles,
  IconLeaf,
  IconChefHat,
  IconHeart,
} from "@tabler/icons-react";
import Image from "next/image";

type Testimonial = {
  img?: string;
  alt?: string;
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    img:"https://images.pexels.com/photos/19397644/pexels-photo-19397644.jpeg",
    alt:"AR",
    name: "Ayesha Rahman",
    role: "Weekend regular",
    quote:
      "The page feels calm, warm, and handcrafted — exactly the kind of place you expect to linger a little longer for coffee and dessert.",
  },
  {
    img:"https://images.pexels.com/photos/7568955/pexels-photo-7568955.jpeg",
    alt:"SH",
    name: "Samiul Hasan",
    role: "Food lover",
    quote:
      "The bento layout is the best part. It makes every card feel like a little story, not just another food tile.",
  },
  {
    img:"https://images.pexels.com/photos/4695779/pexels-photo-4695779.jpeg",
    alt:"NJ",
    name: "Nusrat Jahan",
    role: "Dessert fan",
    quote:
      "It looks premium without trying too hard. The balance between dark cards, soft cards, and imagery feels very intentional.",
  },
  {
    img:"https://images.pexels.com/photos/19397644/pexels-photo-19397644.jpeg",
    alt:"IC",
    name: "Imran Chowdhury",
    role: "Coffee first",
    quote:
      "The page gives the same feeling as a cozy café corner — quiet confidence, clean details, and a lot of personality.",
  },
];

const highlights = [
  { icon: IconLeaf, label: "Fresh ingredients" },
  { icon: IconChefHat, label: "Kitchen-led" },
  { icon: IconSparkles, label: "Designed with care" },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStarFilled key={i} size={14} className="text-amber-400" />
      ))}
    </div>
  );
}

function Avatar({ img, alt }: { img: string, alt:string }) {

  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-black/10 bg-white text-sm font-semibold text-neutral-800 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 overflow-hidden">
      <Image
      alt={alt}
      src={img}
      fill
      className="absolute object-cover"
      />
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="w-full px-4 py-20 md:px-8 lg:px-0 relative">

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              <IconHeart size={12} />
              Words from the table
            </div>

            <h2 className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
              Small stories from people <br /> who stayed a little longer.
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl font-light">
              A testimonial section that feels closer to your café homepage:
              warm, editorial, and lightly curated instead of generic or
              corporate.{" "}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                >
                  <Icon size={14} />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => {
            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.99 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                  mass: 0.9,
                  delay: index * 0.06,
                }}
                className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-100/70 to-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] cursor-pointer dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950 md:p-6 will-change-transform"
              >
                <div className="pointer-events-none absolute inset-0 -left-2 -top-2 opacity-50 [background-size:36px_36px] [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />

                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  animate={{}}
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(16,185,129,0.12), transparent 40%)",
                  }}
                />

                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar img={item.img} alt={item.alt} />
                      <div>
                        <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                          {item.name}
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <Stars />
                    <motion.div
                      className="text-neutral-400/70 dark:text-neutral-500"
                      whileHover={{ rotate: 10, scale: 1.08 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 14,
                      }}
                    >
                      <IconQuote size={20} />
                    </motion.div>
                  </div>

                  <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-[15px]">
                    {item.quote}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-neutral-200/70 pt-4 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                    <span>Authentic guest note</span>
                    <span className="inline-flex items-center gap-1">
                      <IconQuote size={13} className="inline-block" />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-5 rounded-xl border border-neutral-200 bg-white px-5 py-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 md:px-6 md:py-5">
          <div className="flex items-center justify-between">
            {[
              "Feels handcrafted, not templated.",
              "Balances warm visuals with readable copy.",
              "Works as a soft bridge into the footer.",
            ].map((text, index) => (
              <div key={text} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                  <span className="text-sm font-semibold">0{index + 1}</span>
                </div>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
