<template>
  <v-sheet>
    <v-snackbar
      multi-line
      v-model="show"
      location="top"
      :color="notification.color"
      :timeout="notification.timeout"
    >
      <div class="text-subtitle-1 pb-2">{{ notification.title }}</div>
      <p v-if="!!notification.subtitle">{{ notification.subtitle }}</p>
      <template v-if="!notification.timeout" v-slot:actions>
        <v-btn color="indigo" variant="text" @click="toggleNotification(false)"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-sheet>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useNotificationStore } from '@/stores/notification';

const { show, notification, toggleNotification } = toRefs(useNotificationStore());
</script>
