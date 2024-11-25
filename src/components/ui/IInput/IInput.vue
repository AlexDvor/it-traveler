<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  modelValue: String,
  label: {
    default: 'Name Field',
    type: String,
  },
  type: {
    default: 'text',
    type: String,
  },
  placeholder: String,
})

defineOptions({
  inheritAttrs: false,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full text-[#2C2C2C]">
    <label class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <input
        @input="emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        class="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary"
        v-bind="{ ...$props, ...$attrs }"
      />
    </label>
  </div>
</template>
