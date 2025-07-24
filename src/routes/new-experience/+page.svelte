<script lang='ts'>
    import { matchedLocations } from '$lib/stores/store.js';
    import { goto } from '$app/navigation';
    import { locations } from '$lib/locations.js';

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

    function submitForm() {
        if (activities.length === 0 || !duration) {
            showError = true;
            return;
        }
        showError = false;
        const matched = locations.filter(
            (loc) =>
                activities.some((act) => loc.activities.includes(act)) &&
                loc.duration.includes(duration)
        );

        matchedLocations.set(matched);
        goto('/answer-new-experience');
    }
</script>

<div class="w-full h-full p-5 flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold mb-4">Find Your Experience</h1>
    <p class="text-gray-600 mb-8">
        Answer the following questions to find out which organizations match your interests.
    </p>
    <form on:submit|preventDefault={submitForm} class="max-w-md mx-auto space-y-4">
        <!-- Error message -->
        {#if showError}
            <p class="text-red-600 font-semibold text-center">Please respond to all questions</p>
        {/if}

        <!-- Activities (multiple choice) -->
        <div class="space-y-2">
            <span class="block text-sm font-medium text-gray-700">What kind of activities do you want to do?</span>
            {#each activityOptions as act}
                <div>
                    <input type="checkbox" id={act} name="activity" value={act} bind:group={activities} class="mr-2" />
                    <label for={act}>{act}</label>
                </div>
            {/each}
        </div>

        <!-- Duration (radio buttons) -->
        <div class="space-y-2">
            <span class="block text-sm font-medium text-gray-700">How long are you willing to spend on activities?</span>
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
