<script lang="ts">
	// import { stringify } from 'postcss';
	import type { PageData } from './$types';
	import { echarts } from '$lib/echarts';
	import { getDailyChartOptions } from '$lib/utils/daily-chart';
	export let data: PageData;
	$: ({ action, error } = data);

	$: options = getDailyChartOptions(action);
</script>

<div class="text-sm breadcrumbs pl-7">
	<ul>
		<li><a href="/dashboard">Dashboard</a></li>
		<li>{action?.name ?? 'Error'}</li>
	</ul>
</div>
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
	{#if options}
		<div class="stats shadow w-full">
			<div class="stat w-full h-80" use:echarts={options} />
		</div>
	{/if}
{:else}
	<div>Error</div>
{/if}
