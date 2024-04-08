<script>
	import Label from "./label.svelte"

	export let items
	export let value = null

	$: computedItems = !Array.isArray(items) ? Object.values(items) : items
</script>

<div role="checkbox" class="grid-2-xs xl:flex flex-wrap items-center gap-xs">
	{#each computedItems as { label, code, color }}
		<input
			class="sr-only"
			type="checkbox"
			id={code}
			bind:group={value}
			value={code}
			aria-checked={value === code}
		/>
		<Label {label} rel={code} {color} />
	{/each}
</div>

<style lang="postcss">
	.sr-only {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		padding: 0;
		border: 0;
		height: 1px;
		width: 1px;
		overflow: hidden;
	}

	input[type="checkbox"] {
		position: absolute;
	}

	input[type="checkbox"] + :global(label) {
		display: block;
		position: relative;
		text-align: left;
	}

	input[type="checkbox"] + :global(label)::before {
		content: "";
		position: relative;
		display: inline-block;
		margin-right: 0.5em;
		width: 1em;
		height: 1em;
		background: transparent;
		border: var(--border-default);
		border-radius: 3px;
		top: 0.1em;
	}

	input[type="checkbox"] + :global(label)::after {
		content: "";
		position: absolute;
		display: block;
		width: 0.6em;
		height: 0.6em;
		top: calc(6.2px + 0.2em);
		left: calc(10px + 0.2em);
		background: var(--color-black);
		border-radius: 1px;
		opacity: 0;
	}

	input[type="checkbox"]:checked + :global(label)::after {
		opacity: 1;
	}
</style>
