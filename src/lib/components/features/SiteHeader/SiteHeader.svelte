<script>
	import NavLink from './NavLink.svelte';
	import Layout from './Layout.svelte';
	import Menu from './Menu.svelte';
	import NavigationList from './NavigationList.svelte';
</script>

<Layout>
	<NavLink href="/">
		<div class="flex items-center gap-3">
			<img src="/favicon.png" alt="crow" class="h-4 w-4 hover:animate-pulse" />
			<h1>Hendra Sadewa</h1>
		</div>
	</NavLink>

	<div class="flex items-center gap-2">
		<section id="internal" class="hidden md:block">
			<NavigationList />
		</section>
		<Menu />
	</div>
</Layout>
