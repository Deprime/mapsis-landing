<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  const defaultCss = 'bg-white flex justify-center items-center rounded-2xl p-5 w-fit'
  let cssClass = twMerge(defaultCss, $$props.class);
</script>

<div class={cssClass}>
  <slot />
</div>
