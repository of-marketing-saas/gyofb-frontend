<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click.stop="() => (drawer = !drawer)"></v-app-bar-nav-icon>
    <v-app-bar-title @click="$router.push('/')"><v-img :src="logo" width="32" /></v-app-bar-title>
    <v-spacer></v-spacer>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="info" v-bind="props">{{ user.username }}<v-icon>mdi-menu-down</v-icon></v-btn>
      </template>
      <v-list density="compact" :items="items">
        <v-list-item
          v-for="item in items"
          :prepend-icon="item.icon"
          :key="item.title"
          :title="item.title"
          @click="$router.push(item.link)"
        ></v-list-item>
        <v-list-item prepend-icon="mdi-logout" @click="signOut()">Logout</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
  <layout-drawer :drawer="drawer" :on-toggle-drawer="() => (drawer = !drawer)" />
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import LayoutDrawer from './LayoutDrawer.vue';
import logo from '@/assets/logo.png';
import { useAuthenticator } from '@aws-amplify/ui-vue';

export default defineComponent({
  setup() {
    const { route, user, signOut } = toRefs(useAuthenticator());
    return { route, user, signOut };
  },
  components: { LayoutDrawer },
  data: () => ({
    logo: logo,
    drawer: true,
    items: [{ title: 'Profile', icon: 'mdi-account', link: '/profile' }],
  }),
});
</script>
