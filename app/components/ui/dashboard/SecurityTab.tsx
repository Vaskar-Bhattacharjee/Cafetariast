'use client';
import { useState } from "react";
import { IconLock } from "@tabler/icons-react";

export default function SecurityTab() {
    const [current, setCurrent] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)] p-5">
                <h3 className="text-lg font-medium text-neutral-800 mb-1">Change Password</h3>
                <p className="text-sm text-zinc-500 mb-5">Update your account password. You will be logged out after changing.</p>
                <div className="space-y-3 max-w-md">
                    <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-400 rounded-lg px-3 py-2">
                        <IconLock size={14} stroke={2} className="text-zinc-400 flex-shrink-0" />
                        <input
                            type="password"
                            placeholder="Current password"
                            value={current}
                            onChange={(e) => setCurrent(e.target.value)}
                            className="bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 outline-none w-full"
                        />
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-400 rounded-lg px-3 py-2">
                        <IconLock size={14} stroke={2} className="text-zinc-400 flex-shrink-0" />
                        <input
                            type="password"
                            placeholder="New password"
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                            className="bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 outline-none w-full"
                        />
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-400 rounded-lg px-3 py-2">
                        <IconLock size={14} stroke={2} className="text-zinc-400 flex-shrink-0" />
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            className="bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 outline-none w-full"
                        />
                    </div>
                </div>
                <button className="mt-5 flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer">
                    Update Password
                </button>
            </div>
        </div>
    );
}