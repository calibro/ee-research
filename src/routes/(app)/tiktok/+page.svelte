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
		loading = false

	let query = queryParam("query")
	let lang = queryParam("lang")

	$: showEntries = entries?.length && $query && $lang
	$: selectedLang = languages?.[$lang] || languages?.us
	$: filteredEntries = entries?.filter?.((entry) => entry?.querySlug === $query)

	$: baseUrl = `/tiktok/${selectedLang?.code}`

	$: dataUrl = selectedLang
		? `${baseUrl}/clusters_${selectedLang.code}.csv`
		: null

	const watchLang = async (langVal = Object.keys(languages)?.[0]) => {
		if (loading || !browser) return

		loading = true
		const { data, error } = await getAsyncData({
			key: `tiktok-${langVal}-data`,
			url: dataUrl,
			type: "text",
		})

		if (data) {
			entries = csvParse(data)
			if (!queries?.length) {
				queries = []
				entries.forEach((el) => {
					if (!queries.find((query) => query.slug === el.querySlug)) {
						queries.push({ slug: el.querySlug, title: el.query })
					}
				})
				if (!$query) {
					$query = queries[0]?.slug
				}
				if (!$lang) {
					$lang = langVal
				}
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

<div class="page l:flex-start-start">
	<Sidebar {queries} {dataUrl} />
	<div class="container p-s grid-1-s s:grid-2-s xl:grid-3-s xxl:grid-4-s">
		{#if showEntries}
			{#each clusters as cluster, i (`${$query}-${$lang}-${i}-${cluster?.[0]}`)}
				<Link url={getUrl(cluster)} class="contents">
					<CirclePacking {cluster} />
				</Link>
			{/each}
		{/if}
	</div>
</div>

<style lang="postcss">
	.container {
		flex: 1 1 0;
		min-height: calc(var(--vh, 1vh) * 100 - var(--nav-height, 0px) - 1px);
		background: var(--color-grey);
		@media (--l) {
			/* border-left: var(--border-default); */
			grid-template-rows: min-content;
		}
	}
</style>
