<script setup>
import { defineEmits } from 'vue'
import FavoritePlaceIconBtn from '../FavoritePlaceIconBtn/FavoritePlaceIconBtn.vue'
import DeleteIcon from '../ui/DeleteIcon/DeleteIcon.vue'
import EditIcon from '../ui/EditIcon/EditIcon.vue'
import fallbackImage from '../../assets/images/ukraine.png'

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  img: String,
  isActive: {
    required: true,
    type: Boolean,
  },
})

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <section class="text-gray mb-6 last:mb-0">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0 rounded-md" :src="props.img || fallbackImage" alt="" />
      <div class="w-full">
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2C2C2C]">{{ props.title }}</h2>
          <div class="flex gap-2">
            <FavoritePlaceIconBtn @click.stop="emit('edit')">
              <EditIcon />
            </FavoritePlaceIconBtn>
            <FavoritePlaceIconBtn @click.stop="emit('delete')">
              <DeleteIcon />
            </FavoritePlaceIconBtn>
          </div>
        </div>
        <p class="text-xs line-clamp-3">
          {{ props.description }}
        </p>
      </div>
    </div>

    <div
      class="h-[1px] w-full bg-[#ececec] mt-4"
      :class="{ 'bg-primary': props.isActive, 'bg-[#ececec]': !props.isActive }"
    ></div>
  </section>
</template>
