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
	<div
		class="speech-bubble animate-slide-in mr-3 w-fit max-w-8/10 p-3 font-['Space_Grotesk']"
		class:skip-animation={animationDone}
	>
		{#each words as word, i}
			<span class="fade-word" style="animation-delay: {i * 0.1}s" class:visible={animationDone}>
				{word}&nbsp;
			</span>
		{/each}
	</div>
</div>

<style>
	/* thanks to projects.verou.me/bubbly/ for the bubbles */

	.speech-bubble {
		position: relative;
		background: #daffc4;
		border-radius: 0.4em;
	}

	.speech-bubble:after {
		content: '';
		position: absolute;
		right: 0;
		top: 50%;
		width: 0;
		height: 0;
		border: 15px solid transparent;
		border-left-color: #daffc4;
		border-right: 0;
		margin-top: -15px;
		margin-right: -15px;
	}

	@keyframes slide-in {
		from {
			transform: translateX(30px);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	.animate-slide-in {
		animation: slide-in 0.2s ease-out;
	}

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

	.visible {
		opacity: 1 !important;
		animation: none !important;
	}

	.skip-animation {
		animation: none !important;
		transform: none !important;
		opacity: 1 !important;
	}
</style>
