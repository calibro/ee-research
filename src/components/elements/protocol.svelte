<script>
	export let open = false
	import { slide } from "svelte/transition"
	import { getProtocol } from "~/lib/metadata"
	import Text from "./text.svelte"

	export let topic
	const protocol = getProtocol(topic)

	let el

	const handleClick = () => {
		open = !open
	}
</script>

<div class="accordion p-xs" bind:this={el}>
	<button class="header text-left" on:click={handleClick}>
		<div class="text">
			<Text content="Protocol" />
		</div>
	</button>
	{#if open}
		<ol class="details" transition:slide>
			{#each protocol as item}
				<li class="typo-small">
					<Text content={item} typo="small" />
				</li>
			{/each}
		</ol>
	{/if}
</div>

<style>
	.accordion {
		margin: 1rem 0;
		border: var(--border-default);
		border-radius: var(--border-radius);
	}

	ol {
		counter-reset: item;
		padding: 0;
		margin: 0;
		padding-top: var(--space-xs);
	}
	li {
		display: inline-flex;
		list-style-type: none;
		counter-increment: item;
		p {
			display: inline;
		}
	}

	li:before {
		display: inline;
		width: 1.5em;
		padding-right: 0.5em;
		font-weight: bold;
		text-align: right;
		content: counter(item) ".";
	}

	.header {
		width: 100%;
		.text {
			flex: 1;
		}
	}
</style>
