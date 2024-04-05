<script>
	import { browser } from "$app/environment"
	import { createLockScrollStore, lockscroll } from "@svelte-put/lockscroll"
	import Burger from "~/assets/icons/burger.svg?component"
	import Close from "~/assets/icons/close.svg?component"
	import Logo from "~/assets/icons/logo.svg?component"
	import { breakpoint } from "~/css/tokens.json"
	import { extractNumber } from "~/lib"
	import Link from "../elements/link.svelte"

	const locked = createLockScrollStore()

	const items = [
		{ title: "YOUTUBE LANGUAGE COMPARISON", url: "/tiktok" },
		{ title: "YOUTUBE NETWORK", url: "/tiktok" },
		{ title: "GETTYIMAGES STEREOTYPES", url: "/getty-stereotypes" },
		{ title: "GETTYIMAGES CIRCULATION", url: "/getty-circulation" },
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
			locked.toggle(openMenu)
		}
	}
</script>

<svelte:body use:lockscroll={locked} />

<nav class="grid-12-0" bind:clientHeight={navHeight} class:isOpen={openMenu}>
	<div class="item col-[span-1] flex-center-center">
		<Link url="/">
			<div class="logo">
				<Logo width="100%" />
			</div>
		</Link>
	</div>
	<div class="item col-[10/span-3] xl:hidden flex-end-center">
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
		z-index: 100;

		&.isOpen {
			position: fixed;
		}
		.logo {
			width: 42px;
		}

		.item {
			padding: var(--space-s) var(--space-s);
			@media (--xl) {
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
		@media (--xl) {
			position: static;
			display: flex;
			border-top: none;
			flex-direction: row;
			height: auto;
		}
	}
</style>
