import { csvParse } from "d3-dsv"
import { slugify } from "$lib"

export async function load({ params, fetch }) {
	const response = await fetch("/tiktok/FR/prototype/clusters_fr.csv")
	const result = await response.text()

	const entries = csvParse(result)
	const tempQueries = []

	entries.forEach((el) => {
		if (!tempQueries.includes(el.query)) {
			tempQueries.push(el.query)
		}
	})

	const queries = tempQueries.map((el) => {
		return {
			slug: slugify(el),
			title: el.charAt(0).toUpperCase() + el.slice(1),
		}
	})

	return {
		queries,
		entries,
	}
}
