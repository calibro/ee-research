<script>
	import Swiper from "swiper"
	import { Keyboard, Navigation } from "swiper/modules"
	import Text from "../elements/text.svelte"
	import Link from "../elements/link.svelte"
	import Close from "~/assets/icons/close.svg?component"
	import { onDestroy, onMount } from "svelte"
	import { getImageUrl } from "~/lib/stereotypes"

	export let query
	export let gallery
	export let closeGallery = () => {}

	const { cluster, index } = gallery
	let swiper
	let swiperEl
	let totalSlides = cluster?.[1]?.length
	let currentSlide = index

	onMount(() => {
		if (totalSlides) {
			swiper = new Swiper(swiperEl, {
				modules: [Keyboard, Navigation],
				keyboard: {
					enabled: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				slidesPerView: "auto",
				centeredSlides: true,
				spaceBetween: 16,
				initialSlide: index,
				on: {
					slideChange: (swp) => {
						currentSlide = swp.realIndex
					},
				},
			})
		}
	})

	onDestroy(() => {
		swiper?.destroy?.()
	})
</script>

{#if totalSlides}
	<div class="gallery">
		<div class="navbar">
			<div class="content grid-4-0 xl:grid-12-gap">
				<div class="title col-[span-3] py-s px-s">
					<Text content="Topic" typo="label" class="case-upper" />
					<Text
						tag="h3"
						typo="h3"
						content={cluster[1][0].clusterLabel}
						ellipsis
					/>
				</div>
				<div class="col-[span-2] xl:col-[10/span-2] py-s px-s xl:px-0">
					<Text content="Image" typo="label" class="case-upper pb-xxs" />
					<Text content="{currentSlide + 1}/{totalSlides}" />
				</div>
				<div class="col-4 xl:col-12 self-center justify-self-end px-s">
					<Link fn={closeGallery} class="flex-center-center">
						<Close width="26" />
					</Link>
				</div>
			</div>
		</div>
		<div class="swiper" bind:this={swiperEl}>
			<div class="swiper-wrapper">
				{#each cluster[1] as item, i}
					<div class="swiper-slide">
						<img src={getImageUrl(item.id, query)} alt="" />
					</div>
				{/each}
			</div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.navbar {
		border-bottom: var(--border-default);
	}
	.gallery {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color-white);
		z-index: 300;
		:global(.swiper-button-next),
		:global(.swiper-button-prev) {
			color: var(--color-black);
		}
	}

	.swiper-slide {
		height: calc(var(--vh, 1vh) * 50);
		min-width: 200px;
		&:not(.swiper-slide-active) {
			opacity: 0.3;
		}
		width: auto;
		:global(img) {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
