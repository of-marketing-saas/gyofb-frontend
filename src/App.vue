<template>
  <authenticator :social-providers="['google']" :login-mechanisms="['email']">
    <authenticated-view />
  </authenticator>
</template>

<script setup lang="ts">
import '@aws-amplify/ui-vue/styles.css';

import { Authenticator } from '@aws-amplify/ui-vue';
import AuthenticatedView from '@/views/AuthenticatedView.vue';
</script>

<style>
[data-amplify-authenticator] {
  height: 100vh;
  margin-top: auto;
}
</style>
