<script>
	import { page } from '$app/state';
	let { children } = $props();

	const canonicalUrl = $derived.by(() => {
		let { url } = page;
		url.protocol = 'https:';
		url.host = 'holoid.fans';
		url.port = '443';
		return url;
	});
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl.href} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}

<style>
	:root,
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		min-height: 100vh;
	}
</style>
