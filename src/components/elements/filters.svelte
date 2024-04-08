<script>
	import { browser } from "$app/environment"
	import { onMount } from "svelte"
	import { queryParam } from "sveltekit-search-params"
	import FilterIcon from "~/assets/icons/filter.svg?component"
	import { languages } from "~/config.json"
	import { breakpoint } from "~/css/tokens.json"
	import { extractNumber } from "~/lib"
	import Checkbox from "./checkbox.svelte"
	import Dropdown from "./dropdown.svelte"
	import Link from "./link.svelte"
	import Radio from "./radio.svelte"
	import Text from "./text.svelte"

	export let showLang = true
	export let queries
	export let checkbox = false

	let query = queryParam("query"),
		lang = queryParam("lang")
	let isOpen = false

	let langValue = $lang ? (checkbox ? $lang?.split?.(" ") : $lang) : []

	onMount(async () => {
		setTimeout(() => {
			langValue = checkbox ? $lang?.split?.(" ") || [] : $lang
		}, 100)
	})

	$: browser
		? innerWidth > extractNumber(breakpoint.l)
			? (isOpen = false)
			: undefined
		: undefined

	$: browser ? document.body.classList.toggle("scroll-lock", isOpen) : undefined

	$: $lang = langValue?.join?.(" ") || langValue
</script>

<div class:show={isOpen} class="filters px-s py-m xl:p-0">
	<div class="group flex flex-col gap-xs">
		<Text typo="label" content="Query" class="case-upper" />
		<Dropdown items={queries} bind:value={$query} />
	</div>
	{#if showLang}
		<div class="group flex flex-col gap-xs">
			<Text typo="label" content="Language" class="case-upper" />
			{#if checkbox}
				<Checkbox items={languages} bind:value={langValue} />
			{:else}
				<Radio items={languages} bind:value={langValue} />
			{/if}
		</div>
	{/if}
</div>
<div class="cta pointer-events-none xl:hidden" class:open={isOpen}>
	<Link
		class="button pointer-events-initial"
		fn={() => (isOpen = !isOpen)}
		theme="cta"
	>
		{#if isOpen}
			<Text content="Confirm" typo="small" />
		{:else}
			<FilterIcon height="16" />
		{/if}
	</Link>
</div>

<style lang="postcss">
	.filters {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 200;
		background: var(--color-white);
		display: none;
		&.show {
			display: flex;
			flex-direction: column;
			gap: var(--space-l);
		}

		@media (--xl) {
			position: static;
			width: auto;
			height: auto;
			display: flex;
			flex-direction: column;
			gap: var(--space-l);
		}
	}
	.cta {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: var(--space-m) var(--space-s);
		display: flex;
		justify-content: center;
		z-index: 10;

		&.open {
			z-index: 201;
		}
		@media (--xl) {
			display: none;
		}
	}
</style>
