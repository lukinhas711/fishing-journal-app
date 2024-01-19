<template>
  <div
    class="flex items-center justify-between rounded-lg w-72 overflow-hidden hover:scale-105 cursor-pointer duration-300 border-2 border-transparent bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 bg-stone-800"
  >
    <div class="flex flex-col items-center gap-1 p-2 w-full">
      <img
        :src="fish.image"
        :alt="`Foto de ${fish.name}`"
        width="288"
        height="288"
        class="w-72 h-72 rounded-md"
      />

      <ul class="p-1 w-full">
        <li>
          <h3 class="text-lg font-semibold">
            {{ fish.name ? fish.name : '---' }}
          </h3>
        </li>
        <li class="flex items-center gap-1">
          <Icon name="bxs:ruler" class="w-5 h-5" />
          <span class="font-semibold">Tamanho Máximo:</span>
          <span class="italic">{{
            fish.maxWidth ? `${fish.maxWidth}` : '---'
          }}</span>
        </li>
        <li class="flex items-center gap-1">
          <Icon name="iconoir:sea-waves" class="w-5 h-5" />
          <span class="font-semibold">Água:</span>
          <span class="italic">
            {{ fish.whather === 'doce' ? 'doce' : 'salgada' }}
          </span>
        </li>
      </ul>
      <ul class="flex gap-2 w-full">
        <li
          v-for="(type, i) in fish.habitat"
          :key="`habitat-${i}`"
          class="text-xs rounded-lg p-1 flex items-center justify-center"
          :style="`background-color: ${type.background};`"
        >
          {{ type.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IDataFishes } from '@/types/data-fishes'

defineProps({
  fish: {
    type: Object as unknown as PropType<IDataFishes>,
    required: true,
  },
})
</script>
