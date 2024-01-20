<script>
	import { navigating, page } from '$app/stores';
	import { socials } from '$lib/basicInfo';
	import { fade } from 'svelte/transition';

	let currentRoute = $page.route.id;

	$: if ($navigating) {
		currentRoute = $page.route.id;
	}
</script>

<nav
	class="flex items-center justify-between p-4 bg-spring-wood-50 bg-opacity-95"
>
	<div>
		{#if currentRoute === '/'}
			<a in:fade href="/">hendra sadewa</a>
		{:else}
			<a in:fade href="/" class="flex items-center gap-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-5 h-5"
				>
					<path
						fill-rule="evenodd"
						d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>home</span>
			</a>
		{/if}
	</div>
	<ul class="flex items-center gap-4">
		{#each socials as social}
			<li>
				<a href={social.url}>
					<img src={social.icon} alt={social.name} class="h-4" />
				</a>
			</li>
		{/each}
	</ul>
</nav>
