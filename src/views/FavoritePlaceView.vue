<template>
  <div class="px-6">
    <div class="text-gray mb-4">Added markers</div>
    <FavoritePlaces v-for="item in 6" :key="item" />
    <IButton class="w-full mt-10" variant="gradient">Add Marker</IButton>
  </div>
</template>
