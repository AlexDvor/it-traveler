<script setup>
import UploadIcon from '../ui/UploadIcon/UploadIcon.vue'
import { ref } from 'vue'

const errorMessage = ref('')
const emit = defineEmits(['uploaded'])

const handleUploadImg = (event) => {
  const file = event.target.files[0]

  if (file.size > 3 * 1024 * 1024) {
    errorMessage.value = 'Image is so big'
    return
  }

  const fileReader = new FileReader()

  fileReader.readAsDataURL(file)

  fileReader.onload = () => {
    errorMessage.value = ''
    emit('uploaded', fileReader.result)
  }
}
</script>

<template>
  <div>
    <label class="cursor-pointer hover:text-primary">
      <input type="file" accept="image/*" class="hidden" @change="handleUploadImg" />
      <span class="flex gap-1 items-center">
        <UploadIcon />
        <span class="underline text-xs"><slot></slot></span>
      </span>
    </label>
    <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
  </div>
</template>
