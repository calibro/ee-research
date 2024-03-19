<script>
	import Logo from "~/assets/icons/logo.svg?component"
	import Burger from "~/assets/icons/burger.svg?component"
	import Close from "~/assets/icons/close.svg?component"
	import Link from "../elements/link.svelte"
	import { browser } from "$app/environment"
	import Text from "../elements/text.svelte"

	const items = [
		{ title: "YOUTUBE LANGUAGE COMPARISON", url: "/tiktok" },
		{ title: "YOUTUBE NETWORK", url: "/tiktok" },
		{ title: "GETTYIMAGES STEREOTYPES", url: "/tiktok" },
		{ title: "GETTYIMAGES CIRCULATION", url: "/tiktok" },
		{ title: "TIKTOK TOPICS", url: "/tiktok" },
	]

	let navHeight

	$: browser
		? document.body.style.setProperty("--nav-height", `${navHeight}px`)
		: null

	let openMenu = false
</script>

<nav class="grid" bind:clientHeight={navHeight}>
	<div class="item col-[span-1] flex-center-center">
		<Link url="/">
			<div class="logo">
				<Logo width="100%" />
			</div>
		</Link>
	</div>
	<div class="item col-[10/span-3] m:hidden flex-center-center">
		<Link fn={() => (openMenu = !openMenu)}>
			{#if openMenu}
				<Close width="26" />
			{:else}
				<Burger width="26" />
			{/if}
		</Link>
	</div>
	<div class="items col-[span-11] {openMenu ? 'show' : undefined}">
		{#each items as item}
			<Link url={item.url} theme="nav" class="col-[span-2]" text={item.title} />
		{/each}
	</div>
</nav>

<style lang="postcss">
	nav {
		position: sticky;
		background: var(--color-white);
		top: 0;
		border-bottom: var(--border-default);
		z-index: 10;

		.logo {
			width: 42px;
		}

		.item {
			padding: var(--space-xs) var(--space-m);
			@media (--m) {
				padding: var(--space-s) var(--space-m);
			}
		}
	}

	.items {
		position: absolute;
		top: var(--nav-height);
		left: 0;
		display: none;
		width: 100%;
		background: var(--color-white);
		border-top: 1px solid var(--color-black);
		&.show {
			display: flex;
			flex-direction: column;
		}
		@media (--m) {
			position: static;
			display: flex;
			border-top: none;
			flex-direction: row;
		}
	}
</style>
