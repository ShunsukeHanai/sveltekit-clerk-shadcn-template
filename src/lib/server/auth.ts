import { redirect } from "@sveltejs/kit";
import type { AuthObject } from "svelte-clerk/server";

export function approveAdmin(auth: AuthObject) {
	const { userId } = auth;
	const role = auth.sessionClaims?.metadata?.role;

	if (!userId) {
		return redirect(307, "/sign-in");
	}

	if (role !== "admin") {
		return redirect(307, "/sign-in");
	}

	return userId;
}

export function approve(auth: AuthObject) {
	const { userId } = auth;

	if (!userId) {
		return redirect(307, "/sign-in");
	}
	return userId;
}
