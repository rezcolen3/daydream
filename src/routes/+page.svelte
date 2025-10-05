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
	style="background-image: url('/src/lib/assets/bg.png'); background-size: cover; background-position: center;"
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
