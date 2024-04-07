import { base } from "$app/paths"
import { csvParse } from "d3"
import { getAsyncData } from "~/lib/data"

export const prerender = false
export const csr = true
export const ssr = false

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const url = `${base}/assets/youtube/queries.csv`
	const { data, error } = await getAsyncData(
		{
			key: `youtube-queries`,
			url,
			type: "text",
		},
		fetch
	)

	if (!data || error) {
		console.error("error", error)
		return error(404, "Not found")
	}

	const queries = csvParse(data)
	queries.sort((a, b) => a.queryLabel.localeCompare(b.queryLabel))

	return { queries }
}
