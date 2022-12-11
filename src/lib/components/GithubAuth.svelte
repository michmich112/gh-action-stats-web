<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from '$lib/services/auth';
</script>

{#if !$page.data.session}
	<button on:click={signIn}>Sign In</button>
{:else}
	<div>
		{$page.data.session.user.email}
		<button on:click={signOut}>Sign Out</button>
	</div>
{/if}
