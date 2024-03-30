<script>
	import { browser } from "$app/environment"
	import { base } from "$app/paths"
	import { csvParse, groups } from "d3"
	import { onMount } from "svelte"
	import { queryParam } from "sveltekit-search-params"
	import Sidebar from "~/components/elements/sidebar.svelte"
	import GettyStereo from "~/components/graphs/gettyStereo.svelte"
	import { getAsyncData } from "~/lib/data.js"
	import { getTopicLabels } from "~/lib/metadata"

	export let data
	const { queries } = data

	const tl = getTopicLabels("getty_stereotypes")

	let entries,
		clusters,
		loading = false
	let query = queryParam("query")

	onMount(() => {
		if (!$query) {
			$query = queries[0]?.query
		}
	})

	const baseUrl = `${base}/assets/gettyimages`

	$: dataUrl = `${baseUrl}/${$query}/${$query}.csv`

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

	$: clusters = entries?.length
		? groups(entries, (d) => d.cluster).sort((a, b) => {
			if (a[0] === "other") return 1;
			if (b[0] === "other") return -1;
			return a[0] > b[0] ? 1 : -1;
		})
		: []
		
	$: dataUrl, watchQuery()
	$: console.log(clusters)
</script>

<div class="page l:flex-start-start">
	<Sidebar
		{queries}
		showLang={false}
		description={tl("description")}
		question={tl("research_question")}
	/>
	<div class="container p-s grid-1-s">
		{#if clusters.length}
			{#each clusters as cluster, i (`${$query}-${i}-${cluster?.[0]}`)}
				<GettyStereo {cluster} query={$query} />
			{/each}
		{/if}
	</div>
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
