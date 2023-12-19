import { sqliteTable, blob  } from 'drizzle-orm/sqlite-core';
import { skill } from './skill';
import { job } from './job';

export const jobSkill = sqliteTable('job_skill', {
  id: blob('id', { mode: 'bigint' }).primaryKey(),
  skillId: blob('skill_id').references(() => skill.id),
  jobId: blob('job_id').references(() => job.id)
});
