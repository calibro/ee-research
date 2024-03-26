<script>
	import { getRelativeUrl } from "$lib"

	export let url = null
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
	class="link {theme} {theme === 'download'
		? 'typo-label'
		: 'typo-p'} {$$restProps.class}"
	download={download ? true : undefined}
	on:click={fn}
	role="button"
	tabindex="0"
>
	{#if $$slots.default}
		<slot />
	{:else}
		<div class="content">{@html text}</div>
	{/if}
</svelte:element>

<style lang="postcss">
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
		/* THEMES */
		&.default {
		}

		&.thumb {
			display: block;
			width: 100%;
			height: 100%;
			@media (--hover) {
				&:hover {
					background-color: var(--color-black);
					color: var(--color-white);
				}
			}
		}

		&.nav {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: var(--space-s) var(--space-m);
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			width: 100%;
			.content {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			border-bottom: var(--border-default);
			@media (--l) {
				border-left: var(--border-default);
				border-bottom: none;
			}
			@media (--hover) {
				&:hover {
					background-color: var(--color-black);
					color: var(--color-white);
				}
			}
		}

		&.download {
			display: inline-flex;
			padding: 4px 8px 5px 8px;
			border: var(--border-default);
			border-radius: var(--border-radius);
			width: fit-content;
			transition:
				background-color 0.3s,
				color 0.3s;
			@media (--hover) {
				&:hover {
					background-color: var(--color-black);
					color: var(--color-white);
				}
			}
		}

		&.cta {
			display: block;
			border-radius: var(--border-radius);
			border: 1px solid var(--color-black);
			padding: var(--space-xs) var(--space-m);
			background: var(--color-black);
			color: var(--color-white);
		}
	}
</style>
