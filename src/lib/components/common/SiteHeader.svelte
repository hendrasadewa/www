<script>
	import BoxesIcon from 'lucide-svelte/icons/boxes';
	import ScrollTextIcon from 'lucide-svelte/icons/scroll-text';
	import GripIcon from 'lucide-svelte/icons/grip';
	import InfoIcon from 'lucide-svelte/icons/info';
	import TableIcon from 'lucide-svelte/icons/table';

	import socialInfo from '$lib/configs/socialInfo';
	import { cn } from '$lib/utils/cssUtils';

	import NavLink from './NavLink.svelte';
	import Dropdown from './Dropdown.svelte';

	import AppIcon from './AppIcon.svelte';
</script>

<header
	class={cn(
		'sticky top-0 z-20',
		'px-4 py-1',
		'shadow-sm backdrop-blur-sm',
		'bg-stone-100/70 dark:bg-stone-800/70',
		'text-sm'
	)}
>
	<nav class="flex w-full items-center justify-between">
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

		<div class="flex items-center gap-2">
			<section id="internal" class="hidden md:block">
				<ul class="grid grid-cols-3 gap-2 gap-y-4 py-2">
					<li>
						<NavLink href="/post">Blog</NavLink>
					</li>
					<li>
						<NavLink href="/app">Apps</NavLink>
					</li>
					<li>
						<NavLink href="/about">About</NavLink>
					</li>
				</ul>
			</section>
			<Dropdown>
				{#snippet toggle()}
					<GripIcon size="14" />
				{/snippet}
				<nav class="flex w-full flex-col gap-3 p-2">
					<section id="internal" class="block md:hidden">
						<h2 class="py-2 font-bold">Contents</h2>
						<ul class="grid grid-cols-3 gap-2 gap-y-4 py-2">
							<li>
								<NavLink href="/post">
									<AppIcon name="Blog" icon={ScrollTextIcon} />
								</NavLink>
							</li>
							<li>
								<NavLink href="/app">
									<AppIcon name="Apps" icon={BoxesIcon} />
								</NavLink>
							</li>
							<li>
								<NavLink href="/about">
									<AppIcon name="About" icon={InfoIcon} />
								</NavLink>
							</li>
						</ul>
					</section>
					<section id="applications">
						<h2 class="py-2 font-bold">Apps</h2>
						<ul class="grid grid-cols-3 gap-2 gap-y-4 py-2">
							<li>
								<NavLink href="/app/tukang-csv">
									<AppIcon name="Tukang CSV" icon={TableIcon} />
								</NavLink>
							</li>
						</ul>
					</section>
					<section id="social-info">
						<h2 class="pb-2 font-bold">Social Media</h2>
						<ul class="w-full space-y-2">
							{#each socialInfo as item}
								<li class="flex w-full py-1">
									<NavLink href={item.url} class="w-full">
										<span>{item.name}</span>
									</NavLink>
								</li>
							{/each}
						</ul>
					</section>
				</nav>
			</Dropdown>
		</div>
	</nav>
</header>
