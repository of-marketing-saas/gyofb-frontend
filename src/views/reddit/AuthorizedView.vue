<template>
  <v-card width="100%">
    <v-card-title>Reddit Authorized</v-card-title>
    <v-container>
      <v-row no-gutters class="flex-nowrap mt-2">
        <v-text-field
          disabled
          density="comfortable"
          label="Reddit State"
          v-model="state"
        ></v-text-field>
        <v-text-field
          disabled
          density="comfortable"
          label="Reddit Code"
          v-model="code"
        ></v-text-field>
      </v-row>
      <reddit-profile v-show="redditUser" :reddit-user="redditUser" />
    </v-container>
    <v-card-actions v-show="showButton">
      <v-spacer></v-spacer>
      <v-btn color="info" :loading="loading" @click="onUpdateAccount()">Link User</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRedditStore } from '@/stores/reddit';
import { useUserStore } from '@/stores/user';
import type { UpdateUserInput } from '@/API';
import pick from 'lodash/pick';
import RedditProfile from '@/components/profile/RedditProfile.vue';

const route = useRoute();
const code = computed(() => route.query.code as string);
const state = computed(() => route.query.state as string);

const { redditUser, loading, loadRedditUser } = useRedditStore();
const { user, updateAccount } = useUserStore();

const showButton = ref(true);

onMounted(() => {
  loadRedditUser(code.value);
});

const onUpdateAccount = async () => {
  const { id, name, icon_img } = redditUser;
  const fieldsToUpdate = pick(user, [
    'id',
    'accountEmail',
    'subscriptionStatus',
    'subscriptionExpiredAt',
  ]);
  const input: UpdateUserInput = {
    ...fieldsToUpdate,
    accountId: id,
    accountName: name,
    accountAvator: icon_img,
    accountQueryCode: code.value,
  };
  await updateAccount(input);
  showButton.value = false;
};
</script>
