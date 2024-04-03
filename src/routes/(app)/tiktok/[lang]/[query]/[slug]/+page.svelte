<script>
	import { sum } from "d3"
	import TiktokThumb from "~/components/thumb/tiktok.svelte"
	import Navbar from "~/components/tiktok/navbar.svelte"

	export let data

	const { videos, cluster, query, lang } = data

	const viewCount = Number(sum(videos, (d) => d.view_count)).toLocaleString()
	const likeCount = Number(sum(videos, (d) => d.like_count)).toLocaleString()
</script>

<div class="page">
	<Navbar {viewCount} {likeCount} {cluster} {videos} {query} {lang} />
	<div class="container">
		<div
			class="p-s grid-1-s s:grid-2-s l:grid-3-s xl:grid-4-s xl:grid-5-s xxl:grid-6-s"
		>
			{#each videos as video}
				<TiktokThumb {video} />
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
</style>
