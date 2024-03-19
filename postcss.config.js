import postcssGetTokens from "./postcss-get-tokens.js"
import postcssNested from "postcss-nested"
import postcssPresetEnv from "postcss-preset-env"

const config = {
	plugins: [
		postcssGetTokens({ path: "./src/css/tokens.json" }),
		postcssNested(),
		postcssPresetEnv({
			stage: 0,
			features: {
				"nesting-rules": false,
			},
		}),
	],
}

export default config
