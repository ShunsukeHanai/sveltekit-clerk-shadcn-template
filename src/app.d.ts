/// <reference types="svelte-clerk/env" />

export type Roles = "admin" | "staff";
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface CustomJwtSessionClaims {
		metadata: {
			role?: Roles;
		};
	}
}
