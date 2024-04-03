<script>
	import { handleClick, swipe } from "~/lib/customSwipe"
	import Text from "../elements/text.svelte"
	import { onMount } from "svelte"
	import { getImageUrl } from "~/lib/stereotypes"

	export let cluster
	export let query
	export let openGallery = (cluster, i) => {}

	const items = cluster[1].sort((a, b) => a.rank - b.rank)
	let el
	const handleMouseOver = (e, i) => {
		const canHover = window.matchMedia("(hover: hover)").matches //true or false
		if (!canHover) return

		if (e?.target) {
			e.target.closest(".image-container").style.minWidth =
				`${e.target.clientWidth - 1}px`
		} else {
			el.querySelectorAll(".image-container").forEach((el) => {
				el.removeAttribute("style")
			})
		}
	}

	let inViewport = false
	onMount(() => {
		let frame

		const checkViewport = () => {
			const rect = el.getBoundingClientRect()
			inViewport = rect.top < window.innerHeight && rect.bottom >= 0
			if (inViewport) {
				cancelAnimationFrame(frame)
				return
			}
			frame = requestAnimationFrame(checkViewport)
		}

		checkViewport()

		return () => {
			cancelAnimationFrame(frame)
		}
	})
</script>

<div class="getty grid-9-gap" bind:this={el}>
	<div
		class="col-[span-9] l:col-[span-2] flex-btw-start l:flex-col-btw-start p-s"
	>
		<div>
			<Text typo="label" content="Stereotype" class="case-upper" />
			<Text typo="h3" content={cluster[1][0].clusterLabel} class="mb-xs" />
		</div>
		<Text
			typo="label"
			content="Images: {cluster[1]?.length}"
			class="case-upper"
		/>
	</div>
	{#if inViewport}
		<div
			class="images col-[span-9] l:col-[span-7] scrollbar-hide scroll-container"
			use:swipe
		>
			{#each items as item, i (`${item.id}-${cluster[0]}-${i}`)}
				<button
					class="image-container"
					on:mouseover={(e) => handleMouseOver(e, i)}
					on:focus={(e) => handleMouseOver(e, i)}
					on:mouseout={(e) => handleMouseOver()}
					on:blur={(e) => handleMouseOver()}
					tabindex="0"
				>
					{#key `${item.id}-${cluster[0]}-${i}`}
						<img
							src={getImageUrl(item.id, query)}
							alt={item.title}
							loading="lazy"
							draggable="false"
							use:handleClick={{ fn: () => openGallery(i, cluster) }}
						/>
					{/key}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.getty {
		background-color: var(--color-white);
		border-radius: var(--border-radius);
		overflow: hidden;
		grid-template-rows: auto 200px;
		@media (--l) {
			height: 200px;
			grid-template-rows: none;
		}
	}

	.images {
		display: flex;
		flex-wrap: nowrap;
		height: 100%;
		overflow-y: auto;
		.image-container {
			position: relative;
			min-width: 30px;
			width: 30px;
			overflow: hidden;
			transition: min-width 0.6s 0.09s ease;
		}
		:global(img) {
			height: 100%;
			object-fit: cover;
			max-width: fit-content;
		}
	}
</style>
