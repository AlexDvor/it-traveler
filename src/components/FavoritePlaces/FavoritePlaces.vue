<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../ui/IButton/IButton.vue'
</script>

<template>
  <FavoritePlace v-for="place in 12" :key="place" />
  <IButton class="w-full mt-3" variant="gradient">Add Marker</IButton>
</template>
