<script>
	import { getRelativeUrl } from "$lib"

	export let url
	export let theme = "default"
	export let external = false
	export let text = ""
	export let download = false
	export let fn = () => {}

	const component = url ? "a" : "button"
	const to = getRelativeUrl(url)
	const isExternal = download || external
</script>

<svelte:element
	this={component}
	href={to}
	target={download ? "_blank" : external ? "_blank" : "_self"}
	rel={isExternal ? "external" : undefined}
	class="link {theme} {$$restProps.class}"
	download={download ? true : undefined}
	on:click={fn}
	role="button"
	tabindex="0"
>
	{#if $$slots.default}
		<slot />
	{:else}
		<div>{@html text}</div>
	{/if}
</svelte:element>

<style>
	button {
		display: flex;
		background-color: transparent;
		border: none;
		line-height: inherit;
		text-align: inherit;
		cursor: pointer;
		font-weight: inherit;
	}

	.link {
		display: block;
		&.thumb {
			width: 100%;
			height: 100%;
			&:hover {
				background-color: var(--color-black);
				color: var(--color-white);
			}
		}
	}
</style>
