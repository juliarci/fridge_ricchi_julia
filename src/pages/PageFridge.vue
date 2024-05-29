<template>
  <v-container>
    <FoodList :keyWord="keyWord"></FoodList>
  </v-container>
</template>
<script setup>
import keyWord from "@/components/FormText.vue";
import FoodList from "@/components/FoodList.vue";
</script>
