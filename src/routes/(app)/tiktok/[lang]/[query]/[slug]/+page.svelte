<script>
	import { languages } from "~/config.json"
	import Text from "~/components/elements/text.svelte"
	import DonwloadIcon from "~/assets/icons/download.svg?component"
	import Close from "~/assets/icons/close.svg?component"
	import Link from "~/components/elements/link.svelte"
	import { sum } from "d3"
	import TiktokThumb from "~/components/thumb/tiktok.svelte"

	export let data

	const { videos, cluster, query, lang } = data

	const viewCount = sum(videos, (d) => d.view_count)
	const likeCount = sum(videos, (d) => d.like_count)
</script>

<div class="page">
	<div class="navbar">
		<div class="p-s content flex items-center">
			<Text
				content="Topic - {cluster.label}"
				typo="3"
				class="flex-1 case-upper"
			/>
			<div class="info flex gap-xl">
				<div class="flex-end-center gap-m">
					<Text content={`Tiktok – ${videos?.length}`} typo="1" />
					<Text content="TOTAL PLAYS — {viewCount}" typo="1" />
					<Text content="TOTAL LIKES — {likeCount}" typo="1" />
				</div>
				<!-- <Link theme="download" class="flex gap-xxs items-center">
					<Text typo="1" content="data" />
					<DonwloadIcon width="8" />
				</Link> -->
			</div>
		</div>
		<Link
			url="/tiktok/?lang={lang}&query={query}"
			class="p-s flex-center-center"
		>
			<Close width="26" />
		</Link>
	</div>
	<div class="container">
		<div
			class="p-s grid-1-s s:grid-2-s m:grid-3-s l:grid-4-s xl:grid-5-s xxl:grid-6-s"
		>
			{#each videos as video}
				<TiktokThumb {video} />
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.navbar {
		position: sticky;
		top: 0;
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		border-bottom: var(--border-default);
		background: var(--color-white);
		z-index: 100;
	}
</style>
