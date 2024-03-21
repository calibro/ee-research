import { languages } from "~/config.json"
import { group, csvParse } from "d3"
import { redirect } from "@sveltejs/kit"
import { getAsyncData } from "~/lib/data"

/** @type {import('../$types').PageLoad} */
export async function load({ params, fetch }) {
	const { lang, slug } = params
	const selectedLang = languages[lang]

	if (!selectedLang) redirect(301, "/tiktok")

	const { data: clustersData } = await getAsyncData(
		{
			key: `tiktok:${lang}:${slug}:clusters`,
			url: `/tiktok/${selectedLang.code}/prototype/${selectedLang.fileName}`,
			type: "text",
		},
		fetch
	)

	const data = csvParse(clustersData)
	const clusters = group(data, (d) => d.cluster)

	return {
		lang,
		clusters,
	}
}
