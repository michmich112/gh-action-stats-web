<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from '$lib/services/auth';
	export let classes = 'btn btn-ghost rounded-btn';
</script>

{#if !$page.data.session}
	<button on:click={signIn} class={classes}>Sign In</button>
{:else}
	<div>
		{$page.data.session.user.email}
		<button on:click={signOut} class={classes}>Sign Out</button>
	</div>
{/if}
