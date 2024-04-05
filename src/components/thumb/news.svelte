<script>
	import Arrow from "~/assets/icons/arrow.svg?component"
	import Link from "../elements/link.svelte"
	import Text from "../elements/text.svelte"

	export let data
</script>

<div class="getty grid-12-gap p-s">
	<div class="col-[span-12] xl:col-[span-7] pb-s xl:pb-0">
		<div>
			<Text typo="label" content="Title" class="case-upper" />
			<Text typo="h3" content={data.title} />
		</div>
	</div>
	<div class="col-[span-12] xl:col-[span-4] pb-s xl:pb-0">
		<div>
			<Text typo="label" content="Domain" class="case-upper" />
			<Text typo="h3" content={data.host?.replace("www.", "")} />
		</div>
	</div>
	<Link
		url={data.link}
		class="col-[span-12] xl:col-[span-1] flex-center-center"
		external
	>
		<Arrow width="26" />
	</Link>
</div>

<style lang="postcss">
	.getty {
		background-color: var(--color-white);
		border-radius: var(--border-radius);
		overflow: hidden;
		@media (--xl) {
			grid-template-rows: 1fr;
		}
	}
</style>
