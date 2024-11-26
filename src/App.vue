<script setup>
import { MapboxMap } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces />
    </div>
    <div class="w-full h-full items-center justify-center text-6xl">
      <MapboxMap class="w-full h-full"></MapboxMap>
    </div>
  </main>
</template>
