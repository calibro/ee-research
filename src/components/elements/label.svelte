<script>
	export let label
	export let rel = undefined
	export let color = "white"
	export let typo = "small"
</script>

<label
	class="typo-{typo}"
	for={rel}
	style={`--background: var(--color-${color})`}
>
	{label}
</label>

<style lang="postcss">
	label {
		user-select: none;
		line-height: 1;
		background: var(--background);
		padding: 5px 10px 6px 10px;
		border-radius: var(--border-radius);
		cursor: pointer;
	}
</style>
