<script>
	export let thumb
	export let title
	export let id
	export let channel
	export let langs
	export let views
	export let likes
	export let comments
	export let date
</script>

<div>
	<div class="thumb">
		<img src={thumb} alt={title} />
	</div>
	<div class="info">
		<h3>{title}</h3>
		<p>{id}</p>
		<p>{channel}</p>
		<p>{langs}</p>
		<p>{views}</p>
		<p>{likes}</p>
		<p>{comments}</p>
		<p>{date}</p>
	</div>
</div>
