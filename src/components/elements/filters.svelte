<script>
	import { queryParam } from "sveltekit-search-params"
	import Dropdown from "./dropdown.svelte"
	import FilterIcon from "~/assets/icons/filter.svg?component"
	import Link from "./link.svelte"
	import Radio from "./radio.svelte"
	import Text from "./text.svelte"
	import { languages } from "~/config.json"
	import { browser } from "$app/environment"
	import { breakpoint } from "~/css/tokens.json"
	import { extractNumber } from "~/lib"

	export let showLang = true
	export let queries

	let query = queryParam("query"),
		lang = queryParam("lang")

	let isOpen = false

	$: browser
		? innerWidth > extractNumber(breakpoint.l)
			? (isOpen = false)
			: undefined
		: undefined

	$: browser ? document.body.classList.toggle("scroll-lock", isOpen) : undefined
</script>

<div class:show={isOpen} class="filters px-s py-m l:p-0">
	<div class="group flex flex-col gap-xs">
		<Text typo="label" content="Query" class="case-upper" />
		<Dropdown items={queries} bind:value={$query} />
	</div>
	{#if showLang}
		<div class="group flex flex-col gap-xs">
			<Text typo="label" content="Language" class="case-upper" />
			<Radio items={languages} bind:value={$lang} />
		</div>
	{/if}
</div>
<div class="cta pointer-events-none l:hidden" class:open={isOpen}>
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

		@media (--l) {
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
		@media (--l) {
			display: none;
		}
	}
</style>
