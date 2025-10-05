<script>
	import God from './speach/god.svelte';
	import Narator from './speach/narator.svelte';
	import Player from './speach/player.svelte';

	import {speaches} from "./script"
</script>

<div class="flex h-full flex-col border-2 border-red-500">
	<div class="flex h-3/10 flex-col gap-2 overflow-auto border-2 border-red-500 p-2">
		
		<Narator text="You wake up, you see the broke life you are living in" />
	</div>
	<div class="flex h-5/10 border-2 border-red-500">
		<div class="h-full w-1/2 border-2 border-red-500"></div>
		<div class="h-full w-1/2 border-2 border-red-500"></div>
	</div>
	<div class="h-2/10 border-2 border-red-500"></div>
</div>