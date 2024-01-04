<template>
  <button
    :class="[
      [$style.button],
      {
        [$style.outline]: outline,
        [$style.success]: success,
        [$style.error]: error,
      },
    ]"
  >
    <Icon v-if="icon" :name="icon" class="w-5 h-5" />
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  outline: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  success: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="postcss" module>
.button {
  @apply flex items-center gap-2 bg-stone-100 py-1 px-4 rounded-lg hover:bg-stone-300 duration-300 font-bold text-stone-950;
}

.outline {
  @apply bg-transparent border border-stone-100 text-stone-100 hover:bg-stone-900 font-normal;
}

.success {
  @apply bg-green-500 hover:bg-green-400;
}
.error {
  @apply bg-red-700 hover:bg-red-600 text-white;
}
</style>
