<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ action, error } = data);
</script>

{#if error}
	<p>Error</p>
{:else}
	<p>{JSON.stringify(action)}</p>
{/if}
