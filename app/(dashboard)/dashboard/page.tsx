"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    IconDashboard,
    IconSettings,
    IconDots,
    IconEye,
    IconEyeOff,
    IconPencil,
    IconTrash,
    IconPlus,
    IconStar,
    IconSearch,
    IconChevronDown
} from "@tabler/icons-react";
import CategoryPolarChart from "@/app/components/ui/CategoryPolarChart";

// --- Contextual Mock Data for a Showcase ---
const PRODUCTS = [
    {
        id: 1,
        name: "Ethiopian Yirgacheffe Dark Roast",
        category: "Coffee",
        price: 18.50,
        status: "Featured",
        image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=100&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Almond Butter Croissant",
        category: "Pastry",
        price: 6.25,
        status: "Visible",
        image: "https://images.unsplash.com/photo-1549903072-7e6e0d6594cb?q=80&w=100&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Ceremonial Matcha Latte",
        category: "Specialty",
        price: 5.50,
        status: "Visible",
        image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=100&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Smoked Salmon Bagel",
        category: "Food",
        price: 12.00,
        status: "Hidden", // Out of season or out of stock
        image: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?q=80&w=100&auto=format&fit=crop"
    },
];

export default function CafetariastDashboard() {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
    const [categoryOpen, setCategoryOpen] = useState(false);

    const filteredProducts = PRODUCTS.filter((p) => {
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchCategory = categoryFilter ? p.category === categoryFilter : true;
        return matchSearch && matchCategory;
    });

    const toggleMenu = (id: number) => {
        setActiveMenu(activeMenu === id ? null : id);
    };

    return (
        <div className="flex h-screen bg-[#FFFFFF] font-sans text-zinc-900 selection:bg-zinc-200">

            {/* --- SIDEBAR --- */}
            <aside className="w-64 border-r border-zinc-200/60 flex flex-col justify-between hidden md:flex bg-white z-10">
                <div>
                    <div className="h-20 flex items-center px-8">
                        <h1 className="text-xl font-bold tracking-tight text-zinc-900">
                            Cafetariast<span className="text-orange-500">.</span>
                        </h1>
                    </div>
                    <nav className="px-4 py-2 space-y-1">
                        <button className="w-full flex items-center space-x-3 px-4 py-2.5 bg-zinc-100 text-zinc-900 rounded-lg font-medium text-sm transition-colors">
                            <IconDashboard size={18} stroke={2} />
                            <span>Dashboard</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-2.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg font-medium text-sm transition-colors">
                            <IconSettings size={18} stroke={2} />
                            <span>Settings</span>
                        </button>
                    </nav>
                </div>

                {/* Moderator Profile */}
                <div className="p-4">
                    <div className="flex items-center space-x-3 px-4 py-3 rounded-xl border border-zinc-200/50 hover:border-zinc-300 transition-colors cursor-pointer">
                        <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center text-white font-medium text-xs">
                            M
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold leading-tight">Moderator</span>
                            <span className="text-xs text-zinc-500 font-medium">Admin Access</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                <div className="p-8 lg:p-12 max-w-6xl mx-auto w-full space-y-10">

                    {/* Header */}
                    <header className="flex justify-between items-end">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">Catalog Overview</h2>
                            <p className="text-lg text-zinc-500 mt-1">Manage your website's digital menu and featured items.</p>
                        </div>
                        <button className="flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer">
                            <IconPlus size={16} stroke={2} />
                            <span>Add Product</span>
                        </button>
                    </header>

                    {/* Metrics Grid - Recontextualized for a Showcase */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                        <div className="bg-white p-5 rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)]">
                            <h3 className="text-lg font-medium text-neutral-800 mb-3">Total Catalog Items</h3>
                            <p className="text-3xl font-semibold tracking-tight text-zinc-900">48</p>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)]">
                            <h3 className="text-lg font-medium text-neutral-800 mb-3">Featured on Website</h3>
                            <div className="flex items-baseline space-x-2">
                                <p className="text-3xl font-semibold tracking-tight text-zinc-900">12</p>
                                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">Max 12</span>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)]">
                            <h3 className="text-lg font-medium text-neutral-800 mb-3">Hidden / Drafts</h3>
                            <p className="text-3xl font-semibold tracking-tight text-zinc-900">4</p>
                        </div>
                    </motion.div>
                    <div className="flex items-center gap-2 w-120">
                        <div className="flex items-center gap-2 flex-1 bg-neutral-50 border border-neutral-400 rounded-lg px-3 py-2">
                            <IconSearch size={14} stroke={2} className="text-zinc-400 flex-shrink-0" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 outline-none w-full"
                            />
                        </div>
                        <div className="relative">
                            <button
                                onClick={() => setCategoryOpen(!categoryOpen)}
                                className="flex items-center gap-1.5 px-3 py-2 bg-neutral-100 border border-neutral-300 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
                            >
                                {categoryFilter ?? "Category"} <IconChevronDown size={13} stroke={2} />
                            </button>
                            {categoryOpen && (
                                <div className="absolute right-0 top-10 w-36 bg-white border border-neutral-300 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.08)] z-20 overflow-hidden">
                                    {["All","Coffee", "Pastry", "Specialty", "Food"].map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => { setCategoryFilter(categoryFilter === c ? null : c); setCategoryOpen(false); }}
                                            className={`w-full px-3 py-2 text-left text-sm transition-colors cursor-pointer ${categoryFilter === c ? "bg-neutral-900 text-white font-inter" : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 font-inter"}`}
                                        >
                                            {c}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                        {/* Doughnut card — 1 column */}
                        <div className="col-span-1 bg-white p-5 rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)]">
                            <h3 className="text-lg font-medium text-neutral-800 mb-3">Menu Composition</h3>
                            <div className="h-48 relative">
                                <CategoryPolarChart />
                            </div>
                        </div>

                        {/* Table — 3 columns */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="col-span-3 bg-white rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)] overflow-hidden"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm whitespace-nowrap">
                                    <thead>
                                        <tr className="border-b border-neutral-300">
                                            <th scope="col" className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider w-1/2">Product</th>
                                            <th scope="col" className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider">Category</th>
                                            <th scope="col" className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider text-right">Price</th>
                                            <th scope="col" className="px-6 py-4 w-16"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-600/20 divide-dashed">
                                        {PRODUCTS.map((product) => (
                                            <tr key={product.id} className="hover:bg-zinc-50/50 transition-colors group">

                                                {/* Name & Image Box */}
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-4">
                                                        {/* Premium Image Box placeholder */}
                                                        <div className="h-10 w-10 rounded-md bg-zinc-100 border border-zinc-200/50 overflow-hidden flex-shrink-0">
                                                            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                                                        </div>
                                                        <div className="font-medium text-neutral-900 truncate text-sm font-inter max-w-[280px]">
                                                            {product.name}
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Premium Minimal Badge */}
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium text-neutral-600 bg-neutral-100/80 border border-dashed border-neutral-700/50">
                                                        {product.category}
                                                    </span>
                                                </td>

                                                {/* Tabular Price */}
                                                <td className="px-6 py-4 font-medium text-zinc-900 text-right tabular-nums">
                                                    ${product.price.toFixed(2)}
                                                </td>


                                                {/* Actions */}
                                                <td className="px-6 py-4 relative text-right">
                                                    <button
                                                        onClick={() => toggleMenu(product.id)}
                                                        className="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors outline-none"
                                                    >
                                                        <IconDots size={18} stroke={2} />
                                                    </button>

                                                    <AnimatePresence>
                                                        {activeMenu === product.id && (
                                                            <motion.div
                                                                initial={{ opacity: 0, scale: 0.95, y: -5 }}
                                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                                exit={{ opacity: 0, scale: 0.95, y: -5 }}
                                                                transition={{ duration: 0.1, ease: "easeOut" }}
                                                                className="absolute right-10 top-8 w-44 bg-white border border-zinc-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.08)] rounded-xl z-20 overflow-hidden"
                                                            >
                                                                <div className="p-1.5">
                                                                    <button className="w-full px-3 py-2 text-sm text-left flex items-center gap-2.5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors">
                                                                        <IconPencil size={15} stroke={2} /> Edit Item
                                                                    </button>
                                                                    <button className="w-full px-3 py-2 text-sm text-left flex items-center gap-2.5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors">
                                                                        <IconEyeOff size={15} stroke={2} /> Hide from site
                                                                    </button>
                                                                    <div className="h-px bg-zinc-100 my-1"></div>
                                                                    <button className="w-full px-3 py-2 text-sm text-left flex items-center gap-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                                        <IconTrash size={15} stroke={2} /> Delete
                                                                    </button>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                    </div>


                </div>
            </main>
        </div>
    );
}



