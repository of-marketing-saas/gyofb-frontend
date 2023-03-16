<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click.stop="() => toggleDrawer()"></v-app-bar-nav-icon>
    <v-app-bar-title @click="$router.push('/')"><v-img :src="logo" width="32" /></v-app-bar-title>
    <v-spacer></v-spacer>
    <v-tooltip location="bottom" text="Update Theme">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" size="small" :icon="themeIcon" @click="onToggleMode"></v-btn>
      </template>
    </v-tooltip>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="info" v-bind="props">{{ username }}<v-icon>mdi-menu-down</v-icon></v-btn>
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
  <layout-drawer v-model="drawer" />
</template>

<script setup lang="ts">
import { ref, toRefs, computed } from 'vue';
import LayoutDrawer from './LayoutDrawer.vue';
import logo from '@/assets/logo.png';
import { useUserStore } from '@/stores/user';
import { useAuthenticator } from '@aws-amplify/ui-vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

const { signOut } = toRefs(useAuthenticator());
const { user } = useUserStore();

const username = computed(() => user.accountEmail || user.id);

const drawer = ref(true);
const items = [{ title: 'Profile', icon: 'mdi-account', link: '/profile' }];

const themeIcon = computed(() => {
  return theme.global.name.value === 'dark' ? 'mdi-lightbulb-on-outline' : 'mdi-lightbulb-outline';
});
const onToggleMode = () => {
  theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light';
};

const toggleDrawer = () => (drawer.value = !drawer.value);
</script>
