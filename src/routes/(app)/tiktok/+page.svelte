<script>
	import { onMount } from "svelte"
	import DownloadIcon from "~/assets/icons/download.svg?component"
	import Dropdown from "~/components/elements/dropdown.svelte"
	import Text from "~/components/elements/text.svelte"
	import { csvParse } from "d3-dsv"
	import { queryParam } from "sveltekit-search-params"
	import Radio from "~/components/elements/radio.svelte"
	import { languages } from "~/config.json"
	import { getAsyncData } from "~/lib/data.js"
	import Link from "~/components/elements/link.svelte"

	export let data

	const { queries } = data
	let { entries } = data

	let loading = false
	let query = queryParam("query")
	let lang = queryParam("lang")

	$: showEntries = entries?.length && $query && $lang
	$: selectedLang = languages?.[$lang]
	$: filteredEntries = entries?.filter?.((entry) => entry?.query === $query)

	$: url = selectedLang
		? `/tiktok/${selectedLang.code}/prototype/${selectedLang.fileName}`
		: null

	const watchLang = async (lang) => {
		if (loading || !lang) return
		loading = true
		const { data: dataFetch, error: errorFetch } = await getAsyncData({
			key: `tiktok-${lang}`,
			url,
			type: "text",
		})

		entries = dataFetch ? csvParse(dataFetch) : undefined
		loading = false

		if (selectedLang.code !== lang) {
			watchLang(selectedLang?.code)
		}
	}

	$: watchLang(selectedLang?.code)
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
				<Link {url} theme="download" class="flex gap-xxs items-center">
					<Text typo="1" content="data" />
					<DownloadIcon width="8" />
				</Link>
				<Link {url} theme="download" class="flex gap-xs items-center">
					<Text typo="1" content="view protocol" />
				</Link>
			</div>
		</div>
	</div>
	<div class="container">
		{#if showEntries}
			{JSON.stringify(filteredEntries)}
		{/if}
		<!-- <h1>Welcome to About</h1>
		<p>Visit <a href="/">kit.svelte.dev</a> to read the documentation</p> -->
	</div>
</div>

<style lang="postcss">
	.page {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	.sidebar {
		border-right: var(--border-default);
		@media (--m) {
			width: 23vw;
		}
	}

	.container {
		width: 100%;
		height: 100%;
		overflow: auto;
	}
</style>
