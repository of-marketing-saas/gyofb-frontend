<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img :src="logo" cover />
      <v-spacer></v-spacer>
      <v-btn>Pricing</v-btn>
      <v-btn>Blog</v-btn>
      <v-btn color="info" @click="$router.push('/auth')">
        <v-icon>mdi-home-account</v-icon>Onboard
      </v-btn>
    </v-app-bar>
    <v-main class="flex-8">
      <v-container class="d-flex flex-1 py-8 px-6" fluid>
        <v-card width="100%"> Unauthorized Landing page </v-card>
      </v-container>
      <layout-footer />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutFooter from '@/components/layout/LayoutFooter.vue';
import logo from '../assets/logo.png';

export default defineComponent({
  components: {
    LayoutFooter,
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
