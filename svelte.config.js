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
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: "build",
			assets: "build",
			fallback: "index.html",
			precompress: false,
			strict: true,
		}),
		alias: {
			"~/*": "src/*",
		},
		paths: {
			base: process.env.BASE_PATH || "",
		},
	},
}

export default config
