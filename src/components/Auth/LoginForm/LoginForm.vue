<script setup>
import { reactive } from 'vue'

import IButton from '@/components/ui/IButton/IButton.vue'
import IInput from '@/components/ui/IInput/IInput.vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', userData)">
    <IInput
      class="mb-4"
      label="Email"
      placeholder="email@gmail.com"
      v-model="userData.email"
    ></IInput>
    <IInput label="Password" placeholder="************" v-model="userData.password"></IInput>
    <IButton class="mt-5 w-full" variant="gradient" type="submit" :is-loading="props.isLoading"
      >Log In</IButton
    >
  </form>
</template>
