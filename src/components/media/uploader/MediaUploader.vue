<template>
  <v-card width="100%">
    <v-card-title class="d-flex flex-row">
      Collection Media Uploader
      <v-spacer></v-spacer>
      <v-btn :disabled="isEmpty(files)" prepend-icon="mdi-upload" color="info" @click="uploadFiles">
        Upload
      </v-btn>
    </v-card-title>
    <drop-zone class="elevation-5" @files-dropped="addFiles">
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
  </v-card>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import isEmpty from 'lodash/isEmpty';
import DropZone from '@/components/media/uploader/DropZone.vue';
import FilesPreview from '@/components/media/uploader/FilesPreview.vue';

import { useFileList } from '../compositions';
import { useUserStore } from '@/stores/user';
import { useMediaStore } from '@/stores/medias';
import type { CreateMediaInput } from '@/API';

const { files, addFiles, removeFile, uploadFile } = useFileList();
const { createMedia } = useMediaStore();

const { user } = useUserStore();

const props = defineProps({
  collectionId: {
    type: String,
    required: true,
  },
});

const { collectionId } = toRefs(props);
const emit = defineEmits(['file-uploaded']);

const uploadFiles = async () => {
  const requests = files.value
    .filter((fileObj) => {
      return fileObj.status !== 'uploaded' && fileObj.status !== 'duplicate';
    })
    .map((fileObj) => {
      const callback = async (s3Key: string) => {
        const { file } = fileObj;
        const input: CreateMediaInput = {
          userMediasId: user.id,
          mediaCollectionMediasId: collectionId.value,
          s3Key,
          name: file.name,
          type: file.type,
        };
        createMedia(input);
      };
      return uploadFile(user.id, fileObj, callback);
    });
  await Promise.all(requests);
  emit('file-uploaded');
};
</script>
