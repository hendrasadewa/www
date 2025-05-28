<script lang="ts">
	import env from '$lib/domains/lastfm/configs/env.configs';

	const href = $derived.by(() => {
		const loginHref = new URL(env.LOGIN_URL);
		const cbURL = new URL(env.CALLBACK_URL);
		loginHref.searchParams.append('api_key', env.API_KEY);
		loginHref.searchParams.append('cb', cbURL.toString());

		return loginHref.toString() || '';
	});
</script>

<div>
	<header>
		<h1>Login to Continue</h1>
	</header>
	<section>
		<p>
			You need to log in to Last.fm to continue. Click the button below to
			authenticate.
		</p>
		<a {href} class="button">Login with Last.fm</a>
	</section>
</div>
