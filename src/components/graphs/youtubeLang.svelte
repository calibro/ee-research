<script>
	import { onMount } from "svelte"
	import { handleClick, swipe } from "~/lib/customSwipe"
	import Modal from "../elements/modal.svelte"
	import Text from "../elements/text.svelte"

	export let cluster
	let isOpen = false
	let tubeId = false
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
		class="col-[span-9] xl:col-[span-2] flex-btw-start xl:flex-col-btw-start p-s"
	>
		<div>
			<Text typo="label" content="Cluster" class="case-upper" />
			<Text typo="h3" content={cluster[1][0].clusterLabel} class="mb-xs" />
		</div>
		<Text
			typo="label"
			content="Videos: {cluster[1]?.length}"
			class="case-upper"
		/>
	</div>
	{#if inViewport}
		<div
			class="images col-[span-9] xl:col-[span-7] scrollbar-hide scroll-container"
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
					{#key `${item.name}-${cluster[0]}-${i}`}
						<img
							src={item.thumb}
							alt={item.title}
							loading="lazy"
							draggable="false"
							use:handleClick={{
								fn: () => {
									isOpen = true
									tubeId = item.name
								},
							}}
						/>
					{/key}
				</button>
			{/each}
			{#if isOpen}
				<Modal
					theme="no-bg"
					fn={() => {
						isOpen = false
						tubeId = false
					}}
				>
					<div>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/{tubeId}"
							title=""
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						/>
					</div>
				</Modal>
			{/if}
		</div>
	{/if}
</div>

<style lang="postcss">
	.getty {
		background-color: var(--color-white);
		border-radius: var(--border-radius);
		overflow: hidden;
		grid-template-rows: 1fr auto;
		@media (--xl) {
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
