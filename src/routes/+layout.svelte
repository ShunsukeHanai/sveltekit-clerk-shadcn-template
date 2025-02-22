<script lang="ts">
	import "../app.css";
	import type { Snippet } from "svelte";
	import { ClerkProvider } from "svelte-clerk";
	import { jaJP } from "@clerk/localizations";
	import { Toaster } from "$lib/components/ui/sonner/index.js";

	const { children }: { children: Snippet } = $props();
</script>

<Toaster />

<ClerkProvider
	localization={jaJP}
	signInFallbackRedirectUrl="/home"
	signUpFallbackRedirectUrl="/home"
>
	{@render children()}
</ClerkProvider>
