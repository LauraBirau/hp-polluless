<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	let { children } = $props();

	injectSpeedInsights();
</script>

<!-- Navigator-->
<div class="w-full h-10 bg-gray-100 flex flex-row items-center justify-start pl-4 gap-4">
	<a href="/" class="text-gray-800 hover:text-gray-900 p-2">Home</a>
	<a href="/know-destination" class="text-gray-800 hover:text-gray-900 p-2">Know Destination</a>
	<a href="/new-experience" class="text-gray-800 hover:text-gray-900 p-2">New Experience</a>
	<a href="/about-us" class="text-gray-800 hover:text-gray-900 p-2">About Us</a>
</div>

<div class="w-full h-full m-auto flex flex-col items-center justify-center">
	{@render children()}
</div>
