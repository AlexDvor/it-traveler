<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'gradient', 'outlined'].includes(value)
    },
  },
})

const bgStyle =
  props.variant === 'gradient' ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]' : 'bg-[#FFA279]'
</script>

<template>
  <button class="py-3 px-10 rounded-xl text-white font-bold tracking-wider" :class="bgStyle">
    <slot>Click me</slot>
  </button>
</template>
