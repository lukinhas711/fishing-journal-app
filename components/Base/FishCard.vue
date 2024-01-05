<template>
  <div
    :class="[
      'flex items-center justify-between rounded-lg w-10/12 h-20   overflow-hidden',
      ,
      {
        'border border-indigo-700 bg-indigo-950': fish.isTrophy,
      },
      {
        'border border-stone-100 bg-stone-800': !fish.isTrophy,
      },
    ]"
  >
    <img
      src="https://loremflickr.com/80/80/fish"
      alt="Foto do peixe em questão"
    />

    <ul class="p-1">
      <li>
        <h3 class="text-lg font-semibold">
          {{ fish.name ? fish.name : '---' }}
        </h3>
      </li>
      <li class="flex items-center gap-1">
        <span class="font-semibold">Peso:</span>
        <span>{{ fish.weigth ? `${fish.weigth}kg` : '---' }}</span>
      </li>
      <li class="flex items-center gap-1">
        <span class="font-semibold">Tamanho:</span>
        <span>{{ fish.width ? `${fish.width}cm` : '---' }}</span>
      </li>
    </ul>
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
interface IFish {
  image: string
  name: string
  width: string
  weigth: string
  date: string
  quantity: number
  isTrophy: boolean
}

defineProps({
  fish: {
    type: Object as unknown as PropType<IFish>,
    required: true,
  },
})
</script>
