<script>
	import { Button } from '$lib/commons/components/Button';

	let username = $state('');
	let password = $state('');
</script>

<form class="flex w-[420px] flex-col gap-3" method="POST">
	<header>
		<h1 class="text-xl">Welcome back</h1>
		<p class="text-gray-500">Please login with your account to continue</p>
	</header>
	<section
		class="flex border-collapse flex-col gap-2 rounded-xl border border-gray-200"
	>
		<label for="username" class="border-b border-gray-200 px-2 py-1">
			<span class="text-sm text-gray-500"> Username or Email </span>
			<input
				id="username"
				type="text"
				class="w-full focus:outline-none"
				name="username"
				bind:value={username}
			/>
		</label>
		<label for="password" class="px-2 py-1">
			<span class="text-sm text-gray-500">Password</span>
			<input
				id="password"
				type="password"
				class="w-full focus:outline-none"
				name="password"
				bind:value={password}
			/>
		</label>
	</section>
	<Button variant="solid" type="submit">Login</Button>
</form>
