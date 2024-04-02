<script>
	import Swiper from "swiper"
	import { Keyboard, Navigation } from "swiper/modules"
	import Text from "../elements/text.svelte"
	import Link from "../elements/link.svelte"
	import Close from "~/assets/icons/close.svg?component"
	import { onDestroy, onMount } from "svelte"
	import { getImageUrl } from "~/lib/stereotypes"
	import Image from "../elements/image.svelte"

	export let query
	export let gallery
	export let closeGallery = () => {}

	const { cluster, index } = gallery
	let swiper
	let swiperEl
	let totalSlides = cluster?.[1]?.length
	let currentSlide = index
	let nextEl
	let prevEl

	onMount(() => {
		if (totalSlides) {
			swiper = new Swiper(swiperEl, {
				modules: [Keyboard, Navigation],
				keyboard: {
					enabled: true,
				},
				navigation: {
					nextEl,
					prevEl,
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

	const getPlaces = (keyword) => {
		const places = keyword.split("|")
		return places.map((place) => place.trim()).join(", ")
	}
	$: activeSlide = cluster?.[1][currentSlide]
	$: place = getPlaces(activeSlide?.keyword_Location)
	$: caption = activeSlide?.title
</script>

{#if totalSlides}
	<div class="gallery">
		<div class="navbar">
			<div class="content grid-4-0 auto-flow-dense xl:grid-12-gap">
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
				<div class="close col-4 xl:col-12 px-s">
					<div class="flex-end-center h-full">
						<Link fn={closeGallery} class="flex-center-center">
							<Close width="26" />
						</Link>
					</div>
				</div>
			</div>
		</div>
		<div class="container flex flex-col pt-s">
			<div class="swiper" bind:this={swiperEl}>
				<div class="swiper-wrapper">
					{#each cluster[1] as item, i}
						<div class="swiper-slide">
							<Image
								src={getImageUrl(item.id, query)}
								alt={item.title}
								loading="lazy"
							/>
						</div>
					{/each}
				</div>
				<div bind:this={nextEl} class="swiper-button-next"></div>
				<div bind:this={prevEl} class="swiper-button-prev"></div>
			</div>
			<div class="info">
				<div class="l:grid-2-gap py-s px-s l:px-0">
					{#if caption}
						<div>
							<Text content="Caption" typo="label" class="case-upper pb-xs" />
							<Text content={caption} typo="p" />
						</div>
					{/if}
					{#if place}
						<div class="pt-s l:pt-0">
							<Text content="Place" typo="label" class="case-upper pb-xs" />
							<Text content={place} typo="p" />
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
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
			display: none;
			color: var(--color-black);
			@media (--l) {
				display: flex;
			}
		}
		display: grid;
		grid-template-rows: auto 1fr;
	}

	.info {
		margin-inline: auto;
		border-top: var(--border-default);
		width: 100%;
		@media (--l) {
			border-top: none;
			width: 60%;
		}
	}
	.swiper-slide {
		width: calc(100% - var(--space-s) * 4);
		height: calc(var(--vh, 1vh) * 30);
		@media (--l) {
			width: 60%;
			height: calc(var(--vh, 1vh) * 60);
		}
		:global(img) {
			width: 100%;
			height: 100%;
			object-fit: cover;
			overflow: hidden;
		}
	}

	.swiper-slide {
		transition: opacity 0.3s ease-in-out;
		&:not(.swiper-slide-active) {
			opacity: 0.3;
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		overflow: hidden;
		.swiper {
			width: 100%;
			overflow: hidden;
		}

		@media (--l) {
			justify-content: unset;
		}
	}
</style>
