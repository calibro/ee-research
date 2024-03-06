import { languages } from "~/config.json"
import { error, redirect } from "@sveltejs/kit"

/** @type {import('../$types').PageLoad} */
export function load({ params }) {
	const { lang, slug } = params

	if (!languages[lang]) redirect(301, "/tiktok")

	return {
		lang,
	}
}
