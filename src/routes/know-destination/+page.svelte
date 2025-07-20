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
      (loc) =>
        loc.group[0] === answer1 &&
        loc.group[1] === answer2 &&
        loc.group[2] === answer3
    );

    matchedLocations.set(matched); 
    goto('/answer-know-destination');            
  }
</script>

<form on:submit|preventDefault={submitForm}>
  <label>
    Do you like cities?  
    <select bind:value={answer1}>
      <option value="">--Choose--</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </label>

  <label>
    Favorite color?
    <select bind:value={answer2}>
      <option value="">--Choose--</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
    </select>
  </label>

  <label>
    Best time of day?
    <select bind:value={answer3}>
      <option value="">--Choose--</option>
      <option value="morning">Morning</option>
      <option value="evening">Evening</option>
    </select>
  </label>
  <button type="submit">See Matches</button>
</form>
