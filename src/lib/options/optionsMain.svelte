<script module>
	let options = $state(null);

	let resolveChoice;

	// that chatgpt for this function bro, its too hard for me
	export async function giveOptions(newOptions) {
		options = newOptions;

		const choice = await new Promise((resolve) => {
			resolveChoice = (option) => {
				resolve(option);
				options = [];
				resolveChoice = null;
			};
		});

		return choice;
	}
</script>

<div class="flex h-2/10 flex-col justify-center gap-1 p-2 font-['Space_Grotesk']">
	{#each options as option, i}
		<button
			onclick={() => resolveChoice?.(i)}
			class="w-full cursor-pointer rounded-full border-2 border-black bg-gray-600 px-3 text-center text-white hover:bg-gray-800"
		>
			{option}
		</button>
	{/each}
</div>
