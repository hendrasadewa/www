<script lang="ts">
	export let handle: string = '';
	export let avatar: string = '';

	const profileURL = `https://bsky.app/profile/${handle}`;
</script>

<a class="flex items-center gap-2" href={profileURL}>
	<img
		class="h-12 w-12 rounded-full shadow-sm"
		src={avatar}
		alt="{handle}'s avatar"
	/>
	<span>{handle}</span>
</a>
