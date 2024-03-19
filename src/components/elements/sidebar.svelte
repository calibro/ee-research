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
</script>

<div class="sidebar flex flex-col gap-l pt-m px-s">
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
	<div class="group flex flex-col gap-xs">
		<Text typo="label" content="Query" class="case-upper" />
		<Dropdown items={queries} bind:value={$query} />
	</div>
	<div class="group flex flex-col gap-xs">
		<Text typo="label" content="Language" class="case-upper" />
		<Radio items={languages} bind:value={$lang} />
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
		position: sticky;
		top: var(--nav-height, 74px);
		@media (--m) {
			width: 360px;
		}
	}
</style>
