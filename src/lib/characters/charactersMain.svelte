<script module>
	import God from '$lib/assets/characterImgs/god.png';
	import Player from '$lib/assets/characterImgs/player.png';

	let godImg = $state();
	let playerImg = $state();

	export function setImages(NewGodImg, NewPlayerImg) {
		godImg = NewGodImg;
		playerImg = NewPlayerImg;
	}
</script>

<div class="flex h-4/10">
	<div class="flex h-full w-1/2 justify-center">
		<!-- {godImg} --> <img src={God} />
	</div>
	<div class="flex h-full w-1/2 justify-center">
		<!-- {playerImg} --> <img src={Player} />
	</div>
</div>
