<template>
  <v-container>
    Recherche d'un aliment
    <FormText @update="update"></FormText>
    <FridgeFoodList :pcritere="keyWord"></FridgeFoodList>
  </v-container>
</template>

<script setup>
import FridgeFoodList from "@/components/FridgeFoodList.vue";
import FormText from "@/components/FormText.vue";
import { ref } from "vue";

let keyWord = ref("");

function update(value) {
  keyWord.value = value;
}
</script>
