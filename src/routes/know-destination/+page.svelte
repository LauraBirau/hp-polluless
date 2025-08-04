<script lang="ts">
	import { matchedLocations } from '$lib/stores/store.js';
	import { goto } from '$app/navigation';
	import { locations } from '$lib/locations.js';

	let destination: string = '';
	let activities: string[] = [];
	let duration: string = '';
	let showError = false;

	const activityOptions: string[] = [
		'beach cleanups',
		'snorkling/water activities',
		'stay inside',
		'something else'
	];

	const durationOptions: string[] = ['a couple of days', 'entire day', 'a couple of hours'];

	const destinations: string[] = Array.from(new Set(locations.map((loc) => loc.name)));

	function submitForm() {
		if (!destination || activities.length === 0 || !duration) {
			showError = true;
			return;
		}
		showError = false;
		const matched = locations.filter(
			(loc) =>
				loc.name === destination &&
				activities.some((act) => loc.activities.includes(act)) &&
				loc.duration.includes(duration)
		);

		matchedLocations.set(matched);
		goto('/answer-know-destination');
	}
</script>

<div class="w-full lg:w-[65rem] h-20 flex flex-col items-start gap-6">
	<h1 class="text-4xl limelight-head">I know where I am going</h1>
	<p class="inconsolata-p text-md">
		Answer the following questions to find out where you should go next.
	</p>
	<form
		on:submit|preventDefault={submitForm}
		class="w-full lg:w-[65rem] flex flex-col gap-4 items-start"
	>
		<!-- Question 1: Destination -->
		<div class="w-full flex flex-col gap-1 justify-start">
			<label for="destination" class="block text-md font-bold inconsolata-p"
				>Where are you going?</label
			>
			<select
				id="destination"
				bind:value={destination}
				class="w-full lg:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500-500 focus:border-transparent"
			>
				<option value="" disabled selected hidden> - </option>
				{#each destinations as dest}
					<option value={dest}>{dest}</option>
				{/each}
			</select>
		</div>

		<!-- Question 2: Activities (multiple choice) -->
		<div class="space-y-2">
			<span class="block text-md font-bold inconsolata-p"
				>What kind of activities do you want to do?</span
			>
			{#each activityOptions as act}
				<div>
					<input
						type="checkbox"
						id={act}
						name="activity"
						value={act}
						bind:group={activities}
						class="mr-2"
					/>
					<label for={act} class="inconsolata-p">{act}</label>
				</div>
			{/each}
		</div>

		<!-- Question 3: Duration (radio buttons) -->
		<div class="space-y-2">
			<span class="block text-md font-bold inconsolata-p"
				>How long are you willing to spend on activities?</span
			>
			{#each durationOptions as dur}
				<div>
					<input
						type="radio"
						id={dur}
						name="duration"
						value={dur}
						bind:group={duration}
						class="mr-2"
					/>
					<label for={dur} class="inconsolata-p">{dur}</label>
				</div>
			{/each}
		</div>
		<!-- Error message -->
		{#if showError}
			<p class="text-red-600 font-semibold text-center inconsolata-font">
				Please respond to all questions
			</p>
		{/if}

		<div class="w-full h-auto flex flex-col lg:flex-row mt-6 gap-2">
			<button
				type="submit"
				class="yellowish w-full lg:w-1/2 p-4 text-center border-black border rounded-xl limelight-head text-2xl"
			>
				See Matches
			</button>
			<a
				href="/"
				class="bg-red-300 hover:bg-red-400 text-white w-full lg:w-1/4 p-4 text-center border-black border rounded-xl limelight-head text-2xl"
			>
				Cancel
			</a>
		</div>
	</form>
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
	.inconsolata-font {
		font-family: 'Inconsolata';
	}
</style>
