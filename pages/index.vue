<template>
  <section class="flex flex-col items-center gap-6 justify-center h-screen">
    <div class="container mx-auto flex flex-col items-center">
      <BaseButton
        icon="tabler:fish-hook"
        :outline="true"
        :error="error"
        :success="success"
        @click="request"
      >
        Pescar
      </BaseButton>
    </div>
  </section>
</template>

<script setup lang="ts">
const success = ref(false)
const error = ref(false)
const response = ref(200)

const request = (): void => {
  if (response.value === 200) {
    success.value = true
  } else {
    error.value = true
  }
}
</script>
