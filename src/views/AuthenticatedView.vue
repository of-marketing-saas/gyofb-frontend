<template>
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
</template>

<script lang="ts" setup>
import { toRefs, onMounted } from 'vue';
import { useAuthenticator } from '@aws-amplify/ui-vue';
import LayoutFooter from '@/components/layout/LayoutFooter.vue';
import LayoutAppBar from '@/components/layout/LayoutAppBar.vue';
import LoadingView from '@/components/LoadingView.vue';
import { useUserStore } from '@/stores/user';

const { user } = toRefs(useAuthenticator());
const { initialize, user: accountUser } = useUserStore();

onMounted(() => initialize(user.value));
</script>

<style lang="scss" scoped></style>
