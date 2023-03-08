<template>
  <authenticator :social-providers="['google']" :login-mechanisms="['email']">
    <v-app id="inspire">
      <layout-app-bar />
      <v-main class="flex-8">
        <v-container class="d-flex flex-1 py-8 px-6" fluid>
          <router-view />
        </v-container>
        <layout-footer />
      </v-main>
    </v-app>
  </authenticator>
</template>

<script setup lang="ts">
import '@aws-amplify/ui-vue/styles.css';

import { Authenticator } from '@aws-amplify/ui-vue';
import LayoutFooter from '@/components/layout/LayoutFooter.vue';
import LayoutAppBar from '@/components/layout/LayoutAppBar.vue';
</script>

<style>
[data-amplify-authenticator] {
  height: 100vh;
  margin-top: auto;
}
</style>
