<script>
	import Text from "~/components/elements/text.svelte"
	import DonwloadIcon from "~/assets/icons/download.svg?component"
	import Close from "~/assets/icons/close.svg?component"
	import Link from "~/components/elements/link.svelte"
	import { onMount } from "svelte"

	export let data
	const { clusters } = data
</script>

<div class="page">
	<div class="navbar">
		<div class="p-s content flex items-center">
			<div class="general">
				<Text content="Topic - Cookware" typo="3" class="case-upper" />
			</div>
			<div class="info flex gap-xl">
				<div class="flex-end-center gap-m">
					<Text content="TIKTOK — 8" typo="1" />
					<Text content="TOTAL PLAYS — 3,465,702" typo="1" />
					<Text content="TOTAL LIKES — 341,306" typo="1" />
				</div>
				<Link theme="download" class="flex gap-xxs items-center">
					<Text typo="1" content="data" />
					<DonwloadIcon width="8" />
				</Link>
			</div>
		</div>
		<Link url="/" class="p-s flex-center-center" theme="nav">
			<Close width="26" />
		</Link>
	</div>
</div>

<style lang="postcss">
	.navbar {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		border-bottom: var(--border-default);
		.content {
			border-right: var(--border-default);
			height: 100%;
		}

		.general {
			flex-grow: 1;
		}
	}
</style>
