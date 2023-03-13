<template>
  <v-img :aspect-ratio="aspectRatio" :cover="cover" :src="fileSrc">
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script setup lang="ts">
import type { Media } from '@/API';
import { ref, toRefs, onMounted } from 'vue';
import type { PropType } from 'vue';
import { useFileList } from './compositions';

const fileSrc = ref('');
const props = defineProps({
  media: {
    type: Object as PropType<Media>,
    required: true,
  },
  aspectRatio: {
    type: Number,
    default: 16 / 9,
  },
  cover: {
    type: Boolean,
    default: true,
  },
});
const { media, aspectRatio, cover } = toRefs(props);
const { getMediaFile } = useFileList();

const loadMedia = async () => {
  if (!media.value.s3Key) return;
  const file = await getMediaFile(media.value.s3Key);
  fileSrc.value = file;
};

onMounted(() => loadMedia());
</script>

<style lang="scss" scoped></style>
