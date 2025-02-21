import { approve } from "$lib/server/auth.js";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

export const load = async ({ locals }) => {
	approve(locals.auth);

	return {
		form: await superValidate(zod(formSchema)),
	};
};
