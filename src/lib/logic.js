import { addNewBubble } from './speech/speechMain.svelte';

export function Next() {
	const options = [
		{ who: 'god', text: 'Hello there, I am God.' },
		{ who: 'player', text: 'I am a player.' },
		{ who: 'narrator', text: 'iim a Narrator' }
	];
	const choice = options[Math.floor(Math.random() * options.length)];
	addNewBubble(choice.text, choice.who);
}
