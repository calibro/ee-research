<script>
	import { base } from "$app/paths"
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

	const handleMouseOver = (i) => {
		gridColumns = Array.from({ length: cluster[1]?.length }, (_, j) =>
			j === i ? "300px" : "30px"
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
	<div class="images col-[span-7] scrollbar-hide" style="--columns: {gridColumns}">
		{#each cluster[1] as item, i}
			<img
				src={getImageUrl(item.id)}
				alt={item.title}
				loading="lazy"
				on:mouseover={() => handleMouseOver(i)}
				on:focus={() => handleMouseOver(i)}
				on:mouseout={() => handleMouseOver()}
				on:blur={() => handleMouseOver()}
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
		:global(img) {
			height: 100%;
			width: 100%;
			object-fit: cover;
			overflow: hidden;
		}
	}
</style>
