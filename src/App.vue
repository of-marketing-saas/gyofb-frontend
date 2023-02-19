<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-avatar color="primary" size="50" class="ml-2">
        <v-icon @onclick="onClick">mdi-vuetify</v-icon>
      </v-avatar>
      <v-spacer></v-spacer>
      <v-btn>Pricing</v-btn>
      <v-btn>Blog</v-btn>
      <v-btn>Updates</v-btn>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn color="info" v-bind="props"
            >Tianxu Zhang<v-icon>mdi-menu-down</v-icon></v-btn
          >
        </template>
        <v-list :items="items" item-title="title" item-value="title" />
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-sheet color="grey-lighten-4" class="pa-4">
        <v-btn prepend-icon="mdi-calendar-account" color="primary"
          >Schedule a Post</v-btn
        >
      </v-sheet>

      <v-divider></v-divider>

      <v-list class="mb-6">
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <template v-slot:prepend>
            <v-icon>{{ icon }}</v-icon>
          </template>

          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-progress-linear class="align-self-end" value="2" />

      <v-sheet color="grey-lighten-4" class="pa-4">
        <v-btn border prepend-icon="mdi-update">Upgrade Plan</v-btn>
      </v-sheet>
    </v-navigation-drawer>

    <v-main class="flex-8">
      <v-container class="py-8 px-6" fluid>
        {{ "Some content" }}
      </v-container>
    </v-main>
    <v-footer
      height="120"
      class="flex-2 bg-indigo-lighten-1 text-center d-flex flex-column"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>
      <v-divider></v-divider>
      <div>
        {{ new Date().getFullYear() }} — <strong>Group Your of Biz</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    items: [
      { title: "Settings" },
      { title: "Help Center" },
      { title: "Affiliate Program" },
      { title: "r/groupyourofbiz" },
      { title: "Logout" },
    ],
    drawer: false,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    links: [
      ["mdi-palette-outline", "Dashboard"],
      ["mdi-history", "History"],
      ["mdi-google-analytics", "Analytics"],
      ["mdi-library", "Content library"],
      ["mdi-cog-outline", "Settings"],
      ["mdi-logout", "Logout"],
    ],
  }),
  methods: {
    onClick() {
      this.drawer = !this.drawer;
    },
  },
});
</script>
