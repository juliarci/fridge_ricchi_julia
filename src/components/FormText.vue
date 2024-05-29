<template>
  <v-text-field
    v-model="keyWord"
    dense
    label="Rechercher un aliment"
    @input="updateMotcle"></v-text-field>
</template>

<script setup>
import {ref} from "vue";

const keyWord = ref("");
const emit = defineEmits(["update"]);

function updateMotcle() {
  emit("update", keyWord.value);
}
</script>

<style scoped>
</style>

<style scoped>
</style>
