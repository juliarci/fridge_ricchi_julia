<template>
  <div>
    <v-app-bar :elevation="20" style="width: 275px; border-bottom-right-radius: 30px">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Application frigo</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      :model-value="drawer"
      @update:model-value="updateDrawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      expand-on-hover
      rail
      app
    >
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="Mon frigo" value="monfrigo"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Course" value="course"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  drawer: Boolean
});

const emit = defineEmits(['update:drawer']);

function toggleDrawer() {
  emit('update:drawer', !props.drawer);
}

function updateDrawer(value) {
  emit('update:drawer', value);
}
</script>
