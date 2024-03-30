<script>
	import "~/app.css"
	// import "uno.css"

	import { onMount } from "svelte"
	import { setVh, setViewport } from "$lib/viewport"

	onMount(() => {
		setVh()
		setViewport()
		window.onresize = () => {
			setViewport()
		}
		document.body.classList.add("loaded")
	})
</script>

<slot />
