import { approve } from "$lib/server/auth.js";
import { message, superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";

export const load = async ({ locals }) => {
	approve(locals.auth);

	return {
		form: await superValidate(zod(formSchema)),
	};
};

export const actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, zod(formSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		return message(form, "Form posted successfully!");
	},
};
