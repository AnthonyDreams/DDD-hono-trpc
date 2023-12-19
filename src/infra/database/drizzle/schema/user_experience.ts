import { text, sqliteTable, blob  } from 'drizzle-orm/sqlite-core';
import { experience } from './experience';

export const userExperience = sqliteTable('user_experience', {
  id: blob('id', { mode: 'bigint' }).primaryKey(),
  experienceId: blob('education_id').references(() => experience.id),
  userId: text('user_id', {length: 100})
});
