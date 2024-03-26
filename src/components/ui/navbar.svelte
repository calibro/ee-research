<script>
	import Logo from "~/assets/icons/logo.svg?component"
	import Burger from "~/assets/icons/burger.svg?component"
	import Close from "~/assets/icons/close.svg?component"
	import Link from "../elements/link.svelte"
	import { browser } from "$app/environment"
	import { breakpoint } from "~/css/tokens.json"
	import { extractNumber } from "~/lib"

	const items = [
		{ title: "YOUTUBE LANGUAGE COMPARISON", url: "/tiktok" },
		{ title: "YOUTUBE NETWORK", url: "/tiktok" },
		{ title: "GETTYIMAGES STEREOTYPES", url: "/tiktok" },
		{ title: "GETTYIMAGES CIRCULATION", url: "/tiktok" },
		{ title: "TIKTOK TOPICS", url: "/tiktok" },
	]

	let navHeight

	let openMenu = false

	$: {
		if (browser) {
			document.body.style.setProperty("--nav-height", `${navHeight}px`)
			if (innerWidth > extractNumber(breakpoint.l)) {
				openMenu = false
			}
			document.body.classList.toggle("scroll-lock", openMenu)
		}
	}
</script>

<nav class="grid" bind:clientHeight={navHeight}>
	<div class="item col-[span-1] flex-center-center">
		<Link url="/">
			<div class="logo">
				<Logo width="100%" />
			</div>
		</Link>
	</div>
	<div class="item col-[10/span-3] l:hidden flex-end-center">
		<Link fn={() => (openMenu = !openMenu)}>
			{#if openMenu}
				<Close width="26" />
			{:else}
				<Burger width="26" />
			{/if}
		</Link>
	</div>
	<div class:show={openMenu} class="items col-[span-11]">
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
		z-index: 202;

		.logo {
			width: 42px;
		}

		.item {
			padding: var(--space-s) var(--space-s);
			@media (--l) {
				padding: var(--space-s) var(--space-m);
			}
		}
	}

	.items {
		position: fixed;
		top: calc(var(--nav-height) + 1px);
		left: 0;
		display: none;
		width: 100%;
		height: calc(100% - var(--nav-height) - 1px);
		background: var(--color-white);
		overflow: auto;
		&.show {
			display: block;
		}
		@media (--l) {
			position: static;
			display: flex;
			border-top: none;
			flex-direction: row;
			height: auto;
		}
	}
</style>
