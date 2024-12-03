<script setup>
import { ref, watch } from 'vue'
import IButton from '../ui/IButton/IButton.vue'
import IInput from '../ui/IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'
import MarkerIcon from '../ui/MarketIcon/MarkerIcon.vue'
import fallbackImage from '../../assets/images/ukraine.png'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
  isLoading: {
    default: false,
    type: Boolean,
  },
  place: Object,
})

const emit = defineEmits(['close', 'submit'])

const formData = ref({
  id: '',
  title: '',
  description: '',
  img: '',
  coordinates: null,
})

watch(
  () => props.place,
  () => {
    formData.value = {
      ...props.place,
    }
  },
)

const handleChangeImg = (url) => {
  formData.value.img = url
}
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <div class="w-[750px]">
      <div class="flex gap-2 items-center mb-10">
        <MarkerIcon height="18" width="18" />
        <span class="font-bold text-base">Edit marker</span>
      </div>
      <form @submit.prevent="emit('submit', formData)">
        <div class="flex gap-5">
          <div class="w-5/12">
            <img
              class="w-full h-[276px] object-cover rounded-md"
              :src="formData.img || fallbackImage"
              alt="place img"
            />
          </div>

          <div class="w-7/12">
            <IInput label="Location" v-model="formData.title" />
            <div class="mt-4">
              <IInput label="Description" type="textarea" v-model="formData.description" />
            </div>
            <IButton class="mt-10 w-full" variant="gradient" :is-loading="isLoading">
              Save
            </IButton>
          </div>
        </div>

        <InputImage class="mt-3" @uploaded="handleChangeImg">
          <span class="text-xs">Click the button for saving another photo</span>
        </InputImage>
      </form>
    </div>
  </IModal>
</template>
