<script setup>
import IButton from '@/components/ui/IButton/IButton.vue'
import IInput from '@/components/ui/IInput/IInput.vue'
import { reactive, toRaw } from 'vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  name: '',
  email: '',
  password: '',
})

const handleSubmit = () => {
  emit('submit', toRaw(userData))
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="max-w-[500px] w-full bg-white p-10 rounded-2xl">
    <IInput class="mb-4" label="Full name" placeholder="Alex Dvor" v-model="userData.name"></IInput>
    <IInput
      class="mb-4"
      label="Email"
      placeholder="email@gmail.com"
      v-model="userData.email"
    ></IInput>
    <IInput label="Password" placeholder="************" v-model="userData.password"></IInput>
    <IButton class="mt-5 w-full" variant="gradient" type="submit">Create Account</IButton>
  </form>
</template>
