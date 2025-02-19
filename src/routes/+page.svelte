<script>
    import { SignedIn, UserButton } from "svelte-clerk";
</script>

<div>
    <h1>Index Route</h1>
    <SignedIn>
        <UserButton />
    </SignedIn>
</div>
