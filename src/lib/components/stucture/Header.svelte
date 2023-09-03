<script lang="ts">
  import { Button, Plate } from '$lib/components/ui';
	import logo from '$lib/images/m.svg';

  const onClick = (): void => {
    const copyrights = document.getElementById("copyrights");
    if (copyrights) {
      copyrights.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
</script>

<header class="absolute w-full top-0 px-4 lg:px-0">
  <div class="max-w-7xl mx-auto flex justify-between items-center py-10">
    <Plate class="w-14 lg:w-[100px] h-14 lg:h-[100px] p-3 lg:p-6">
      <img src={logo} alt="the M" />
    </Plate>

    <Button on:click={onClick}>
      Register for Beta
    </Button>
  </div>
</header>
