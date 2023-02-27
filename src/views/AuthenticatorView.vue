<template>
  <authenticator :social-providers="['google']" :login-mechanisms="['email']" />
</template>

<script setup lang="ts">
import '@aws-amplify/ui-vue/styles.css';

import { Authenticator } from '@aws-amplify/ui-vue';
</script>

<style scoped></style>
