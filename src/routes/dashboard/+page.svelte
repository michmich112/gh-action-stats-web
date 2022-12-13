<script lang="ts">
	// auth redirect is done serverside
	import GithubActionButton from '$lib/components/GithubActionButton.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ ownedActions, error } = data); // get data
</script>

<h1 class="font-bold text-2xl text-center my-3">Your actions</h1>
{#if !error}
	{#if ownedActions && ownedActions.length > 0}
		<div class="flex flex-col gap-y-2 mx-3">
			{#each ownedActions as action}
				<GithubActionButton bind:action />
			{/each}
		</div>
	{:else if ownedActions && ownedActions.length === 0}
		<div class="flex flex-col justify-center h-full">
			<div
				class="flex flex-col justify-center mx-3 text-center items-center p-3 gap-2 rounded-lg bg-gray-200"
			>
				<h2 class="text-xl font-semibold">No actions found!</h2>
				<p>
					Check our get started section to learn how to setup your action to start collection
					analytics.
				</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-arrow-down"
					><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg
				>
				<a
					class="w-48 bg-blue-400 shadow-md shadow-blue-200 py-3 font-semibold rounded-lg hover:bg-blue-200 hover:shadow-lg hover:shadow-blue-400 transition ease-in-out duration-75"
					href="/get-started"
				>
					Get started
				</a>
			</div>
		</div>
	{/if}
{:else}
	<div
		class="font-normal text-lg m-4 rounded-lg border-transparent shadow-lg shadow-red-400 text-black p-3 bg-red-200"
	>
		<h2 class="font-bold text-xl">Error loading your actions</h2>
		<p>
			Try reloading the page. If the error persists contact us at <a
				class="font-semibold underline"
				href="mailto:hello@actionstats.app?subject=Dashboard%20Issues">hello@actionstats.app</a
			>
		</p>
	</div>
{/if}
<!-- <pre>{JSON.stringify(session, null, 2)}</pre> -->
<!-- <pre>{JSON.stringify(ownedActions, null, 2)}</pre> -->
