import { z } from "$lib/ja-zod";

export const formSchema = z.object({
	username: z.string().min(2).max(50),
});
