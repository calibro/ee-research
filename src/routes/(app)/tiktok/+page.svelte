<script>
	import DownloadIcon from "~/assets/icons/download.svg?component"
	import Dropdown from "~/components/elements/dropdown.svelte"
	import Text from "~/components/elements/text.svelte"
	import Radio from "~/components/elements/radio.svelte"
	import Link from "~/components/elements/link.svelte"
	import { queryParam } from "sveltekit-search-params"
	import { languages } from "~/config.json"
	import { getAsyncData } from "~/lib/data.js"
	import { csvParse, group } from "d3"
	import CirclePacking from "~/components/graphs/circlePacking.svelte"
	import { browser } from "$app/environment"
	import Sidebar from "~/components/elements/sidebar.svelte"

	let queries,
		entries,
		loading = false,
		query = queryParam("query"),
		lang = queryParam("lang")

	$: showEntries = entries?.length && $query && $lang
	$: selectedLang = languages?.[$lang] || languages?.us
	$: filteredEntries = entries?.filter?.((entry) => entry?.querySlug === $query)

	$: baseUrl = `/tiktok/${selectedLang?.code}/prototype`

	$: dataUrl = selectedLang ? `${baseUrl}/${selectedLang.fileName}` : null

	const watchLang = async (lang = "us") => {
		if (loading || !browser) return

		loading = true
		const { data: dataFetch, error: errorFetch } = await getAsyncData({
			key: `tiktok-${lang}-data`,
			url: dataUrl,
			type: "text",
		})

		if (dataFetch) {
			entries = csvParse(dataFetch)
			if (!queries?.length) {
				queries = []
				entries.forEach((el) => {
					if (!queries.find((query) => query.slug === el.querySlug)) {
						queries.push({ slug: el.querySlug, title: el.query })
					}
				})
			}
		} else {
			entries = null
		}

		loading = false

		// if (selectedLang?.code !== lang) {
		// 	watchLang(selectedLang?.code)
		// }
	}

	$: watchLang(selectedLang?.code)
	$: clusters = showEntries ? group(filteredEntries, (d) => d.cluster) : []
</script>

<div class="page flex-start-start">
	<Sidebar {queries} {dataUrl} />
	{#if showEntries}
		<div class="container m:grid-3-m p-m">
			{#each clusters as cluster}
				<CirclePacking {cluster} />
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.container {
		border-left: var(--border-default);
		flex: 1 1 0;
		min-height: calc(var(--vh) * 100 - var(--nav-height) - 1px);
		background: var(--color-grey);
	}
</style>
