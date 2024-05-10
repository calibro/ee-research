<script>
	import { csvFormatRows, sum } from "d3"
	import TiktokThumb from "~/components/thumb/tiktok.svelte"
	import Navbar from "~/components/tiktok/navbar.svelte"

	export let data

	const { videos, cluster, query, lang, downloadData } = data

	const viewCount = Number(sum(videos, (d) => d.view_count)).toLocaleString()
	const likeCount = Number(sum(videos, (d) => d.like_count)).toLocaleString()

	const download = () => {
		const rows = downloadData[0][1]

		const csvString = csvFormatRows(
			[["query", "cluster", "number_of_videos", "hashtag", "language"]].concat(
				rows.map((item) => {
					return [query, cluster.label, item.videosNumber, item.text, lang]
				})
			)
		)

		const csvContent =
			"data:text/csv;charset=utf-8," + encodeURIComponent(csvString)
		var encodedUri = csvContent
		var link = document.createElement("a")
		link.setAttribute("href", encodedUri)
		link.setAttribute("download", `tiktok-topics-hashtags_${query}_${lang}.csv`)
		document.body.appendChild(link)
		link.click()
	}
</script>

<div class="page">
	<Navbar
		{viewCount}
		{likeCount}
		{cluster}
		{videos}
		{query}
		{lang}
		{download}
	/>
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
