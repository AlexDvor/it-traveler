<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../ui/IButton/IButton.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    required: true,
    type: [String, null],
  },
})

const emit = defineEmits(['place-clicked'])
</script>

<template>
  <div>
    <div class="text-gray mb-4">Added Places</div>
    <div v-if="items.length === 0">The List is empty</div>
    <FavoritePlace
      v-for="place in props.items"
      :key="place.id"
      :title="place.title"
      :description="place.description"
      :img="place.img"
      :is-active="place.id === props.activeId"
      @click="emit('place-clicked', place.id)"
    />
    <IButton class="w-full mt-3" variant="gradient">Add Marker</IButton>
  </div>
</template>
