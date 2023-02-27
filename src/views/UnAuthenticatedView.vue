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
        <v-card width="100%">
          <v-img
            src="https://ca-times.brightspotcdn.com/dims4/default/02c4991/2147483647/strip/true/crop/4491x3062+0+0/resize/1200x818!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F13%2F78%2Fcf56e2b63d7966cbcefbc68b75a6%2F36c77fe97a494484b249f85c65774df3"
            cover
          />
        </v-card>
      </v-container>
      <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
        <div>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
        </div>
        <v-divider></v-divider>
        <div>{{ new Date().getFullYear() }} <strong>@ Group Your OnlyFan Biz</strong></div>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import logo from '../assets/logo.png';

export default defineComponent({
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
