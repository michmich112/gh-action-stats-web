<script lang="ts">
	import type { ActionMetadata } from '$lib/types/Action.type';
	import { getDateDifferenceString } from '$lib/utils/date-utils';
	import { clickOutside } from '$lib/directives/clickOutside';

	// props
	export let action: ActionMetadata;

	// core
	$: dateStr = getDateDifferenceString(action.last_update);
	let optionsToggle = false;
	function toggleOptions() {
		optionsToggle = !optionsToggle;
	}
</script>

<button
	class="w-full p-2 shadow-md rounded-md cursor-pointer transition ease-in-out duration-75 hover:shadow-xl hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:font-light hover:dark:bg-gray-500"
	on:click={() => console.log('tata')}
>
	<div class="flex flex-row justify-between items-center">
		<div class="truncate">
			{action.name}
		</div>
		<div class="flex flex-row justify-start items-center">
			<div>
				{dateStr}
			</div>
			<button
				id={`${action.name}-optionsButton`}
				on:click|stopPropagation={toggleOptions}
				use:clickOutside
				on:click_outside={() => (optionsToggle = false)}
			>
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
					class="feather feather-more-vertical"
					><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle
						cx="12"
						cy="19"
						r="1"
					/></svg
				>
			</button>
		</div>
	</div>

	{#if optionsToggle}
		<div
			id={`${action.name}-options`}
			class={`absolute z-10 min-w-15 max-w-45 right-1 mt-2 bg-white rounded mr-2 shadow dark:shadow-white dark:bg-gray-700 dark:divide-gray-600`}
		>
			<ul
				class="py-1 text-sm text-gray-700 dark:text-gray-200"
				aria-labelledby={`${action.name}-optionsButton`}
			>
				<li>
					<a
						class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white"
						href={encodeURI(`https://github.com/${action.creator}/${action.name}`)}
						target="_blank"
						rel="noreferrer"
					>
						View Repository
					</a>
				</li>
				<li>
					<!-- <a -->
					<!-- 	href={encodeURI(`/${action.creator}/${action.name}/badges`)} -->
					<!-- 	disabled -->
					<!-- 	class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:opacity-75 disabled:hover:bg-inherit cursor-not-allowed" -->
					<!-- 	>Badges</a -->
					<!-- > -->
					<a
						href={''}
						disabled
						class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:opacity-75 disabled:hover:bg-inherit cursor-not-allowed"
						>Badges</a
					>
				</li>
			</ul>
		</div>
	{/if}
</button>
