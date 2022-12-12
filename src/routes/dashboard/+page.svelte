<script lang="ts">
	// auth redirect is done serverside
	import GithubActionButton from '$lib/components/GithubActionButton.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ ownedActions } = data); // get data
</script>

<h1 class="font-bold text-xl text-center my-3">Your actions</h1>
{#if ownedActions && ownedActions.length > 0}
	<div class="flex flex-col gap-y-2 mx-3">
		{#each ownedActions as action}
			<GithubActionButton bind:action />
		{/each}
	</div>
{/if}
<!-- <pre>{JSON.stringify(session, null, 2)}</pre> -->
<!-- <pre>{JSON.stringify(ownedActions, null, 2)}</pre> -->
