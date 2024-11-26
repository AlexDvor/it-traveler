<script setup>
import { ref } from 'vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from './map/settings'
import MarkerIcon from './components/ui/MarketIcon/MarkerIcon.vue'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import 'mapbox-gl/dist/mapbox-gl.css'

const favoritePlaces = [
  {
    id: 1,
    title: 'Malaga',
    description: 'Super Description 1',
    img: './assets/images/ukraine.png',
    lngLat: [-4.421, 36.7213],
  },
  {
    id: 2,
    title: 'Torremolinos',
    description: 'Super Description 2',
    img: './assets/images/ukraine.png',
    lngLat: [-4.4998, 36.6211],
  },
  {
    id: 3,
    title: 'Algecira',
    description: 'Super Description 3',
    img: './assets/images/ukraine.png',
    lngLat: [-5.4562, 36.1408],
  },
  {
    id: 4,
    title: 'Ronda',
    description: 'Super Description 4',
    img: './assets/images/ukraine.png',
    lngLat: [-5.1611, 36.7461],
  },
]

const activeId = ref(null)
const changeActiveId = (id) => {
  activeId.value = id
}
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces :items="favoritePlaces" :active-id="activeId" />
    </div>
    <div class="w-full h-full items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[-4.421, 36.7213]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
      >
        <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="h-8 w-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
