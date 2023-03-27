<template>
  <div class="control-container d-flex flex-column my-1">
    <div class="text-body-2">{{ label }}</div>
    <div class="text-subtitle-2 font-italic">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  title: {
    type: String || Element,
    required: true,
  },
});

const { label, title } = toRefs(props);
</script>

<style scoped>
.control-container {
  width: 100%;
}
</style>
