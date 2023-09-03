<script>
  import '$lib/assets/styles.scss'
  import { Header, Footer } from '$lib/components/stucture';
</script>

<div class="app">
	<Header />

  <slot />

  <Footer />
</div>
