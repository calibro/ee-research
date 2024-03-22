<script>
	import { queryParam } from "sveltekit-search-params"
	import { languages } from "~/config.json"
	import { getAsyncData } from "~/lib/data.js"
	import { csvParse, group } from "d3"
	import CirclePacking from "~/components/graphs/circlePacking.svelte"
	import { browser } from "$app/environment"
	import Sidebar from "~/components/elements/sidebar.svelte"
	import Link from "~/components/elements/link.svelte"

	let queries,
		entries,
		loading = false,
		query = queryParam("query"),
		lang = queryParam("lang")

	$: showEntries = entries?.length && $query && $lang
	$: selectedLang = languages?.[$lang] || languages?.us
	$: filteredEntries = entries?.filter?.((entry) => entry?.querySlug === $query)

	$: baseUrl = `/tiktok/${selectedLang?.code}`

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

	const getUrl = (cluster) => {
		const clusterSlug = cluster?.[0]
		return `${baseUrl}/${$query}/${clusterSlug}`
	}
</script>

<div class="page m:flex-start-start">
	<Sidebar {queries} {dataUrl} />
	{#if showEntries}
		<div
			class="container flex-col-start-start gap-m py-m px-s m:grid-3-m m:p-m"
		>
			{#each clusters as cluster}
				<Link url={getUrl(cluster)} class="contents">
					<CirclePacking {cluster} />
				</Link>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.container {
		flex: 1 1 0;
		min-height: calc(var(--vh) * 100 - var(--nav-height) - 1px);
		background: var(--color-grey);
		@media (--m) {
			border-left: var(--border-default);
			grid-template-rows: min-content;
		}
	}
</style>
