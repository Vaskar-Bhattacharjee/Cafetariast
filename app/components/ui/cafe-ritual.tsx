"use client";

import  { BurgerSketch, DrinkSketch } from "../illustration/illustration";
import { Section } from "../section/section";

const points = [
  {
    stage: "Stage one",
    meta: "Before opening",
    title: "Fresh every morning",
    text: "Beans, desserts, and small bites are prepared with a steady rhythm from the start of the day.",
  },
  {
    stage: "Stage two",
    meta: "Mid-morning",
    title: "Brewed with patience",
    text: "Each cup is made with care, from the first pour to the last sip.",
  },
  {
    stage: "Stage three",
    meta: "At the counter",
    title: "Served with care",
    text: "The experience stays simple, soft, and welcoming from first sip to last bite.",
  },
];

export default function CafeRitualSection() {
  return (
    <Section className="py-24 md:py-32 relative">
       <div className="absolute top-0 -left-110 h-200 w-[720.16px] rounded-full bg-green-600 blur-3xl opacity-5"></div>

      <div className="absolute inset-0 -left-278.75 hidden dark:block">
        <div className="absolute top-0 left-40 h-293.75 w-[720.16px] rounded-full bg-green-600 blur-xl"></div>
        {/* <div className="absolute top-[284.85px] left-0 h-[502.50px] w-[488.15px] rounded-full bg-neutral-600 blur-[215.36px]"></div> */}
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left — two-tone editorial headline, the hierarchy lives in color, not size */}
          <div className="lg:col-span-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#6b9e78]" />
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                Behind the cup
              </p>
            </div>
            <h2 className="max-w-xl leading-[1.1] tracking-tight">
              <span className="text-neutral-950 dark:text-white font-inter text-5xl font-medium">The ritual</span>
              <br />
              <span className="text-neutral-400 dark:text-neutral-500 font-inter text-5xl font-medium">
                behind every cup
              </span>
            </h2>
            <p className="mt-10 max-w-lg text-lg font-inter font-normal leading-relaxed text-neutral-500 dark:text-neutral-400 text-balance">
              A café feels premium when it is calm, precise, and intentional.
              This section keeps the tone quiet while still showing warmth,
              care, and attention to detail.
            </p>
          <div className="flex items-center justify-start mt-0 -space-x-20">
            <div className="relative w-[320px] h-90 -ml-8">
              <BurgerSketch  className="w-full h-full  text-neutral-700 dark:text-neutral-300 cursor-pointer transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="relative w-[320px] h-80 -mt-15">
              <DrinkSketch className="w-full h-full text-neutral-900 dark:text-neutral-300 cursor-pointer transition-transform duration-300 hover:scale-105" />
            </div>
          </div>

          </div>

          {/* Right — one rule, tracked labels, generous space. No cards, no icons. */}
          <div className="lg:col-span-6">
            <div className="relative pl-8 md:pl-10">
              <div className="absolute inset-y-1 left-0 w-px bg-linear-to-b from-[#6b9e78] via-[#6b9e78]/40 to-transparent" />
              <div className=" flex flex-col divide-y divide-dashed divide-neutral-500">
                {points.map((item) => (
                  <div key={item.title} className="py-10 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-500 ">
                      <span>{item.stage}</span>
                      <span className="text-neutral-300 dark:text-neutral-700">/</span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#6b9e78]" />
                        {item.meta}
                      </span>
                    </div>
                    <h3 className="mt-3 text-3xl font-medium tracking-normal text-neutral-800 dark:text-neutral-200">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-[17px] font-inter font-normal leading-relaxed text-neutral-500 dark:text-neutral-400 ">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}