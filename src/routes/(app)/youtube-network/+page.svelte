<script>
	import { browser } from "$app/environment"
	import { base } from "$app/paths"
	import { createLockScrollStore, lockscroll } from "@svelte-put/lockscroll"
	import { csvParse, groups } from "d3"
	import { onMount, tick } from "svelte"
	import { queryParam } from "sveltekit-search-params"
	import Sidebar from "~/components/elements/sidebar.svelte"
	import YoutubeLang from "~/components/graphs/youtubeLang.svelte"
	import { languages } from "~/config"
	import { getAsyncData } from "~/lib/data.js"
	import { getTopicLabels } from "~/lib/metadata"

	export let data
	const { queries } = data

	const locked = createLockScrollStore()
	const tl = getTopicLabels("youtube_network")

	let entries,
		clusters,
		loading = false

	let query = queryParam("query")
	let lang = queryParam("lang")
	$: selectedLang = languages?.[$lang] || languages?.en

	onMount(async () => {
		await tick()
		if (!$query) {
			$query = queries[0]?.query
		}
		if (!$lang) {
			$lang = selectedLang?.code
		}
	})

	const baseUrl = `${base}/assets/youtube`

	$: dataUrl = selectedLang?.code
		? `${baseUrl}/clusters/${$query}_${selectedLang?.code?.toUpperCase()}.csv`
		: undefined

	const watchQuery = async () => {
		if (loading || !browser || !dataUrl) return

		loading = true
		if (!$query) {
			loading = false
			entries = null
			return
		}
		const { data, error } = await getAsyncData({
			key: `youtube-comparison-data`,
			url: dataUrl,
			type: "text",
		})

		if (data) {
			entries = csvParse(data)
		} else {
			entries = null
		}

		loading = false
	}

	$: clusters =
		entries?.length && !loading
			? groups(entries, (d) => d.cluster).sort((a, b) => {
					if (a[0] === "other") return 1
					if (b[0] === "other") return -1
					return a[0] > b[0] ? 1 : -1
				})
			: []

	$: dataUrl, watchQuery()
</script>

<svelte:body use:lockscroll={locked} />
<div class="page xl:flex-start-start">
	<Sidebar
		{queries}
		description={tl("description")}
		question={tl("research_question")}
	/>

	{#if loading}
		<div class="container flex-center-center">
			<p>Loading...</p>
		</div>
	{:else if !entries?.length}
		<div class="container flex-center-center">
			<p>No data available</p>
		</div>
	{:else}
		<div class="container p-s flex-col-start gap-s">
			{#if clusters.length && query}
				{#each clusters as cluster, i (`${i}-${cluster?.[0]}`)}
					<YoutubeLang {cluster} query={$query} />
				{/each}
			{/if}
		</div>
	{/if}
</div>

<style lang="postcss">
	.container {
		flex: 1 1 0;
		min-height: calc(var(--vh, 1vh) * 100 - var(--nav-height, 0px) - 1px);
		background: var(--color-grey);
		padding-bottom: calc(var(--nav-height) + var(--space-m));
		@media (--xl) {
			padding-bottom: var(--space-s);
			grid-template-rows: auto;
		}
	}
</style>
