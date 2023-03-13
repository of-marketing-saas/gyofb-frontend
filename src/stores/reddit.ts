import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import pick from 'lodash/pick';
import type { RedditUser } from '@/types/reddit';

export const useRedditStore = defineStore('reddit', () => {
  const redditUser = ref<RedditUser>({} as RedditUser);
  const loading = ref(false);

  const loadRedditUser = async (queryCode: string) => {
    loading.value = true;
    const { body } = await API.post('gyofbApiGateway', '/reddit/user', {
      body: {
        code: queryCode,
      },
    });
    Object.assign(redditUser.value, pick(body, ['id', 'name', 'icon_img']));
    loading.value = false;
  };

  return { redditUser, loading, loadRedditUser };
});
