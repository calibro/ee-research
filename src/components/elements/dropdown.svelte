<script>
	import { onMount } from "svelte"
	import ArrowDown from "~/assets/icons/arrow-down.svg?component"
	import Link from "./link.svelte"
	import Text from "./text.svelte"

	export let items
	export let value = null

	let menuOpen = false

	const handleLink = (slug) => {
		value = slug
		menuOpen = false
	}

	$: selectedItem = items?.find?.((item) => (item.slug || item.query) === value)

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
		class={`dropdown-btn flex-btw-center p-xs ${menuOpen ? "active" : ""}`}
		fn={() => (menuOpen = !menuOpen)}
	>
		<Text
			class={!selectedItem ? "opacity-50" : ""}
			content={!items?.length
				? "Loading..."
				: selectedItem?.title || selectedItem?.queryLabel || "Select"}
			typo="p"
		/>
		<ArrowDown width={12} />
	</Link>

	{#if items?.length}
		<div class:show={menuOpen} class="list scrollbar-hide">
			{#each items as item}
				<Link
					class={`button p-xs ${item.slug === value ? "selected" : ""}`}
					text={item.title || item.queryLabel}
					fn={() => handleLink(item.slug || item.query)}
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

		:global(.dropdown-btn) {
			width: 100%;
			border: var(--border-default);
			border-radius: var(--border-radius);
			@media (--hover) {
				&:hover {
					background: var(--color-ice);
				}
			}
		}
		:global(.dropdown-btn.active) {
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
		border-radius: var(--border-radius);
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
