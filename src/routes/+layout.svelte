<script>
	import "~/app.css"
	// import "uno.css"

	import { setVh, setViewport } from "$lib/viewport"
	import { onMount } from "svelte"

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
