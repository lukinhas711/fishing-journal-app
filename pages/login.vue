<template>
  <div>
    icone texto
    <form action="" class="flex flex-col gap-4 items-start">
      <label for="phone" class="flex flex-col gap-0.5">
        Celular
        <input id="phone" type="phone" />
      </label>
      <BaseButton>Fazer Login</BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login',
})
</script>
