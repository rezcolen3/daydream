import { addNewBubble } from './speech/speechMain.svelte';

export function Next() {
	addNewBubble(choice.text, choice.sayer);
}
