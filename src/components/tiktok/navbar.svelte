<script>
	import Close from "~/assets/icons/close.svg?component"
	import DonwloadIcon from "~/assets/icons/download.svg?component"
	import Link from "../elements/link.svelte"
	import Text from "../elements/text.svelte"

	export let viewCount,
		likeCount,
		cluster,
		videos,
		query,
		lang,
		download = () => {}
</script>

<div class="navbar">
	<div class="content grid-4-0 xl:grid-12-gap">
		<div class="title col-[span-3] py-s px-s">
			<Text content="Topic" typo="label" class="case-upper" />
			<Text tag="h3" typo="h3" content={cluster.label} ellipsis />
		</div>
		<div class="hidden xl:block xl:col-6 py-s px-s xl:px-0">
			<Text content="Tiktoks" typo="label" class="case-upper" />
			<Text tag="h3" typo="h3" content={videos?.length} />
		</div>
		<div class="hidden xl:block xl:col-[7/span-2] py-s px-s xl:px-0">
			<Text content="Total Plays" typo="label" class="case-upper" />
			<Text tag="h3" typo="h3" content={viewCount} />
		</div>
		<div class="hidden xl:block xl:col-9 py-s px-s xl:px-0">
			<Text content="Total Likes" typo="label" class="case-upper" />
			<Text tag="h3" typo="h3" content={likeCount} />
		</div>
		<div class="hidden xl:block xl:col-[10/span-2] py-s px-s xl:px-0">
			<Text content="Resources" typo="label" class="case-upper pb-xxs" />
			<Link theme="download" class="flex gap-xxs items-center" fn={download}>
				<Text typo="1" content="download data" />
				<DonwloadIcon width="8" />
			</Link>
		</div>
		<div class="col-4 xl:col-12 self-center justify-self-end px-s">
			<Link url="/tiktok/?lang={lang}&query={query}" class="flex-center-center">
				<Close width="26" />
			</Link>
		</div>
	</div>
</div>

<div class="mobile-only grid-4-0 xl:hidden bg-white">
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
</div>

<style lang="postcss">
	.navbar {
		position: sticky;
		top: 0;
		border-bottom: var(--border-default);
		background: var(--color-white);
		z-index: 100;
	}

	.mobile-only {
		border-bottom: var(--border-default);
	}
	.content {
		grid-auto-flow: dense;
		row-gap: 0;
	}
	.title {
		border-right: var(--border-default);
	}
</style>
