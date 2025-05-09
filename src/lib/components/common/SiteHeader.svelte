<script>
	import socialInfo from '$lib/configs/socialInfo';
	import { cn } from '$lib/utils/cssUtils';
	import NavLink from './NavLink.svelte';
	import Dropdown from './Dropdown.svelte';
	import { MenuIcon } from 'lucide-svelte';
</script>

<header
	class={cn(
		'sticky top-0 z-20',
		'px-4 py-1',
		'shadow-sm backdrop-blur-sm',
		'bg-stone-100/70 dark:bg-stone-800/70'
	)}
>
	<nav class="flex items-center justify-between">
		<NavLink href="/">
			<div class="flex items-center gap-3">
				<img
					src="/favicon.png"
					alt="crow"
					class="h-4 w-4 hover:animate-pulse"
				/>
				<h1>Hendra Sadewa</h1>
			</div>
		</NavLink>
		<div class="block md:hidden">
			<Dropdown>
				{#snippet toggle()}
					<MenuIcon size="18" />
				{/snippet}
				<div class="flex flex-col gap-3 px-2 py-1 text-sm">
					<NavLink href="/post">post</NavLink>
					<NavLink href="/about">about</NavLink>
					<NavLink href="/app">app</NavLink>
					{#each socialInfo as item}
						<NavLink href={item.url}>{item.name}</NavLink>
					{/each}
				</div>
			</Dropdown>
		</div>
		<div class="hidden items-center gap-3 md:flex">
			<NavLink href="/post">post</NavLink>
			<NavLink href="/about">about</NavLink>
			<NavLink href="/app">app</NavLink>
			{#each socialInfo as item}
				<NavLink href={item.url}>{item.name}</NavLink>
			{/each}
		</div>
	</nav>
</header>
