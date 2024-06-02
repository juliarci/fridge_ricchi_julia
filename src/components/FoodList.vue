<template>
  <v-container>
    <FormText @update="update"></FormText>
    <ProductList :pcritere="keyWord"></ProductList>
  </v-container>
</template>

<script setup>
import ProductList from "@/components/ProductList.vue";
import FormText from "@/components/FormText.vue";
import { ref } from "vue";

let keyWord = ref("");

function update(value) {
  keyWord.value = value;
}
</script>
