<script>
	import { queryParam } from "sveltekit-search-params"
	import Sidebar from "~/components/elements/sidebar.svelte"
	import { getTopicLabels } from "~/lib/metadata"

	export let data
	const { queries } = data
	console.log(queries);
	const tl = getTopicLabels("getty_stereotypes")

	let entries,
		loading = false
	let query = queryParam("query")
</script>

<div class="page l:flex-start-start">
	<Sidebar
		{queries}
		showLang={false}
		description={tl("description")}
		question={tl("research_question")}
	/>
	<div class="container p-s grid-1-s s:grid-2-s xl:grid-3-s xxl:grid-4-s"></div>
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
