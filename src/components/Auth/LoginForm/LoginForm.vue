<script setup>
import IButton from '@/components/ui/IButton/IButton.vue'
import IInput from '@/components/ui/IInput/IInput.vue'
import { reactive } from 'vue'

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
    <IButton class="mt-5 w-full" variant="gradient" type="submit">Log In</IButton>
  </form>
</template>
