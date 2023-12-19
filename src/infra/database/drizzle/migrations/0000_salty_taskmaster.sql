CREATE TABLE `job` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`title` text(400) NOT NULL,
	`description` text,
	`location` text NOT NULL,
	`organization_id` text(100),
	`text` text DEFAULT 'published' NOT NULL,
	`salary_min` real,
	`salary_max` real,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `title_index` ON `job` (`title`);--> statement-breakpoint
CREATE INDEX `id_index` ON `job` (`id`);