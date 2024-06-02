<template>
  <FoodInput @addFood="addFood"></FoodInput>
  <br>
  <h3>Les aliments présents dans le frigo</h3>
  <br>
  <v-row dense>
    <v-col v-for="food in foodList" :key="food.id" cols="12" sm="6" md="3" lg="2" xl="2">
      <v-card color="indigo" variant="tonal">
        <v-img :src="food.photo" height="200px" cover></v-img>
        <v-card-title> {{ food.nom }}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
  <v-img src="/Users/Julia/Documents/École /ISIS/FIA3/Technologies web/frigo_ricchi_julia/src/assets/closedFridge.png"></v-img>
</template>

<script setup>
import {onMounted, reactive, watch} from "vue";
import Food from "@/objects/Food";
import FoodInput from "@/components/FoodInputName.vue";

const idFridge = "11";
const url = `https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/${idFridge}/produits`;
const foodList = reactive([]);
let props = defineProps(["pcritere"])

onMounted(() => {
  searchFood();
});

watch(props, (newcritere) => {
  console.log(newcritere.pcritere)
  searchFood()
});

function searchFood() {
  const fetchOptions = {method: "GET"};
  fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((dataJSON) => {
      listFoods(dataJSON);
      //deleteAllFood(dataJSON)
    })
    .catch((error) => {
      console.error(error);
    });
}

function listFoods(foods) {
  if (!foods) {
    console.info("Il n'y a pas d'aliments présents dans le frigo");
    return;
  }
  foodList.splice(0, foodList.length);
  foods
    .filter(foodData => foodData.nom.includes(props.pcritere))
    .forEach(foodData => {
      const food = new Food(foodData);
      foodList.push(food);
    });
}

function deleteAllFood(foods) {
  foodList.splice(0, foodList.length);
  foods.forEach(foodData => {
    const fetchOptions = {method: "DELETE"};
    fetch(url + "/" + foodData.id, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
      })
      .catch((error) => console.log(error));
  })
}

/**
 * Function who delete the Food Object
 * @param id of Food Object
 */
function deleteFood(id) {
  const fetchOptions = {method: "DELETE"};
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
    })
    .catch((error) => console.log(error));
}

/**
 * Function who add a Food Object with its name
 * @param name
 */
function addFood(name) {
  console.log(name);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({nom:name, qte: 1, photo: null}),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      searchFood();
    })
    .catch((error) => console.log(error));
}
</script>
<style scoped> .image {
  width: 200px;
  height: 300px;
}
</style>
