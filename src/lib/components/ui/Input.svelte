<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let value = "";
  const dispatch = createEventDispatcher();
</script>

<input
  bind:value
  required
  {...$$restProps}
  on:input={() => {dispatch('input')}}
  class="bg-white font-semibold text-lg rounded-xl py-3 px-6 w-fit {$$props.class} focus:outline-none"
/>
