<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen justify-center bg-black">
	<div class="h-full aspect-5/8 bg-white">{@render children?.()}</div>
</div>
