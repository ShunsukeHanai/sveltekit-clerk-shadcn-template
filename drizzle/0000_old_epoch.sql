CREATE TABLE `user` (
	`id` varchar(25) NOT NULL,
	`name` text,
	`role` text,
	`created_at` datetime DEFAULT '2025-02-10 14:11:49.927',
	`updated_at` datetime DEFAULT '2025-02-10 14:11:49.927',
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);
