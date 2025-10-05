<script module>
	import God from './speachBubbles/god.svelte';
	import Narator from './speachBubbles/narator.svelte';
	import Player from './speachBubbles/player.svelte';

	import { speaches } from '$lib/store';

	let speachBox;

	export function addNewBubble(text, who) {
        
    }
</script>

<div bind:this={speachBox} class="overflow-hidden flex h-4/10 flex-col gap-4 border-2 border-red-500 p-2">
	{#each $speaches as speach}
		{#if speach.who == 'god'}
			<God text={speach.text} />
		{:else if speach.who == 'player'}
			<Player text={speach.text} />
		{:else if speach.who == 'narator'}
			<Narator text={speach.text} />
		{/if}
	{/each}
</div>
