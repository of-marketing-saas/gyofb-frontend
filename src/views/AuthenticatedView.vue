<template>
  <v-theme-provider :theme="theme">
    <v-app v-if="accountUser.id" id="inspire">
      <layout-app-bar />
      <v-main class="flex-8">
        <v-container class="d-flex flex-1 py-8 px-6" fluid>
          <router-view />
        </v-container>
        <layout-footer />
      </v-main>
    </v-app>
    <loading-view v-else />
  </v-theme-provider>
</template>

<script lang="ts" setup>
import { computed, toRefs, onMounted } from 'vue';
import { useTheme } from 'vuetify';
import { useAuthenticator } from '@aws-amplify/ui-vue';
import LayoutFooter from '@/components/layout/LayoutFooter.vue';
import LayoutAppBar from '@/components/layout/LayoutAppBar.vue';
import LoadingView from '@/components/LoadingView.vue';
import { useUserStore } from '@/stores/user';

const { user } = toRefs(useAuthenticator());
const { initialize, user: accountUser } = useUserStore();
const vuetifyTheme = useTheme();

const updateTheme = (event: any) => {
  const darkModeOn = event.matches;
  vuetifyTheme.global.name.value = darkModeOn ? 'dark' : 'light';
};

const theme = computed(() => vuetifyTheme.global.name.value);

onMounted(() => {
  initialize(user.value);
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkQuery.addListener(updateTheme);
  updateTheme(darkQuery);
});
</script>

<style lang="scss" scoped></style>
