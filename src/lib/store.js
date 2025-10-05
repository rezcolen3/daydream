import { writable } from 'svelte/store';

export let speeches = writable([
	{ sayer: 'narrator', text: 'Click Space to continue' }
]);
