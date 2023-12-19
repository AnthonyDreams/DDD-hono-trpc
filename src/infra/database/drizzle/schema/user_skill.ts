import { text, sqliteTable, blob  } from 'drizzle-orm/sqlite-core';
import { skill } from './skill';

export const userSkill = sqliteTable('user_skill', {
  id: blob('id', { mode: 'bigint' }).primaryKey(),
  skillId: blob('skill_id').references(() => skill.id),
  userId: text('user_id', {length: 100})
});
