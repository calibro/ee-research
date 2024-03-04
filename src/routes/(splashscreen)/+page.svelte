<script>
	import Logo from "~/assets/icons/logo.svg?component"
	import Link from "~/components/elements/+link.svelte"
	import Text from "~/components/elements/+text.svelte"
	import ThumbHome from "~/components/thumb/+home.svelte"
</script>

<div class="homepage">
	<div class="top grid">
		<div class="item col-[span-1] row-[span-2] flex-center-center">
			<Link url="/">
				<div class="logo">
					<Logo width="100%" />
				</div>
			</Link>
		</div>
		<div
			class="item flex-start-center gradient-180 p-l col-[span-11] row-[span-2]"
		>
			<div>
				<Text tag="h1" content="Embodied ecologies" typo="5" />
				<Text tag="h2" content="– online mapping" typo="4" class="case-upper" />
			</div>
		</div>
	</div>
	<div class="bottom grid">
		<div class="item"></div>
		<div class="item col-[span-3]">
			<ThumbHome
				title="YOUTUBE LANGUAGE COMPARISON"
				description="How do video results about substances change according to the language of the query?"
				url="/tiktok"
			/>
		</div>
		<div class="item col-[span-3]">
			<ThumbHome
				title="GETTYIMAGES STEREOTYPES"
				description="Which visual tropes emerges in connection to different pollution routes, practices and substances?"
				url="/tiktok"
			/>
		</div>
		<div class="item col-[span-3]">
			<ThumbHome
				title="TIKTOK TOPICS"
				description="Which topics are connected to different substances, practices and devices?"
				url="/tiktok"
			/>
		</div>
		<div class="item col-[span-2]"></div>
		<div class="item"></div>
		<div class="item col-[span-3]">
			<ThumbHome
				title="YOUTUBE NETWORK"
				description="What topics are substances connected to through the recommendation algorithm?"
				url="/tiktok"
			/>
		</div>
		<div class="item col-[span-3]">
			<ThumbHome
				title="GETTYIMAGES CIRCULATION"
				description="By which web pages are the most significant stock photos used?"
				url="/tiktok"
			/>
		</div>
		<div class="item col-[span-5] flex-start-center p-l case-upper">
			<Link url="/about">
				<Text tag="h3" content="About" typo="2" />
			</Link>
		</div>
		<div class="item"></div>
		<div class="item col-[span-11]"></div>
	</div>
</div>

<style lang="postcss">
	.logo {
		width: 42px;

		@media (--m) {
			width: 4.1vmin;
		}
	}

	.homepage {
		height: 100vh;
	}

	.top,
	.bottom {
		height: 50%;
	}
	.item {
		border: 0 0 var(--border-default);
	}
</style>
