<template>
  <div class="bg-stone-950 text-stone-300 min-h-svh">
    <TheNavBar />
    <slot />
  </div>
</template>

<script setup lang="ts">
const title = 'FJA - Aplicativo diário de pescaria'
const description = 'Um site para registrar sua pescaria'
const url = 'https://fishing-journal-app.pages.dev'

useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,

  description,
  ogDescription: description,
  twitterDescription: description,

  ogUrl: url,
  robots: {
    index: true,
    follow: true,
  },
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'pt-BR',
  },
  link: [
    {
      rel: 'canonical',
      href: url,
    },
  ],
})
</script>
