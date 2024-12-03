<script setup>
import { onMounted, ref } from 'vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from '../map/settings.js'
import MarkerIcon from '../components/ui/MarketIcon/MarkerIcon.vue'
import FavoritePlaces from '../components/FavoritePlaces/FavoritePlaces.vue'
import { getFavoritePlaces } from '@/api/favorite-places/index.js'

import 'mapbox-gl/dist/mapbox-gl.css'

// const favoritePlaces = [
//   {
//     id: 1,
//     title: 'Malaga',
//     description: 'Super Description 1',
//     img: './assets/images/ukraine.png',
//     lngLat: [-4.421, 36.7213],
//   },
//   {
//     id: 2,
//     title: 'Torremolinos',
//     description: 'Super Description 2',
//     img: './assets/images/ukraine.png',
//     lngLat: [-4.4998, 36.6211],
//   },
//   {
//     id: 3,
//     title: 'Algecira',
//     description: 'Super Description 3',
//     img: './assets/images/ukraine.png',
//     lngLat: [-5.4562, 36.1408],
//   },
//   {
//     id: 4,
//     title: 'Ronda',
//     description: 'Super Description 4',
//     img: './assets/images/ukraine.png',
//     lngLat: [-5.1611, 36.7461],
//   },
// ]

const activeId = ref(null)
const map = ref(null)
const isMapError = ref(false)
const favoritePlaces = ref([])
const mapMarkerLngLat = ref(null)

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { lngLat } = favoritePlaces.value.find((place) => place.id === id)
  map.value.flyTo({ center: lngLat })
  changeActiveId(id)
}

const handleMapError = (error) => {
  console.error('Map error:', error)
  isMapError.value = true
}

const handleMapClick = ({ lngLat }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
}

onMounted(async () => {
  const { data } = await getFavoritePlaces()
  console.log('🚀 ~ data:', data)
  favoritePlaces.value = data
})
</script>

<template>
  <main class="flex h-screen">
    <div
      class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10 border-r-[1px] border-r-gray p-2"
    >
      <FavoritePlaces :items="favoritePlaces" :active-id="activeId" @place-clicked="changePlace" />
    </div>
    <div v-if="isMapError" class="flex justify-center w-full items-center text-red-600 text-lg">
      Error connecting to the Map. Check your internet connection or API settings.
    </div>
    <div v-else class="w-full h-full items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[-4.421, 36.7213]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        @mb-click="handleMapClick"
        @mb-created="(mapInstance) => (map = mapInstance)"
        @mb-error="handleMapError"
      >
        <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
          <MarkerIcon class="h-8 w-8" />
        </MapboxMarker>
        <MapboxMarker
          v-for="place in favoritePlaces"
          :key="place.id"
          :lngLat="place.lngLat"
          anchor="bottom"
        >
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="h-8 w-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
