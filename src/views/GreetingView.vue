<script setup>
import IButton from '@/components/ui/IButton/IButton.vue'
import BaseLayout from '../layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <div class="text-center">
      <img class="inline mb-6" src="../assets/icons/map-pin.svg" alt="" />
      <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
      <p class="leading-6 mb-11">
        A simple and convenient web app that lets you mark your favorite places, as well as those
        you’d love to visit. So don’t wait—give it a try!.
      </p>
      <IButton to="/auth/registration">Start to Work</IButton>
    </div>
  </BaseLayout>
</template>
