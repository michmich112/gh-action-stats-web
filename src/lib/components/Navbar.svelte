<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '$lib/services/auth';
	import { clickOutside } from '$lib/directives/clickOutside';

	import GithubAuth from './GithubAuth.svelte';

	$: ({ session } = $page.data);
	let userToggle = false;

	function toggleUserDropdown() {
		userToggle = !userToggle;
	}
</script>

<nav class="flex items-center justify-between flex-wrap p-3 border-gray-50 shadow-md">
	<div class="flex items-center justify-start gap-3">
		<img src="/gha-stats-logo.png" alt="Logo" class="nav-img rounded-3xl" />
		<a href="/" class="clickable"> GitHub Action Stats </a>
		<a href="/get-started" class="clickable"> Get Started </a>
	</div>
	<div>
		{#if session}
			<button
				id="userInfoButton"
				class="flex flex-row items-center gap-1 clickable"
				on:click={() => (userToggle = !userToggle)}
			>
				<div class="h-100 flex flex-row items-center gap-2 clickable">
					{session.user.user_metadata.name}
					<img
						src={session.user.user_metadata.avatar_url}
						alt="user_icon "
						class="nav-img rounded-3xl"
					/>
				</div>
			</button>
			{#if userToggle}
				<div
					id="userInfo"
					class={`absolute z-10 max-w-45 right-1 bg-white rounded mt-[5px] mr-[5px] divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
					use:clickOutside
					on:click_outside={() => (userToggle = false)}
				>
					<div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
						<div>{session.user.user_metadata.name}</div>
						<div class="truncate">{session.user.email}</div>
					</div>
					<ul
						class="py-1 text-sm text-gray-700 dark:text-gray-200"
						aria-labelledby="userInfoButton"
					>
						<li>
							<a
								href="/dashboard"
								class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								on:click={toggleUserDropdown}>Dashboard</a
							>
						</li>
						<li>
							<a
								href="/settings"
								class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								disabled
								on:click={toggleUserDropdown}>Settings</a
							>
						</li>
					</ul>
					<div class="py-1">
						<button
							on:click={signOut}
							class="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>Sign out</button
						>
					</div>
				</div>
			{/if}
		{:else}
			<GithubAuth />
		{/if}
	</div>
</nav>

<!-- {#if session} -->
<!-- 	<div -->
<!-- 		id="userInfo" -->
<!-- 		class={`${ -->
<!-- 			userToggle ? 'absolute' : 'hidden' -->
<!-- 		} z-10 w-45 bg-whiter rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`} -->
<!-- 	> -->
<!-- 		<div class="py-3 px-4 text-sm text-gray-900 dark:text-white"> -->
<!-- 			<div>{session.user.user_metadata.name}</div> -->
<!-- 			<div class="truncate">{session.user.email}</div> -->
<!-- 		</div> -->
<!-- 		<ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="userInfoButton"> -->
<!-- 			<li> -->
<!-- 				<a -->
<!-- 					href="/dashboard" -->
<!-- 					class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" -->
<!-- 					>Dashboard</a -->
<!-- 				> -->
<!-- 			</li> -->
<!-- 			<li> -->
<!-- 				<a -->
<!-- 					href="/settings" -->
<!-- 					class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" -->
<!-- 					>Settings</a -->
<!-- 				> -->
<!-- 			</li> -->
<!-- 		</ul> -->
<!-- 		<div class="py-1"> -->
<!-- 			<button -->
<!-- 				on:click={signOut} -->
<!-- 				class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" -->
<!-- 				>Sign out</button -->
<!-- 			> -->
<!-- 		</div> -->
<!-- 	</div> -->
<!-- {/if} -->

<!---->
<style lang="postcss">
	.clickable {
		@apply hover:bg-gray-200;
	}

	.nav-img {
		@apply object-scale-down h-8 w-8;
	}
</style>
