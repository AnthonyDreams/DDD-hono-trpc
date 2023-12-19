import { text, sqliteTable, blob  } from 'drizzle-orm/sqlite-core';

export const experience = sqliteTable('experience', {
  id: blob('id', { mode: 'bigint' }).primaryKey(),
  title: text('name', { length: 400 }),
  company: text('name', { length: 400 }),
  description: text('description'),
  startedAt: text('started_at'),
  endedAt: text('ended_at'),
});
