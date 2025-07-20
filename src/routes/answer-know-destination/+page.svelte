<script lang='ts'>
  import { matchedLocations } from '$lib/stores/store.js';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  
  let results:any[] = [];

  onMount(() => {
    results = get(matchedLocations);
  });
</script>

<h1>Results</h1>

{#if results.length}
  <ul>
    {#each results as loc}
      <li>{loc.name}</li>
    {/each}
  </ul>
{:else}
  <p>No locations matched your answers.</p>
{/if}