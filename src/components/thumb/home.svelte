<script>
	import Link from "../elements/link.svelte"
	import Text from "../elements/text.svelte"

	export let title = ""
	export let description = ""
	export let url = ""
</script>

<Link {url} theme="thumb" class="px-s py-l">
	<Text tag="h4" typo="1" content={title} class="case-upper pb-m" />
	<Text tag="p" typo="3" content={description} />
</Link>
