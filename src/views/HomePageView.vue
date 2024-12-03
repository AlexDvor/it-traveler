<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { getFavoritePlaces, addFavoritePlace } from '@/api/favorite-places/index.js'
import { useModal } from '@/composables/useModal.js'
import { mapSettings } from '../map/settings.js'
import { useMutation } from '@/composables/useMutation.js'
import LogoutButton from '@/components/LogoutButton/LogoutButton.vue'
import UserInfo from '@/components/UserInfo/UserInfo.vue'
import MarkerIcon from '../components/ui/MarketIcon/MarkerIcon.vue'
import FavoritePlaces from '../components/FavoritePlaces/FavoritePlaces.vue'
import CreateNewPlaceModal from '@/components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

import 'mapbox-gl/dist/mapbox-gl.css'

const activeId = ref(null)
const isMapError = ref(false)
const map = ref(null)
const mapMarkerLngLat = ref(null)
const { isOpen, closeModal, openModal } = useModal()

const {
  data,
  mutation: getPlaces,
  isLoading: isPlacesLoading,
} = useMutation({
  mutationFn: () => getFavoritePlaces(),
})

const favoritePlaces = computed(() => data.value ?? [])

const {
  mutation: addPlace,
  isLoading: isAddingPlace,
  error,
} = useMutation({
  mutationFn: (newPlaceData) => addFavoritePlace(newPlaceData),
  onSuccess: () => {
    closeModal()
    mapMarkerLngLat.value = null
    getPlaces()
  },
})

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { coordinates } = favoritePlaces.value.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: coordinates })
}

const handleMapClick = ({ lngLat }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
}

const handleMapError = (error) => {
  console.error('Map error:', error)
  isMapError.value = true
}

const handleAddPlace = async (formData, resetForm) => {
  const body = {
    ...formData,
    coordinates: mapMarkerLngLat.value,
  }

  await addPlace(body)

  resetForm()
}

const isDisabledBtn = computed(() => mapMarkerLngLat.value === null)

onMounted(() => {
  getPlaces()
})
</script>

<template>
  <main class="flex h-screen">
    <div
      class="flex flex-col bg-white h-full w-[400px] shrink-0 overflow-auto border-r-[1px] border-r-gray"
    >
      <UserInfo />
      <div v-if="isPlacesLoading" class="text-black px-6">Loading...</div>
      <FavoritePlaces
        :items="favoritePlaces"
        :active-id="activeId"
        :is-places-loading="isPlacesLoading"
        :is-disabled-btn="isDisabledBtn"
        @place-clicked="changePlace"
        @create="openModal"
        @updated="getPlaces"
      />
      <div class="mt-auto"><LogoutButton class="mt-10" /></div>

      <CreateNewPlaceModal
        :is-open="isOpen"
        :is-loading="isAddingPlace"
        :has-error="error"
        @close="closeModal"
        @submit="handleAddPlace"
      />
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
        <MapboxMarker
          v-for="place in favoritePlaces"
          :key="place.id"
          :lngLat="place.coordinates"
          anchor="bottom"
        >
          <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
            <MarkerIcon class="h-8 w-8" is-active />
          </MapboxMarker>
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="h-8 w-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
