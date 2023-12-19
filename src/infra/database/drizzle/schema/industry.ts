import { text, sqliteTable, blob  } from 'drizzle-orm/sqlite-core';

export const industry = sqliteTable('industry', {
  id: blob('id', { mode: 'bigint' }).primaryKey(),
  name: text('name', { length: 400 }),
});
