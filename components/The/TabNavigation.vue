<template>
  <div class="flex flex-col items-center gap-2 w-full">
    <ul class="flex items-center w-full border-b border-primary-95">
      <li v-for="(tab, i) in props.tabs" :key="i" class="w-full lg:w-fit">
        <button
          aria-label="Botão para trocar de aba"
          :class="
            props.modelValue === tab.value
              ? 'border-b-primary-50 text-primary-50 text-stone-100 hover:text-stone-50 duration-300'
              : 'border-b-transparent text-primary-20 text-stone-300 hover:text-stone-50 duration-300'
          "
          class="px-6 lg:px-8 py-3 border-b-2 text-base lg:text-xl transition-all w-full lg:w-fit"
          @click="changeTab(tab.value)"
        >
          {{ tab.name }}
        </button>
      </li>
    </ul>
    <div class="w-full pt-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface ITab {
  name: string
  value: string
}

const props = defineProps({
  tabs: {
    type: Array as PropType<ITab[]>,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const changeTab = (tab: string) => {
  emit('update:modelValue', tab)
}
</script>
