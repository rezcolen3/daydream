<script module>
	import God from './speechBubbles/god.svelte';
	import Narrator from './speechBubbles/narrator.svelte';
	import Player from './speechBubbles/player.svelte';

	import { speeches } from '$lib/store';

	let speechBox;

	export function addNewBubble(text, who) {
		speeches.update((s) => {
			s.push({ who, text });
			return s;
		});

		setTimeout(() => {
			//real interesting... its needed for it to work??!!
			speechBox.scrollTo({
				top: speechBox.scrollHeight,
				behavior: 'smooth'
			});
		}, 0);
	}
</script>

<div
	bind:this={speechBox}
	class="flex h-4/10 flex-col gap-4 overflow-hidden border-2 border-red-500 p-2"
>	
<span class="h-200"></span>
	{#each $speeches as speech}
		{#if speech.who == 'god'}
			<God text={speech.text} />
		{:else if speech.who == 'player'}
			<Player text={speech.text} />
		{:else if speech.who == 'narrator'}
			<Narrator text={speech.text} />
		{/if}
	{/each}
</div>
