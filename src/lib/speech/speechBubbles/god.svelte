<script>
	let props = $props();
	let text = props.text;
</script>

<div class="justify-end flex">
	<div class="speech-bubble mr-3 w-fit max-w-8/10 p-3 font-['Space_Grotesk']">
		{text}
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
</style>
