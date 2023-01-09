<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '$lib/services/auth';

	import GithubAuth from './GithubAuth.svelte';

	$: ({ session } = $page.data);
	let userToggle = false;

	function toggleUserDropdown() {
		userToggle = !userToggle;
	}
</script>

<nav class="navbar bg-base-100">
	<div class="flex-none">
		<a href="/" class="btn btn-ghost ">
			<img src="/gha-stats-logo.png" alt="Logo" class="nav-img rounded-3xl" />
			<span class="hidden md:block">Github Actions Stats</span>
			<span class="md:hidden">GHA Stats</span>
		</a>
	</div>
	<div class="flex-1">
		<a href="/get-started" class="btn btn-ghost normal-case">Get Started</a>
	</div>

	<div>
		{#if session}
			<div class="dropdown dropdown-end">
				<label tabindex={0} class="btn btn-ghost btn-circle md:hidden">
					<div class="h-full flex flex-row items-center gap-2">
						<img
							src={session.user.user_metadata.avatar_url}
							alt="user_icon "
							class="nav-img rounded-3xl"
						/>
					</div>
				</label>
				<label tabindex={0} class="hidden btn btn-ghost md:block">
					<div class="h-full flex flex-row items-center gap-2">
						{session.user.user_metadata.name}
						<img
							src={session.user.user_metadata.avatar_url}
							alt="user_icon "
							class="nav-img rounded-3xl"
						/>
					</div>
				</label>

				<ul tabindex={0} class="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
					<li class="menu-title">
						<div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
							<div>{session.user.user_metadata.name}</div>
							<div class="truncate">{session.user.email}</div>
						</div>
					</li>
					<li>
						<a href="/dashboard" on:click={toggleUserDropdown}>Dashboard</a>
					</li>
					<li>
						<a href="/settings" disabled on:click={toggleUserDropdown}>Settings</a>
					</li>
					<div class="divider" />
					<li>
						<div class="py-1">
							<button on:click={signOut} class="block w-full py-2 px-4 text-sm">Sign out</button>
						</div>
					</li>
				</ul>
			</div>
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
