<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img :src="logo" cover />
      <v-spacer></v-spacer>
      <v-btn>Pricing</v-btn>
      <v-btn>Blog</v-btn>
      <v-btn>Updates</v-btn>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn color="info" v-bind="props">Tianxu Zhang<v-icon>mdi-menu-down</v-icon></v-btn>
        </template>
        <v-list :items="items" item-title="title" item-value="title" />
      </v-menu>
      <layout-drawer :drawer="drawer" :on-toggle-drawer="() => onClick()" />
    </v-app-bar>

    <v-main class="flex-8">
      <v-container class="d-flex flex-1 py-8 px-6" fluid>
        <router-view />
      </v-container>
      <layout-footer />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutFooter from '@/components/layout/LayoutFooter.vue';
import LayoutDrawer from '@/components/layout/LayoutDrawer.vue';
import logo from '../assets/logo.png';

export default defineComponent({
  components: {
    LayoutFooter,
    LayoutDrawer,
  },
  data: () => ({
    logo: logo,
    items: [
      { title: 'Settings' },
      { title: 'Help Center' },
      { title: 'Affiliate Program' },
      { title: 'r/groupyourofbiz' },
      { title: 'Logout' },
    ],
    drawer: true,
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    links: [
      ['mdi-palette-outline', 'Dashboard', '/dashboard'],
      ['mdi-history', 'History'],
      ['mdi-google-analytics', 'Analytics'],
      ['mdi-library', 'Content library'],
      ['mdi-cog-outline', 'Settings'],
      ['mdi-logout', 'Logout'],
    ],
  }),
  methods: {
    onClick() {
      this.drawer = !this.drawer;
    },
  },
});
</script>
