<script>
	import { createEventDispatcher } from "svelte"
	import { base } from "$app/paths"
	import Close from "~/assets/icons/close.svg?component"
	import Link from "~/components/elements/link.svelte"
	import Text from "~/components/elements/text.svelte"

	const dispatch = createEventDispatcher()

	export let cluster, rank, query

	const close = () => {
		dispatch("close")
	}

	const getImg = (key) => {
		return `${base}/assets/gettyimages/${query}/images/${key}.jpg`
	}
</script>

<div class="navbar bg-white sticky top-0">
	<div class="content grid-2-0 auto-flow-dense xl:grid-12-gap">
		<div class="title xl:col-[span-5] py-s px-s xl:grid-5-gap">
			<div class="xl:col-[span-3]">
				<Text content="Query" typo="label" class="case-upper" />
				<Text tag="h3" typo="h3" content={cluster[0].clusterLabel} ellipsis />
			</div>
			<div class="hidden xl:block xl:col-[span-2]">
				<Text content="Image" typo="label" class="case-upper" />
				<div class="img ratio-[4/3]">
					<img src={getImg(cluster[0].image_id)} alt="" />
				</div>
			</div>
		</div>
		<div class="hidden xl:block xl:col-[8/span-2] py-s px-s xl:px-0">
			<Text content="Rank" typo="label" class="case-upper" />
			<Text content={rank} />
		</div>
		<div class="hidden xl:block xl:col-[10/span-2] py-s px-s xl:px-0">
			<Text content="Results" typo="label" class="case-upper" />
			<Text content={cluster?.length} />
		</div>
		<div class="close xl:col-12" role="button">
			<div class="flex-end p-s">
				<Link fn={close} class="p-xs">
					<Close width="26" />
				</Link>
			</div>
		</div>
	</div>
</div>

<div class="xl:hidden">
	<div class="img ratio-[16/9]">
		<img src={getImg(cluster[0].image_id)} alt="" />
	</div>
	<div class="grid-4-0 p-s info">
		<div class="col-[span-2]">
			<Text content="Rank" typo="label" class="case-upper" />
			<Text content={rank} />
		</div>
		<div class="col-[span-2]">
			<Text content="Results" typo="label" class="case-upper" />
			<Text content={cluster?.length} />
		</div>
	</div>
</div>

<style lang="postcss">
	.navbar,
	.info {
		border-bottom: var(--border-default);
	}
	.title {
		@media (--l) {
			border-right: var(--border-default);
		}
	}

	.img {
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
