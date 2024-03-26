<script>
	import { hierarchy, pack } from "d3"
	import { fade } from "svelte/transition"

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

	const circles = createCirclePacking(cluster, 200, 200)
	const getFontSize = (r) => Math.min(r / 3, 13)

	let m = { x: 0, y: 0 }
	const handleMousemove = (event) => {
		m.x = event.clientX
		m.y = event.clientY
	}

	let activeNode
	const handleOver = (node) => {
		activeNode = node
	}
</script>

<div
	class="circle-packing flex-col-center-start"
	on:mousemove={handleMousemove}
	role="button"
	tabindex="0"
>
	{#if activeNode}
		<div
			class="tooltip"
			style="--top: {m.y}px; --left: {m.x}px"
			transition:fade={{ duration: 150 }}
		>
			<Text
				typo="small"
				content={activeNode.data?.text}
				class="px-xs py-xxs"
				ellipsis={true}
			/>
		</div>
	{/if}

	<svg width="100%" viewBox="0 0 200 200" class="ratio-square">
		{#each circles as node}
			{#if getFontSize(node.r) > 6}
				<circle cx={node.x} cy={node.y} r={node.r} fill={node.data?.color} />
			{:else}
				<circle
					class="tooltip-actor"
					cx={node.x}
					cy={node.y}
					r={node.r}
					role="tooltip"
					fill={node.data?.color}
					tabindex="-1"
					on:mouseover={() => handleOver(node)}
					on:focus={() => handleOver(node)}
					on:mouseout={() => handleOver(null)}
					on:blur={() => handleOver(null)}
				/>
			{/if}
		{/each}
		{#each circles as node}
			{#if getFontSize(node.r) > 6}
				<text
					x={node.x}
					y={node.y}
					text-anchor="middle"
					dominant-baseline="middle"
					font-size={getFontSize(node.r)}
				>
					{node.data?.text}
				</text>
			{/if}
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
		box-shadow: 0px 0px 0px 0px var(--color-ice);
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

				circle {
					fill: var(--color-ice);
					stroke-width: 0;
				}
			}
		}

		circle.tooltip-actor {
			outline: none;
			@media (--hover) {
				&:hover {
					stroke: var(--color-black);
					stroke-width: 1px;
				}
			}
		}
	}

	.title {
		width: 100%;
		border-top: 1px solid var(--color-grey);
	}

	.tooltip {
		position: fixed;
		top: var(--top);
		left: var(--left);
		transform: translate(-50%, -100%);
		background: var(--color-black);
		color: var(--color-white);
		pointer-events: none;
		border-radius: var(--border-radius);
		display: none;
		@media (--hover) {
			display: block;
		}
	}
</style>
