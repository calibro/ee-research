<script>
	import { hierarchy, pack } from "d3"
	import Text from "../elements/text.svelte"

	export let cluster

	const createCirclePacking = (data, width, height) => {
		const layout = pack().size([width, height]).padding(5)

		const root = hierarchy(data).sum((d) => d.videosNumber)
		const nodes = layout(root).descendants()

		// Remove parent node from nodes
		nodes.shift()

		return nodes
	}
</script>

<div class="circle-packing ratio-square flex-col-center-center p-l">
	<Text typo="2" content={cluster.name} />
	<svg width="100%" height="100%" viewBox="0 0 200 200">
		{#each createCirclePacking(cluster, 200, 200) as node}
			<g>
				<circle cx={node.x} cy={node.y} r={node.r} />
				<text
					x={node.x}
					y={node.y}
					text-anchor="middle"
					dominant-baseline="middle"
					font-size={node.r / 3}
				>
					{node.data?.text}
				</text>
			</g>
		{/each}
	</svg>
</div>

<style lang="postcss">
	.circle-packing {
		width: 100%;
		aspect-ratio: 1 / 1;
		circle {
			fill: var(--color-sky);
		}
	}
</style>
