import { sql } from 'drizzle-orm';
import { index, text, sqliteTable, real  } from 'drizzle-orm/sqlite-core';

export const job = sqliteTable('job', {
  id: text('id', { length: 36 }).primaryKey(),
  title: text('title', { length: 400 }).notNull(),
  description: text('description'),
  location: text('location', { mode: 'json' }).notNull(),
  organizationId: text('organization_id', {length: 100}),
  employmentType: text('text', { enum: ['full-time', 'part-time', 'contract', 'temporary', 'volunteer', 'internship'] }).notNull(),
  status: text('text', { enum: ['published', 'draft',  'closed', 'expired'] }).notNull().default('published').notNull(),
  salaryMin: real('salary_min'),
  salaryMax: real('salary_max'),
  postedDate: text("timestamp").default(sql`CURRENT_TIMESTAMP`).notNull(),
  expiryDate: text("timestamp").notNull(),
  updatedAt: text("timestamp").default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (job) => ({
  titleIdx: index('title_index').on(job.title),
  idIdx: index('id_index').on(job.id),
}));
