<script>
	import DownloadIcon from "~/assets/icons/download.svg?component"
	import Link from "./link.svelte"
	import Text from "./text.svelte"

	import Filters from "./filters.svelte"
	export let checkbox = false
	export let queries
	export let showLang = true
	export let question
	export let description
</script>

<div class="sidebar flex flex-col gap-l py-m px-s">
	<div class="group">
		<Text typo="h2" content={question} />
	</div>
	<div class="group flex flex-col gap-xs">
		<Text typo="label" content="WHAT AM I LOOKING AT?" />
		<Text typo="p" content={description} />
	</div>
	<Filters {queries} {showLang} {checkbox} />
	<div class="group flex flex-col gap-xs">
		<Text typo="label" content="Resources" class="case-upper" />
		<div class="flex gap-xs">
			<Link url="#" theme="download" class="flex gap-xxs items-center">
				<Text typo="small" content="download data" />
				<DownloadIcon width="8" />
			</Link>
			<Link url="#" theme="download" class="flex gap-xs items-center">
				<Text typo="small" content="view protocol" />
			</Link>
		</div>
	</div>
</div>

<style lang="postcss">
	.sidebar {
		@media (--xl) {
			position: sticky;
			top: var(--nav-height, 74px);
			width: 360px;
		}
		@media (--xxl) {
			width: 400px;
		}
	}
</style>
