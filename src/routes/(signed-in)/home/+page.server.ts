import { approve } from "$lib/server/auth.js";
import { clerkClient } from "svelte-clerk/server";

export const load = async ({ locals }) => {
	const userId = approve(locals.auth);

	const user = await clerkClient.users.getUser(userId);

	return {
		userId: user.firstName,
	};
};
