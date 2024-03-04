<script>
	export let tag = "p"
	export let content = ""
	export let typo = "3"
</script>

{#if $$slots.default}
	<svelte:element this={tag} class={`typo-${typo} ${$$restProps.class || ""}`}>
		<slot />
	</svelte:element>
{:else}
	<svelte:element this={tag} class={`typo-${typo} ${$$restProps.class || ""}`}>
		{content}
	</svelte:element>
{/if}
