"use client";
import Image from "next/image"
import ModeToggle from "../ui/mode-toggle";
import { LogoImge } from "../illustration/illustration";


const MenuItem = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
]

export const Navbar = () => {
    return (
        <div className="bg-zinc-50 dark:bg-neutral-900 pt-4">
        <DesktopNavbar />
        </div>
    )
}

export const DesktopNavbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 bg-zinc-50 dark:bg-neutral-900 flex items-center justify-between lg:px-0 z-20">
            <div className="flex items-center justify-start -ml-10"><LogoImge width={100} height={100} className=""/><p className="text-2xl font-bold -ml-7">afeteriast</p></div>
            <div className="flex items-center space-x-4">
                {MenuItem.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-800 dark:text-gray-300 font-medium px-3 py-2 hover:text-gray-900 dark:hover:text-gray-100 text-md font-inter"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="flex items-center gap-5">
            <ModeToggle />
            <button className="bg-linear-to-r from-green-900 to-green-700  text-white font-medium px-4 py-2 rounded-md hover:bg-green-800 transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer">
                Explore Menu
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6z" clipRule="evenodd" />
                </svg>
            </button>
            </div>
        </nav>
    )
}

export const Logo = () => {
    return (
        <Image
            src="/cafeterist.png"
            alt="Cafeteriast Logo"
            width={32}
            height={32}
            className="rounded-lg"
        />
    )
}