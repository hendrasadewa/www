<script>
	export let data;

	const { error = 'Login failure, please try again' } = data;
</script>

<header>
	<h1>Login Failure!</h1>
</header>
<main>
	<div>
		<p>{error}</p>
	</div>
	<a href="/app/lastfm">Safely back home</a>
</main>
