<script lang="ts">
  import '$lib/assets/styles.scss';
  import { fly } from 'svelte/transition';

  // Data
  let show    = false;
  let flipKey = 0;
  const variants = [
    'На выбор только<br> 3 сентября',
    'И снова <br>3 сентября',
    'Переверни еще разок',
    'Миша, хватит уже!',
    'Опять сентябрь, третье...',
    'Горят костры рябин!',
    'И опа - 3 сентября',
    'В следующий раз получится',
    'Вертай еще!',
    'В очередной раз 3 сентября!',
    'Шифу-тян, прекратите!!!',
    'Позови друга, пусть он попробует перевернть',
    'Иногда этот рандом работает не очень',
    'Или тут просто маловато вариантов',
    'Остался только сентябрь',
    '<a href="https://youtu.be/Kv-tbdVOuOA" class="underline text-blue-700" target="_blank">Это классика</a>',
    '<a href="https://youtu.be/dQw4w9WgXcQ" class="underline text-blue-700" target="_blank">Тут кое-что получше</a>',
  ];
  let variant = variants[0];
  const total = variants.length - 1;

  // Methods
  const random = (min: number, max: number) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
  }

  const onFlip = () => {
    const index = random(0, total);
    flipKey++;
    variant = variants[index];
  }

  const onClick = () => {
    show = !show;
  }
</script>

<div class="w-full h-screen flex flex-col justify-center items-center bg-amber-200">
  <div class="h-20"></div>

  <div class="shadow-md rounded-2xl relative">
    {#if show}
      <div
        class="w-72 h-40 absolute bottom-[140%] -left-16 rounded-2xl p-5 bg-white flex justify-center items-center"
        transition:fly={{ duration: 500, y: -50 }}
      >
      <button
        on:click={onFlip}
        class="rounded-full outline outline-4 outline-amber-200 bg-white w-10 h-10 flex items-center justify-center absolute top-14 -left-5 z-10"
      >
        ◀️
      </button>
      <button
        on:click={onFlip}
        class="rounded-full outline outline-4 outline-amber-200 bg-white w-10 h-10 flex items-center justify-center absolute top-14 -right-5 z-10"
      >
        ▶️
      </button>
        {#key flipKey}
          <div
            class="text-center transition-all absolute inset-0 z-0 flex items-center justify-center px-10"
            in:fly={{ delay: 100, duration: 500, y: -50 }}
          >
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            <p>{@html variant}</p>
          </div>
        {/key}

      </div>
    {/if}

    <button
      class="rounded-2xl px-5 py-3 bg-white font-medium text-sm"
      on:click={onClick}
    >
      Выберите дату
    </button>
  </div>
</div>
