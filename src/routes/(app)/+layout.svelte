<script>
	import Navbar from "~/components/ui/+navbar.svelte"
</script>

<div class="layout">
	<Navbar />
	<slot />
</div>

<style lang="postcss">
	.layout {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
    align-items: start;
		height: 100%;
	}
</style>
