<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ action, error } = data);
</script>

{#if action}
	<!-- <p>{JSON.stringify(action)}</p> -->
	<div class="stats shadow">
		<div class="stat place-items-center">
			<div class="stat-title">Runs</div>
			<div class="stat-value">{action.metrics.runs}</div>
			<div class="stat-desc">All time</div>
		</div>

		<div class="stat place-items-center">
			<div class="stat-title">Repos</div>
			<div class="stat-value">{action.metrics.repo_count}</div>
			<div class="stat-desc">All time</div>
		</div>

		<div class="stat place-items-center">
			<div class="stat-title">Execution Latency</div>
			<div class="stat-value">{action.metrics.avg_latency}ms</div>
			<div class="stat-desc">All time</div>
		</div>
	</div>
{:else}
	<div>Error</div>
{/if}
