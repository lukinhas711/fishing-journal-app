<template>
  <div
    :class="[
      'flex items-center justify-between rounded-lg w-full h-20 overflow-hidden hover:scale-105 cursor-pointer duration-300 border-2 border-transparent bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60',
      ,
      {
        'bg-indigo-950': fish.isTrophy,
      },
      {
        'bg-stone-800': !fish.isTrophy,
      },
    ]"
  >
    <div class="flex items-center gap-1">
      <img
        :src="fish.image"
        :alt="`Foto de ${fish.name}`"
        width="80"
        height="80"
        class="w-20 h-20 rounded-lg"
      />

      <ul class="p-1">
        <li>
          <h3 class="text-lg font-semibold">
            {{ fish.name ? fish.name : '---' }}
          </h3>
        </li>
        <li class="flex items-center gap-1">
          <Icon name="ic:twotone-balance" class="w-5 h-5" />
          <span class="font-semibold">Peso:</span>
          <span class="italic">{{
            fish.weigth ? `${fish.weigth}kg` : '---'
          }}</span>
        </li>
        <li class="flex items-center gap-1">
          <Icon name="bxs:ruler" class="w-5 h-5" />
          <span class="font-semibold">Tamanho:</span>
          <span class="italic">{{
            fish.width ? `${fish.width}cm` : '---'
          }}</span>
        </li>
      </ul>
    </div>
    <div class="h-full mr-2 flex flex-col items-center justify-between">
      <div></div>
      <div
        :class="[
          'flex items-center justify-center font-bold rounded-full w-10 h-10   shadow-sm',
          ,
          { 'bg-indigo-700': fish.isTrophy },
          { 'bg-stone-600': !fish.isTrophy },
        ]"
      >
        {{ fish.quantity ? `x${fish.quantity}` : 0 }}
      </div>
      <p class="italic text-xs self-end">{{ fish.date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IFish } from '@/types/data-fishes';

defineProps({
  fish: {
    type: Object as unknown as PropType<IFish>,
    required: true,
  },
})
</script>
