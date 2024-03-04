<script>
	export let items
	export let value = items?.[0]?.slug
</script>

<div role="radiogroup" class="flex flex-wrap items-center gap-xs">
	{#each items as { title, slug, color }}
		<input
			class="sr-only"
			type="radio"
			id={slug}
			bind:group={value}
			value={slug}
		/>
		<label
			class="typo-1 case-upper"
			for={slug}
			style={`--background: var(--color-${color})`}
		>
			{title}
		</label>
	{/each}
</div>

<style lang="postcss">
	label {
		user-select: none;
		line-height: 1;
		background: var(--background);
		padding: 3px 8px 5px 8px;
		border-radius: 8px;
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
		top: calc(4px + 0.2em);
		left: calc(8px + 0.2em);
		background: var(--color-black);
		border-radius: 100%;
		opacity: 0;
	}

	input[type="radio"]:checked + label::after {
		opacity: 1;
	}
</style>
