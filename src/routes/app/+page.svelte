<script lang="ts">
	import TableIcon from 'lucide-svelte/icons/table';
	import { SEO } from '$lib/commons/components/SEO';
</script>

<SEO
	categories={['Apps']}
	description="Collection of apps that I built"
	title="Apps"
/>

<div class="space-y-4 p-4">
	<header>
		<h1 class="text-xl font-bold">Apps</h1>
		<p class="text-sm">App(s) created by Hendra</p>
	</header>
	<main class="flex items-center">
		<div class="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
			<article class="rounded-lg p-2 transition-shadow hover:shadow-lg">
				<a href="app/tukang-csv" class="flex items-center gap-2">
					<TableIcon size="48" class="" />
					<div class="flex flex-col">
						<span class="font-bold">Tukang CSV</span>
						<span class="text-sm"> Collection of CSV tools [wip] </span>
					</div>
				</a>
			</article>
		</div>
	</main>
</div>
