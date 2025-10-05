<script>
	import SpeachMain from '$lib/speach/speachMain.svelte';
	import CharactersMain from '$lib/characters/charactersMain.svelte';
	import OptionsMain from '$lib/options/optionsMain.svelte';
	import LandingMain from '$lib/landing/landingMain.svelte';
</script>

<div class="flex h-full flex-col border-2 border-red-500">
	{#if true == true}
		<!-- simulating game started -->
		<SpeachMain />
		<CharactersMain />
		<OptionsMain />
	{:else}
		<LandingMain />
	{/if}
</div>
