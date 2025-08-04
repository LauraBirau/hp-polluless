<script lang="ts">
	import { matchedLocations } from '$lib/stores/store.js';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let results: any[] = [];
	let groupedResults: Record<string, any[]> = {};

	onMount(() => {
		results = get(matchedLocations);

		// Group results by destination name
		groupedResults = results.reduce((acc, loc) => {
			if (!acc[loc.name]) acc[loc.name] = [];
			acc[loc.name].push(loc);
			return acc;
		}, {});
	});
</script>

<div class="w-full h-full p-5 flex flex-col items-center justify-center">
	{#if results.length}
		<div class="max-w-md mx-auto">
			<div class="bg-green-50 border border-green-200 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<svg
						class="h-8 w-8 text-green-400 mr-3"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<h2 class="text-lg font-semibold text-gray-800">Your Matches</h2>
				</div>
				<p class="mb-6 text-gray-700">
					We found just the destinations for you! Check out the following locations and
					organizations and see what fits your needs!
				</p>
				{#each Object.entries(groupedResults) as [destination, orgs]}
					<div class="mb-8 w-full">
						<h3 class="text-lg font-bold text-blue-700 mb-2">{destination}</h3>
						<ul class="space-y-3 flex flex-col items-center justify-center">
							{#each orgs as loc}
								<li
									class="bg-white border border-gray-200 rounded-md p-4 shadow-sm w-full flex flex-col items-center"
								>
									<span class="font-medium text-gray-900 mb-2">{loc.organization}</span>
									{#if loc.image}
										<img
											src={loc.image}
											alt={loc.organization}
											class="w-full h-40 object-cover rounded mb-2"
										/>
									{/if}
									{#if loc.website}
										<p class="text-sm text-gray-700 mt-2">
											Learn more at <a
												href={loc.website}
												target="_blank"
												class="text-blue-600 underline">{loc.organization}</a
											>
										</p>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
		<div class="mt-6 text-center">
			<a
				href="/know-destination"
				class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
			>
				Take the Test Again
			</a>
		</div>
	{:else}
		<div class="max-w-md mx-auto text-center p-8">
			<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
				<svg
					class="mx-auto h-12 w-12 text-yellow-400 mb-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-9v2.25"
					/>
				</svg>
				<p class="text-gray-700 mb-4">No locations matched your answers.</p>
				<a
					href="/know-destination"
					class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
				>
					Take the Test
				</a>
			</div>
		</div>
	{/if}
</div>

<style>
	.limelight-head {
		font-family: Limelight;
		font-style: normal;
		font-variant: small-caps;
		font-weight: 100;
		line-height: 26.4px;
		color: #413620;
	}
	.inconsolata-p {
		font-family: 'Inconsolata';
		color: #413620;
	}
	.yellowish {
		background-color: #ffe586;
	}
	.yellowish:hover {
		background-color: #edd168;
	}
</style>
