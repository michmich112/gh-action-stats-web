<script lang="ts">
	import type { PageData } from './$types';

	// import {page} from '$app/stores';
	export let data: PageData;
	$: ({ session } = data);
	if (!session) {
	}
</script>

<h1>
	{session?.user.email}
	<pre>{JSON.stringify(session, null, 2)}</pre>
</h1>
