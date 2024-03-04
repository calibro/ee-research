<script>
	import Logo from "~/assets/icons/logo.svg?component"
	import Link from "../elements/+link.svelte"

	const items = [
		{ title: "YOUTUBE LANGUAGE COMPARISON", url: "/tiktok" },
		{ title: "YOUTUBE NETWORK", url: "/tiktok" },
		{ title: "GETTYIMAGES STEREOTYPES", url: "/tiktok" },
		{ title: "GETTYIMAGES CIRCULATION", url: "/tiktok" },
		{ title: "TIKTOK TOPICS", url: "/tiktok" },
	]
</script>

<nav class="grid">
	<div class="item col-[span-1] flex-center-center">
		<a href="/">
			<div class="logo">
				<Logo width="100%" />
			</div>
		</a>
	</div>
	<div class="col-[span-11] flex">
		{#each items as item}
			<Link url={item.url} theme="nav" class="col-[span-2]" text={item.title} />
		{/each}
	</div>
</nav>

<style lang="postcss">
	nav {
		border-bottom: var(--border-default);
	}

	.logo {
		width: 42px;

		@media (--m) {
			width: 4.1vmin;
		}
	}

	.item {
		padding: var(--space-s) var(--space-m);
		&:not(:last-child) {
			border-right: var(--border-default);
		}
	}
</style>
