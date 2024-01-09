<template>
  <div class="flex flex-col">
    <div class="bg-stone-800 border-b border-stone-100 h-40"></div>
    <div class="-mt-16 mx-auto w-32 h-32 relative">
      <img
        src="https://avatars.githubusercontent.com/u/49355209?v=1"
        alt="foto de perfil do pescador"
        width="128"
        height="128"
        class="rounded-full border-2 border-stone-100 w-32 h-32"
        draggable="false"
      />
      <span
        class="absolute bottom-2 right-2 rounded-full w-5 h-5 bg-stone-100 text-stone-950 flex items-center justify-center font-bold"
      >
        1
      </span>
    </div>
    <section class="container mx-auto flex flex-col items-center">
      <section class="flex flex-col gap-1 text-center py-6 w-9/12">
        <h2 class="text-2xl font-bold">Lucas Ribeiro</h2>
        <p class="italic text-sm">Iniciante</p>
        <div class="flex items-center divide-x">
          <div class="flex flex-col px-3 flex-1 text-right">
            <span>Peixes</span>
            <span class="font-semibold">04</span>
          </div>
          <div class="flex flex-col px-3 flex-1 text-left">
            <span>Locais</span>
            <span class="font-semibold">01</span>
          </div>
        </div>
      </section>
      <section class="container mx-auto flex flex-col items-center">
        <TheTabNavigation v-model="tab" :tabs="tabs">
          <section
            v-if="tab === 'equip'"
            class="flex flex-col gap-2 items-center py-4 px-6"
          >
            <TheGearGrid />
          </section>
          <section
            v-if="tab === 'fish'"
            class="flex flex-col gap-2 items-center py-4 px-6"
          >
            <h3 class="text-xl font-bold">Peixes Capturados</h3>
            <p class="text-center">
              Essas foram as espécies capturadas por Lucas.
            </p>
            <p class="text-xs text-center mb-4">
              As informações de tamanho e peso serão sempre dos maiores peixes
              de cada espécie, o <strong>X</strong> é a quantidade de peixes
              capturados daquela espécie
            </p>
            <BaseFishCard
              v-for="(fish, i) in fishes"
              :key="`${i}-fish`"
              :fish="fish"
            />
          </section>
          <section v-if="tab === 'local'"></section>
        </TheTabNavigation>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
const tab = ref('equip')

const tabs = ref([
  { name: 'Equipamentos', value: 'equip' },
  { name: 'Peixes', value: 'fish' },
  { name: 'Locais', value: 'local' },
])

const fishes = ref([
  {
    image: '/piranha.png',
    name: 'Piranha',
    width: '24',
    weigth: '0.1',
    quantity: 3,
    date: '24/12/2023',
    isTrophy: false,
  },
  {
    image: '/traira.png',
    name: 'Traíra',
    width: '28',
    weigth: '0.2',
    quantity: 1,
    date: '24/12/2023',
    isTrophy: false,
  },
])
</script>
