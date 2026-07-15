"use client";

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
        text: "Every cup is made to feel calm, warm, and quietly detailed.",
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
        <Section className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
                    {/* Left — two-tone editorial headline, the hierarchy lives in color, not size */}
                    <div className="lg:col-span-6">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#6b9e78]" />
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                                Behind the cup
                            </p>
                        </div>
                        <h2 className="max-w-xs text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl">
                            <span className="text-neutral-950 dark:text-white font-inter font-semibold">The ritual</span>
                            <br />
                            <span className="text-neutral-400 dark:text-neutral-500 font-inter font-normal">
                                behind every cup
                            </span>
                        </h2>
                        <p className="mt-6 max-w-xs text-lg font-inter font-normal leading-relaxed text-neutral-500 dark:text-neutral-400">
                            A café feels premium when it is calm, precise, and intentional.
                            This section keeps the tone quiet while still showing warmth,
                            care, and attention to detail.
                        </p>
                    </div>

                    {/* Right — one rule, tracked labels, generous space. No cards, no icons. */}
                    <div className="lg:col-span-6">
                        <div className="relative pl-8 md:pl-10">
                            <div className="absolute inset-y-1 left-0 w-px bg-[#6b9e78]" />
                            <div className="space-y-16">
                                {points.map((item) => (
                                    <div key={item.title}>
                                        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-500">
                                            <span>{item.stage}</span>
                                            <span className="text-neutral-300 dark:text-neutral-700">/</span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#6b9e78]" />
                                                {item.meta}
                                            </span>
                                        </div>
                                        <h3 className="mt-3 text-4xl font-semibold font-inter tracking-tight text-red-950 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 max-w-lg text-[17px] font-inter font-normal leading-relaxed text-neutral-500 dark:text-neutral-400">
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