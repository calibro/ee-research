import { sveltekit } from "@sveltejs/kit/vite"
// import UnoCSS from "unocss/vite"
import svg from "@poppanator/sveltekit-svg"

import { defineConfig } from "vite"

export default defineConfig({
	plugins: [
		// UnoCSS(),
		svg({
			includePaths: ["./src/assets/icons/"],
			svgoOptions: {
				plugins: [{ name: "removeAttrs", params: { attrs: "(width|height)" } }],
			},
		}),
		sveltekit(),
	],
})
