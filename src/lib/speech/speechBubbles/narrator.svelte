<script>
	let props = $props();
	let text = props.text;
	let words = text.split(' ');

	let animationDone = $state(false);
</script>

<svelte:window
	on:keydown={() => {
		if (event.key === ' ' || event.keyCode === 32) {
			if (!animationDone) {
				animationDone = true;
			}
		}
	}}
/>

<div class="flex justify-end">
	<div class="speech-bubble animate-slide-in mr-3 w-fit max-w-8/10 p-3 font-['Space_Grotesk']">
		{#each words as word, i}
			<span class="fade-word" style="animation-delay: {i * 0.1}s" class:visible={animationDone}>
				{word}&nbsp;
			</span>
		{/each}
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.fade-word {
		opacity: 0;
		display: inline-block;
		animation: fade-in 0s forwards;
	}

	.skip-animation {
		animation: none !important;
		transform: none !important;
		opacity: 1 !important;
	}
</style>
