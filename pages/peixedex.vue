<template>
  <div
    class="container mx-auto grid grid-cols-1 items-center justify-center lg:grid-cols-5"
  >
    <BaseFishDexCard
      v-for="(fish, i) in fishDex"
      :key="`fish-${i}`"
      :fish="fish"
    />
  </div>
</template>

<script setup lang="ts">
import fishList from '@/data-fishes.json'

const fishDex = fishList
</script>
