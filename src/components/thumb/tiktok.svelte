<script>
	import Play from "~/assets/icons/play.svg?component"
	import Like from "~/assets/icons/like.svg?component"
	import Text from "../elements/text.svelte"
	import Modal from "../elements/modal.svelte"
	import { base } from "$app/paths"
	import Image from "../elements/image.svelte"
	export let video = {}
	let isOpen = false
</script>

<button
	on:click={() => (isOpen = true)}
	class="thumb p-s flex-col-start-stretch gap-s text-left"
>
	<div class="img">
		<Image src="{base}/tiktokAssets/thumbs/{video.id}.webp" alt={video.title} />
	</div>
	<Text
		tag="p"
		typo="p"
		content={video.video_description}
		class="max-lines mb-xs"
	/>
	<div class="grid-3-xs">
		<div class="flex gap-xs">
			<Play width="14" />
			<Text tag="p" typo="p" content={video.view_count} />
		</div>
		<div class="flex gap-xs">
			<Like width="14" />
			<Text tag="p" typo="p" content={video.like_count} />
		</div>
	</div>
</button>

{#if isOpen}
	<Modal fn={() => (isOpen = false)}>
		<blockquote
			class="tiktok-embed"
			cite={video.link}
			data-video-id={video.id}
			data-embed-from="embed_page"
			style="max-width:325px; min-width:325px;"
		>
			<section>
				<a
					target="_blank"
					title="@{video.username}"
					href="https://www.tiktok.com/@{video.username}?refer=embed"
					>@{video.username}</a
				>
				<p>
					{video.video_description}
				</p>
			</section>
		</blockquote>
		<script async src="https://www.tiktok.com/embed.js"></script>
	</Modal>
{/if}

<style lang="postcss">
	.thumb {
		width: 100%;
		overflow: hidden;
		background: var(--color-white);
		border-radius: var(--border-radius);
		transition:
			box-shadow 0.3s,
			filter 0.3s;
		cursor: pointer;
		filter: grayscale(1);
		box-shadow: 0px 0px 0px 0px var(--color-ice);
		@media (--hover) {
			&:hover {
				box-shadow: 0px 8px 8px 0 var(--color-ice);
				filter: grayscale(0);
			}
		}
		.img {
			width: 100%;
			aspect-ratio: 9 / 16;
			border-radius: var(--border-radius-inner);
			overflow: hidden;
			:global(img) {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		:global(.max-lines) {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3; /* number of lines to show */
			line-clamp: 3;
			-webkit-box-orient: vertical;
			min-height: 3lh;
			width: 100%;
		}
	}
</style>
