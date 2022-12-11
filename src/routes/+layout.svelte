<script lang="ts">
	import '../app.css';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	import Navbar from '$lib/components/Navbar.svelte';
	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});
		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<Navbar />
<slot />
