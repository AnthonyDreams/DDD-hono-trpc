import type { Config } from 'drizzle-kit'

export default {
  schema: './src/infra/database/drizzle/schema/index.ts',
  out: './src/infra/database/drizzle/migrations',
  driver: 'd1',
  dbCredentials: {
    wranglerConfigPath: 'wrangler.toml',
    dbName: 'production',
  },
  verbose: false,
  strict: true,
} satisfies Config
