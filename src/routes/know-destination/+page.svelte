<script lang='ts'>
	import { matchedLocations } from '$lib/stores/store.js';
	import { goto } from '$app/navigation';
	import { locations } from '$lib/locations.js';

    let destination: string = '';
    let activities: string[] = [];
    let duration: string = '';

    const activityOptions: string[] = [
		'beach cleanups',
		'snorkling/water activities',
		'stay inside',
		'something else'
	];

    const durationOptions: string[] = ['a couple of days', 'entire day', 'a couple of hours'];

    const destinations: string[] = Array.from(new Set(locations.map((loc) => loc.name)));

    function submitForm() {
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

<div class="w-full h-full p-5 flex flex-col items-center justify-center">
	<h1 class="text-2xl font-bold mb-4">I know where I am going</h1>
	<p class="text-gray-600 mb-8">
		Answer the following questions to find out where you should go next.
	</p>
	<form on:submit|preventDefault={submitForm} class="max-w-md mx-auto space-y-4">
		<!-- Question 1: Destination -->
		<div class="space-y-2">
			<label class="block text-sm font-medium text-gray-700">Where are you going?</label>
			<select
				bind:value={destination}
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			>
				<option value="" disabled selected hidden> - </option>
				{#each destinations as dest}
					<option value={dest}>{dest}</option>
				{/each}
			</select>
		</div>

		<!-- Question 2: Activities (multiple choice) -->
		<div class="space-y-2">
			<label class="block text-sm font-medium text-gray-700"
				>What kind of activities do you want to do?</label
			>
			{#each activityOptions as act}
				<div>
					<input type="checkbox" id={act} value={act} bind:group={activities} class="mr-2" />
					<label for={act}>{act}</label>
				</div>
			{/each}
		</div>

		<!-- Question 3: Duration (radio buttons) -->
		<div class="space-y-2">
			<label class="block text-sm font-medium text-gray-700"
				>How long are you willing to spend on activities?</label
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
					<label for={dur}>{dur}</label>
				</div>
			{/each}
		</div>

		<button
			type="submit"
			class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
		>
			See Matches
		</button>
	</form>
</div>
