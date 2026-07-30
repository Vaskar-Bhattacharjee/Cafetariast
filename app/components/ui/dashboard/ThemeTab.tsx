'use client';
import { useState } from "react";

export default function ThemesTab() {
    const [selected, setSelected] = useState("Light");

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)] p-5">
                <h3 className="text-lg font-medium text-neutral-800 mb-1">Appearance</h3>
                <p className="text-sm text-zinc-500 mb-5">Choose how the dashboard looks for you.</p>
                <div className="flex gap-3">
                    {["Light", "Dark", "System"].map((theme) => (
                        <button
                            key={theme}
                            onClick={() => setSelected(theme)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                                selected === theme
                                    ? "bg-zinc-900 text-white border-zinc-900"
                                    : "bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50"
                            }`}
                        >
                            {theme}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}