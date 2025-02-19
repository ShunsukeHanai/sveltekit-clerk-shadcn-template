<script lang="ts">
	import "../app.css";
	import type { Snippet } from "svelte";
	import { ClerkProvider } from "svelte-clerk";
	import { jaJP } from "@clerk/localizations";

	const { children }: { children: Snippet } = $props();
</script>

<ClerkProvider
	localization={jaJP}
	signInFallbackRedirectUrl="/home"
	signUpFallbackRedirectUrl="/home"
>
	{@render children()}
</ClerkProvider>
