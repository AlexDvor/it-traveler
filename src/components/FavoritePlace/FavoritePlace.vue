<script setup>
import FavoritePlaceIconBtn from '../FavoritePlaceIconBtn/FavoritePlaceIconBtn.vue'
import DeleteIcon from '../ui/DeleteIcon/DeleteIcon.vue'
import EditIcon from '../ui/EditIcon/EditIcon.vue'

const props = defineProps({
  title: {
    require: true,
    type: String,
  },
  description: {
    require: true,
    type: String,
  },
  isActive: {
    require: true,
    type: Boolean,
  },

  img: String,
})
</script>

<template>
  <section class="text-gray mb-6 last:mb-0">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0" :src="props.img" />
      <div class="w-full">
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2C2C2C]">{{ props.title }}</h2>
          <div class="flex gap-2">
            <FavoritePlaceIconBtn><EditIcon /></FavoritePlaceIconBtn>
            <FavoritePlaceIconBtn><DeleteIcon /></FavoritePlaceIconBtn>
          </div>
        </div>
        <p class="text-xs line-clamp-3">
          {{ props.description }}
        </p>
      </div>
    </div>
    <div
      class="h-[1px] w-full mt-4"
      :class="{ 'bg-primary': props.isActive, 'bg-[#ececec]': !props.isActive }"
    ></div>
  </section>
</template>
