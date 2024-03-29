<script>
	import { base } from "$app/paths"
	import { swipe } from "~/lib/swipe"
	import Text from "../elements/text.svelte"

	export let cluster
	export let query

	const getImageUrl = (image) => {
		return `${base}/assets/gettyimages/${query}/images/${image}.jpg`
	}

	let gridColumns = Array.from(
		{ length: cluster[1]?.length },
		() => "30px"
	).join(" ")

	const handleMouseOver = (e, i) => {
		gridColumns = Array.from({ length: cluster[1]?.length }, (_, j) =>
			j === i ? `${e.target.clientWidth}px` : "30px"
		).join(" ")
	}
</script>

<div class="getty grid-9-gap">
	<div class="col-[span-2] flex-col-btw-start p-s">
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
	<div
		class="images col-[span-7] scrollbar-hide scroll-container"
		style="--columns: {gridColumns}"
		use:swipe
	>
		{#each cluster[1] as item, i}
			<img
				src={getImageUrl(item.id)}
				alt={item.title}
				loading="lazy"
				on:mouseover={(e) => handleMouseOver(e, i)}
				on:focus={(e) => handleMouseOver(e, i)}
				on:mouseout={(e) => handleMouseOver()}
				on:blur={(e) => handleMouseOver()}
				draggable="false"
			/>
		{/each}
	</div>
</div>

<style lang="postcss">
	.getty {
		background-color: var(--color-white);
		border-radius: var(--border-radius);
		height: 200px;
		overflow: hidden;
	}

	.images {
		background: var(--color-blue);
		display: grid;
		transition: 0.3s;
		grid-template-columns: var(--columns);
		grid-template-rows: 1fr;
		overflow: auto;
		height: 100%;
		overflow-y: hidden;
		:global(img) {
			height: 100%;
			width: fit-content;
			object-fit: cover;
			object-position: left;
			overflow: hidden;
			max-width: fit-content;
		}
	}
</style>
