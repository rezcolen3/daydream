<script module>
	let options = ['Sacrifice Your Life', 'Do Nothing', 'Be Productive'];

	export function giveOptions(options) {}
</script>

<div class="flex h-2/10 flex-col gap-1 p-2 justify-center align-middle border-2 border-red-500">
	{#each options as option}
		<button
			class="option cu w-full cursor-pointer rounded-full border-2 border-black bg-gray-600 px-3 text-center font-['Jersey_10'] text-white hover:bg-gray-800"
		>
			{option}
		</button>
	{/each}
</div>
