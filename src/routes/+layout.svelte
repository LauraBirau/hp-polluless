<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Nav from '../componets/+nav.svelte';
	let { children } = $props();

	injectSpeedInsights();
</script>

<!-- Navigator-->

<div class="w-full h-auto m-auto p-4 custom flex justify-center bg-olive">
	<Nav />
</div>
<div class="bg-olive w-full h-lvh p-4 flex flex-col items-center">
	<div class="w-full h-full m-auto p-4 custom flex justify-center">
		{@render children()}
	</div>
	<div class="w-full lg:w-[65rem] h-30">
		<div class="inconsolata w-full rounded-xl p-4 text-center">HP PolluLess 2025.</div>
	</div>
</div>

<style>
	.bg-olive {
		background-color: #c9e3ac;
	}

	.yellowish {
		background-color: #ffe586;
	}
	.inconsolata {
		font-family: 'Inconsolata';
	}
</style>
