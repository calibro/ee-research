<script>
	import { generateSvgPlaceholder } from "~/lib"
	export let src, alt, loading

	const fallback = (e) => {
		e.target.src = generateSvgPlaceholder()
	}
</script>

<img {src} {alt} {loading} on:error={fallback} />
