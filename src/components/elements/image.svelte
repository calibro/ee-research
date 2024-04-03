<script>
	import { generateSvgPlaceholder } from "~/lib"
	export let src,
		alt,
		loading = "lazy"

	const fallback = (e) => {
		e.target.src = generateSvgPlaceholder()
	}
</script>

<img
	class={$$restProps.class || ""}
	{src}
	{alt}
	{loading}
	on:error={fallback}
/>
