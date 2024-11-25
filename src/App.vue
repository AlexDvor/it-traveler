<script setup>
import IButton from './components/IButton/IButton.vue'
</script>

<template>
  <main class="h-screen grid grid-cols-2 grid-rows-1 bg-primary">
    <section class="flex justify-center items-center p-10">
      <div class="text-white text-center">
        <img class="inline mb-6" src="./assets/icons/map-pin.svg" />
        <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
        <p class="leading-6 mb-11">
          A simple and user-friendly web application that allows you to mark your favorite places as
          well as those you'd love to visit. So don't wait - give it a try!
        </p>
        <IButton></IButton>
      </div>
    </section>
    <section>
      <img class="h-full object-cover w-full" src="./assets/images/static-map.png" alt="map" />
    </section>
  </main>
</template>
