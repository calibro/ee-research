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

<div class="page flex">
	<div class="sidebar flex flex-col gap-l pt-l px-m">
		<div class="group flex flex-col gap-xs">
			<Text typo="1" content="Query" class="case-upper" />
			<Dropdown items={queries} bind:value={$query} />
		</div>
		<div class="group flex flex-col gap-xs">
			<Text typo="1" content="Language" class="case-upper" />
			<Radio items={languages} bind:value={$lang} />
		</div>
		<div class="group flex flex-col gap-xs">
			<Text typo="1" content="Resources" class="case-upper" />
			<div class="flex gap-xs">
				<Link url={dataUrl} theme="download" class="flex gap-xxs items-center">
					<Text typo="1" content="data" />
					<DownloadIcon width="8" />
				</Link>
				<Link url={dataUrl} theme="download" class="flex gap-xs items-center">
					<Text typo="1" content="view protocol" />
				</Link>
			</div>
		</div>
	</div>
	{#if showEntries}
		<div class="container m:grid-3-m">
			{#each clusters as cluster}
				<CirclePacking {cluster} />
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.page {
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}
	.sidebar {
		position: sticky;
		top: 0;
		border-right: var(--border-default);
		@media (--m) {
			width: 23vw;
		}
	}

	.container {
		flex: 1 1 0;
	}
</style>
