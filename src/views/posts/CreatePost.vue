<template>
  <v-card width="100%">
    <v-card-title>Schedule a New Post</v-card-title>
    <v-container>
      <v-row no-gutters class="flex-nowrap">
        <v-select
          density="comfortable"
          class="d-flex flex-1"
          v-model="redditUser"
          label="Reddit Account"
          :items="['u/Tianxu_Zhang', 'u/John_Doe']"
        ></v-select>
      </v-row>
    </v-container>
    <v-container>
      <v-row no-gutters class="flex-nowrap">
        <v-col cols="2" class="flex-grow-0 flex-shrink-0">
          <v-slide-group v-model="type" selected-class="bg-primary" direction="vertical">
            <v-slide-group-item
              v-for="post in postTypes"
              :key="post"
              :value="post"
              v-slot="{ toggle, selectedClass }"
            >
              <v-btn :prepend-icon="postIcon(post)" :class="selectedClass" @click="toggle">
                {{ post }}
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </v-col>
        <v-col cols="10" class="flex-grow-0 flex-shrink-1">
          <v-sheet class="ml-2">
            <v-text-field
              density="comfortable"
              variant="outlined"
              counter="300"
              label="Title"
            ></v-text-field>
            <quill-editor
              v-if="type === PostType.POST"
              v-model="content"
              :modules="modules"
              theme="snow"
            />
            <v-row v-show="type === PostType.LINK" no-gutters class="flex-nowrap mt-2">
              <v-text-field
                v-model="link"
                density="comfortable"
                variant="outlined"
                label="Link"
              ></v-text-field>
              <v-btn
                :disabled="type !== PostType.LINK || !isValidHttpsUrl"
                size="small"
                icon="mdi-open-in-new"
                class="ml-2"
                :href="link"
                target="_blank"
              ></v-btn>
            </v-row>
            <v-sheet v-show="type === PostType.IMAGE">
              <v-row no-gutters class="flex-nowrap mt-2">
                <v-file-input
                  density="comfortable"
                  v-model="files"
                  accept="image/*"
                  label="Image"
                  prepend-icon="mdi-image"
                  multiple
                  show-size
                ></v-file-input>
              </v-row>
              <v-row no-gutters class="flex-nowrap mt-2">
                <v-img :src="imagePreview" contain></v-img>
              </v-row>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
      <SubredditSubmission />
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn variant="flat" color="primary">Schedule</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { PostType } from '@/types/post';
import BlotFormatter from 'quill-blot-formatter';
import SubredditSubmission from '@/components/posts/SubredditSubmission.vue';

export default {
  components: {
    SubredditSubmission,
  },
  setup: () => {
    const modules = {
      name: 'blotFormatter',
      module: BlotFormatter,
      options: {
        /* options */
      },
    };
    return { modules, PostType };
  },
  data: () => ({
    content: '',
    redditUser: 'u/Tianxu_Zhang',
    type: PostType.POST,
    postTypes: Object.values(PostType),
    link: '',
    files: [],
  }),
  computed: {
    isValidHttpsUrl() {
      try {
        const url = new URL(this.link);
        return url.protocol === 'https:';
      } catch (_) {
        return false;
      }
    },
    imagePreview() {
      if (this.files.length > 0) {
        return URL.createObjectURL(this.files[0]);
      }
      return '';
    },
  },
  methods: {
    postIcon(postType: PostType) {
      switch (postType) {
        case PostType.POST:
          return 'mdi-post';
        case PostType.IMAGE:
          return 'mdi-image';
        case PostType.LINK:
          return 'mdi-link';
        default:
          return undefined;
      }
    },
  },
};
</script>

<style scoped></style>
