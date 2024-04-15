<script>
	import { browser } from "$app/environment"
	import { base } from "$app/paths"
	import { createLockScrollStore, lockscroll } from "@svelte-put/lockscroll"
	import { csvParse, group, groups } from "d3"
	import { onMount, tick } from "svelte"
	import { queryParam } from "sveltekit-search-params"
	import Sidebar from "~/components/elements/sidebar.svelte"
	import YoutubeThumb from "~/components/thumb/youtube.svelte"
	import { languages } from "~/config.json"
	import { getAsyncData } from "~/lib/data.js"
	import { getTopicLabels } from "~/lib/metadata"

	export let data
	const { queries } = data

	const locked = createLockScrollStore()
	const topic = "youtube_language"
	const tl = getTopicLabels(topic)

	let entries,
		clusters,
		loading = false

	let query = queryParam("query")
	let lang = queryParam("lang")
	let order = queryParam("order")

	$: selectedLangs = $lang ? $lang?.split?.(" ").map?.((l) => languages[l]) : []

	onMount(async () => {
		await tick()
		if (!$query) {
			$query = queries[0]?.query
		}
		if (!$lang) {
			$lang = "en fr nl ph"
		}
		if (!$order) {
			$order = "views"
		}
	})

	const baseUrl = `${base}/assets/youtube`

	$: dataUrl = selectedLangs?.length
		? `${baseUrl}/data/${$query}.csv`
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
			entries = group(csvParse(data), (d) => d.language)
		} else {
			entries = null
		}

		loading = false
	}

	$: dataUrl, watchQuery()

	$: filteredEntries =
		selectedLangs?.length && entries?.size
			? groups(
					selectedLangs?.map?.((l) => entries.get(l.code.toUpperCase())).flat(),
					(d) => d.name
				).sort((a, b) => {
					switch ($order) {
						case "views":
							return b[1][0].viewCount - a[1][0].viewCount
						case "likes":
							return b[1][0].likeCount - a[1][0].likeCount
						case "comments":
							return b[1][0].commentCount - a[1][0].commentCount
						case "date":
							return b[1][0].publishedAtUnix - a[1][0].publishedAtUnix
						default:
							return 0
					}
				})
			: undefined
</script>

<svelte:body use:lockscroll={locked} />
<div class="page xl:flex-start-start">
	<Sidebar
		{queries}
		checkbox
		order
		description={tl("description")}
		question={tl("research_question")}
		{topic}
	/>

	{#if loading}
		<div class="container flex-center-center">
			<p>Loading...</p>
		</div>
	{:else if !filteredEntries?.length}
		<div class="container flex-center-center">
			<p>No data available</p>
		</div>
	{:else}
		<div class="container p-s grid-1-s s:grid-2-s xl:grid-3-s xxl:grid-4-s">
			{#each filteredEntries as entry, i (`${entry[0]}-${i}`)}
				<YoutubeThumb
					tubeId={entry[0]}
					title={entry[1][0].label}
					thumb={entry[1][0].thumb}
					langs={entry[1].map((d) => d.language)}
					channel={entry[1][0].channelTitle}
					views={entry[1][0].viewCount}
					likes={entry[1][0].likeCount}
					comments={entry[1][0].commentCount}
					date={entry[1][0].publishedAtUnix}
				/>
			{/each}
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
