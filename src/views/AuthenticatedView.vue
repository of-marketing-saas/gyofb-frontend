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
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" class="d-flex">
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
      <v-sheet class="mx-2">
        <p class="text-caption">2/10 Posts</p>
        <v-progress-linear color="light-blue" model-value="20" rounded height="6" />
        <p class="text-caption mt-2">4/10 DMs</p>
        <v-progress-linear color="purple" model-value="40" rounded height="6" />
      </v-sheet>
      <v-sheet color="grey-lighten-4" class="pa-4">
        <v-btn border prepend-icon="mdi-update">Upgrade Plan</v-btn>
      </v-sheet>
    </v-navigation-drawer>

    <v-main class="flex-8">
      <v-container class="d-flex flex-1 py-8 px-6" fluid>
        <router-view />
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
