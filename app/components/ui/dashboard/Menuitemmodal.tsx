"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { number, z } from "zod";
import { IconX, IconPlus, IconUpload, IconChevronDown, IconLoader2 } from "@tabler/icons-react";
import axios from "axios";

// Types

export type Category = {
  id: number;
  name: string;
};

export type MenuItem = {
  id: number;
  name: string;
  category: string;
  categoryId: number;
  description: string;
  price: number;
  status: string;
  image: string;
  imagePublicId: string;
  alt: string;
};



const menuItemFormSchema = z.object({
  categoryId: z
    .number()
    .int()
    .positive("Category is required"),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z
    .number()
    .positive("Price must be greater than 0"),
  image: z
    .instanceof(File, { message: "Image is required" })
    .optional()
    .refine(
      (f) => f === undefined || f.size <= 10 * 1024 * 1024,
      "Image must be under 10 MB"
    ),
  alt: z.string().min(1, "Alt text is required"),
});

const editSchema = menuItemFormSchema.extend({
  image: z
    .instanceof(File)
    .optional()
    .refine(
      (f) => f === undefined || f.size <= 10 * 1024 * 1024,
      "Image must be under 10 MB"
    ),
});

const addSchema = menuItemFormSchema.extend({
  image: z
    .instanceof(File, { message: "Image is required" })
    .refine((f) => f.size <= 10 * 1024 * 1024, "Image must be under 10 MB"),
});

export type MenuItemFormValues = z.infer<typeof menuItemFormSchema> & {
  image?: File;
};



type MenuItemModalProps = {
  open: boolean;
  onClose: () => void;
  /**
   * Pass an existing item to open in edit mode.
   * Omit (or pass null) to open in add mode.
   */
  item?: MenuItem | null;
  /** Pre-loaded categories from the parent */
  categories: Category[];
  /**
   * Called after a new category is successfully created so the parent
   * can refresh its category list and pass the updated list back in.
   */
  onCategoryAdded?: () => void;
  /**
   * The parent should handle the actual POST/PATCH.
   * Receives the raw FormData so it can forward it to the route.
   */
  onSubmit: (data: FormData, isEdit: boolean) => Promise<void>;
};

// Helpers

function buildFormData(values: MenuItemFormValues): FormData {
  const fd = new FormData();
  fd.append("categoryId", String(values.categoryId));
  fd.append("name", values.name);
  fd.append("description", values.description);
  fd.append("price", String(values.price));
  fd.append("alt", values.alt);
  if (values.image instanceof File) {
    fd.append("image", values.image);
  }
  return fd;
}


type CategoryDropdownProps = {
  categories: Category[];
  value: number | undefined;
  onChange: (id: number) => void;
  onCategoryAdded?: () => void;
  error?: string;
};

function CategoryDropdown({
  categories,
  value,
  onChange,
  onCategoryAdded,
  error,
}: CategoryDropdownProps) {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = categories.find((c) => c.id === value);

  async function handleAdd() {
    const trimmed = newName.trim();
    if (!trimmed) {
      setAddError("Category name can't be empty");
      return;
    }
    setAdding(true);
    setAddError(null);
    
      try {
        const res = await axios("/api/add-category");
        if (res.status === 200) {
          setNewName("");
          onCategoryAdded?.();
        }
      } catch (err) {
        setAddError(err instanceof Error ? err.message : "Failed to add category");
      } finally {
        setAdding(false);
      }
    
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg border text-sm font-inter transition-colors bg-white
          ${error ? "border-red-400 focus:ring-red-200" : "border-neutral-300 hover:border-neutral-400"}
          ${!selected ? "text-zinc-400" : "text-zinc-900"}`}
      >
        <span className="font-inter">{selected ? selected.name : "Select a category"}</span>
        <IconChevronDown
          size={15}
          stroke={2}
          className={`text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -4 }}
            transition={{ duration: 0.1 }}
            className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white border border-neutral-200 rounded-xl shadow-[0_8px_24px_rgb(0,0,0,0.08)] z-30 overflow-hidden"
          >
            {/* Existing categories */}
            <div className="max-h-44 overflow-y-auto">
              {categories.length === 0 && (
                <p className="px-3 py-2.5 text-sm font-inter text-zinc-400">
                  No categories yet.
                </p>
              )}
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    onChange(c.id);
                    setOpen(false);
                  }}
                  className={`w-full px-3 py-2.5 text-left text-sm font-inter transition-colors
                    ${value === c.id
                      ? "bg-zinc-900 text-white font-medium"
                      : "text-zinc-700 hover:bg-zinc-50"
                    }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Divider + Add new category */}
            <div className="border-t border-neutral-200 p-2.5 space-y-1.5">
              <p className="px-1 text-[11px] font-semibold text-zinc-800 uppercase tracking-wider font-inter">
                Add new category
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => {
                    setNewName(e.target.value);
                    setAddError(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAdd();
                    }
                  }}
                  placeholder="e.g. Smoothies"
                  className="flex-1 min-w-0 px-2.5 py-1.5 text-sm font-inter rounded-md border border-neutral-400 bg-neutral-50 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={adding}
                  className="flex items-center gap-1 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-md transition-colors disabled:opacity-60 flex-shrink-0 font-inter"
                >
                  {adding ? (
                    <IconLoader2 size={13} className="animate-spin" />
                  ) : (
                    <IconPlus size={13} stroke={2} />
                  )}
                  Add
                </button>
              </div>
              {addError && (
                <p className="text-xs text-red-500 px-1 font-inter">{addError}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="mt-1 text-xs text-red-500 font-inter">{error}</p>}
    </div>
  );
}

//---------------------------------------------------------------------------

type ImagePickerProps = {
  value: File | undefined;
  onChange: (file: File | undefined) => void;
  existingUrl?: string;
  error?: string;
};

function ImagePicker({ value, onChange, existingUrl, error }: ImagePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const preview = value ? URL.createObjectURL(value) : existingUrl ?? null;

  return (
    <div>
      <div
        onClick={() => inputRef.current?.click()}
        className={`relative flex flex-col items-center justify-center w-full h-36 rounded-lg border-2 border-dashed cursor-pointer transition-colors
          ${error ? "border-red-400 bg-red-50/30" : "border-neutral-300 hover:border-neutral-400 bg-neutral-50/60"}`}
      >
        {preview ? (
          <>
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-white text-xs font-medium font-inter">Replace image</span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 text-zinc-500">
            <IconUpload size={22} stroke={1.5} />
            <span className="text-sm font-inter font-medium">Click to upload</span>
            <span className="text-xs font-inter font-medium">PNG, JPG, WEBP · max 10 MB</span>
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0])}
      />
      {error && <p className="mt-1 text-xs text-red-500 font-inter">{error}</p>}
    </div>
  );
}

// Field wrapper


function Field({
  label,
  error,
  children,
  hint,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-zinc-700 font-inter">{label}</label>
      {children}
      {hint && !error && <p className="text-xs text-zinc-400 font-inter">{hint}</p>}
      {error && <p className="text-xs text-red-500 font-inter">{error}</p>}
    </div>
  );
}

// Main modal

export default function MenuItemModal({
  open,
  onClose,
  item,
  categories,
  onCategoryAdded,
  onSubmit,
}: MenuItemModalProps) {
  const isEdit = Boolean(item);
  const schema = isEdit ? editSchema : addSchema;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MenuItemFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      categoryId: item?.categoryId ?? undefined,
      name: item?.name ?? "",
      description: item?.description ?? "",
      price: item?.price ? item.price  : undefined,
      alt: item?.alt ?? "",
      image: undefined,
    },
  });

  // Sync defaults when item changes (e.g. user opens edit modal for different row)
  useEffect(() => {
    if (open) {
      reset({
        categoryId: item?.categoryId ?? undefined,
        name: item?.name ?? "",
        description: item?.description ?? "",
        price: item?.price ? item.price : undefined,
        alt: item?.alt ?? "",
        image: undefined,
      });
    }
  }, [open, item, reset]);

  async function onValid(values: MenuItemFormValues) {
    const fd = buildFormData(values);
    if (isEdit && item) {
      fd.append("id", String(item.id));
      fd.append("existingImage", item.image);
      fd.append("existingImagePublicId", item.imagePublicId);
    }
    await onSubmit(fd, isEdit);
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-[0_16px_48px_rgb(0,0,0,0.12)] w-full max-w-lg pointer-events-auto max-h-[90vh] flex flex-col">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
                <div>
                  <h2 className="text-base font-semibold text-zinc-900 font-inter">
                    {isEdit ? "Edit item" : "Add new item"}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5 font-inter">
                    {isEdit
                      ? "Update the fields you want to change."
                      : "Fill in the details to add it to the catalog."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                >
                  <IconX size={18} stroke={2} />
                </button>
              </div>

              {/* Body */}
              <form
                onSubmit={handleSubmit(onValid)}
                className="overflow-y-auto flex-1 px-6 py-5 space-y-5"
              >
                <Field label="Name" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    placeholder="Ethiopian Dark Roast"
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm font-inter text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors bg-white
                      ${errors.name ? "border-red-400" : "border-neutral-300 hover:border-neutral-400 focus:border-zinc-500"}`}
                  />
                </Field>

                <Field label="Description" error={errors.description?.message}>
                  <textarea
                    {...register("description")}
                    rows={3}
                    placeholder="A short, appetizing description…"
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm font-inter text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors bg-white resize-none
                      ${errors.description ? "border-red-400" : "border-neutral-300 hover:border-neutral-400 focus:border-zinc-500"}`}
                  />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Price"
                    error={errors.price?.message}
                    hint="Enter in dollars (e.g. 12.50)"
                  >
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-zinc-400 pointer-events-none font-inter">
                        $
                      </span>
                      <input
                        {...register("price", { valueAsNumber: true })}
                        type="number"
                        step="0.01"
                        min="0"
                        placeholder="0.00"
                        className={`w-full pl-6 pr-3 py-2.5 rounded-lg border text-sm font-inter text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors bg-white
                          ${errors.price ? "border-red-400" : "border-neutral-300 hover:border-neutral-400 focus:border-zinc-500"}`}
                      />
                    </div>
                  </Field>

                  <Field label="Category" error={errors.categoryId?.message}>
                    <Controller
                      name="categoryId"
                      control={control}
                      render={({ field }) => (
                        <CategoryDropdown
                          categories={categories}
                          value={field.value}
                          onChange={field.onChange}
                          onCategoryAdded={onCategoryAdded}
                          error={errors.categoryId?.message}
                        />
                      )}
                    />
                  </Field>
                </div>

                <Field
                  label="Image"
                  error={errors.image?.message}
                  hint={isEdit ? "Leave blank to keep the existing image." : undefined}
                >
                  <Controller
                    name="image"
                    control={control}
                    render={({ field }) => (
                      <ImagePicker
                        value={field.value}
                        onChange={field.onChange}
                        existingUrl={isEdit ? item?.image : undefined}
                        error={errors.image?.message}
                      />
                    )}
                  />
                </Field>

                <Field
                  label="Alt text"
                  error={errors.alt?.message}
                  hint="Describe the image for screen readers."
                >
                  <input
                    {...register("alt")}
                    placeholder="A cup of Ethiopian dark roast coffee"
                    className={`w-full px-3 py-2.5 rounded-lg border text-sm font-inter text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors bg-white
                      ${errors.alt ? "border-red-400" : "border-neutral-300 hover:border-neutral-400 focus:border-zinc-500"}`}
                  />
                </Field>

                {/* Footer inside the form so submit button triggers it */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-sm font-medium font-inter text-zinc-600 hover:text-zinc-900 bg-white border border-neutral-300 hover:border-neutral-400 
                    cursor-pointer rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium font-inter text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg 
                    cursor-pointer transition-colors disabled:opacity-60"
                  >
                    {isSubmitting && (
                      <IconLoader2 size={15} className="animate-spin" />
                    )}
                    {isEdit ? "Save changes" : "Add item"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}