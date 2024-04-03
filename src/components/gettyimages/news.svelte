<script>
	import Text from "../elements/text.svelte"
	import Link from "../elements/link.svelte"
	import Close from "~/assets/icons/close.svg?component"
	import { base } from "$app/paths"

	export let query
	export let news
	export let close = () => {}

	const { cluster, index } = news
	const getImg = (key) => {
		return `${base}/assets/gettyimages/${query}/images/${key}.jpg`
	}

	const onKeyDown = (e) => {
		if (e.key === "Escape") {
			close()
		}
	}
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div class="news">
	<div class="navbar">
		<div class="content grid-4-0 auto-flow-dense xl:grid-12-gap">
			<div class="title col-[span-5] py-s px-s grid-5-gap">
				<div class="col-[span-2]">
					<Text content="Query" typo="label" class="case-upper" />
					<Text tag="h3" typo="h3" content={cluster[0].clusterLabel} ellipsis />
				</div>
				<div class="col-[span-3]">
					<Text content="Image" typo="label" class="case-upper" />
					<div class="img ratio-[4/3]">
						<img src={getImg(cluster[0].image_id)} alt="" />
					</div>
				</div>
			</div>
			<div class="col-[span-2] xl:col-[10/span-2] py-s px-s xl:px-0">
				<Text content="Results" typo="label" class="case-upper pb-xxs" />
				<Text content={cluster?.length} />
			</div>
			<div class="close col-4 xl:col-12 px-s" role="button">
				<div class="flex-end-start h-full pt-m">
					<Link fn={close} class="flex-center-center">
						<Close width="26" />
					</Link>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.news {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color-white);
		z-index: 300;
	}
	.title {
		border-right: var(--border-default);
	}
	.title,
	.close {
		border-bottom: var(--border-default);
		@media (--l) {
			border-bottom: none;
		}
	}
	.navbar {
		border-bottom: var(--border-default);
	}

	.img {
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
