<div class="page flex">
	<div class="sidebar">ciao</div>
	<div>
		<h1>Welcome to About</h1>
		<p>Visit <a href="/">kit.svelte.dev</a> to read the documentation</p>
	</div>
</div>

<style lang="postcss">
	.page {
		height: 100%;
	}
	.sidebar {
		border-right: var(--border-default);
		@media (--m) {
			width: 20vw;
		}
	}
</style>
