<template>
  <div>
    <div
      class="container mx-auto flex items-center justify-between h-16 p-4 font-semibold text-lg text-stone-100"
    >
      <nuxt-link to="/" class="flex items-center gap-1">
        <Icon
          name="guidance:fishing-area-2"
          aria-label="icone de peixe sendo pescado"
          class="w-6 h-6"
        />
        <h1>Diario de pesca</h1>
      </nuxt-link>

      <nuxt-link to="/">
        <img
          src="https://avatars.githubusercontent.com/u/49355209?v=1"
          alt="Foto do pescador"
          width="40"
          height="40"
          class="w-10 h-10 rounded-full border border-stone-100"
          draggable="false"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
