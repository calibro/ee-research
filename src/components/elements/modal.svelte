<script>
	import Close from "~/assets/icons/close.svg?component"
	import Link from "../elements/link.svelte"
	import { fade } from "svelte/transition"

	export let fn = () => {}
</script>

<div class="modal flex-center-center" transition:fade={{ duration: 300 }}>
	<div class="relative modal-content flex-center-center">
		<div class="close">
			<Link {fn}>
				<Close width="24" />
			</Link>
		</div>
		<slot />
	</div>
</div>

<style lang="postcss">
	.close {
		position: absolute;
		top: var(--space-s);
		right: var(--space-s);
	}
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: color-mix(in srgb, var(--color-white) 50%, transparent);
		backdrop-filter: blur(5px);
		z-index: 200;
		&-content {
			background: var(--color-white);
			border-radius: var(--border-radius);
			overflow: hidden;
			width: 100%;
			height: 100%;
			@media (--l) {
				height: calc(var(--vh, 1vh) * 90);
				width: calc(var(--vw, 1vw) * 80);
			}
		}
	}
</style>
