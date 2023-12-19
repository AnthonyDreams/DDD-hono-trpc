import { text, sqliteTable, blob  } from 'drizzle-orm/sqlite-core';

export const education = sqliteTable('education', {
  id: blob('id', { mode: 'bigint' }).primaryKey(),
  title: text('name', { length: 400 }),
  university: text('name', { length: 400 }),
  description: text('description'),
  startedAt: text('started_at'),
  endedAt: text('ended_at'), 
});
