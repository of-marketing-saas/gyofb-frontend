<template>
  <v-avatar>
    <v-img :src="fileSrc"></v-img>
  </v-avatar>
</template>

<script setup lang="ts">
import type { Media } from '@/API';
import { ref, toRefs, onMounted } from 'vue';
import type { PropType } from 'vue';
import { useFileList } from './compositions';

const fileSrc = ref('');

const { getMediaFile } = useFileList();
const props = defineProps({
  media: {
    type: Object as PropType<Media>,
    required: true,
  },
});
const { media } = toRefs(props);

const loadMedia = async () => {
  if (!media.value.s3Key) return;
  const file = await getMediaFile(media.value.s3Key);
  fileSrc.value = file;
};

onMounted(() => loadMedia());
</script>

<style scoped></style>
