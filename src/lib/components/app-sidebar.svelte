<script lang="ts">
	import Calendar from "lucide-svelte/icons/calendar";
	import House from "lucide-svelte/icons/house";
	import Inbox from "lucide-svelte/icons/inbox";
	import Search from "lucide-svelte/icons/search";
	import Settings from "lucide-svelte/icons/settings";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
	import Button from "./ui/button/button.svelte";
	import { SignedIn, UserButton } from "svelte-clerk";
	const sidebar = useSidebar();

	// Menu items.
	const items = [
		{
			title: "Home",
			url: "#",
			icon: House,
		},
		{
			title: "Inbox",
			url: "#",
			icon: Inbox,
		},
		{
			title: "Calendar",
			url: "#",
			icon: Calendar,
		},
		{
			title: "Search",
			url: "#",
			icon: Search,
		},
		{
			title: "Settings",
			url: "#",
			icon: Settings,
		},
	];
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer>
		<SignedIn>
			<UserButton />
		</SignedIn>
	</Sidebar.Footer>
</Sidebar.Root>

{#if sidebar.isMobile}
	<Button onclick={() => sidebar.toggle()}>toggle</Button>
{/if}
