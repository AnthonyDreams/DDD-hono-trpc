import { text, sqliteTable, blob  } from 'drizzle-orm/sqlite-core';
import { education } from './education';

export const userEducation = sqliteTable('user_education', {
  id: blob('id', { mode: 'bigint' }).primaryKey(),
  educationId: blob('education_id').references(() => education.id),
  userId: text('user_id', {length: 100})
});
