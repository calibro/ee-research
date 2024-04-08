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
	const tl = getTopicLabels("youtube_language")

	let entries,
		clusters,
		loading = false

	let query = queryParam("query")
	let lang = queryParam("lang")

	$: selectedLangs = $lang ? $lang?.split?.(" ").map?.((l) => languages[l]) : []

	onMount(async () => {
		await tick()
		if (!$query) {
			$query = queries[0]?.query
		}
		if (!$lang) {
			$lang = "en"
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
				).sort((a, b) => b[1].length - a[1].length)
			: undefined

	$: console.log(filteredEntries)
</script>

<svelte:body use:lockscroll={locked} />
<div class="page xl:flex-start-start">
	<Sidebar
		{queries}
		checkbox
		description={tl("description")}
		question={tl("research_question")}
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
		<div class="container p-s flex-col-start gap-s">
			{#each filteredEntries as entry}
				<YoutubeThumb
					id={entry[0]}
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
