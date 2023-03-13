<template>
  <v-navigation-drawer v-model="model" class="d-flex">
    <v-sheet color="grey-lighten-4" class="pa-4">
      <v-btn prepend-icon="mdi-calendar-account" color="primary" exact to="/schedulers/new">
        Schedule Posts
      </v-btn>
    </v-sheet>
    <v-list class="mb-6">
      <v-list-item v-for="{ title, icon, link } in links" :key="title" :to="link" exact>
        <template v-slot:prepend>
          <v-icon>{{ icon }}</v-icon>
        </template>
        <v-list-item-title>{{ title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-sheet color="grey-lighten-4" class="pa-4">
      <v-btn border prepend-icon="mdi-update">Subscribe</v-btn>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const links = [
  {
    title: 'Dashboard',
    icon: 'mdi-palette-outline',
    link: '/dashboard',
  },
  {
    title: 'Collections',
    icon: 'mdi-view-list',
    link: '/collections',
  },
  {
    title: 'Schedulers',
    icon: 'mdi-airplane-clock',
    link: '/schedulers',
  },
];

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(['update:modelValue']);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>
