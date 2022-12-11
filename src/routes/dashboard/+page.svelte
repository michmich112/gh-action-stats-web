<script lang="ts">
	// auth redirect is done serverside
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ session } = data); // get data
</script>

<h1>
	{session?.user.email}
	<pre>{JSON.stringify(session, null, 2)}</pre>
</h1>
