import adapter from '@sveltejs/adapter-auto';
import sp from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), sp({ postcss: true })],

	kit: {
		adapter: adapter()
	}
};

export default config;
