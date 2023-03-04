<template>
  <v-navigation-drawer v-model="toggleDrawer" class="d-flex">
    <v-sheet color="grey-lighten-4" class="pa-4">
      <v-btn
        @click.stop="() => $router.push('/posts/new')"
        prepend-icon="mdi-calendar-account"
        color="primary"
        >Schedule a Post</v-btn
      >
    </v-sheet>
    <v-list class="mb-6">
      <v-list-item
        v-for="[icon, text, link] in links"
        :key="icon"
        link
        @click.stop="() => $router.push(link)"
      >
        <template v-slot:prepend>
          <v-icon>{{ icon }}</v-icon>
        </template>
        <v-list-item-title>{{ text }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-sheet color="grey-lighten-4" class="pa-4">
      <v-btn border prepend-icon="mdi-update">Subscribe</v-btn>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  data: () => ({
    links: [['mdi-palette-outline', 'Dashboard', '/dashboard']],
  }),
  props: {
    drawer: {
      type: Boolean,
      default: true,
    },
    onToggleDrawer: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    toggleDrawer: {
      get() {
        return this.drawer;
      },
      set() {
        this.onToggleDrawer();
      },
    },
  },
});
</script>

<style scoped></style>
