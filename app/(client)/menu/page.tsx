"use client"

import { useEffect, useRef, useState } from "react"
import { Section } from "@/app/components/section/section"
import Image from "next/image"
import { IconXFilled } from "@tabler/icons-react"
import { AnimatePresence, motion } from "framer-motion"

const menu = [
    {
        id: "Coffea",
        label: "Coffea",
        number: "01",
        items: [
            {
                name: "Espresso",
                description: "Single origin, dark and direct",
                price: "2.80",
                image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1200&auto=format&fit=crop",
                alt: "Espresso"
            },
            {
                name: "Americano",
                description: "Pulled long with hot water",
                price: "3.20",
                image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW5vJTIwY29mZmVlfGVufDB8fDB8fHww",
                alt: "Americano"
            },
            {
                name: "Flat White",
                description: "Double ristretto, silky microfoam",
                price: "3.80",
                image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=1200&auto=format&fit=crop",
                alt: "Flat White"
            },
            {
                name: "Cappuccino",
                description: "Equal parts espresso, foam, and patience",
                price: "3.60",
                image: "https://images.unsplash.com/photo-1624528201496-121b78e2db93?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2FwdWNjaW5vJTIwY29mZmV8ZW58MHx8MHx8fDA%3D",
                alt: "Cappuccino"
            },
            {
                name: "Latte",
                description: "Smooth and familiar, whole milk",
                price: "3.80",
                image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",
                alt: "Latte"
            },
            {
                name: "Pour Over",
                description: "Filter coffee, brewed to order",
                price: "4.50",
                image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
                alt: "Pour Over"
            },
        ],
    },
    {
        id: "drinks",
        label: "Cold Drinks",
        number: "02",
        items: [
            {
                name: "Iced Latte",
                description: "Cold milk, double shot, served simply",
                price: "4.00",
                image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
                alt: "Iced Latte"
            },
            {
                name: "Cold Brew",
                description: "Steeped for 16 hours, served over ice",
                price: "4.20",
                image: "https://images.unsplash.com/photo-1565990436705-4bc429d16511?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjBicmV3JTIwY29mZmVlfGVufDB8fDB8fHww",
                alt: "Cold Brew"
            },
            {
                name: "Iced Matcha",
                description: "Ceremonial grade, oat milk",
                price: "4.50",
                image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1200&auto=format&fit=crop",
                alt: "Iced Matcha"
            },
            {
                name: "Sparkling Water",
                description: "San Pellegrino, always cold",
                price: "2.00",
                image: "https://images.unsplash.com/photo-1548780607-46c78f38182d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwYXJrbGluZyUyMHdhdGVyfGVufDB8fDB8fHww",
                alt: "Sparkling Water"
            },
        ],
    },
    {
        id: "pastries",
        label: "Pastries",
        number: "03",
        items: [
            {
                name: "Croissant",
                description: "Butter layers, baked fresh before opening",
                price: "3.50",
                image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
                alt: "Croissant"
            },
            {
                name: "Banana Bread",
                description: "Dense, moist, a little too easy to finish",
                price: "3.20",
                image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=1200&auto=format&fit=crop",
                alt: "Banana Bread"
            },
            {
                name: "Almond Tart",
                description: "Short crust, frangipane, toasted flake",
                price: "4.20",
                image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1200&auto=format&fit=crop",
                alt: "Almond Tart"
            },
            {
                name: "Cinnamon Roll",
                description: "Pulled from the oven at 8 am",
                price: "3.80",
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
                alt: "Cinnamon Roll"
            },
        ],
    },
    {
        id: "food",
        label: "Food",
        number: "04",
        items: [
            {
                name: "Avocado Toast",
                description: "Sourdough, chilli flakes, lemon",
                price: "7.50",
                image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop",
                alt: "Avocado Toast"
            },
            {
                name: "Granola Bowl",
                description: "House granola, yogurt, seasonal fruit",
                price: "6.80",
                image: "https://images.unsplash.com/photo-1517881917430-e70dfb3610aa?q=80&w=1200&auto=format&fit=crop",
                alt: "Granola Bowl"
            },
            {
                name: "Egg on Toast",
                description: "Free range, sourdough, sea salt",
                price: "6.50",
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
                alt: "Egg on Toast"
            },
            {
                name: "Cheese Toastie",
                description: "Three cheese, slow-toasted",
                price: "5.80",
                image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop",
                alt: "Cheese Toastie"
            },
        ],
    },
]

export default function MenuPage() {
    const [active, setActive] = useState(menu[0].id)
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
    const [selectedItem, setSelectedItem] = useState<{
        name: string
        x: number
        y: number
    } | null>(null)
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
                setSelectedItem(null)
            }
        }

        if (selectedItem) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [selectedItem])

    console.log(selectedItem)
    const ItemInfo = (selectedItemId: string) => {
        const item = menu.flatMap(section => section.items).find(item => item.name === selectedItemId)
        return item
    }

    const scrollTo = (id: string) => {
        setActive(id)
        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className={`relative bg-neutral-50 dark:bg-neutral-900`}>
            <AnimatePresence>

                {selectedItem && (
                    <>
                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={() => setSelectedItem(null)}
                        />

                        <motion.div
                            key="modal"
                            ref={boxRef}
                            className="fixed z-50 w-full max-w-[380px] overflow-hidden rounded-[20px] bg-[#111110] border border-white/7 shadow-2xl"
                            style={{
                                top: "50%",
                                left: "50%",
                                x: "-50%",
                                y: "-50%",
                                transformOrigin: `calc(${selectedItem.x}px - 50vw + 190px) calc(${selectedItem.y}px - 50vh + 220px)`,
                            }}
                            initial={{ opacity: 0, scale: 0.08 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.08 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.2, 1, 0.8, 1]
                            }}
                        >
                            <div className="relative h-[300px] overflow-hidden">
                                <Image
                                    src={ItemInfo(selectedItem.name)?.image || "/placeholder.svg"}
                                    alt={ItemInfo(selectedItem.name)?.name || "Item"}
                                    fill
                                    className="object-cover scale-[1.04]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-[#111110]" />

                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-3 right-3 w-[30px] h-[30px] rounded-full bg-black/50 border border-white/12 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors"
                                    aria-label="Close"
                                >
                                    <IconXFilled className="w-3.5 h-3.5 text-white/80" />
                                </button>

                                <div className="absolute top-3 left-3.5">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6b9e78] bg-neutral-900/80 border border-[#6b9e78]/25 px-2.5 py-1 rounded-full">
                                        {menu.find(cat => cat.items.some(i => i.name === selectedItem.name))?.label}
                                    </span>
                                </div>
                            </div>

                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-start justify-between gap-3 mb-2.5">
                                    <h2 className="font-inter text-[22px] font-semibold tracking-tight text-white leading-tight">
                                        {ItemInfo(selectedItem.name)?.name}
                                    </h2>
                                    <span className="font-inter text-[22px] font-semibold tracking-tight text-white shrink-0 pt-px">
                                        £{ItemInfo(selectedItem.name)?.price}
                                    </span>
                                </div>

                                <p className="text-[13.5px] text-white/45 leading-relaxed tracking-wide mb-5">
                                    {ItemInfo(selectedItem.name)?.description}
                                </p>

                                <div className="border-t border-white/7 pt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#6b9e78] shrink-0" />
                                        <span className="text-xs text-white/30">Available daily</span>
                                    </div>
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/20">
                                        Cafetariast
                                    </span>
                                </div>
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <BGNoise />
            <HeadingSection />
            <Menubar active={active} scrollTo={scrollTo} />
            <ProductList sectionRefs={sectionRefs} setSelectedItem={setSelectedItem} />


        </div>
    )
}

const BGNoise = () => {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-[#6b9e78] opacity-10 blur-[180px] dark:opacity-15"
        />
    )
}

const HeadingSection = () => {
    return (
        <Section className="pb-12 pt-24 md:pb-16 md:pt-32">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#6b9e78]" />
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
                        Cafetariast
                    </p>
                </div>
                <h1 className="max-w-4xl text-left text-4xl font-medium tracking-tight text-balance text-neutral-950 dark:text-white sm:text-5xl md:text-6xl xl:text-6xl">
                    Menu
                </h1>
                <p className="text-lg font-inter text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl antialiased tracking-wide ">
                    Made fresh daily. Served with care.
                </p>
            </div>
        </Section>
    )
}

const Menubar = ({ active, scrollTo }: { active: string; scrollTo: (id: string) => void }) => {
    return (
            <div className="sticky top-0 z-10 border-b border-neutral-200 bg-neutral-50/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="flex items-center gap-1 overflow-x-auto py-4">
                        {menu.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => scrollTo(cat.id)}
                                className={`shrink-0 cursor-pointer rounded-md px-4 py-1.5 font-inter text-lg font-medium transition-colors duration-150 ${active === cat.id
                                    ? "bg-green-800/80 text-white"
                                    : "text-neutral-800/50 hover:text-neutral-900 dark:text-neutral-300/50 dark:hover:text-white"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
    )
}

const ProductList = ({ sectionRefs, setSelectedItem }: { sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>; setSelectedItem: React.Dispatch<React.SetStateAction<{ name: string; x: number; y: number; } | null>> }) => {
    return (
            <div className="mx-auto max-w-7xl space-y-20 px-4 py-10 md:px-8 md:py-14">
                {menu.map((cat) => (
                    <section
                        key={cat.id}
                        id={cat.id}
                        className="scroll-mt-16"
                        ref={(el: HTMLElement | null) => {
                            sectionRefs.current[cat.id] = el
                        }}
                    >
                        <div className="mb-10">
                            <h2 className="font-inter text-[36px] font-medium tracking-tighter text-neutral-950 dark:text-white md:text-3xl">
                                {cat.label}
                            </h2>
                            <div className="mt-5 h-px w-full bg-gradient-to-r from-[#6b9e78]/50 via-gray-500 to-[#6b9e78]/50 dark:via-neutral-800" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
                            {cat.items.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex items-start justify-between gap-6 border-b border-dashed border-neutral-400/80 py-5 dark:border-neutral-700/80"
                                >
                                    <div className="min-w-0">
                                        <p
                                            onClick={(e) => {
                                                setSelectedItem({
                                                    name: item.name,
                                                    x: e.clientX,
                                                    y: e.clientY,
                                                })
                                            }}
                                            className="font-inter text-xl font-semibold text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer hover:text-neutral-900 hover:dark:text-neutral-50 hover:scale-101 transition-transform duration-200">
                                            {item.name}
                                        </p>
                                        <p className="text-lg font-inter text-gray-600 dark:text-gray-400/70 leading-relaxed max-w-xl antialiased tracking-wide mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                    <p className="shrink-0 font-inter text-lg font-medium text-neutral-600 dark:text-neutral-400">
                                        £{item.price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
    )
}