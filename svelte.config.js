import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
// import sveltePreprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		// sveltePreprocess({
		// 	postcss: {
		// 		configFilePath: "./postcss.config.js",
		// 	},
		// }),
		vitePreprocess(),
	],
	kit: {
		adapter: adapter(),
		alias: {
			"~/*": "src/*",
		},
	},
}

export default config
