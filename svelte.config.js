import adapter from "@sveltejs/adapter-static"
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
		adapter: adapter({
			pages: "build",
			assets: "build",
			strict: false,
			fallback: "404.html",
		}),
		paths: {
			base: process.env.BASE_PATH || "",
		},
		alias: {
			"~/*": "src/*",
		},
	},
}

export default config
