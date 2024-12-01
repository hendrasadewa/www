<script lang="ts">
	import siteInfo from "$lib/configs/siteInfo";

	export let title = siteInfo.defaultTitle;
	export let description = siteInfo.defaultDescription;
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={description} name="description" />
	<meta property="og:title" content={title} />
</svelte:head>
