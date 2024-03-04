<script>
	import { onMount } from "svelte"
	import Dropdown from "~/components/elements/dropdown.svelte"
	import Text from "~/components/elements/text.svelte"
	import { csvParse } from "d3-dsv"
	import { queryParam } from "sveltekit-search-params"
	import Radio from "~/components/elements/radio.svelte"

	export let data
	const { queries } = data

	let query = queryParam("query")
	let language = queryParam("language")
	// let dataValue = null

	// onMount(async () => {
	// 	const response = await fetch("/tiktok/clusters/dutch.csv")
	// 	const result = await response.text()

	// 	dataValue = csvParse(result)
	// 	console.log(dataValue)
	// })

	const options = [
		{
			slug: "en",
			title: "English",
			color: "sky",
		},
		{
			slug: "de",
			title: "Deutsch",
			color: "blue",
		},
		{
			slug: "fr",
			title: "French",
			color: "pink",
		},
		{
			slug: "tl",
			title: "Tagalog",
			color: "red",
		},
	]
</script>

<div class="page flex">
	<div class="sidebar flex flex-col gap-l pt-l px-m">
		<div class="group flex flex-col gap-xs">
			<Text typo="1" content="Query" class="case-upper" />
			<Dropdown items={queries} bind:value={$query} />
		</div>
		<div class="group flex flex-col gap-xs">
			<Text typo="1" content="Language" class="case-upper" />
			<Radio items={options} bind:value={$language} />
		</div>
	</div>
	<div>
		<!-- <h1>Welcome to About</h1>
		<p>Visit <a href="/">kit.svelte.dev</a> to read the documentation</p> -->
	</div>
</div>

<style lang="postcss">
	.page {
		height: 100%;
	}
	.sidebar {
		border-right: var(--border-default);
		@media (--m) {
			width: 23vw;
		}
	}
</style>
