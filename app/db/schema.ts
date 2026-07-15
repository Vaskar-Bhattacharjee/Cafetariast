import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";


export const menuCategoriesTable = pgTable("menu_categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: varchar({ length: 100 }).notNull().unique(),
  label: varchar({ length: 255 }).notNull(),
  number: varchar({ length: 10 }).notNull(),
});

export const menuItemsTable = pgTable("menu_items", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  categoryId: integer()
    .notNull()
    .references(() => menuCategoriesTable.id),
  name: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  price: integer().notNull(),
  image: text().notNull(),
  imagePublicId: varchar({ length: 255 }).notNull(),
  alt: varchar({ length: 255 }).notNull(),
});