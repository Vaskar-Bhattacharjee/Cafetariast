"use client";

import { IconChefHat, IconLeaf } from "@tabler/icons-react";
import { Section } from "../section/section";
import { ChefHat, HandHeart, Plant } from "../illustration/illustration";
import Image from "next/image";
import {motion, useInView} from "framer-motion"
import { useRef } from "react";
import { cn } from "@/app/lib/utils";

const bentoImages = [
  { src: "https://images.pexels.com/photos/14164521/pexels-photo-14164521.jpeg", alt: "Chef preparing ingredients", className: "col-span-4 row-span-2" },
  { src: "https://images.pexels.com/photos/7636382/pexels-photo-7636382.jpeg", alt: "Chef plating food", className: "col-span-3 row-span-2" },
  { src: "https://images.pexels.com/photos/19420186/pexels-photo-19420186.jpeg", alt: "Kitchen detail", className: "col-span-3 row-span-2" },
  { src: "https://images.pexels.com/photos/33094644/pexels-photo-33094644.jpeg", alt: "Espresso machine", className: "col-span-4 row-span-2" },
];
const SlowSpinIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{
        rotate: [0, 8, 0, -8, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
      className="origin-center"
    >
      {children}
    </motion.div>
  );
};

const SpicyIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{
        rotate: [0, -10, 6, -4, 0],
        y: [0, -2, 0, 2, 0],
        x: [0, 1, 0, -1, 0],
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }}
      className="origin-center"
    >
      {children}
    </motion.div>
  );
};
const chefInfo = [
  {
    icon: (
      <SlowSpinIcon>
        <ChefHat className="h-8 w-8 text-neutral-700 dark:text-neutral-400" />
      </SlowSpinIcon>
    ),
    heading: "Fresh Daily",
    description: "Sourced locally, made fresh each day.",
  },
  {
    icon: (
      <SpicyIcon>
        <Plant className="h-8 w-8 text-neutral-700 dark:text-neutral-400" />
      </SpicyIcon>
    ),
    heading: "Handcrafted",
    description: "Made by real people with real passion and love",
  },
  {
    icon: (
      <SlowSpinIcon>
        <HandHeart className="h-8 w-8 text-neutral-700 dark:text-neutral-400" />
      </SlowSpinIcon>
    ),
    heading: "Chef Led",
    description: "Crafted with expertise by our chef.",
  },
];

export const Chef = () => {
  return (
    <Section className="w-full max-w-7xl flex flex-col items-center justify-start py-16">
      <div className="w-full flex items-center justify-center gap-6 min-h-[80vh]">
        <BentoGrid />
        <ChefContent />
      </div>
    </Section>
  );
};

const asyncDelays = [0, 0.7, 1.3, 0.4];

const BentoGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="w-[50%] h-[560px] grid grid-cols-7 grid-rows-4 gap-3">
      {bentoImages.map((image, index) => (
        <BentoCard key={index} image={image} index={index} isInView={isInView} />
      ))}
    </div>
  );
};

const BentoCard = ({
  image,
  index,
  isInView,
}: {
  image: (typeof bentoImages)[0];
  index: number;
  isInView: boolean;
}) => {
  return (
    <div
      className={`${image.className} rounded-xl border border-dashed border-neutral-500 dark:border-neutral-500 overflow-hidden relative
      bg-white [--pattern-fg:var(--color-gray-800)]/5 dark:bg-gray-900 dark:[--pattern-fg:var(--color-gray-100)]/10`}
    >
<div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={
          isInView
            ? {
                opacity: [0, 1, 1],
                filter: ["blur(20px)", "blur(20px)", "blur(0px)"],
              }
            : { opacity: 0, filter: "blur(20px)" }
        }
        transition={{
          duration: 1.4,
          delay: asyncDelays[index],
          times: [0, 0.25, 1],
          ease: "easeOut",
        }}
      >
        <Image fill alt={image.alt} src={image.src} className="object-cover" />
      </motion.div>
    </div>
  );
};


const ChefContent = () => (
  <div className="w-[50%] h-[75vh] relative
   bg-transparent [--pattern-fg:var(--color-gray-800)]/5 dark:[--pattern-fg:var(--color-gray-100)]/10">

    <div
        className={cn(
          "absolute -top-10 left-10 right-0 bottom-100 pointer-events-none opacity-50 mask-t-from-50% mask-b-from-50% mask-r-from-50% mask-l-from-50% ",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#52525b_1px,transparent_1px),linear-gradient(to_bottom,#52525b_1px,transparent_1px)]",
        )}
      />

    <div className="w-full h-full flex flex-col items-start justify-start gap-4 px-8 py-8 ">
      <Badge />
      <motion.h3
      initial={{
        y: 20,
        opacity: 0
      }}
      whileInView={{
        opacity: 1,
        y: 0, 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5
      }}
      className="font-inter text-5xl tracking-tight font-medium text-neutral-900 dark:text-neutral-100 z-10">
        Inside Our Kitchen
      </motion.h3>
      <motion.p
      initial ={{
        y: 10
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5
      }}
      
      className="font-inter text-lg text-neutral-600 dark:text-neutral-400 max-w-lg text-left text-balance mb-2">
        A quiet look at the hands, ingredients, and little rituals behind
        every plate and cup we serve.
      </motion.p>
      <ChefInfoRow />
      <ChefQuote />
    </div>
  </div>
);

const ChefInfoRow = () => (
  <motion.div className="py-7 flex justify-center items-center gap-8 border-y border-neutral-200 dark:border-neutral-800">
    {chefInfo.map((item, index) => (
      <motion.div
      initial={{
        y: 20, 
      }}
      whileInView={{
        y:0, 
      }}
      transition={{
        duration: 2,
        delay: index * 0.5
      }}
      key={index} 
      className="flex flex-col items-start justify-center gap-3">
        {item.icon}
        <div className="flex flex-col items-start justify-center gap-1">
          <h2 className="font-inter text-xl font-bold text-neutral-800 dark:text-neutral-200">
            {item.heading}
          </h2>
          <p className="font-inter leading-5 text-neutral-500 max-w-xs text-left text-balance">
            {item.description}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

const ChefQuote = () => (
  <div className="flex items-center justify-between w-full">
    <div className="font-caveat text-2xl leading-tight text-neutral-800 dark:text-neutral-200 max-w-sm">
      <p>&quot;Good food is born from good ingredients and even better hands.&quot;</p>
      <p className="mt-3">— Chef Anjun</p>
    </div>
    <PassionStamp />
  </div>
);

const Badge = () => (
  <div className="flex items-center justify-center gap-4 px-3 py-2 rounded-xl border border-green-500">
    <IconChefHat className="size-5" />
    <p className="font-inter font-medium text-sm">Behind the counter</p>
  </div>
);

const PassionStamp = () => {
  const topText = "· MADE WITH PASSION ·";
  const bottomText = "· SERVED WITH CARE ·";

  return (
    <div className="relative w-30 h-30 rounded-full border border-green-700/40 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 144">
        <path id="top-arc" d="M 20,72 A 52,52 0 0,1 124,72" fill="none" />
        <text fontSize="10" fontFamily="sans-serif" letterSpacing="2" fill="#15803d">
          <textPath href="#top-arc" startOffset="50%" textAnchor="middle">
            {topText}
          </textPath>
        </text>
      </svg>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 144">
        <path id="bottom-arc" d="M 13,65 A 52,62 0 0,0 130,65" fill="none" />
        <text fontSize="10" fontFamily="sans-serif" letterSpacing="2" fill="#15803d">
          <textPath href="#bottom-arc" startOffset="50%" textAnchor="middle">
            {bottomText}
          </textPath>
        </text>
      </svg>
      <IconLeaf size={40} className="text-green-700 " stroke={1.2} />
    </div>
  );
};


