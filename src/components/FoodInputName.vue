<template>
  <form @submit.prevent="$emit('addFood', libelle)">
    <v-text-field variant="outlined" type="text" v-model="libelle" placeholder="Aliment à ajouter"/>
    <v-btn type="submit" value="valider" class="mt-4" color="success">Valider</v-btn>
  </form>
</template>

<script setup>
import {ref} from "vue";


// -- donnée réactive pour la saisie du libellé
const libelle = ref("");
const emit = defineEmits(["addFood"]);
</script>

<style scoped>
</style>
