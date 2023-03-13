<template>
  <v-card width="100%">
    <v-card-title>Collection Media Uploader</v-card-title>
    <drop-zone class="drop-zone bg-grey-lighten-1 elevation-5 mb-1" @files-dropped="addFiles">
      <v-container>
        <v-row class="justify-center pb-2">
          <div>
            <p class="text-center text-subtitle-2 font-weight-bold">Drag and drop files here</p>
            <p class="text-center text-body-1">or</p>
            <p class="text-center text-subtitle-2 font-weight-bold">Click to SELECT FILES.</p>
          </div>
        </v-row>
        <v-row class="justify-center">
          <v-file-input
            accept="image/*"
            @update:model-value="addFiles"
            ref="file"
            style="display: none"
            multiple
          />
          <v-btn prepend-icon="mdi-plus-thick" @click="($refs.file as any).click()" color="success">
            Select Files
          </v-btn>
        </v-row>
      </v-container>
    </drop-zone>
    <files-preview :files="files" @delete-file="removeFile"></files-preview>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn prepend-icon="mdi-upload" color="info" @click="uploadFiles">Upload</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DropZone from '@/components/media/uploader/DropZone.vue';
import FilesPreview from '@/components/media/uploader/FilesPreview.vue';

import { useFileList } from '../compositions';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useCollectionStore } from '@/stores/collections';
import type { CreateMediaInput } from '@/API';

const { files, addFiles, removeFile, uploadFile } = useFileList();
const { createMedia } = useCollectionStore();

const route = useRoute();
const collectionId = computed(() => route.params.collectionId as string);
const { user } = useUserStore();

const uploadFiles = () => {
  files.value.forEach((fileObj) => {
    const callback = async (s3Key: string) => {
      const { file } = fileObj;
      const input: CreateMediaInput = {
        userMediasId: user.id,
        collectionMediasId: collectionId.value,
        s3Key,
        name: file.name,
        type: file.type,
      };
      createMedia(input);
    };
    uploadFile(user.id, fileObj, callback);
  });
};
</script>

<style scoped>
.drop-zone {
  width: 100%;
  min-height: 120px;
  margin: 0 auto;
  padding: 30px;
  transition: 0.2s ease;
}
</style>
