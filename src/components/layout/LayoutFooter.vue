<template>
  <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
    <div>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
    </div>
    <v-divider></v-divider>
    <div>{{ new Date().getFullYear() }} <strong>@ Group Your OnlyFan Biz</strong></div>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-instagram', 'mdi-linkedin'],
  }),
});
</script>

<style scoped></style>
