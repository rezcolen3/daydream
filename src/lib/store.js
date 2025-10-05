import { writable } from "svelte/store";

export let speaches = writable([
    { who: 'god', text: 'Hello there, I am God.' },
    { who: 'player', text: 'I am a player.' },
    { who: 'narator', text: 'iim a nattaror' }
])