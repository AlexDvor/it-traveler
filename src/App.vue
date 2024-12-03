<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

onMounted(() => {
  console.log(import.meta.env)
})
</script>

<template>
  <RouterView />
</template>
