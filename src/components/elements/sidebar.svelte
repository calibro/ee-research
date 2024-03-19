<script>
	import DownloadIcon from "~/assets/icons/download.svg?component"
	import Dropdown from "./dropdown.svelte"
	import Link from "./link.svelte"
	import Radio from "./radio.svelte"
	import Text from "./text.svelte"
	import { languages } from "~/config.json"
	import { queryParam } from "sveltekit-search-params"

	export let queries
	export let dataUrl

	let query = queryParam("query"),
		lang = queryParam("lang")

	let openFilters = false
</script>

<div class="sidebar flex flex-col gap-l py-m px-s">
	<div class="group">
		<Text typo="h2" content="Looking at pollution on stock photos platforms" />
	</div>
	<div class="group flex flex-col gap-xs">
		<Text typo="label" content="WHAT AM I LOOKING AT?" />
		<Text
			typo="p"
			content="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus."
		/>
	</div>
	<div class="filters px-s py-m m:p-0 flex flex-col gap-l">
		<div class="group flex flex-col gap-xs">
			<Text typo="label" content="Query" class="case-upper" />
			<Dropdown items={queries} bind:value={$query} />
		</div>
		<div class="group flex flex-col gap-xs">
			<Text typo="label" content="Language" class="case-upper" />
			<Radio items={languages} bind:value={$lang} />
		</div>
		<div class="cta m:hidden">
			<Link class="button" fn={() => (openFilters = !openFilters)} theme="cta">
				<Text content={openFilters ? "Close" : "Open"} typo="small"/>
			</Link>
		</div>
	</div>
	<div class="group flex flex-col gap-xs">
		<Text typo="label" content="Resources" class="case-upper" />
		<div class="flex gap-xs">
			<Link url={dataUrl} theme="download" class="flex gap-xxs items-center">
				<Text typo="small" content="Download data" />
				<DownloadIcon width="8" />
			</Link>
			<Link url={dataUrl} theme="download" class="flex gap-xs items-center">
				<Text typo="small" content="view protocol" />
			</Link>
		</div>
	</div>
</div>

<style lang="postcss">
	.sidebar {
		@media (--m) {
			position: sticky;
			top: var(--nav-height, 74px);
			width: 360px;
		}
	}

	.filters {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 200;
		background: var(--color-white);
		@media (--m) {
			position: static;
			width: auto;
			height: auto;
		}

		.cta {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: var(--space-m) var(--space-s);
			display: flex;
			justify-content: center;

			@media (--m) {
				display: none;
			}
		}
	}
</style>
