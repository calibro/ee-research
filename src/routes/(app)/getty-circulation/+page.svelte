<script>
	import { browser } from "$app/environment"
	import { base } from "$app/paths"
	import { csvParse, groups } from "d3"
	import { onMount } from "svelte"
	import { queryParam } from "sveltekit-search-params"
	import Sidebar from "~/components/elements/sidebar.svelte"
	import Gallery from "~/components/gettyimages/gallery.svelte"
	import News from "~/components/gettyimages/news.svelte"
	import GettyCirculation from "~/components/graphs/gettyCirculation.svelte"
	import GettyStereo from "~/components/graphs/gettyStereo.svelte"
	import { getAsyncData } from "~/lib/data.js"
	import { getTopicLabels } from "~/lib/metadata"

	export let data
	const { queries } = data

	const tl = getTopicLabels("getty_circulation")

	let entries,
		loading = false
	let query = queryParam("query")

	onMount(() => {
		if (!$query) {
			$query = queries[0]?.query
		}
	})

	const baseUrl = `${base}/assets/gettyimages`

	$: dataUrl = `${baseUrl}/${$query}/reverse_image_search/${$query}.csv`

	const watchQuery = async () => {
		if (loading || !browser) return

		loading = true
		if (!$query) {
			loading = false
			entries = null
			return
		}
		const { data, error } = await getAsyncData({
			key: `getty-stereotypes-data`,
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
			? groups(
					entries,
					(d) => d.cluster,
					(d) => d.image_id
				)
			: []

	$: dataUrl, watchQuery()

	const news = { isOpen: false, cluster: [] }

	const close = () => {
		news.isOpen = false
		news.cluster = []
	}

	const open = (d) => {
		news.isOpen = true
		news.cluster = d
	}
</script>

<div class="page l:flex-start-start">
	<Sidebar
		{queries}
		showLang={false}
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
		<div class="container p-s grid-1-s">
			{#each clusters as cluster}
				<GettyCirculation {cluster} query={$query} {open} />
			{/each}
		</div>
	{/if}

	{#key query}
		{#if news.isOpen}
			<News {news} {close} query={$query} />
		{/if}
	{/key}
</div>

<style lang="postcss">
	.container {
		flex: 1 1 0;
		min-height: calc(var(--vh, 1vh) * 100 - var(--nav-height, 0px) - 1px);
		background: var(--color-grey);
		padding-bottom: calc(var(--nav-height) + var(--space-m));
		@media (--l) {
			padding-bottom: var(--space-s);
			grid-template-rows: min-content;
		}
	}
</style>
