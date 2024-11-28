<script setup>
import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue'

import { useRouter } from 'vue-router'
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
