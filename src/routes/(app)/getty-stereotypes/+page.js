import { languages } from "~/config.json"
import { getAsyncData } from "~/lib/data"
import { csvParse } from "d3"
import { error } from "@sveltejs/kit"
import { base } from "$app/paths"

export const prerender = false
export const csr = true
export const ssr = false

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const url = `${base}/assets/gettyimages/queries.csv`
	const { data, error } = await getAsyncData(
		{
			key: `gettyimages-queries`,
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

	console.log(queries)
	return { queries }
}
