import { motion } from "framer-motion";
import SecurityTab from "./SecurityTab";
import TeamsTab from "./TeamsTab";
import ThemesTab from "./ThemeTab";
import { useState } from "react";
import { IconUsers, IconShield, IconPalette, IconDashboard, IconSettings } from "@tabler/icons-react";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("teams");

    const tabs = [
        { id: "teams", label: "Teams", icon: IconUsers },
        { id: "security", label: "Security", icon: IconShield },
        { id: "themes", label: "Themes", icon: IconPalette },
    ];

    return (
        <div className="flex h-screen bg-[#FFFFFF] font-sans text-zinc-900 selection:bg-zinc-200">



            {/* Settings Sub-sidebar */}
            <aside className="w-48 border-r border-zinc-200/60 flex flex-col bg-white z-10">
                <div className="h-20 flex items-center px-5">
                    <span className="text-sm font-semibold text-neutral-800 uppercase tracking-wider">Settings</span>
                </div>
                <nav className="px-3 py-2 space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                                activeTab === tab.id
                                    ? "bg-zinc-100 text-zinc-900"
                                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                            }`}
                        >
                            <tab.icon size={18} stroke={2} />
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                <div className="p-8 lg:p-12 max-w-6xl mx-auto w-full space-y-10">
                    <header className="flex justify-between items-end">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                                {tabs.find(t => t.id === activeTab)?.label}
                            </h2>
                            <p className="text-lg text-zinc-500 mt-1">
                                {activeTab === "teams" && "Manage your team members and moderator access."}
                                {activeTab === "security" && "Control your account security and password."}
                                {activeTab === "themes" && "Customize the appearance of your dashboard."}
                            </p>
                        </div>
                    </header>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        {activeTab === "teams" && <TeamsTab />}
                        {activeTab === "security" && <SecurityTab />}
                        {activeTab === "themes" && <ThemesTab />}
                    </motion.div>
                </div>
            </main>
        </div>
    );
}