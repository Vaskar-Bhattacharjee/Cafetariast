'use client';
import { IconKey, IconMail, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function TeamsTab() {
    const [users, setUsers] = useState([
    { id: 1, name: "Alex Morgan", email: "alex@cafetariast.com", role: "Admin", status: "Active" },
    { id: 2, name: "James Reese", email: "james@cafetariast.com", role: "Moderator", status: "Active" },
    { id: 3, name: "Priya Mehta", email: "priya@cafetariast.com", role: "Moderator", status: "Blocked" },
    { id: 4, name: "Tom Wallis", email: "tom@cafetariast.com", role: "Moderator", status: "Active" },
]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const toggleBlock = (id: number) => {
        setUsers(users.map(u =>
            u.id === id ? { ...u, status: u.status === "Blocked" ? "Active" : "Blocked" } : u
        ));
    };

    const deleteUser = (id: number) => {
        setUsers(users.filter(u => u.id !== id));
    };

    return (
        <div className="space-y-8">
            {/* Add Moderator Form */}
            <div className="bg-white rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)] p-5">
                <h3 className="text-lg font-medium text-neutral-800 mb-1">Add Moderator</h3>
                <p className="text-sm text-zinc-500 mb-5">Create a new moderator account with a temporary password.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-400 rounded-lg px-3 py-2">
                        <IconMail size={14} stroke={2} className="text-zinc-400 flex-shrink-0" />
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 outline-none w-full"
                        />
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-400 rounded-lg px-3 py-2">
                        <IconKey size={14} stroke={2} className="text-zinc-400 flex-shrink-0" />
                        <input
                            type="password"
                            placeholder="Temporary password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 outline-none w-full"
                        />
                    </div>
                </div>
                <button className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer">
                    <IconPlus size={16} stroke={2} />
                    Create Moderator
                </button>
            </div>

            {/* Existing Users List */}
            <div className="bg-white rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)] overflow-hidden">
                <div className="px-5 py-4 border-b border-neutral-300">
                    <h3 className="text-lg font-medium text-neutral-800">Team Members</h3>
                    <p className="text-sm text-zinc-500 mt-0.5">Manage existing admins and moderators.</p>
                </div>
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                        <tr className="border-b border-neutral-300">
                            <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider w-1/3">Member</th>
                            <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-600/20 divide-dashed">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-zinc-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-medium text-neutral-900 text-sm">{user.name}</div>
                                            <div className="text-xs text-zinc-500">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium text-neutral-600 bg-neutral-100/80 border border-dashed border-neutral-700/50">
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
                                        user.status === "Active"
                                            ? "bg-emerald-50 text-emerald-700"
                                            : "bg-neutral-100 text-neutral-500"
                                    }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-500" : "bg-neutral-400"}`} />
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => toggleBlock(user.id)}
                                            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors cursor-pointer"
                                        >
                                            {user.status === "Blocked" ? "Unblock" : "Block"}
                                        </button>
                                        <button
                                            onClick={() => deleteUser(user.id)}
                                            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}