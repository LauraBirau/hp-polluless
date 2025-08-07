<script lang="ts">
    import { locations } from '$lib/locations.js';

    type Location = typeof locations[number];
    // Group locations by destination name
    const grouped = locations.reduce((acc, loc) => {
        if (!acc[loc.name]) acc[loc.name] = [];
        acc[loc.name].push(loc);
        return acc;
    }, {} as Record<string, Location[]>);
</script>

<div class="w-full h-full p-5 flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold mb-6">All Destinations</h1>
{#each Object.entries(grouped) as [destination, orgs]}
        <div class="mb-8 w-full max-w-xl">
            <h2 class="text-lg font-bold text-blue-700 mb-2">{destination}</h2>
            <ul class="space-y-2">
                {#each orgs as loc}
                    <li class="bg-white border border-gray-200 rounded-lg p-4 shadow-md flex flex-col items-start">
                        <h3 class="font-semibold">{loc.organization}</h3>
                        {#if loc.image}
                            <img src={loc.image} alt={loc.organization} class="w-full h-32 object-cover rounded my-2" />
                        {/if}
                        <div class="text-sm text-gray-700 mb-1">
                            <span class="font-medium">Activities:</span> {loc.activities.join(', ')}
                        </div>
                        <div class="text-sm text-gray-700 mb-1">
                            <span class="font-medium">Duration:</span> {loc.duration.join(', ')}
                        </div>
                        {#if loc.website}
                            <a href={loc.website} target="_blank" class="text-blue-500 hover:underline">Learn more</a>
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    {/each}
    </div>