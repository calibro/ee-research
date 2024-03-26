<script>
	import { generateSvgPlaceholder } from "~/lib"
	export let src, alt

	const fallback = (e) => {
		e.target.src = generateSvgPlaceholder()
	}
</script>

<img {src} {alt} on:error={fallback} />
