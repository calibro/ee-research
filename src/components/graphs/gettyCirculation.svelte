<script>
	import { base } from "$app/paths"
	import Text from "../elements/text.svelte"

	export let cluster
	export let query

	export let open = (d, rank) => {}

	const getImg = (key) => {
		return `${base}/assets/gettyimages/${query}/images/${key}.jpg`
	}
</script>

<div class="getty grid-9-gap">
	<div
		class="h-full overflow-hidden col-[span-9] xl:col-[span-2] flex-btw-start xl:flex-col-btw-start p-s"
	>
		<div>
			<Text typo="label" content="Query" class="case-upper" />
			<Text
				typo="h3"
				content={cluster[1][0][1][0].clusterLabel}
				class="mb-xs"
			/>
		</div>
	</div>
	<div class="h-full overflow-hidden col-[span-9] xl:col-[span-7] grid-3-0">
		{#each cluster[1] as [key, d], i (`${key}-${cluster[0]}-${query}`)}
			<button class="img relative" on:click={() => open(d, i + 1)}>
				<!-- <div class="hidden m:block absolute top-0 left-0 p-xs xl:p-s">
					<Label label="RANK #{i + 1}" typo="label" />
				</div> -->
				<img src={getImg(key)} alt="" />
			</button>
		{/each}
	</div>
</div>

<style lang="postcss">
	.getty {
		background-color: var(--color-white);
		border-radius: var(--border-radius);
		overflow: hidden;
		grid-template-rows: 1fr 200px;
		@media (--xl) {
			height: 200px;
			grid-template-rows: 1fr;
		}
	}

	.img {
		height: 100%;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
