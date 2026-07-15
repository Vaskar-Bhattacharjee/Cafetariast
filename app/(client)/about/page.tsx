
"use client"

import { Section } from "@/app/components/section/section"
import { cn } from "@/app/lib/utils"
import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className={`relative bg-neutral-50 dark:bg-neutral-900 pb-10`}>
            <div className="w-100 h-100 absolute top-0 left-0 z-0 bg-green-600 blur-3xl opacity-5" />

            <Section className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-8 px-4 lg:px-10">
                <div className="flex flex-col items-start justify-center w-full lg:h-[80vh] py-12 lg:py-0">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium font-inter mb-8">Our Story</h1>
                    <div className="flex flex-col items-start justify-center">
                        <Ourstoryparagraph paragraph="We are a team of passionate individuals who love to create amazing products. Our mission is to provide the best possible experience for our customers." />
                        <Ourstoryparagraph paragraph="We are a team of passionate individuals who love to create amazing products. Our mission is to provide the best possible experience for our customers." />
                        <Ourstoryparagraph 
                        paragraph="We are a team of passionate individuals who love to create amazing products. Our mission is to provide the best possible experience for our customers."
                        className="hidden lg:block "
                         />
                    </div>
                    <button className="mt-4 px-6 py-2 bg-primary text-black dark:text-white rounded-lg hover:bg-primary/90 transition-colors">
                        Learn More
                    </button>
                </div>
                <div className="flex flex-col items-start justify-center w-full lg:w-auto">
                    <div className="relative w-full max-w-[500px] aspect-square lg:w-[500px] lg:h-[500px] rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.pexels.com/photos/14164521/pexels-photo-14164521.jpeg"
                            alt="About"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 rounded-2xl ring-8 ring-inset ring-white/20 pointer-events-none" />
                    </div>
                </div>
            </Section>
            <div className="relative w-full mt-20 mb-20 max-w-6xl mx-auto h-auto lg:h-130 overflow-hidden divide-x divide-neutral-300 dark:divide-neutral-800 flex items-center justify-between
            border border-neutral-200 rounded-3xl dark:border-neutral-700 py-4 lg:py-0 ">
                <div className="absolute inset-0">
                    <div className="relative h-full w-full">
                        <div className="absolute top-0 -right-100 h-293.75 w-180 rounded-full bg-[#27251F] blur-[287px] hidden dark:block"></div>
                    </div>
                </div>

<div className="w-full lg:w-[43%] lg:ml-4 rounded-t-3xl lg:rounded-t-none lg:rounded-tl-xl lg:rounded-bl-xl overflow-hidden z-10 h-64 sm:h-80 lg:h-120 relative">
                    <Image
                        src="https://images.unsplash.com/photo-1568658173325-c7b8a11d5666?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="About"
                        fill
                        className="object-cover"
                    />
                </div>
<div className="w-full lg:w-[57%] lg:h-120 relative">

<div className="relative p-6 sm:p-8 h-full flex flex-col justify-center gap-4 z-20 ">
                        <Grid />
<h2 className="text-5xl font-medium font-inter text-neutral-900 dark:text-white z-10">
                            Founder's Office
                        </h2>
<p className="text-base sm:text-[18px] text-neutral-600 dark:text-neutral-400 max-w-lg text-left mt-4 z-10">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, commodi, recusandae deserunt debitis repudiandae esse provident quae tenetur, consequuntur aliquid quidem
                        </p>
                        <FounderInfo />
                        <div className="flex items-center justify-between gap-4 lg:-mb-16 z-10">
                            <FounderImage src="https://images.unsplash.com/photo-1553484771-0a615f264d58?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <FounderImage src="https://images.unsplash.com/photo-1533901567451-7a6e68d6cd8f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rm91bmRlcnN8ZW58MHx8MHx8fDA%3D" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Grid = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                "mask-r-from-50% mask-l-from-50% mask-t-from-50% mask-b-from-50% -translate-x-20"
            )}
        />
    )
}

const FounderImage = ({ src }: { src: string }) => {
    return (
        <div className="w-70 h-42 rounded-xl grayscale overflow-hidden bg-neutral-200 dark:bg-neutral-800 relative">
            <Image
                src={src}
                alt="Founder"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-4 lg:ring-8 ring-inset ring-white/20 pointer-events-none" />
        </div>
    )
}

const FounderInfo = () => {
    return (
        <div className="flex w-full items-center justify-between mt-2 z-10">
            <div className="flex flex-col items-start justify-center gap-0">
                <h2 className="text-lg font-semibold font-inter text-neutral-900 dark:text-white">John Doe</h2>
                <p className="text-md font-inter tracking-tight font-medium text-neutral-600 dark:text-neutral-400">Founder and CEO</p>
            </div>
            <div className="flex items-center justify-center gap-4">
                <IconBrandX />
                <IconBrandLinkedin />
            </div>
        </div>
    )
}

const Ourstoryparagraph = ({ paragraph, className }: { paragraph: string, className?: string }) => {
    return (
        <p className={cn("text-lg text-neutral-600 dark:text-neutral-400 max-w-xl text-left -tracking-xs font-inter mt-4", className)}>
            {paragraph}
        </p>
    )
}