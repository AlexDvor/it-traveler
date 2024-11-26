<script setup>
import { ref } from 'vue'

import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

const handleSubmit = (data) => {
  console.log('Form submitted with data:', data)
}
const isOpen = ref(false)

const closeModal = () => {
  isOpen.value = false
}

const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <button @click="openModal">Open Modal</button>
  <LoginForm @submit="handleSubmit" />
  <RegistrationForm @submit="handleSubmit" />
  <CreateNewPlaceModal :isOpen="isOpen" @close="closeModal" />
</template>
