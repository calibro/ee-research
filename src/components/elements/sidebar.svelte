<script>
	import DownloadIcon from "~/assets/icons/download.svg?component"
	import Link from "./link.svelte"
	import Text from "./text.svelte"

	import Filters from "./filters.svelte"
	import Protocol from "./protocol.svelte"
	export let checkbox = false
	export let order = false
	export let queries
	export let showLang = true
	export let question
	export let description
	export let topic
	export let download = false
</script>

<div class="sidebar flex flex-col gap-l py-m px-s scrollbar-hide">
	<div class="group">
		<Text typo="h2" content={question} />
	</div>
	<div class="group flex flex-col gap-xs">
		<Text typo="label" content="WHAT AM I LOOKING AT?" />
		<Text typo="p" content={description} />
	</div>
	<Filters {queries} {showLang} {checkbox} {order} />
	<div class="group flex flex-col gap-xs">
		<Text typo="label" content="Resources" class="case-upper" />
		<div>
			{#if download}
				<div class="flex gap-xs pb-s">
					<Link
						url="#"
						theme="download"
						class="flex gap-xxs items-center"
						fn={download}
					>
						<Text typo="small" content="download data" />
						<DownloadIcon width="8" />
					</Link>
				</div>
			{/if}
			<Protocol {topic} />
		</div>
	</div>
</div>

<style lang="postcss">
	.sidebar {
		@media (--xl) {
			position: sticky;
			top: var(--nav-height, 74px);
			height: calc((var(--vh, 1vh) * 100) - var(--nav-height, 74px));
			overflow: auto;
			width: 380px;
		}
		@media (--xxl) {
			width: 400px;
		}
	}
</style>
