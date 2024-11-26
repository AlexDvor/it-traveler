<script setup>
import { ref } from 'vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import IModal from './components/IModal/IModal.vue'

const handleSubmit = (data) => {
  console.log('Form submitted with data:', data)
}
const isOpen = ref(true)

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
  <IModal v-if="isOpen" @closeModal="closeModal"><div class="text-black">MOdal</div></IModal>
</template>
