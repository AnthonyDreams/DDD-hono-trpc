import { text, sqliteTable, blob  } from 'drizzle-orm/sqlite-core';

export const skill = sqliteTable('skill', {
  id: blob('id', { mode: 'bigint' }).primaryKey(),
  name: text('name', { length: 400 }),
});
