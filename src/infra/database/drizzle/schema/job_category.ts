import { sqliteTable, blob  } from 'drizzle-orm/sqlite-core';

import { skill } from './skill';
import { job } from './job';

export const jobCategory = sqliteTable('job_category', {
  id: blob('id', { mode: 'bigint' }).primaryKey(),
  categoryId: blob('category_id').references(() => skill.id),
  jobId: blob('job_id').references(() => job.id)
});
