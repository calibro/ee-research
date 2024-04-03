<script>
	import { navigating } from "$app/stores"
	import ThumbNews from "~/components/thumb/news.svelte"
	import NewsNavbar from "./navbar.svelte"

	export let query
	export let news
	export let close = () => {}

	const { cluster, rank } = news

	const onKeyDown = (e) => {
		if (e.key === "Escape") {
			close()
		}
	}
	$: if ($navigating) {
		close()
	}
</script>

<svelte:window on:keydown={onKeyDown} />

<div class="news">
	<NewsNavbar {cluster} {rank} {query} on:close={close} />
	<div class="container p-s flex flex-col gap-s">
		{#each cluster as item, i}
			<ThumbNews data={item} />
		{/each}
	</div>
</div>

<style lang="postcss">
	.news {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color-white);
		z-index: 300;
		overflow: auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.container {
		flex: 1 1 0;
		background: var(--color-grey);
		@media (--xl) {
			padding-bottom: var(--space-s);
		}
	}
</style>
