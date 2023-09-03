<script>
  import { Plate } from '$lib/components/ui';

	import imgPromo1 from '$lib/images/promo-1-zip.png';
	import imgPromo2 from '$lib/images/promo-2-zip.png';
	import imgPromo3 from '$lib/images/promo-3-zip.png';
	import imgPromo4 from '$lib/images/promo-4-zip.png';
	import imgPromo5 from '$lib/images/promo-5-zip.png';
</script>

<section class="bg-[#FAF7F3]">
  <div class="max-w-7xl mx-auto py-14 lg:py-48 px-4 lg:px-0">
    <h2 class="uppercase text-[40px] leading-[48px] lg:text-[150px] lg:leading-[170px] font-extrabold mb-6 lg:mb-20">
      One solution for <span class="mapsis-text-gradient">every case</span>
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
      <Plate class="w-full rounded-3xl lg:rounded-[48px] py-6 px-7 lg:p-14 flex-col justify-start gap-6 lg:gap-16">
        <h3 class="text-lg lg:text-4xl font-extrabold text-center">
          Feed with news, collections and recommendation lists
        </h3>
        <picture class="flex w-fit">
          <img src={imgPromo1} alt="App example" />
        </picture>
      </Plate>

      <Plate class="w-full rounded-3xl lg:rounded-[48px]  py-6 px-7 lg:p-14 flex-col justify-start gap-6 lg:gap-16">
        <h3 class="text-lg lg:text-4xl font-extrabold text-center">
          Creating and promoting ads  on map and in list
        </h3>
        <picture class="flex w-fit">
          <img src={imgPromo2} alt="App example" />
        </picture>
      </Plate>

      <Plate class="w-full rounded-3xl lg:rounded-[48px]  py-6 px-7 lg:p-14 lg:pl-32 lg:col-span-2 flex-col lg:flex-row justify-center gap-6 lg:gap-28">
        <picture class="flex flex-grow order-last lg:order-none">
          <img src={imgPromo3} alt="App example" class="w-full" />
        </picture>

        <h3 class="text-lg lg:text-4xl text-center lg:text-left font-extrabold max-w-xl">
          Multi language support, filters and search in selected area
        </h3>
      </Plate>

      <Plate class="w-full rounded-3xl lg:rounded-[48px]  py-6 px-7 lg:p-14 flex-col justify-start gap-6 lg:gap-16">
        <h3 class="text-lg lg:text-4xl font-extrabold text-center">
          Search for company or companion in real time
        </h3>
        <picture class="flex w-fit">
          <img src={imgPromo4} alt="App example" />
        </picture>
      </Plate>

      <Plate class="w-full rounded-3xl lg:rounded-[48px]  py-6 px-7 lg:p-14 flex-col item justify-start gap-6 lg:gap-16">
        <h3 class="text-lg lg:text-4xl font-extrabold text-center">
          Multi lang business page with option to add links
        </h3>
        <picture class="flex w-fit">
          <img src={imgPromo5} alt="App example" />
        </picture>
      </Plate>
    </div>

  </div>
</section>
