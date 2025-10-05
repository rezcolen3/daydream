import storyLine from './storyLine.json';
import { setImages } from './characters/charactersMain.svelte';
import { giveOptions } from './options/optionsMain.svelte';
import { addNewBubble } from './speech/speechMain.svelte';

let currentNodeKey = storyLine.start;
let dialogIndex = 0;
let waitingForOptionBubble = false;
let nextNodeAfterOption = null;

export async function Next() {
	// if we just showed the chosen option bubble, now go to its node
	if (waitingForOptionBubble) {
		currentNodeKey = nextNodeAfterOption;
		dialogIndex = 0;
		waitingForOptionBubble = false;
		Next(); // show first dialog of next node
		return;
	}

	const node = storyLine.nodes[currentNodeKey];
	if (!node) return console.error('Node not found:', currentNodeKey);

	// show next dialog bubble if available
	if (dialogIndex < node.dialog.length) {
		const dialog = node.dialog[dialogIndex];
		dialogIndex++;

		setImages(dialog.godimg, dialog.playerimg);
		addNewBubble(dialog.text, dialog.sayer);
		return;
	}

	// if all dialog shown, show options
	if (node.options && node.options.length > 0) {
		const optionTexts = node.options.map((opt) => opt.text);
		const choice = await giveOptions(optionTexts); // 0,1,2

		// show the chosen option as a bubble first
		addNewBubble(optionTexts[choice], 'player');

		// store next node, wait for next click
		waitingForOptionBubble = true;
		nextNodeAfterOption = node.options[choice].next;
		return;
	}

	// end of path
	addNewBubble('The story ends here.', 'narrator');
}
