import { giveOptions } from './options/optionsMain.svelte';
import { addNewBubble } from './speech/speechMain.svelte';

export async function Next() {
	addNewBubble('e', 'god');

	alert(await giveOptions(['A', 'B', 'C']));
}
