<script>
	import "uno.css"
	import "~/app.css"

	import { onMount } from "svelte"
	import { setVh, setViewport } from "$lib/viewport"

	onMount(() => {
		setVh()
		setViewport()
		window.onresize = () => {
			setViewport()
		}
		document.body.classList.add("loaded")
		console.log("app mounted")
	})
</script>

<slot />
