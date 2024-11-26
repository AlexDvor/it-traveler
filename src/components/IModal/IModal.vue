<script setup>
import CrossIcon from '../ui/CrossIcon/CrossIcon.vue'
import { defineEmits, onUnmounted, onMounted, ref } from 'vue'
import InputImage from '../InputImage/InputImage.vue'

const emit = defineEmits(['closeModal'])
const imageUrlBase64 = ref('')

const handleUploadImg64 = (url) => {
  imageUrlBase64.value = url
  console.log('🚀 ~ imageUrlBase64:', imageUrlBase64)
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'initial'
})
</script>

<template>
  <Teleport to="body">
    <div
      @click.self="emit('closeModal')"
      class="flex w-full h-full fixed top-0 left-0 overflow-auto bg-[rgba(0,0,0,0.3)]"
    >
      <div class="relative bg-white min-w-[350px] m-auto text-black rounded-2xl p-10">
        <button @click="emit('closeModal')">
          <CrossIcon class="absolute right-3 top-3 w-6 h-6" />
        </button>
        <img v-if="imageUrlBase64" :src="imageUrlBase64" />
        <InputImage @uploaded="handleUploadImg64">Click the button for adding picture</InputImage>
        <slot></slot>
      </div></div
  ></Teleport>
</template>
