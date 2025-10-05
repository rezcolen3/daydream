<script>
	let props = $props();
	let text = props.text;
</script>

<div class="justify-start flex">
	<div class="speech-bubble ml-3 w-fit max-w-8/10 p-3 font-['Space_Grotesk']">
		{text}
	</div>
</div>

<style>
	/* thanks to projects.verou.me/bubbly/ for the bubbles */

    .speech-bubble {
		position: relative;
		background: #c4faff;
		border-radius: 0.4em;
	}

	.speech-bubble:after {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		width: 0;
		height: 0;
		border: 15px solid transparent;
		border-right-color: #c4faff;
		border-left: 0;
		margin-top: -15px;
		margin-left: -15px;
	}
</style>
