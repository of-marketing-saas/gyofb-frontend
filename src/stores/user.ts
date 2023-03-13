import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API, graphqlOperation } from 'aws-amplify';
import type { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { getUser } from '@/graphql/queries';
import type {
  CreateUserInput,
  CreateUserMutation,
  GetUserQuery,
  UpdateUserInput,
  UpdateUserMutation,
  User,
} from '@/API';
import { createUser, updateUser } from '@/graphql/mutations';
import type { AmplifyUser } from '@aws-amplify/ui';

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({} as User);
  const amplifyUser = ref<AmplifyUser>({} as AmplifyUser);

  const initialize = async (user: AmplifyUser) => {
    Object.assign(amplifyUser.value, user);
    await loadAccount(user);
  };

  const loadAccount = async (amplifyUser: AmplifyUser) => {
    const response = (await API.graphql<GraphQLQuery<GetUserQuery>>(
      graphqlOperation(getUser, { id: amplifyUser.username }),
    )) as GraphQLResult<GetUserQuery>;
    if (response?.data?.getUser) {
      Object.assign(user.value, response.data.getUser);
      return;
    }
    const input: CreateUserInput = {
      id: amplifyUser.username,
      accountEmail: amplifyUser.attributes?.email || '',
    };
    const { data } = (await API.graphql<GraphQLQuery<CreateUserMutation>>(
      graphqlOperation(createUser, { input }),
    )) as GraphQLResult<CreateUserMutation>;
    if (data?.createUser) {
      Object.assign(user.value, data.createUser);
    }
  };

  const updateAccount = async (input: UpdateUserInput) => {
    const { data } = (await API.graphql<GraphQLQuery<UpdateUserMutation>>(
      graphqlOperation(updateUser, { input }),
    )) as GraphQLResult<UpdateUserMutation>;
    if (data?.updateUser) {
      Object.assign(user.value, data.updateUser);
    }
  };

  return { user, initialize, updateAccount };
});
