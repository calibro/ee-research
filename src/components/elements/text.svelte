<script>
	export let tag = "p"
	export let content = ""
	export let typo = "p"
	export let ellipsis = false
</script>

{#if $$slots.default}
	<svelte:element
		this={tag}
		class={`typo-${typo} ${$$restProps.class || ""} ${ellipsis ? "ellipsis" : ""}`}
	>
		<slot />
	</svelte:element>
{:else}
	<svelte:element
		this={tag}
		class={`typo-${typo} ${$$restProps.class || ""} ${ellipsis ? "ellipsis" : ""}`}
	>
		{content}
	</svelte:element>
{/if}

<style lang="postcss">
	.ellipsis {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
</style>
