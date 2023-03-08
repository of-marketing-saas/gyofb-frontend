<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-data-table
    density="compact"
    :headers="headers"
    :items="fileData"
    item-value="name"
    class="elevation-2"
  >
    <template v-slot:item.url="{ item }">
      <v-avatar size="32">
        <v-img cover :src="item.raw.url"></v-img>
      </v-avatar>
    </template>
    <template v-slot:item.size="{ item }">
      {{ (item.raw.size / 1000).toFixed(2) }}
    </template>
    <template v-slot:item.type="{ item }">
      <v-chip size="small" color="info">{{ item.raw.type }}</v-chip>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        v-if="item.raw.status === 'pending'"
        color="warning"
        size="small"
        @click="emit('delete-file', item.raw.id)"
      >
        mdi-delete
      </v-icon>
      <v-icon v-else-if="item.raw.status === 'uploaded'" color="success" size="small">
        mdi-cloud-check-variant
      </v-icon>
      <v-icon v-else-if="item.raw.status === 'error'" color="error" size="small">
        mdi-alert-box
      </v-icon>
      <v-progress-circular
        v-else
        width="7"
        color="info"
        v-model="item.raw.progress"
      ></v-progress-circular>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
import type { PropType } from 'vue';
import type { UploadableFile } from './compositions';
const headers = [
  { title: 'File Preview', key: 'url', sortable: false },
  { title: 'File Name', key: 'name', sortable: false },
  { title: 'File Size (kb)', key: 'size', sortable: false },
  { title: 'File Type', key: 'type', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false },
];
const props = defineProps({
  files: {
    type: Array as PropType<UploadableFile[]>,
    required: true,
  },
});
const emit = defineEmits(['delete-file']);

const { files } = toRefs(props);
const fileData = computed(() => {
  return files.value.map(({ file, ...rest }) => {
    const { name, size, type } = file;
    return { name, size, type, ...rest };
  });
});
</script>

<style lang="scss" scoped></style>
