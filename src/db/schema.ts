import { blob, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const ProjectsTable = sqliteTable("projects_table", {
  id: text().primaryKey(),
  name: text().notNull(),
  projectLink: text(),
  repoLink: text(),
  description: blob().notNull(),
  colour: text().notNull().default("#ffffff"),
});
