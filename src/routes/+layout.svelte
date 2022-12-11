<script lang="ts">
	import '../app.css';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
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

<div class="h-screen flex flex-col justify-between">
	<div>
		<Navbar />
		<slot />
	</div>

	<Footer />
</div>
