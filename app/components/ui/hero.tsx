  "use client";
  import Image from "next/image";
  import { Section } from "../section/section";
  import {
    IconClock,
    IconMapPin,
    IconArrowRight,
    IconLeaf,
  } from "@tabler/icons-react";
  import { cn } from "@/app/lib/utils";
  import { motion } from "framer-motion";
import { HeroImage } from "../illustration/illustration";

  export const Hero = () => {
    return (
      <Section className="relative lg:w-full lg:max-w-9xl h-[90vh] md:w-[calc(100%-6rem)] overflow-hidden flex justify-between gap-4 bg-transparent">
        
      <div className="absolute inset-0 -right-328.75 hidden dark:block">
        <div className="absolute top-0 right-[387.07px] h-293.75 w-[720.16px] rounded-full bg-[#27251F] blur-[287.15px]"></div>
        <div className="absolute top-[284.85px] right-0 h-[502.50px] w-[488.15px] rounded-full bg-neutral-300 blur-[215.36px]"></div>
      </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className={cn(
            "absolute top-0 left-0 right-0 bottom-100 pointer-events-none opacity-50 mask-t-from-50% mask-b-from-50% mask-r-from-50% mask-l-from-50% ",
            "[background-size:50px_50px]",
            "[background-image:linear-gradient(to_right,var(--color-neutral-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-200)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)]",
          )}
        />
        <div className="relative z-10 flex flex-col justify-center flex-1 px-10 py-16 gap-7">
          <div
            className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase"
            style={{
              background: "var(--color-neutral-100)",
              color: "var(--color-neutral-900)",
              borderColor: "rgba(107,158,120,0.3)",
            }}
          >
            <IconLeaf size={18} stroke={1.7} />
            Your Neighbourhood Café
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mt-4 max-w-4xl text-left text-3xl font-medium tracking-tight text-balance text-neutral-950 dark:text-white sm:text-5xl md:text-7xl xl:text-7xl"
          >
            Savor The Taste, Enjoy The Moment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-inter text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl antialiased tracking-wide "
          >
            From handcrafted coffee and freshly prepared meals to delicious
            desserts and signature drinks, we create a welcoming space where great
            flavors, meaningful conversations, and memorable moments come together
            every day.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-5"
          >
            <a
              href="#menu"
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-md font-semibold text-white transition-all hover:-translate-y-0.5 bg-gradient-to-r from-green-900 to-green-700 font-inter"
            >
              Explore Menu
              <IconArrowRight size={15} stroke={2.5} />
            </a>
          </motion.div>

          {/* Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-7 "
          >
            <div className="flex items-center gap-2">
              <IconClock
                size={20}
                className="text-black dark:text-white"
                stroke={1.8}
              />
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Open Daily
                </p>
                <p className="text-xs" style={{ color: "#6B6B6B" }}>
                  7:30 AM – 9:30 PM
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IconMapPin
                size={20}
                className="text-black dark:text-white"
                stroke={1.8}
              />
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  No. 04
                </p>
                <p className="text-xs" style={{ color: "#6B6B6B" }}>
                  Greenwood Lane, London
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative flex-1 mt-10">
          
            <HeroImage className="text-neutral-600 dark:text-neutral-400 z-10"/>
            {/* <Image
              src="/hero8.png"
              alt="Coffee at Fern & Brew"
              fill
              priority
              className=" object-contain rounded-lg "
            /> */}
          
        </div>
      </Section>
    );
  };

