import { languages } from "~/config.json"
import { getAsyncData } from "~/lib/data"
import { csvParse } from "d3"
import { error } from "@sveltejs/kit"

export const prerender = false
export const ssr = false
export const csr = true

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const { lang, query, slug } = params

	const langData = languages[lang]
	if (!langData) {
		return error(404, "Not found")
	}

	const baseUrl = `/tiktok/${langData.code}`
	const clusterUrl = `${baseUrl}/clusters_${langData.code}.csv`

	const { data: clusterData, error: clusterError } = await getAsyncData(
		{
			key: `tiktok-${langData.code}-data`,
			url: clusterUrl,
			type: "text",
		},
		fetch
	)

	if (!clusterData || clusterError) {
		console.error("error", clusterError)
		return error(404, "Not found")
	}

	let videosIds = []

	const entries = csvParse(clusterData)?.filter?.(
		(entry) => entry?.querySlug === query && entry?.cluster === slug
	)

	const cluster = {
		label: entries[0]?.clusterLabel,
		slug: entries[0]?.cluster,
	}

	videosIds = entries
		?.map((entry) => entry.ids)
		?.join("|")
		?.split("|")

	if (!videosIds?.length) {
		return error(404, "Not found")
	}

	const videosUrl = `${baseUrl}/videos_${langData.code}.csv`

	const { data: videosData, error: videosError } = await getAsyncData(
		{
			key: `tiktok-${langData.code}-videos`,
			url: videosUrl,
			type: "text",
		},
		fetch
	)

	if (!videosData || videosError) {
		console.error("error", videosError)
		return error(404, "Not found")
	}

	const videos = csvParse(videosData)?.filter?.((video) =>
		videosIds.includes(video.id)
	)

	return { videos, cluster, lang, query }
}
