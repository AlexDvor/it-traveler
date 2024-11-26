<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../ui/IButton/IButton.vue'

const props = defineProps({
  items: {
    require: true,
    type: Array,
  },
  activeId: {
    require: true,
    type: [Number, null],
  },
})
</script>

<template>
  <FavoritePlace
    v-for="place in props.items"
    :key="place.id"
    :title="place.title"
    :description="place.description"
    :img="place.img"
    :is-active="place.id === props.activeId"
  />
  <IButton class="w-full mt-3" variant="gradient">Add Marker</IButton>
</template>
