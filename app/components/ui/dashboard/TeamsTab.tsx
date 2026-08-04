"use client";
import {
  IconKey,
  IconMail,
  IconPlus,
  IconDots,
  IconLoader2,
} from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "../toast";
import { authClient } from "@/app/lib/auth-client";

type Role = "admin" | "moderator";

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
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [popupOpenId, setPopupOpenId] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<{
    email: string;
    password: string;
    role: Role;
  }>({ defaultValues: { role: "moderator" } });

  const fetchUsers = async () => {
    axios
      .get("/api/teamlist")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchUsers();
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

  const modAdd = async (data: {
    email: string;
    password: string;
    role: Role;
  }) => {
    try {
      const response = await axios.post("/api/mod-add", data);
      if (response.data.message) {
        toast.add({
          title: "Task Completed",
          description: "The moderator has been added successfully.",
          type: "success",
        });
        reset();
        await fetchUsers();
      }
    } catch (error) {
      console.error(error);
      toast.add({
        title: "Task Failed",
        description: "Failed to add moderator.",
        type: "error",
      });
    } finally {
      setLoadingId(null);
    }
  };
  const toggleBlock = async (id: string) => {
    setLoadingId(id + "-block");
    try {
      const res = await axios.patch("/api/mod-block", { userId: id });
      if (res.data.message) {
        setUsers(
          users.map((u) => (u.id === id ? { ...u, banned: !u.banned } : u)),
        );
        setOpenMenu(null);
        toast.add({
          title: "Task Completed",
          description: res.data.message,
          type: "success",
        });
      }
    } catch (error) {
      console.error(error);
      toast.add({
        title: "Task Failed",
        description: "Failed to update user status.",
        type: "error",
      });
    } finally {
      setLoadingId(null);
    }
  };

  const deleteUser = async (id: string) => {
    setLoadingId(id + "-delete");
    try {
      const res = await axios.delete("/api/mod-delete", {
        data: { userId: id },
      });
      if (res.data.message) {
        setUsers(users.filter((u) => u.id !== id));
        setOpenMenu(null);
        toast.add({
          title: "Task Completed",
          description: res.data.message,
          type: "success",
        });
        setPopupOpenId(null);
      }
    } catch (error) {
      console.error(error);
      toast.add({
        title: "Task Failed",
        description: "Failed to delete user.",
        type: "error",
      });
    } finally {
      setLoadingId(null);
    }
  };

  const changeRole = async (id: string, role: Role) => {
    setLoadingId(id + "-role");
    try {
      const res = await axios.patch("/api/mod-role", { userId: id, role });
      if (res.data.message) {
        setUsers(users.map((u) => (u.id === id ? { ...u, role } : u)));
        setOpenMenu(null);
        toast.add({
          title: "Task Completed",
          description: res.data.message,
          type: "success",
        });
      }
    } catch (error) {
      console.error(error);
      toast.add({
        title: "Task Failed",
        description: "Failed to update user role.",
        type: "error",
      });
    } finally {
      setLoadingId(null);
    }
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
        <form
          onSubmit={handleSubmit(modAdd)}
          className="bg-white rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)] p-5"
        >
          <h3 className="text-lg font-medium text-neutral-800 mb-1">
            Add Team Member
          </h3>
          <p className="text-sm text-zinc-500 mb-5">
            Create a new admin or moderator account with a temporary password.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-400 rounded-lg px-3 py-2">
              <IconMail
                size={14}
                stroke={2}
                className="text-zinc-400 shrink-0"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email address"
                className="bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-400 rounded-lg px-3 py-2">
              <IconKey
                size={14}
                stroke={2}
                className="text-zinc-400 flex-shrink-0"
              />
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
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-60 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer"
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
            ) : (
              <IconPlus size={16} stroke={2} />
            )}
            {isSubmitting ? "Creating..." : "Create New"}
          </button>
        </form>
      )}

      {/* Team Members List */}
      <div className="bg-white rounded-xl border border-neutral-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)]">
        {popupOpenId && (
          <AlertBox
            userID={popupOpenId!}
            deleteUser={deleteUser}
            setPopupOpenId={setPopupOpenId}
          />
        )}
        <div className="px-5 py-4 border-b border-neutral-300">
          <h3 className="text-lg font-medium text-neutral-800">Team Members</h3>
          <p className="text-sm text-zinc-500 mt-0.5">
            {isAdmin
              ? "Manage existing admins and moderators."
              : "View admins and moderators."}
          </p>
        </div>
        <div className="overflow-y-auto max-h-[400px]">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="border-b border-neutral-300">
                <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider w-1/3">
                  Member
                </th>
                <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider">
                  Status
                </th>
                {isAdmin && (
                  <th className="px-6 py-4 font-semibold text-neutral-800 text-xs uppercase tracking-wider text-right">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-600/20 divide-dashed">
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className="hover:bg-zinc-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 text-sm">
                          {user.name}
                        </div>
                        <div className="text-xs text-zinc-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium text-neutral-600 bg-neutral-100/80 border border-dashed border-neutral-700/50">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
                        !user.banned
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-neutral-100 text-neutral-500"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${!user.banned ? "bg-emerald-500" : "bg-neutral-400"}`}
                      />
                      {!user.banned ? "Active" : "Blocked"}
                    </span>
                  </td>
                  {isAdmin && (
                    <td className="px-6 py-4 text-right">
                      <div
                        className="relative inline-block"
                        ref={openMenu === user.id ? menuRef : undefined}
                      >
                        <button
                          onClick={() =>
                            setOpenMenu(openMenu === user.id ? null : user.id)
                          }
                          className="p-1.5 rounded-lg border border-neutral-300 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-colors cursor-pointer"
                        >
                          <IconDots size={14} stroke={2} />
                        </button>
                        {openMenu === user.id && (
                          <div
                            className={`absolute right-0 w-48 h-auto flex flex-col font-inter bg-white border border-neutral-200 rounded-xl shadow-md z-10 py-1 cursor-pointer ${index >= users.length - 2 ? "bottom-full mb-1" : "mt-1"}`}
                          >
                            <button
                              onClick={() =>
                                changeRole(
                                  user.id,
                                  user.role === "admin" ? "moderator" : "admin",
                                )
                              }
                              disabled={loadingId === user.id + "-role"}
                              className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 font-medium transition-colors cursor-pointer disabled:opacity-50 flex items-center justify-between"
                            >
                              {user.role === "admin"
                                ? "Demote to Moderator"
                                : "Promote to Admin"}
                              {loadingId === user.id + "-role" && (
                                <IconLoader2
                                  size={14}
                                  className="animate-spin text-neutral-400 flex-shrink-0"
                                />
                              )}
                            </button>
                            <button
                              onClick={() => toggleBlock(user.id)}
                              disabled={loadingId === user.id + "-block"}
                              className="w-full text-left px-4 py-2 text-sm text-neutral-700 font-inter font-medium hover:bg-neutral-50 transition-colors cursor-pointer disabled:opacity-50 flex items-center justify-between"
                            >
                              {!user.banned ? "Block" : "Unblock"}
                              {loadingId === user.id + "-block" && (
                                <IconLoader2
                                  size={14}
                                  className="animate-spin text-neutral-400 flex-shrink-0"
                                />
                              )}
                            </button>
                            <div className="my-1 border-t border-neutral-100" />
                            <button
                              onClick={() => {
                                setPopupOpenId(user.id);
                              }}
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
      </div>
    </div>
  );
}

export const AlertBox = ({
  userID,
  deleteUser,
  setPopupOpenId,
}: {
  userID: string;
  deleteUser: (id: string) => void;
  setPopupOpenId: (id: string | null) => void;
}) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 flex flex-col items-center justify-center bg-white border border-neutral-300 rounded-xl shadow-[0_8px_32px_rgb(0,0,0,0.08)] p-6 z-50">
      <h1 className="font-inter font-semibold text-lg">Are you sure?</h1>
      <p className="text-sm text-zinc-500 mt-1">
        This action cannot be undone{" "}
      </p>
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => {
            deleteUser(userID);
          }}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
        >
          Confirm
        </button>
        <button
          onClick={() => {
            setPopupOpenId(null);
          }}
          className="px-4 py-2 bg-neutral-200 text-neutral-800 rounded-lg hover:bg-neutral-300 transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
