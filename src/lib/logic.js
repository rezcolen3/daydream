import { addNewBubble } from './speech/speechMain.svelte';

export function Next() {
	const options = [
		{ sayer: 'god', text: 'Hello there, I am God.' },
		{ sayer: 'player', text: 'I am a player.' },
		{ sayer: 'narrator', text: 'iim a Narrator' }
	];
	const choice = options[Math.floor(Math.random() * options.length)];
	addNewBubble(choice.text, choice.sayer);
}
