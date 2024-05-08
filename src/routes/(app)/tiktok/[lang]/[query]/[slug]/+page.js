import { base } from "$app/paths"
import { error } from "@sveltejs/kit"
import { csvParse, groups } from "d3"
import { languages } from "~/config.json"
import { getAsyncData } from "~/lib/data"

export const prerender = false
export const csr = true
export const ssr = false

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const { lang, query, slug } = params

	const langData = languages[lang]
	if (!langData) {
		return error(404, "Not found")
	}

	const baseUrl = `${base}/assets/tiktok/${langData.code}`
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

	const unfilteredEntries = csvParse(clusterData)
	const entries = unfilteredEntries?.filter?.((entry) => {
		return entry?.querySlug === query && entry?.cluster === slug
	})

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

	const videosUrl = `${base}/assets/tiktok/videos.csv`

	const { data: videosData, error: videosError } = await getAsyncData(
		{
			key: `tiktok-videos`,
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

	const downloadData = groups(entries, (d) => d.cluster)
		.map((d) => {
			d[2] = [...new Set(d[1].map((d) => d.ids.split("|")).flat())].length
			return d
		})
		.sort((a, b) => descending(a[2], b[2]))

	return { videos, cluster, lang, query, downloadData }
}
