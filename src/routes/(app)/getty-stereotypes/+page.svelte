<script>
	import { browser } from "$app/environment"
	import { base } from "$app/paths"
	import { createLockScrollStore, lockscroll } from "@svelte-put/lockscroll"
	import { csvParse, groups } from "d3"
	import { onMount } from "svelte"
	import { queryParam } from "sveltekit-search-params"
	import Sidebar from "~/components/elements/sidebar.svelte"
	import Gallery from "~/components/gettyimages/gallery.svelte"
	import GettyStereo from "~/components/graphs/gettyStereo.svelte"
	import { getAsyncData } from "~/lib/data.js"
	import { getTopicLabels } from "~/lib/metadata"

	export let data
	const { queries } = data

	const locked = createLockScrollStore()
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

	let gallery = { isOpen: false, index: 0, cluster: [] }

	const openGallery = (index, cluster) => {
		gallery = { isOpen: true, index, cluster }
		locked.toggle(true)
	}

	const closeGallery = () => {
		gallery = { isOpen: false, index: 0, cluster: [] }
		locked.toggle(false)
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
			{#if clusters.length}
				{#each clusters as cluster, i (`${i}-${cluster?.[0]}`)}
					<GettyStereo {cluster} query={$query} {openGallery} />
				{/each}
			{/if}
		</div>
	{/if}

	{#key $query}
		{#if gallery.isOpen}
			<Gallery {gallery} close={closeGallery} query={$query} />
		{/if}
	{/key}
</div>

<style lang="postcss">
	.container {
		flex: 1 1 0;
		min-height: calc(var(--vh, 1vh) * 100 - var(--nav-height, 0px) - 1px);
		background: var(--color-grey);
		padding-bottom: calc(var(--nav-height) + var(--space-m));
		@media (--xl) {
			padding-bottom: var(--space-s);
			grid-template-rows: min-content;
		}
	}
</style>
