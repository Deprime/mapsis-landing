<script lang="ts">
  import { Button, Input, Plate } from '$lib/components/ui';
	import logo from '$lib/images/m.svg';

  import { EmailSchema } from '$lib/validators';

  // Data
  let email = "";
  let disabled = true;
  let loading = false;
  let error   = false;
  let success = false

  /**
   * On input
   */
  const onInput = async (): Promise<void> => {
    try {
      EmailSchema.parse(email);
      disabled = false;
    }
    catch (err) {
      disabled = true;
    }
  }

  /**
   * On submit
   */
  const onSubmit = async (): Promise<void> => {
    loading = true;

    try {
      EmailSchema.parse(email);

      const method = "post";
      const body = JSON.stringify({ email });
      await fetch('', { method, body });

      error   = false;
      success = true;
      email   = ""
    }
    catch (_err) {
      error = true;
    }
    finally {
      loading = false;
    }
  }
</script>

<footer class="mapsis-gradient flex flex-col items-center pt-14 lg:pt-48 pb-6 lg:pb-20 px-4 lg:px-0">
  <Plate class="mb-8 w-14 h-14 lg:w-fit lg:h-fit p-3 lg:p-7 rounded-2xl  lg:rounded-3xl">
    <img src={logo} alt="the M" />
  </Plate>

  <h3 class="text-4xl lg:text-8xl font-extrabold text-center text-white px-8 lg:px-0 mb-8">
    Welcome to mapsis beta
  </h3>

  <p class="text-base lg:text-2xl text-white text-center font-semibold max-w-3xl px-8 lg:px-0 mb-12 lg:mb-32">
    Subscribe to our email to get a beta access. If you have any sugestions don’t hesitate to contact us
  </p>

  <div class="max-w-5xl w-full mb-12 lg:mb-32">
    {#if !success}
      <form
        method="POST"
        class="flex flex-col gap-6 lg:gap-8"
        on:submit|preventDefault={onSubmit}
      >
        <div class="w-full flex flex-col gap-3">
          <Input
            type="email"
            name="email"
            class="w-full"
            placeholder="Your email"
            disabled={loading}
            on:input={onInput}
            bind:value={email}
          />
          {#if error}
            <p class="text-sm lg:text-xl text-red-800 font-semibold px-2">
              😥 Invalid email address format has been entered
            </p>
          {/if}
        </div>

        <Button
          type="submit"
          disabled={loading || disabled}
          class="w-full lg:w-fit px-10"
        >
          Submit
        </Button>
      </form>
    {:else}
      <p class="text-sm text-center lg:text-xl text-green-800 font-semibold w-full p-4 bg-green-100 rounded-2xl">
        🙏 Thank you for subscribing to the beta testing of our app
      </p>
    {/if}
  </div>


  <p class="text-base lg:text-2xl font-semibol text-white" id="copyrights">
    Mapsis 2023. All rights reserved
  </p>
</footer>
