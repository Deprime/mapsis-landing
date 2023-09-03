<script>
	import imgPhoneMain from '$lib/images/phone-main.png';

	import iconPlate from '$lib/images/plate-icon.png';
	import iconHand from '$lib/images/hand-icon.png';
	import iconParty from '$lib/images/party-icon.png';
	import iconSneakers from '$lib/images/sneakers-icon.png';
	import iconLaptop from '$lib/images/laptop-icon.png';
	import iconMoney from '$lib/images/money-icon.png';
	import iconTyping from '$lib/images/typing-icon.png';
	import iconSurf from '$lib/images/surf-icon.png';

 	import Plate from '$lib/components/ui/Plate.svelte';
</script>

<section class="mapsis-gradient pt-36 pb-14 lg:py-40 text-center">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col gap-8 mb-10 lg:mb-20 items-center">
      <h1 class="text-white font-extrabold text-5xl lg:text-8xl mb-4">
        mapsis
      </h1>

      <h3 class="text-white text-base lg:text-3xl max-w-3xl px-12 lg:px-0">
        LifeApp-Marketplace.
        Publish and promote ads in different categories. Buy and sell goods or services. Look for activities and other life stuff
      </h3>
    </div>

    <div class="relative">
      <Plate class="icon-shadow absolute left-[5%] lg:left-0 top-[4%] lg:top-[8%] lg:px-7 lg:py-8 rounded-2xl lg:rounded-[36px]">
        <img src={iconPlate} alt="icon" class="w-8 lg:w-full">
      </Plate>
      <Plate class="icon-shadow absolute left-[27%] lg:left-[18%] top-[24%] lg:top-[22%] px-2 py-2.5 lg:px-4 lg:py-6 rounded-md lg:rounded-[24px]">
        <img src={iconHand} alt="icon" class="w-4 lg:w-full">
      </Plate>
      <Plate class="icon-shadow absolute left-[5%] lg:left-[2%] top-[44%] p-2 lg:p-5 rounded-lg lg:rounded-[24px]">
        <img src={iconParty} alt="icon" class="w-28 lg:w-full">
      </Plate>
      <Plate class="icon-shadow absolute left-[24%] lg:left-[14%] top-[70%] px-3.5 py-5 lg:px-7 lg:py-8 rounded-2xl lg:rounded-[36px]">
        <img src={iconSneakers} alt="icon" class="w-7 lg:w-full">
      </Plate>

      <Plate class="icon-shadow absolute right-[20%] lg:right-[15%] top-[6%] lg:top-[15%] px-4 py-5 lg:px-7 lg:py-10 rounded-2xl lg:rounded-[36px]">
        <img src={iconLaptop} alt="icon" class="w-7 lg:w-full">
      </Plate>
      <Plate class="icon-shadow absolute right-[5%] lg:right-[0] top-[11%] lg:top-[19%] rounded-lg lg:rounded-[24px] px-2 py-3 lg:py-6 lg:px-5">
        <img src={iconMoney} alt="icon" class="w-4 lg:w-full">
      </Plate>
      <Plate class="icon-shadow absolute right-[10%] top-[43%] rounded-lg lg:rounded-2xl p-2 lg:py-4 lg:px-5">
        <img src={iconTyping} alt="icon" class="w-20 lg:w-full">
      </Plate>
      <Plate class="icon-shadow absolute right-[16%] lg:right-[10%] top-[60%] py-7 lg:px-10 lg:py-14 rounded-3xl lg:rounded-[52px]">
        <img src={iconSurf} alt="icon" class="w-12 lg:w-full">
      </Plate>

      <picture class="flex w-40 lg:w-fit mx-auto">
        <img src={imgPhoneMain} alt="App example" />
      </picture>
    </div>
  </div>
</section>
