"use client";
import Image from "next/image";
import { Section } from "../section/section";
import { IconChevronRightFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

const favourites = [
  {
    title: "Cappuccino Art",
    description:
      "A rich espresso topped with silky steamed milk and delicate latte art, crafted to bring comfort with every warm sip.",
    image:
      "https://images.pexels.com/photos/36851643/pexels-photo-36851643.jpeg",
  },
  {
    title: "Chocolate Lava Cake",
    description:
      "A soft, decadent chocolate cake with a warm molten center, served as the perfect sweet companion to your coffee.",
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
  },
  {
    title: "Classic Croissant",
    description:
      "Freshly baked with a buttery, flaky texture and a golden crust, making it a delightful choice for any time of the day.",
    image:
      "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg",
  },
];

export const Favourites = () => {
  return (
    <Section className="flex min-h-[80vh] flex-col items-center justify-start py-16">
      <div className="w-full px-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between text-center">
        <div className="flex items-center justify-between gap-2 w-full ">
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="pb-4 text-5xl font-medium leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-100">
            Our Favourites
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 -mt-6 font-light">
            A few comforting classics our guests keep coming back for
          </p>
        </div>

        <div className="flex items-center justify-end gap-2 w-full ">
        <p className="font-normal cursor-pointer text-neutral-900 dark:text-neutral-300
        text-xl  tracking-wider underline underline-offset-4 mt-4">
            view collection
        </p>
        <IconChevronRightFilled size={16} stroke={2.5} className="ml-1 mt-4" />
        </div>
        </div>

          <div className="mt-10 w-full">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favourites.map((item, index) => (
                <motion.div
              
               
                  key={item.title}
                  className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-col gap-2 px-6 py-10 text-left">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-inter leading-tight">
                      {item.title}
                    </h3>
                    <p className="leading-6 text-neutral-600 font-normal font-inter dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};