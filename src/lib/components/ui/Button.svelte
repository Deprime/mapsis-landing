<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  const dispatch = createEventDispatcher();
  const defaultCss = 'bg-white font-semibold text-lg flex justify-center items-center rounded-xl py-3 px-6 w-fit disabled:text-slate-400'
  let cssClass = twMerge(defaultCss, $$props.class);
</script>

<button
  {...$$restProps}
  class={cssClass}
  on:click={() => {dispatch('click')}}
>
  <slot />
</button>
