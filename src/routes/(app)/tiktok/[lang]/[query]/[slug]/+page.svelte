<script>
	import Text from "~/components/elements/text.svelte"
	import DonwloadIcon from "~/assets/icons/download.svg?component"
	import Close from "~/assets/icons/close.svg?component"
	import Link from "~/components/elements/link.svelte"
	import { sum } from "d3"
	import TiktokThumb from "~/components/thumb/tiktok.svelte"

	export let data

	const { videos, cluster, query, lang } = data

	const viewCount = Number(sum(videos, (d) => d.view_count)).toLocaleString()
	const likeCount = Number(sum(videos, (d) => d.like_count)).toLocaleString()
</script>

<div class="page">
	<div class="navbar">
		<div class="content grid-4-0 xl:grid-12-gap">
			<div class="title col-[span-3] py-s px-s">
				<Text content="Topic" typo="label" class="case-upper" />
				<Text tag="h3" typo="h3" content={cluster.label} ellipsis />
			</div>
			<div class="line col-[span-4] xl:hidden" />
			<div class="col-[span-2] xl:col-6 py-s px-s xl:px-0">
				<Text content="Tiktoks" typo="label" class="case-upper" />
				<Text tag="h3" typo="h3" content={videos?.length} />
			</div>
			<div class="col-[span-2] xl:col-[7/span-2] py-s px-s xl:px-0">
				<Text content="Total Plays" typo="label" class="case-upper" />
				<Text tag="h3" typo="h3" content={viewCount} />
			</div>
			<div class="col-[span-2] xl:col-9 py-s px-s xl:px-0">
				<Text content="Total Likes" typo="label" class="case-upper" />
				<Text tag="h3" typo="h3" content={likeCount} />
			</div>
			<div class="col-[span-2] xl:col-[10/span-2] py-s px-s xl:px-0">
				<Text content="Resources" typo="label" class="case-upper pb-xxs" />
				<Link theme="download" class="flex gap-xxs items-center">
					<Text typo="1" content="download data" />
					<DonwloadIcon width="8" />
				</Link>
			</div>
			<div class="col-4 xl:col-12 self-center justify-self-end px-s">
				<Link
					url="/tiktok/?lang={lang}&query={query}"
					class="flex-center-center"
				>
					<Close width="26" />
				</Link>
			</div>
		</div>
	</div>
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
	.navbar {
		position: sticky;
		top: 0;
		border-bottom: var(--border-default);
		background: var(--color-white);
		z-index: 100;
	}

	.line {
		height: 1px;
		background: var(--color-black);
	}
	.content {
		grid-auto-flow: dense;
		row-gap: 0;
	}
	.title {
		border-right: var(--border-default);
	}
</style>
