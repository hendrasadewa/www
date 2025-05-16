<script>
	import BoxesIcon from 'lucide-svelte/icons/boxes';
	import ScrollTextIcon from 'lucide-svelte/icons/scroll-text';
	import GripIcon from 'lucide-svelte/icons/grip';
	import InfoIcon from 'lucide-svelte/icons/info';
	import TableIcon from 'lucide-svelte/icons/table';

	import { AppAvatar } from '$lib/commons/components/Avatar';
	import { Dropdown } from '$lib/commons/components/Dropdown';
	import { socialInfo } from '$lib/configs/site.config';

	import NavLink from './NavLink.svelte';
</script>

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
						<AppAvatar name="Blog" icon={ScrollTextIcon} />
					</NavLink>
				</li>
				<li>
					<NavLink href="/app">
						<AppAvatar name="Apps" icon={BoxesIcon} />
					</NavLink>
				</li>
				<li>
					<NavLink href="/about">
						<AppAvatar name="About" icon={InfoIcon} />
					</NavLink>
				</li>
			</ul>
		</section>
		<section id="applications">
			<h2 class="py-2 font-bold">Apps</h2>
			<ul class="grid grid-cols-3 gap-2 gap-y-4 py-2">
				<li>
					<NavLink href="/app/tukang-csv">
						<AppAvatar name="Tukang CSV" icon={TableIcon} />
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
