<script>
	import speechMain from '$lib/speech/speechMain.svelte';
	import CharactersMain from '$lib/characters/charactersMain.svelte';
	import OptionsMain from '$lib/options/optionsMain.svelte';
	import LandingMain from '$lib/landing/landingMain.svelte';

	import { SpacePress } from '$lib/logic';
</script>

<svelte:window
	on:keydown={() => {
		if (event.key === ' ' || event.keyCode === 32) {
			SpacePress();
		}
	}}
/>

<div class="flex h-full flex-col border-2 border-red-500">
	{#if true == true}
		<!-- simulating game started -->
		<speechMain />
		<CharactersMain />
		<OptionsMain />
	{:else}
		<LandingMain />
	{/if}
</div>
