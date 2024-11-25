<script setup>
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'

const handleSubmit = (data) => {
  console.log('Form submitted with data:', data)
}
</script>

<template>
  <RegistrationForm @submit="handleSubmit" />
</template>
