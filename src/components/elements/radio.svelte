<script>
	export let items
	export let value = null

	$: computedItems = !Array.isArray(items) ? Object.values(items) : items
</script>

<div role="radiogroup" class="grid-2-xs l:flex flex-wrap items-center gap-xs">
	{#each computedItems as { label, code, color }}
		<input
			class="sr-only"
			type="radio"
			id={code}
			bind:group={value}
			value={code}
		/>
		<label
			class="typo-small"
			for={code}
			style={`--background: var(--color-${color})`}
		>
			{label}
		</label>
	{/each}
</div>

<style lang="postcss">
	label {
		user-select: none;
		line-height: 1;
		background: var(--background);
		padding: 5px 10px 8px 10px;
		border-radius: var(--border-radius);
		cursor: pointer;
	}

	.sr-only {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		padding: 0;
		border: 0;
		height: 1px;
		width: 1px;
		overflow: hidden;
	}

	input[type="radio"] {
		position: absolute;
	}

	input[type="radio"] + label {
		display: block;
		position: relative;
		text-align: left;
	}

	input[type="radio"] + label::before {
		content: "";
		position: relative;
		display: inline-block;
		margin-right: 0.5em;
		width: 1em;
		height: 1em;
		background: transparent;
		border: var(--border-default);
		border-radius: 100%;
		top: 0.1em;
	}

	input[type="radio"] + label::after {
		content: "";
		position: absolute;
		display: block;
		width: 0.6em;
		height: 0.6em;
		top: calc(6.2px + 0.2em);
		left: calc(10px + 0.2em);
		background: var(--color-black);
		border-radius: 100%;
		opacity: 0;
	}

	input[type="radio"]:checked + label::after {
		opacity: 1;
	}
</style>
