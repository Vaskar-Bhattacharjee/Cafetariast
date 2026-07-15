import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandX } from "@tabler/icons-react";
import { Logo } from "../navbar/navbar";
import { LogoImge } from "../illustration/illustration";

const FooterData = {
    navigation: [
        { name: "Home", href: "#" },
        { name: "Menu", href: "#" },
        { name: "About", href: "#" },
        { name: "Contact", href: "#" },
    ],
    Hoursandlocation: [
        { label: "Mon – Fri", time: "7:00 AM – 8:00 PM" },
        { label: "Sat – Sun", time: "8:00 AM – 6:00 PM" },
        { label: "Location", time: "123 Coffee Street, Brewville" },
    ],
    contact: {
        email: "hello@cafeten.com",
        phone: "+1 234 567 890",
    },
};

export const Footer = () => {
    return (
        <footer className="bg-transparent py-16 relative overflow-hidden">
            <BGNoise />
            <div className="mx-auto max-w-9xl px-6">
                <div className="overflow-hidden rounded-[28px] bg-transparent shadow-sm">

                    <div className="px-8 py-10 sm:px-10 lg:px-12">
                        <div className="grid gap-9 text-neutral-600 dark:text-neutral-300 sm:grid-cols-2 lg:grid-cols-6 max-w-7xl">

                            {/* Brand */}
                            <div className="grid col-span-2">
                                <div className="inline-flex items-center lg:-ml-10 lg:-mt-5">
                                    <LogoImge width={100} height={100} />
                                    <p className="text-[20px] font-inter font-semibold text-neutral-950 dark:text-neutral-100 -ml-8">afeteriast</p>
                                </div>
                                <p className="text-[20px] font-inter font-semibold text-neutral-950 dark:text-neutral-100 mb-2">Stay a little longer.</p>
                                <p className="max-w-[450px] text-lg font-normal leading-[1.7] text-neutral-500 dark:text-neutral-400">
                                    A quiet café with a thoughtful pace, warm details, and the kind of calm you want to linger in.
                                </p>
                            </div>

                            {/* Navigate */}
                            <div className="col-span-4 flex items-start justify-center gap-30">
                            {FooterData.navigation && (
                                <div className="space-y-4 col-span-1">
                                    <h3 className="text-[17px] font-inter font-semibold uppercase tracking-[normal text-neutral-950 dark:text-white">
                                        Navigate
                                    </h3>
                                    <ul className="flex flex-col gap-[10px]">
                                        {FooterData.navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="text-[18px] font-normal text-neutral-500 transition hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Hours & Location */}
                            {FooterData.Hoursandlocation && (
                                <div className="space-y-4 col-span-1">
                                    <h3 className="text-[17px] font-inter font-semibold uppercase tracking-normal text-neutral-950 dark:text-white">
                                        Hours &amp; Location
                                    </h3>
                                    <div className="flex flex-col gap-3">
                                        {FooterData.Hoursandlocation.map((item) => (
                                            <div key={item.label}>
                                                <p className="text-[15px] font-semibold leading-none text-neutral-950 dark:text-white mb-[3px]">
                                                    {item.label}
                                                </p>
                                                <p className="text-[15px] font-normal text-neutral-500 dark:text-neutral-400">
                                                    {item.time}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Contact */}
                            {FooterData.contact && (
                                <div className="space-y-4 col-span-1">
                                    <h3 className="text-[17px] font-inter font-semibold uppercase tracking-normal text-neutral-950 dark:text-white">
                                        Contact
                                    </h3>
                                    <div className="flex flex-col gap-[3px]">
                                        <a
                                            href="mailto:hello@cafeten.com"
                                            className="text-[15px] font-inter font-normal text-neutral-500 transition hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                                        >
                                            {FooterData.contact.email}
                                        </a>
                                        <a
                                            href="tel:+8801854259192"
                                            className="text-[15px] font-inter font-normal text-neutral-500 transition hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                                        >
                                            {FooterData.contact.phone}
                                        </a>
                                        <div className="flex items-center gap-4 mt-6">
                                            <a href="#" className="text-[15px] font-inter font-normal text-neutral-500 transition hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
                                                <IconBrandFacebook />
                                            </a>
                                            <a href="#" className="text-[15px] font-inter font-normal text-neutral-500 transition hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
                                                <IconBrandInstagram />
                                            </a>
                                            <a href="#" className="text-[15px] font-inter font-normal text-neutral-500 transition hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
                                                <IconBrandX />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </div>

                        </div>
                    </div>

                    <div className="border-t border-neutral-200/80 dark:border-neutral-800/70 px-8 py-[18px] sm:px-10 lg:px-12">
                        <p className="text-lg font-normal text-neutral-400 dark:text-neutral-500">
                            © 2026 Café Ten. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

const BGNoise = () => {
    return (
        <div className="absolute bottom-0 -right-120 h-293.75 w-[720.16px] rotate-90 rounded-full bg-[#27251F] blur-[287.15px] hidden dark:block"></div>
    )
}
