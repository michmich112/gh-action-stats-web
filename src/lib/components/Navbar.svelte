<script lang="ts">
	import { page } from '$app/stores';

	import GithubAuth from './GithubAuth.svelte';

	$: ({ session } = $page.data);
</script>

<nav class="flex items-center justify-between flex-wrap p-3 border-gray-50 shadow-md">
	<div class="flex items-center justify-start gap-3">
		<div class="flex flex-row items-center gap-1 clickable">
			<img src="/gha-stats-logo.png" alt="Logo" class="nav-img rounded-3xl" />
			<a href="/" class="clickable"> GitHub Action Stats </a>
		</div>
		<a href="/get-started" class="clickable"> Get Started </a>
	</div>
	<div>
		{#if session}
			<div class="h-100 flex flex-row items-center gap-2 clickable">
				{session.user.user_metadata.name}
				<img
					src={session.user.user_metadata.avatar_url}
					alt="user_icon "
					class="nav-img rounded-3xl"
				/>
			</div>
		{:else}
			<GithubAuth />
		{/if}
	</div>
</nav>

<style lang="postcss">
	.clickable {
		@apply hover:bg-gray-200;
	}

	.nav-img {
		@apply object-scale-down h-8 w-8;
	}
</style>
