<script>
	import Logo from "~/assets/icons/logo.svg?component"
	import Link from "~/components/elements/link.svelte"
	import Text from "~/components/elements/text.svelte"
	import ThumbHome from "~/components/thumb/home.svelte"
</script>

<div class="homepage">
	<div class="top grid-1-0 xl:grid-12-0 gap-0">
		<div class="item xl:col-[span-1] row-[span-2] p-s xl:flex-center-center">
			<Link url="/">
				<div class="logo">
					<Logo width="100%" />
				</div>
			</Link>
		</div>
		<div
			class="item flex-start-center bg-grey-dark px-s py-l xl:col-[span-11] row-[span-2]"
		>
			<div>
				<Text tag="h1" content="Embodied ecologies" typo="h1" />
				<Text
					tag="h2"
					content="online mapping"
					typo="p"
					class="case-upper font-normal"
				/>
			</div>
		</div>
	</div>
	<div class="bottom grid-1-0 xl:grid-12-0">
		<div class="item hidden xl:block"></div>
		<div class="item xl:col-[span-3]">
			<ThumbHome
				title="YOUTUBE NETWORK"
				description="How do video results about substances change according to the language of the query?"
				url="/youtube-network"
			/>
		</div>
		<div class="item xl:col-[span-3]">
			<ThumbHome
				title="GETTYIMAGES STEREOTYPES"
				description="Which visual tropes emerges in connection to different pollution routes, practices and substances?"
				url="/getty-stereotypes"
			/>
		</div>
		<div class="item xl:col-[span-3]">
			<ThumbHome
				title="TIKTOK TOPICS"
				description="Which topics are connected to different substances, practices and devices?"
				url="/tiktok"
			/>
		</div>
		<div class="item hidden xl:block xl:col-[span-2]"></div>
		<div class="item hidden xl:block"></div>
		<div class="item xl:col-[span-3]">
			<ThumbHome
				title="YOUTUBE LANGUAGE COMPARISON"
				description="What topics are substances connected to through the recommendation algorithm?"
				url="/youtube-lang-compare"
			/>
		</div>
		<div class="item xl:col-[span-3]">
			<ThumbHome
				title="GETTYIMAGES CIRCULATION"
				description="By which web pages are the most significant stock photos used?"
				url="/getty-circulation"
			/>
		</div>
		<div class="item xl:col-[span-5] flex-start-center px-s py-l case-upper">
			<Link url="/about">
				<Text tag="h3" content="About" typo="2" />
			</Link>
		</div>
		<div class="item hidden xl:block"></div>
		<div class="item hidden xl:block xl:col-[span-11]"></div>
	</div>
</div>

<style lang="postcss">
	.logo {
		width: 42px;
	}

	.homepage {
		height: 100vh;
	}

	.top,
	.bottom {
		@media (--xl) {
			height: 50%;
		}
	}
	.item {
		border-bottom: var(--border-default);

		@media (--xl) {
			border-right: var(--border-default);
			border-bottom: var(--border-default);
		}
	}
</style>
