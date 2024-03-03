<script>
	import Text from "../+text.svelte"

	export let title = ""
	export let description = ""
</script>

<div class="p-l">
	<Text tag="h4" typo="1" content={title} class="case-upper pb-m" />
	<Text tag="p" typo="3" content={description} />
</div>
	