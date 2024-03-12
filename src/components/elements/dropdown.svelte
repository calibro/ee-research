<script>
	import { onMount } from "svelte"
	import Link from "./link.svelte"
	import ArrowDown from "~/assets/icons/arrow-down.svg?component"
	import Text from "./text.svelte"

	export let items
	export let value = null

	let menuOpen = false

	const handleLink = (slug) => {
		value = slug
		menuOpen = false
	}

	$: selectedItem = items?.find?.((item) => item.slug === value)

	let dropdownRef

	onMount(() => {
		document.addEventListener("click", handleClickOutside)
		return () => {
			document.removeEventListener("click", handleClickOutside)
		}
	})

	const handleClickOutside = (event) => {
		if (!event.target.closest(".dropdown")) {
			menuOpen = false
		}
	}
</script>

<div class="dropdown" ref={dropdownRef}>
	<Link
		class={`cta flex-btw-center p-xs ${menuOpen ? "active" : ""}`}
		fn={() => (menuOpen = !menuOpen)}
	>
		<Text
			class={!selectedItem ? "opacity-50" : ""}
			content={!items?.length ? "Loading..." : selectedItem?.title || "Select"}
			typo="2"
		/>
		<ArrowDown width={12} />
	</Link>

	{#if items?.length}
		<div class:show={menuOpen} class="list scrollbar-hide">
			{#each items as item}
				<Link
					class={`button p-xs ${item.slug === value ? "selected" : ""}`}
					text={item.title}
					fn={() => handleLink(item.slug)}
				/>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.dropdown {
		position: relative;
		display: block;

		:global(.button) {
			width: 100%;
			@media (--hover) {
				&:hover {
					background: var(--color-grey);
					color: var(--color-black);
				}
			}
		}

		:global(.cta) {
			width: 100%;
			border: var(--border-default);
			border-radius: 8px;
			@media (--hover) {
				&:hover {
					background: var(--color-ice);
				}
			}
		}
		:global(.cta.active) {
			background: var(--color-grey);
		}
	}

	.list {
		display: none;
		position: absolute;
		background-color: var(--color-ice);
		width: 100%;
		border: var(--border-default);
		margin-top: var(--space-xxs);
		border-radius: 8px;
		z-index: 1;
		max-height: calc(var(--vh) * 20);
		overflow: auto;
		:global(.selected) {
			background-color: var(--color-black);
			color: var(--color-white);
		}
	}

	.show {
		display: block;
	}
</style>
