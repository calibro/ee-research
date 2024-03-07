import { languages } from "~/config.json"
import { error, redirect } from "@sveltejs/kit"
import { getAsyncData } from "~/lib/data"

/** @type {import('../$types').PageLoad} */
export function load({ params, fetch }) {
	const { lang, slug } = params
	const selectedLang = languages[lang]

	if (!selectedLang) redirect(301, "/tiktok")

	const {data: clusetersData} = await getAsyncData({
		key: `tiktok:${lang}:${slug}:clusters`,
		url: `/tiktok/${selectedLang.code}/prototype/${selectedLang.fileName}`,
	})

	const {data: videoData} = await getAsyncData({
		key: `tiktok:${lang}:${slug}:video`,
		url: `/tiktok/${selectedLang.code}/prototype/videos.csv`,
	})

	return {
		lang,
	}
}
