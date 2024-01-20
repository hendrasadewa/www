<script lang="ts">
	export let data: {
		title: string;
		description: string;
		date: Date;
		content: any;
		tags: string[];
	};
</script>

{#if data}
	<main>
		<svelte:component this={data.content} />
	</main>
{/if}
