<script>
	import { format } from "d3"
	import Comment from "~/assets/icons/comment.svg?component"
	import Like from "~/assets/icons/like.svg?component"
	import Play from "~/assets/icons/play.svg?component"
	import Time from "~/assets/icons/time.svg?component"
	import { languages } from "~/config.json"
	import { convertUnixTime } from "~/lib"
	import Label from "../elements/label.svelte"
	import Modal from "../elements/modal.svelte"
	import Text from "../elements/text.svelte"
	export let thumb
	export let title
	export let tubeId
	export let channel
	export let langs
	export let views
	export let likes
	export let comments
	export let date

	let isOpen = false

	const formatValue = (value) => format(".0s")(value)
</script>

<button
	class="youtube-thumb text-left"
	on:click={() => (isOpen = true)}
	on:keydown={(e) => {
		if (e.key === "Enter") isOpen = true
	}}
>
	<div class="relative img-container">
		<div class="langs flex gap-xs">
			{#each langs as lang}
				<Label label={lang} color={languages[lang.toLowerCase()].color} />
			{/each}
		</div>
		<img class="thumb" src={thumb} alt={title} />
	</div>
	<div class="info">
		<div class="title py-s">
			<Text content={title} typo="p" />
			<Text content={channel} typo="p" />
		</div>
		<div class="interactions">
			<div class="flex gap-xxs">
				<Play width="14" />
				<Text content={formatValue(views)} typo="xs"></Text>
			</div>
			<div class="flex gap-xxs">
				<Like width="14" />
				<Text content={formatValue(likes)} typo="xs"></Text>
			</div>
			<div class="flex gap-xxs">
				<Comment width="14" />
				<Text content={formatValue(comments) || 0} typo="xs"></Text>
			</div>
			<div class="flex gap-xxs">
				<Time width="14" />
				<Text content={convertUnixTime(date)} typo="xs"></Text>
			</div>
		</div>
	</div>
</button>

{#if isOpen}
	<Modal
		theme="no-bg"
		fn={() => {
			isOpen = false
			tubeId = false
		}}
	>
		<div class="youtube-iframe">
			<iframe
				src="https://www.youtube.com/embed/{tubeId}"
				title=""
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			/>
		</div>
	</Modal>
{/if}

<style lang="postcss">
	.youtube-iframe,
	iframe {
		width: 100%;
		aspect-ratio: 16/9;
		border-radius: var(--border-radius);
		overflow: hidden;
		display: block;
		@media (--xl) {
			width: 720px;
		}
	}
	.youtube-thumb {
		width: 100%;
		background: var(--color-white);
		border-radius: var(--border-radius);
		padding: var(--space-s);

		@media (--hover) {
			.thumb {
				filter: grayscale(1);
				opacity: 0.75;
				transition:
					opacity 0.3s,
					filter 0.3s;
			}
			&:hover {
				.thumb {
					filter: grayscale(0);
					opacity: 1;
				}
			}
		}
	}

	.interactions {
		display: flex;
		flex-wrap: wrap;
		column-gap: var(--space-s);
	}
	.info .title {
		height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.img-container {
		.langs {
			position: absolute;
			top: 0;
			left: 0;
			padding: var(--space-xs);
			z-index: 1;
		}
	}
	img {
		width: 100%;
		aspect-ratio: 16/9;
		overflow: hidden;
		border-radius: var(--border-radius);
	}
</style>
