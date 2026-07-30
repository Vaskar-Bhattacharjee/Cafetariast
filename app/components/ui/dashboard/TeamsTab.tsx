'use client';
import { IconKey, IconMail, IconPlus, IconDots } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "../toast";
import { authClient } from "@/app/lib/auth-client";

type Role = "admin" | "moderator";
type Status = "Active" | "Blocked";

interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    banned: boolean;
}



export default function TeamsTab() {
    const [users, setUsers] = useState<User[]>([]);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [currentUserRole, setCurrentUserRole] = useState<Role | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm<{
        email: string;
        password: string;
        role: Role;
    }>({ defaultValues: { role: "moderator" } });

        useEffect(() => {
        axios.get("/api/teamlist").then((res) => {
            setUsers(res.data);
        }).catch(console.error);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpenMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const modAdd = async (data: { email: string; password: string; role: Role }) => {
        try {
            const response = await axios.post("/api/mod-add", data);
            if (response.data.message) {
                toast.add({
                    title: "Task Completed",
                    description: "The moderator has been added successfully.",
                });
                reset();
            }
        } catch (error) {
            console.error(error);
            toast.add({
                title: "Task Failed",
                description: "Failed to add moderator.",
            });
        }
    };
    const toggleBlock = (id: string) => {
        setUsers(users.map(u =>
            u.id === id ? { ...u, banned: !u.banned } : u
        ));
        setOpenMenu(null);
    };

    const deleteUser = (id: string) => {
        setUsers(users.filter(u => u.id !== id));
        setOpenMenu(null);
    };

    const changeRole = (id: string, role: Role) => {
        setUsers(users.map(u => u.id === id ? { ...u, role } : u));
        setOpenMenu(null);
    };

    useEffect(() => {
        authClient.getSession().then((res) => {
            setCurrentUserRole(res.data?.user?.role as Role);
        });
    }, []);
    const isAdmin = currentUserRole === "admin";

    return (
        <div className="space-y-8">
            {/* Add Moderator/Admin Form — admin only */}
            {isAdmin && (
                <form onSubmit={handleSubmit(modAdd)} className="bg-white rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)] p-5">
                    <h3 className="text-lg font-medium text-neutral-800 mb-1">Add Team Member</h3>
                    <p className="text-sm text-zinc-500 mb-5">Create a new admin or moderator account with a temporary password.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-400 rounded-lg px-3 py-2">
                            <IconMail size={14} stroke={2} className="text-zinc-400 flex-shrink-0" />
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 outline-none w-full"
                            />
                        </div>
                        <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-400 rounded-lg px-3 py-2">
                            <IconKey size={14} stroke={2} className="text-zinc-400 flex-shrink-0" />
                            <input
                                {...register("password")}
                                type="password"
                                placeholder="Temporary password"
                                className="bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 outline-none w-full"
                            />
                        </div>
                        <select
                            {...register("role")}
                            className="bg-neutral-50 border border-neutral-400 rounded-lg px-3 py-2 text-sm text-zinc-900 outline-none cursor-pointer"
                        >
                            <option value="moderator">Moderator</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button
                    type="submit"
                    className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer">
                        <IconPlus size={16} stroke={2} />
                        Create New
                    </button>
                </form>
    )
}

{/* Team Members List */ }
<div className="bg-white rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)]">                <div className="px-5 py-4 border-b border-neutral-300">
    <h3 className="text-lg font-medium text-neutral-800">Team Members</h3>
    <p className="text-sm text-zinc-500 mt-0.5">
        {isAdmin ? "Manage existing admins and moderators." : "View admins and moderators."}
    </p>
</div>
    <table className="w-full text-left text-sm whitespace-nowrap">
        <thead>
            <tr className="border-b border-neutral-300">
                <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider w-1/3">Member</th>
                <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider">Status</th>
                {isAdmin && (
                    <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider text-right">Actions</th>
                )}
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
                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${!user.banned
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-neutral-100 text-neutral-500"
                            }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${!user.banned ? "bg-emerald-500" : "bg-neutral-400"}`} />
                            {!user.banned ? "Active" : "Blocked"}
                        </span>
                    </td>
                    {isAdmin && (
                        <td className="px-6 py-4 text-right">
                            <div className="relative inline-block" ref={openMenu === user.id ? menuRef : undefined}>
                                <button
                                    onClick={() => setOpenMenu(openMenu === user.id ? null : user.id)}
                                    className="p-1.5 rounded-lg border border-neutral-300 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-colors cursor-pointer"
                                >
                                    <IconDots size={14} stroke={2} />
                                </button>
                                {openMenu === user.id && (
                                    <div className="absolute right-0 mt-1 w-48 h-auto flex flex-col font-inter bg-white border border-neutral-200 rounded-xl shadow-md z-10 py-1 cursor-pointer">                                                    <button
                                        onClick={() => changeRole(user.id, user.role === "admin" ? "moderator" : "admin")}
                                        className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 font-medium transition-colors cursor-pointer"
                                    >
                                        {user.role === "admin" ? "Demote to Moderator" : "Promote to Admin"}
                                    </button>
                                        <button
                                            onClick={() => toggleBlock(user.id)}
                                            className="w-full text-left px-4 py-2 text-sm text-neutral-700 font-inter font-medium hover:bg-neutral-50 transition-colors cursor-pointer"
                                        >
                                            {!user.banned ? "Block" : "Unblock"}
                                        </button>
                                        <div className="my-1 border-t border-neutral-100" />
                                        <button
                                            onClick={() => deleteUser(user.id)}
                                            className="w-full text-left px-4 py-2 text-sm text-red-600 font-inter font-medium hover:bg-red-50 transition-colors cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        </td>
                    )}
                </tr>
            ))}
        </tbody>
    </table>
</div>
        </div >
    );
}