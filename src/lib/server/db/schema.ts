import { mysqlTable, text, datetime, varchar } from "drizzle-orm/mysql-core";
import { createId } from "@paralleldrive/cuid2";

const timestamps = {
	createdAt: datetime("created_at").default(new Date()),
	updatedAt: datetime("updated_at")
		.default(new Date())
		.$onUpdate(() => new Date()),
};

export const user = mysqlTable("user", {
	id: varchar("id", { length: 25 })
		.primaryKey()
		.$defaultFn(() => createId()),
	name: text("name"),
	role: text("role", {
		enum: ["admin", "user"],
	}),
	...timestamps,
});
