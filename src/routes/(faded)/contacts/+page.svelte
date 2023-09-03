<script lang="ts">
	import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { supabase } from "$lib/providers/supabse.provider";
	import { onMount } from "svelte";

  const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

  interface IContact {
    id: number;
    email: string;
    created_at: string;
  }

  let loading = true;
  let list: IContact[] = [];

  onMount(async () => {
    const key = $page.url.searchParams.get('key')
    if (key === ACCESS_KEY) {
      loading = true;
      try {
        const result = await supabase.from("contacts").select();
        list = result.data as IContact[] ;
      }
      finally {
        loading = false;
      }
    }
    else {
      goto('/');
    }
  });
</script>


<main>
  {#if loading}
    <div class="w-full h-screen flex justify-center items-center">
      loading...
    </div>
  {:else}
    <ul class="max-w-xl mx-auto py-8">
      {#each list as item }
        <li class="list-disc">
          {item.email}
        </li>
      {/each}
    </ul>
  {/if}
</main>
