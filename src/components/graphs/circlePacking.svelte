<script>
	import { hierarchy, pack } from "d3"
	import Text from "../elements/text.svelte"

	export let cluster

	const createCirclePacking = (data, width, height) => {
		const layout = pack().size([width, height]).padding(5)

		const root = hierarchy(data, (d) => (Array.isArray(d) ? d[1] : null)).sum(
			(d) => d.videosNumber
		)

		const nodes = layout(root).descendants()

		// Remove parent node from nodes
		nodes.shift()

		return nodes
	}
</script>

<div class="circle-packing flex-col-center-start">
	<svg width="100%" viewBox="0 0 200 200" class="ratio-square">
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
	<!-- TODO: group with title and not as array -->
	<div class="title">
		<Text
			typo="p"
			content={cluster[1][0].clusterLabel}
			class="px-m py-xs"
			ellipsis={true}
		/>
	</div>
</div>

<style lang="postcss">
	.circle-packing {
		width: 100%;
		background: var(--color-white);
		border-radius: var(--border-radius);
		transition: box-shadow 0.3s;
		overflow: hidden;
		svg {
			aspect-ratio: 1 / 1;
		}
		circle {
			fill: var(--color-grey);
			stroke: var(--color-grey-dark);
			stroke-width: 0;
			transition:
				fill 0.3s,
				stroke-width 0.3s;
		}
		text {
			color: var(--color-black);
		}
		.title {
			transition: background 0.3s;
		}
		@media (--hover) {
			&:hover {
				box-shadow: 0px 8px 8px 0 var(--color-ice);
				.title {
					background: var(--color-ice);
				}
				circle {
					fill: var(--color-ice);
					stroke-width: 0;
				}
			}
		}
	}

	.title {
		width: 100%;
		border-top: 1px solid var(--color-grey);
	}
</style>
