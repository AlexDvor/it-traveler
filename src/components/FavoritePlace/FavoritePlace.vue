<script setup>
import FavoritePlaceIconBtn from '../FavoritePlaceIconBtn/FavoritePlaceIconBtn.vue'
import DeleteIcon from '../ui/DeleteIcon/DeleteIcon.vue'
import EditIcon from '../ui/EditIcon/EditIcon.vue'
</script>

<template>
  <section class="text-gray mb-6 last:mb-0">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0" src="../../assets//images/ukraine.png" />
      <div>
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2C2C2C]">Пункт незламності</h2>
          <div class="flex gap-2">
            <FavoritePlaceIconBtn><EditIcon /></FavoritePlaceIconBtn>
            <FavoritePlaceIconBtn><DeleteIcon /></FavoritePlaceIconBtn>
          </div>
        </div>
        <p class="text-xs line-clamp-3">
          Проєкт української влади, який ініціювали у листопаді 2022 року на фоні масованих
          обстрілів критичної інфраструктури з боку
        </p>
      </div>
    </div>
    <div class="h-[1px] w-full bg-[#ececec] mt-4"></div>
  </section>
</template>
