<template>
  <div
    class="flex items-center justify-center bg-stone-950 text-stone-300 min-h-svh"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const title = 'FJA - Login'
const description = 'Um site para registrar sua pescaria'

useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,

  description,
  ogDescription: description,
  twitterDescription: description,

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
  // link: [
  //   {
  //     rel: 'canonical',
  //     href: url,
  //   },
  // ],
})
</script>
