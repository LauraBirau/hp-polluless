<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	import Nav from '../componets/+nav.svelte';
	import rectangle from '$lib/rectangle-one.png';
	let { children } = $props();

	injectSpeedInsights();
</script>

<div class="main w-full min-h-screen absolute flex flex-row">
	<div
		class="w-1/4 min-h-screen hidden md:block overflow-hidden bg-repeat-y bg-[length:100%_400px]"
		style={`background-image: url('${rectangle}');`}
	></div>
	<div class="w-2/4 hidden md:block min-h-screen p-4 flex flex-col justify-between shadow-lg">
		<div class="h-auto w-full p-4 flex flex-col gap-4">
			<Nav />
			<div class="w-full h-auto m-auto custom flex">
				{@render children()}
			</div>
		</div>
		<div class="inconsolata w-full h-20 p-4 flex flex-row justify-center items-center gap-2">
			<p>HP PolluLess 2025.</p>
			<a href="/" aria-label="Home">
				<svg
					class="w-10 h-10 brownish"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>
	</div>
	<div
		class="w-full block md:hidden min-h-screen p-4 flex flex-col justify-between shadow-lg bg-repeat-y bg-[length:100%_500px]"
		style={`background-image: url('${rectangle}');`}
	>
		<div class="h-auto w-full p-4 flex flex-col gap-4">
			<Nav />
			<div class="w-full h-auto m-auto custom flex">
				{@render children()}
			</div>
		</div>
		<div class="inconsolata w-full h-20 p-4 flex flex-row justify-center items-center gap-2">
			<p>HP PolluLess 2025.</p>
			<a href="/" aria-label="Home">
				<svg
					class="w-10 h-10 brownish"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>
	</div>
	<div
		class="w-1/4 min-h-screen hidden md:block overflow-hidden bg-repeat-y bg-[length:100%_400px]"
		style={`background-image: url('${rectangle}');`}
	></div>
	<!-- <div class="w-full h-auto flex flex-col items-center relative">
		<Nav />
		<div class="w-full h-auto m-auto p-4 custom flex justify-center">
			{@render children()}
		</div>
		<div class="inconsolata w-full h-20 p-4 flex flex-row justify-center items-center gap-2">
			<p>HP PolluLess 2025.</p>
			<a href="/" aria-label="Home">
				<svg
					class="w-10 h-10 brownish"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>
	</div> -->
</div>

<style>
	.inconsolata {
		font-family: 'Inconsolata';
		color: #413620;
	}
	.main {
		background-color: #c9e3ac;
	}
</style>
