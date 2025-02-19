import { approve, approveAdmin } from "$lib/server/auth.js";
import { clerkClient } from "svelte-clerk/server";

export const load = async ({ locals }) => {
	locals.auth.sessionClaims?.metadata?.role;
	const userId = approveAdmin(locals.auth);
	const user = await clerkClient.users.getUser(userId);
	return {
		userId: user.firstName,
	};
};
