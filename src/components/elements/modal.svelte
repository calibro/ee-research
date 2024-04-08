<script>
	import { onMount } from "svelte"
	import { fade } from "svelte/transition"
	import Close from "~/assets/icons/close.svg?component"
	import Link from "../elements/link.svelte"

	export let fn = () => {}
	export let theme = "default"

	const onKeyDown = (e) => {
		if (e.key === "Escape") {
			fn()
		}
	}

	onMount(async () => {
		document.addEventListener("click", handleClickOutside)
		return () => {
			document.removeEventListener("click", handleClickOutside)
		}
	})

	const handleClickOutside = (event) => {
		if (
			!event.target.closest(".modal-inner") &&
			event.target.closest(".modal")
		) {
			fn()
		}
	}
</script>

<svelte:window on:keydown={onKeyDown} />

<div class="modal flex-center-center" transition:fade={{ duration: 300 }}>
	<div class="relative modal-content flex-center-center {theme}">
		<div class="close {theme}">
			<Link {fn}>
				<Close width="24" />
			</Link>
		</div>
		<slot class="modal-inner" />
	</div>
</div>

<style lang="postcss">
	.close {
		position: absolute;
		top: var(--space-s);
		right: var(--space-s);
		&.no-bg {
			@media (--xl) {
				top: calc(-1 * var(--space-l));
				right: var(--space-0);
			}
		}
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
			&.no-bg {
				@media (--xl) {
					width: auto;
					height: auto;
					overflow: visible;
					:global(iframe) {
						border-radius: var(--border-radius);
						overflow: hidden;
						display: block;
					}
				}
			}
			&.default {
				@media (--xl) {
					height: calc(var(--vh, 1vh) * 90);
					width: calc(var(--vw, 1vw) * 80);
				}
			}
		}
	}
</style>
