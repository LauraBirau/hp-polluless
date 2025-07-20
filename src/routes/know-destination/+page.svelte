<script>
	import { matchedLocations } from '$lib/stores/store.js';
	import { goto } from '$app/navigation';

	let answer1 = '';
	let answer2 = '';
	let answer3 = '';

	const locations = [
		{ name: 'Amsterdam', group: ['yes', 'red', 'morning'] },
		{ name: 'Rotterdam', group: ['no', 'blue', 'evening'] },
		{ name: 'Utrecht', group: ['yes', 'blue', 'morning'] }
	];

	function submitForm() {
		const matched = locations.filter(
			(loc) => loc.group[0] === answer1 && loc.group[1] === answer2 && loc.group[2] === answer3
		);

		matchedLocations.set(matched);
		goto('/answer-know-destination');
	}
</script>

<div class="w-full h-full p-5 flex flex-col items-center justify-center">
	<h1 class="text-2xl font-bold mb-4">Know Your Destination!</h1>
	<p class="text-gray-600 mb-8">
		Answer the following questions to find out where you should go next.
	</p>
	<form on:submit|preventDefault={submitForm} class="max-w-md mx-auto space-y-4">
		<div class="space-y-2">
			<label class="block text-sm font-medium text-gray-700"> Do you like cities? </label>
			<select
				bind:value={answer1}
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			>
				<option value="" disabled selected hidden> - </option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</div>

		<div class="space-y-2">
			<label class="block text-sm font-medium text-gray-700"> Favorite color? </label>
			<select
				bind:value={answer2}
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			>
				<option value="" disabled selected hidden> - </option>
				<option value="red">Red</option>
				<option value="blue">Blue</option>
			</select>
		</div>

		<div class="space-y-2">
			<label class="block text-sm font-medium text-gray-700"> Best time of day? </label>
			<select
				bind:value={answer3}
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			>
				<option value="" disabled selected hidden> - </option>
				<option value="morning">Morning</option>
				<option value="evening">Evening</option>
			</select>
		</div>

		<button
			type="submit"
			class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
			>See Matches</button
		>
	</form>
</div>
