import * as schema from "./schema";
import { DrizzleD1Database } from 'drizzle-orm/d1';

export type DbClient = DrizzleD1Database<typeof schema>
 

