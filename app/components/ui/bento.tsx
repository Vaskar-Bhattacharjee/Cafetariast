"use client";
import Image from "next/image";
import { Section } from "../section/section";
import { cn } from "@/app/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const POSITIONS = [
  { x: 16, y: -4, zIndex: 1 }, 
  { x: 52, y: 36, zIndex: 2 }, 
  { x: 88, y: 80, zIndex: 3 }, 
];
export const BentoFeatures = [
  {
    title: "Cozy Ambiance",
    description:
      "Our café offers a warm and inviting atmosphere, perfect for enjoying your meal and relaxing with friends or family.",
    icon: "chef",
  },
  {
    title: "Warm Hospitality",
    description:
      "A welcoming environment where great food, comfort, and meaningful moments come together.",
    icon: "users",
  },
];

export const Bento = () => {
  return (
    <Section className="flex flex-col items-center justify-start h-[120vh] pt-12 md:pt-18 lg:pt-32">
      <div className="flex flex-col justify-center items-center gap-1.5 w-full pb-8">
        <h2 className="text-6xl font-inter font-medium  tracking-tight text-neutral-900 dark:text-neutral-100 pb-6">
          Every Sip Tells a Story
        </h2>
      </div>
      <div className="w-full h-60 bg-transparent grid grid-cols-1 md:grid-cols-19 gap-4 ">
        <div className="border h-full border-gray-500 rounded-t-3xl rounded-b-xl p-3 pt-3 col-span-6 bg-neutral-900">
          <div className="relative rounded-2xl overflow-hidden h-85 w-full mask-b-from-70%">
            <Image
              src="https://images.pexels.com/photos/17243181/pexels-photo-17243181.jpeg"
              alt="Image 1"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative h-70 mt-7 flex flex-col justify-center gap-4">
            <div
              className={cn(
                "absolute inset-0 opacity-50 rounded-lg mask-r-from-80% mask-b-from-80% mask-l-from-50% mask-t-from-90%",
                "[background-size:20px_20px]",
                "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                "dark:[background-image:radial-gradient(#404040_2px,transparent_2px)]",
              )}
            />
            <div className="flex flex-col gap-4 items-start mt-15">
              {BentoFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start pl-4 gap-1"
                >
                  <h2 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-balance leading-tight text-gray-400 mask-r-from-50% max-w-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
              <button
                className="bg-linear-to-r from-green-900 to-green-700 text-white font-medium px-4 py-2 rounded-md hover:bg-green-800 transition-colors duration-300 
            flex items-center justify-center gap-3 cursor-pointer w-80 ml-4 mt-5 z-10"
              >
                Visit Us
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-lg col-span-13 grid grid-cols-5 grid-rows-2 gap-4">
          <div className="col-span-5 grid grid-cols-5 gap-4 ">
            <div
              className="col-span-2 flex flex-col rounded-xl overflow-hidden relative"
              style={{ background: "#1C3A2A" }}
            >
              {/* Image */}
              <div className="relative w-full h-40 mask-b-from-40% overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/15801080/pexels-photo-15801080.jpeg"
                  alt="Matcha Coconut Affogato"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
               
                <div
                  className="absolute bottom-0 left-0 right-0 h-12"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, #1C3A2A)",
                  }}
                />
              </div>

              <div className="flex flex-col gap-3 p-5 flex-1">
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase"
                  style={{ color: "#6B9E78" }}
                >
                  Today&apos;s Special
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold leading-tight text-white">
                  Matcha Coconut Affogato
                </h2>
                <p
                  className="font-inter leading-tight"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Creamy matcha, coconut ice cream, and a shot of espresso
                  poured over.
                </p>
                <a
                  href="#menu"
                  className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-white w-fit"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.4)",
                    paddingBottom: "1px",
                  }}
                >
                  Try it now
                  <IconArrowRight size={14} stroke={2.5} />
                </a>
              </div>
            </div>

            <div className="relative col-span-3 flex flex-col overflow-hidden rounded-xl border border-gray-300 dark:border-gray-500 bg-white dark:bg-black">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-100/70 blur-3xl dark:bg-emerald-500/70" />
              <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-orange-100/70 blur-3xl dark:bg-orange-900/70" />
              <Grid
                className=" right-0 top-0 left-60 bottom-20 mask-l-from-50%
              mask-b-from-50%"
              />
              <div className="relative flex h-full flex-col justify-center gap-2 p-6">
                <div className="space-y-3">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700 mt-8">
                    Signature Pick
                  </span>

                  <div className="space-y-3">
                    <h2
                      className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100 pt-2
                    mask-r-from-40%"
                    >
                      Crafted for every craving.
                    </h2>

                    <p className="max-w-xs font-inter leading-relaxed text-neutral-600 dark:text-neutral-400 mt-3 mask-r-from-90%">
                      From coffee to comfort food, every order is made with
                      care, warmth, and attention to the little details that
                      matter.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-10">
                  <div className="flex items-center gap-2 text-sm font-inter font-medium text-neutral-700">
                    <Calendar />
                    <p className="text-sm font-inter font-medium tracking-wide text-neutral-700 dark:text-neutral-300">
                      Open daily, 8AM–10PM
                    </p>
                  </div>

                  <a
                    href="#menu"
                    className="inline-flex items-center gap-2 rounded-xl border border-neutral-500 bg-neutral-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    Explore
                    <IconArrowRight size={14} stroke={2.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 grid grid-cols-5 gap-4 h-full">
            <Overlap />
            <div className="flex flex-col items-center justify-start gap-4 border border-gray-300 dark:border-gray-500  col-span-2  overflow-hidden rounded-2xl">
              <div className="relative h-50 w-full opacity-90 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/8250336/pexels-photo-8250336.jpeg"
                  alt="Matcha Coconut Affogato"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative flex flex-col gap-2 items-start px-4  [--pattern-fg:var(--color-gray-950)]/5  dark:[--pattern-fg:var(--color-gray-950)]/7">
                <div className="absolute inset-0 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:18px_18px] bg-fixed mask-r-from-80% mask-b-from-80% mask-l-from-80% mask-t-from-80%"></div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 ">
                  Avocado Toast with Poached Egg
                </h2>
                <p className="font-inter text-left leading-tighter text-gray-500 mask-r-from-80% max-w-2xl">
                  Creamy avocado, perfectly poached egg, and a sprinkle of chili
                  flakes on toasted sourdough.
                </p>
                <a
                  href="#menu"
                  className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 w-fit border-b border-gray-500 pb-1 z-10"
                >
                  Try it now
                  <IconArrowRight size={14} stroke={2.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Overlap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const [order, setOrder] = useState([0, 1, 2]); 
  const [flipping, setFlipping] = useState<number | null>(null);
  const hasStarted = useRef(false);

useEffect(() => {
  if (!isInView || isHovered) return;

  const interval = setInterval(() => {
    setFlipping((prev) => order[2]);

    setTimeout(() => {
      setOrder((prev) => {
        const [back, mid, front] = prev;
        return [mid, front, back];
      });
      setFlipping(null);
    }, 400);
  }, 2500);

  return () => clearInterval(interval);
}, [isInView, isHovered, order]);

  return (
    <div className="relative border border-gray-300 dark:border-gray-500 col-span-3 rounded-xl p-4 overflow-hidden">
      <GridPattern className="absolute left-50 top-0 h-90" />
      <h2 className="text-xl font-inter font-bold text-gray-900 dark:text-gray-100">
        Cafe Premium Offer
      </h2>
      <p className="text-md font-inter text-gray-600 dark:text-gray-400 mt-3 leading-relaxed text-balance max-w-md">
        Skip the line, sip the finest. Priority service, exclusive menu items,
        and personalized perks..
      </p>
      <div
        ref={ref}
        className="relative mt-6 h-53 w-full flex items-center justify-center"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {order.map((cardIndex, posIndex) => {
          const card = CARDS[cardIndex];
          const pos = POSITIONS[posIndex];
          const isFrontCard = posIndex === 2;
          const isCurrentlyFlipping = flipping === cardIndex;

          return (
            <motion.div
              key={card.id}
              className="absolute top-0 left-10"
              initial={{ x: 0, y: 0, zIndex: 3 }}
              animate={{
                x: isInView ? pos.x : 0,
                y: isInView ? pos.y : 0,
                zIndex: pos.zIndex,
                rotateY: isCurrentlyFlipping ? 90 : 0,
                scale: isCurrentlyFlipping ? 0.95 : 1,
              }}
              transition={{
                x: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                y: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                rotateY: { duration: 0.4, ease: "easeIn" },
                scale: { duration: 0.4 },
                zIndex: { delay: 0.4 },
              }}
            >
              <OverlapCards
                icon={card.icon}
                heading={card.heading}
                description={card.description}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const OverlapCards = ({
  icon,
  heading,
  description,
  className,
}: {
  icon: React.ReactNode;
  heading: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "border border-gray-300 dark:border-gray-600 bg-[radial-gradient(ellipse_at_top_right,_#d1fae5_0%,_#ffffff_65%)] dark:bg-[radial-gradient(ellipse_at_top_right,_#1f2937_0%,_#111827_65%)] rounded-2xl p-4 absolute",
        className,
      )}
    >
      <div className="flex items-start justify-start">
        {icon}
        <div className="ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-300">{heading}</h2>
          <p className="text-sm font-inter text-gray-500 mt-2 leading-relaxed text-balance w-60">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Grid = ({ className }: { className?: string }) => {
  return (
<div
  className={cn(
    "absolute inset-0 z-10 opacity-40",
    "[background-size:40px_40px]",
    "[background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)]",
    "dark:[background-image:linear-gradient(to_right,#52525b_1px,transparent_1px),linear-gradient(to_bottom,#52525b_1px,transparent_1px)]",
    className,
  )}
/>
  );
};
export const Calendar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-week"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h16" />
      <path d="M7 14h.013" />
      <path d="M10.01 14h.005" />
      <path d="M13.01 14h.005" />
      <path d="M16.015 14h.005" />
      <path d="M13.015 17h.005" />
      <path d="M7.01 17h.005" />
      <path d="M10.01 17h.005" />
    </svg>
  );
};

const CardSVG1 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
      <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415" />
      <path d="M16 5l3 3" />
    </svg>
  );
};
const CardSVG2 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
      <path d="M15 12h-6" />
      <path d="M12 9v6" />
    </svg>
  );
};
const CardSVG3 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
      <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
      <path d="M12 17v1m0 -8v1" />
    </svg>
  );
};
const CARDS = [
  {
    id: "priority",
    icon: <CardSVG1 />,
    heading: "Priority Service",
    description:
      "Enjoy expedited order processing and priority seating for a seamless cafe experience.",
  },
  {
    id: "perks",
    icon: <CardSVG3 />,
    heading: "Personalized Perks",
    description:
      "Receive tailored rewards, exclusive discounts, and special offers designed just for you.",
  },
  {
    id: "menu",
    icon: <CardSVG2 />,
    heading: "Exclusive Menu",
    description:
      "Indulge in unique, members-only menu items crafted to delight your taste buds.",
  },
];



const GridPattern: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="497"
      height="346"
      viewBox="0 0 497 346"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_2637_2853"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="497"
        height="346"
      >
        <rect width="496.8" height="345.6" fill="url(#paint0_linear_2637_2853)" />
      </mask>
      <g mask="url(#mask0_2637_2853)">
        <mask
          id="mask1_2637_2853"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="497"
          height="346"
        >
          <rect width="496.8" height="345.6" fill="url(#paint1_linear_2637_2853)" />
        </mask>
        <g mask="url(#mask1_2637_2853)">
          <rect x="105.117" y="28.7969" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" opacity="1" />
          <g opacity="0.6" filter="url(#filter0_d_2637_2853)">
            <rect x="249.117" y="28.7969" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" shapeRendering="crispEdges" opacity="1" />
          </g>
          <g opacity="0.6" filter="url(#filter1_di_2637_2853)">
            <rect x="177.117" y="100.797" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" shapeRendering="crispEdges" opacity="1" />
          </g>
          <rect x="249.117" y="100.797" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" opacity="0.45" />
          <rect x="321.117" y="100.797" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" opacity="0.3" />
          <rect x="105.117" y="172.797" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" opacity="0.6" />
          <rect x="177.117" y="172.797" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" opacity="0.45" />
          <g opacity="0.3" filter="url(#filter2_d_2637_2853)">
            <rect x="249.117" y="172.797" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" shapeRendering="crispEdges" opacity="1" />
          </g>
          <rect x="105.117" y="100.797" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" opacity="0.3" />
          <rect x="177.117" y="28.7969" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" opacity="0.3" />
          <rect x="321.117" y="172.797" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" opacity="0.15" />
          <rect x="177.117" y="244.797" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" opacity="0.3" />
          <rect x="249.117" y="244.797" width="72" height="72" fill="#F0C17B" fillOpacity="0.5" opacity="0.15" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d_2637_2853" x="245.117" y="28.7969" width="80" height="80" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.792157 0 0 0 0 0.713726 0 0 0 0 0.596078 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2637_2853" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2637_2853" opacity="1" result="shape" />
        </filter>
        <filter id="filter1_di_2637_2853" x="167.117" y="94.7969" width="92" height="92" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.790264 0 0 0 0 0.712473 0 0 0 0 0.595785 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2637_2853" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2637_2853" opacity="1" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2637_2853" />
        </filter>
        <filter id="filter2_d_2637_2853" x="245.117" y="172.797" width="80" height="80" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2637_2853" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2637_2853" opacity="1" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_2637_2853" x1="100.2" y1="172.8" x2="402.48" y2="172.8" gradientUnits="userSpaceOnUse">
          <stop stopOpacity="0" />
          <stop offset="0.354383" />
          <stop offset="0.79624" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_2637_2853" x1="249.12" y1="23.76" x2="248.4" y2="327" gradientUnits="userSpaceOnUse">
          <stop stopOpacity="0" />
          <stop offset="0.397032" />
          <stop offset="0.70269" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GridPattern;