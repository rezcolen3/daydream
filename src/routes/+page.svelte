<script>
	import SpeechMain from '$lib/speech/speechMain.svelte';
	import CharactersMain from '$lib/characters/charactersMain.svelte';
	import OptionsMain from '$lib/options/optionsMain.svelte';
	import LandingMain from '$lib/landing/landingMain.svelte';

	import { Next } from '$lib/logic';
</script>

<svelte:window
	on:keydown={() => {
		if (event.key === ' ' || event.keyCode === 32) {
			Next();
		}
	}}
/>

<div
	class="flex h-full flex-col"
	style="background-image: url('https://hc-cdn.hel1.your-objectstorage.com/s/v3/e4789903a035a7bb7bd091ba9ac46728b7e0832c_image.png'); background-size: cover; background-position: center;"
>
	{#if true == true}
		<!-- simulating game started -->
		<SpeechMain />
		<CharactersMain />
		<OptionsMain />
	{:else}
		<LandingMain />
	{/if}
</div>
