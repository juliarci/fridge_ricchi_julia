<template>
  <div :class="{ 'drawer-open': drawer }">
    <AppHeader :drawer="drawer" @update:drawer="updateDrawer"></AppHeader>
    <div class="main-content">
     <FoodList />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FoodList from "@/components/FoodList.vue";
import AppHeader from "@/components/AppHeader.vue";

const drawer = ref(false);

function updateDrawer(newValue) {
  drawer.value = newValue;
}
</script>

<style>
.main-content {
  transition: margin-left 0.3s;
}

.drawer-open .main-content {
  margin-left: 256px; /* Ajustez cette valeur selon la largeur de votre tiroir de navigation */
}
</style>
