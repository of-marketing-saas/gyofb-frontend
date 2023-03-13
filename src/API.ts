/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  accountEmail: string,
  accountId?: string | null,
  accountName?: string | null,
  accountAvator?: string | null,
  accountQueryCode?: string | null,
  subscriptionStatus?: string | null,
  subscriptionExpiredAt?: number | null,
};

export type ModelUserConditionInput = {
  accountEmail?: ModelStringInput | null,
  accountId?: ModelStringInput | null,
  accountName?: ModelStringInput | null,
  accountAvator?: ModelStringInput | null,
  accountQueryCode?: ModelStringInput | null,
  subscriptionStatus?: ModelStringInput | null,
  subscriptionExpiredAt?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  accountEmail: string,
  accountId?: string | null,
  accountName?: string | null,
  accountAvator?: string | null,
  accountQueryCode?: string | null,
  subscriptionStatus?: string | null,
  subscriptionExpiredAt?: number | null,
  collections?: ModelCollectionConnection | null,
  schedulers?: ModelSchedulerConnection | null,
  medias?: ModelMediaConnection | null,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCollectionConnection = {
  __typename: "ModelCollectionConnection",
  items:  Array<Collection | null >,
  nextToken?: string | null,
};

export type Collection = {
  __typename: "Collection",
  id: string,
  name: string,
  user?: User | null,
  medias?: ModelMediaConnection | null,
  posts?: ModelPostConnection | null,
  schedulers?: ModelSchedulerConnection | null,
  createdAt: string,
  updatedAt: string,
  userCollectionsId?: string | null,
};

export type ModelMediaConnection = {
  __typename: "ModelMediaConnection",
  items:  Array<Media | null >,
  nextToken?: string | null,
};

export type Media = {
  __typename: "Media",
  id: string,
  name: string,
  type?: string | null,
  s3Key?: string | null,
  preferred?: boolean | null,
  user?: User | null,
  collection?: Collection | null,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
  userMediasId?: string | null,
  collectionMediasId?: string | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  subreddit: string,
  url?: string | null,
  createdAt: string,
  updatedAt: string,
  userPostsId?: string | null,
  collectionPostsId?: string | null,
  mediaPostsId?: string | null,
  schedulerPostsId?: string | null,
};

export type ModelSchedulerConnection = {
  __typename: "ModelSchedulerConnection",
  items:  Array<Scheduler | null >,
  nextToken?: string | null,
};

export type Scheduler = {
  __typename: "Scheduler",
  id: string,
  name: string,
  startAt?: number | null,
  endAt?: number | null,
  postTarget?: number | null,
  subreddits?: Array< string | null > | null,
  status?: string | null,
  user?: User | null,
  collection?: Collection | null,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
  userSchedulersId?: string | null,
  collectionSchedulersId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  accountEmail?: string | null,
  accountId?: string | null,
  accountName?: string | null,
  accountAvator?: string | null,
  accountQueryCode?: string | null,
  subscriptionStatus?: string | null,
  subscriptionExpiredAt?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCollectionInput = {
  id?: string | null,
  name: string,
  userCollectionsId?: string | null,
};

export type ModelCollectionConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCollectionConditionInput | null > | null,
  or?: Array< ModelCollectionConditionInput | null > | null,
  not?: ModelCollectionConditionInput | null,
  userCollectionsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCollectionInput = {
  id: string,
  name?: string | null,
  userCollectionsId?: string | null,
};

export type DeleteCollectionInput = {
  id: string,
};

export type CreateMediaInput = {
  id?: string | null,
  name: string,
  type?: string | null,
  s3Key?: string | null,
  preferred?: boolean | null,
  userMediasId?: string | null,
  collectionMediasId?: string | null,
};

export type ModelMediaConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  s3Key?: ModelStringInput | null,
  preferred?: ModelBooleanInput | null,
  and?: Array< ModelMediaConditionInput | null > | null,
  or?: Array< ModelMediaConditionInput | null > | null,
  not?: ModelMediaConditionInput | null,
  userMediasId?: ModelIDInput | null,
  collectionMediasId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMediaInput = {
  id: string,
  name?: string | null,
  type?: string | null,
  s3Key?: string | null,
  preferred?: boolean | null,
  userMediasId?: string | null,
  collectionMediasId?: string | null,
};

export type DeleteMediaInput = {
  id: string,
};

export type CreateSchedulerInput = {
  id?: string | null,
  name: string,
  startAt?: number | null,
  endAt?: number | null,
  postTarget?: number | null,
  subreddits?: Array< string | null > | null,
  status?: string | null,
  userSchedulersId?: string | null,
  collectionSchedulersId?: string | null,
};

export type ModelSchedulerConditionInput = {
  name?: ModelStringInput | null,
  startAt?: ModelIntInput | null,
  endAt?: ModelIntInput | null,
  postTarget?: ModelIntInput | null,
  subreddits?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelSchedulerConditionInput | null > | null,
  or?: Array< ModelSchedulerConditionInput | null > | null,
  not?: ModelSchedulerConditionInput | null,
  userSchedulersId?: ModelIDInput | null,
  collectionSchedulersId?: ModelIDInput | null,
};

export type UpdateSchedulerInput = {
  id: string,
  name?: string | null,
  startAt?: number | null,
  endAt?: number | null,
  postTarget?: number | null,
  subreddits?: Array< string | null > | null,
  status?: string | null,
  userSchedulersId?: string | null,
  collectionSchedulersId?: string | null,
};

export type DeleteSchedulerInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  subreddit: string,
  url?: string | null,
  userPostsId?: string | null,
  collectionPostsId?: string | null,
  mediaPostsId?: string | null,
  schedulerPostsId?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  subreddit?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  userPostsId?: ModelIDInput | null,
  collectionPostsId?: ModelIDInput | null,
  mediaPostsId?: ModelIDInput | null,
  schedulerPostsId?: ModelIDInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  subreddit?: string | null,
  url?: string | null,
  userPostsId?: string | null,
  collectionPostsId?: string | null,
  mediaPostsId?: string | null,
  schedulerPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  accountEmail?: ModelStringInput | null,
  accountId?: ModelStringInput | null,
  accountName?: ModelStringInput | null,
  accountAvator?: ModelStringInput | null,
  accountQueryCode?: ModelStringInput | null,
  subscriptionStatus?: ModelStringInput | null,
  subscriptionExpiredAt?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCollectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCollectionFilterInput | null > | null,
  or?: Array< ModelCollectionFilterInput | null > | null,
  not?: ModelCollectionFilterInput | null,
  userCollectionsId?: ModelIDInput | null,
};

export type ModelMediaFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  s3Key?: ModelStringInput | null,
  preferred?: ModelBooleanInput | null,
  and?: Array< ModelMediaFilterInput | null > | null,
  or?: Array< ModelMediaFilterInput | null > | null,
  not?: ModelMediaFilterInput | null,
  userMediasId?: ModelIDInput | null,
  collectionMediasId?: ModelIDInput | null,
};

export type ModelSchedulerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  startAt?: ModelIntInput | null,
  endAt?: ModelIntInput | null,
  postTarget?: ModelIntInput | null,
  subreddits?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelSchedulerFilterInput | null > | null,
  or?: Array< ModelSchedulerFilterInput | null > | null,
  not?: ModelSchedulerFilterInput | null,
  userSchedulersId?: ModelIDInput | null,
  collectionSchedulersId?: ModelIDInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subreddit?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  userPostsId?: ModelIDInput | null,
  collectionPostsId?: ModelIDInput | null,
  mediaPostsId?: ModelIDInput | null,
  schedulerPostsId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountEmail?: ModelSubscriptionStringInput | null,
  accountId?: ModelSubscriptionStringInput | null,
  accountName?: ModelSubscriptionStringInput | null,
  accountAvator?: ModelSubscriptionStringInput | null,
  accountQueryCode?: ModelSubscriptionStringInput | null,
  subscriptionStatus?: ModelSubscriptionStringInput | null,
  subscriptionExpiredAt?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCollectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCollectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionCollectionFilterInput | null > | null,
};

export type ModelSubscriptionMediaFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  s3Key?: ModelSubscriptionStringInput | null,
  preferred?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionMediaFilterInput | null > | null,
  or?: Array< ModelSubscriptionMediaFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionSchedulerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  startAt?: ModelSubscriptionIntInput | null,
  endAt?: ModelSubscriptionIntInput | null,
  postTarget?: ModelSubscriptionIntInput | null,
  subreddits?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSchedulerFilterInput | null > | null,
  or?: Array< ModelSubscriptionSchedulerFilterInput | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  subreddit?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    accountEmail: string,
    accountId?: string | null,
    accountName?: string | null,
    accountAvator?: string | null,
    accountQueryCode?: string | null,
    subscriptionStatus?: string | null,
    subscriptionExpiredAt?: number | null,
    collections?:  {
      __typename: "ModelCollectionConnection",
      items:  Array< {
        __typename: "Collection",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCollectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    accountEmail: string,
    accountId?: string | null,
    accountName?: string | null,
    accountAvator?: string | null,
    accountQueryCode?: string | null,
    subscriptionStatus?: string | null,
    subscriptionExpiredAt?: number | null,
    collections?:  {
      __typename: "ModelCollectionConnection",
      items:  Array< {
        __typename: "Collection",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCollectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    accountEmail: string,
    accountId?: string | null,
    accountName?: string | null,
    accountAvator?: string | null,
    accountQueryCode?: string | null,
    subscriptionStatus?: string | null,
    subscriptionExpiredAt?: number | null,
    collections?:  {
      __typename: "ModelCollectionConnection",
      items:  Array< {
        __typename: "Collection",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCollectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCollectionMutationVariables = {
  input: CreateCollectionInput,
  condition?: ModelCollectionConditionInput | null,
};

export type CreateCollectionMutation = {
  createCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCollectionsId?: string | null,
  } | null,
};

export type UpdateCollectionMutationVariables = {
  input: UpdateCollectionInput,
  condition?: ModelCollectionConditionInput | null,
};

export type UpdateCollectionMutation = {
  updateCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCollectionsId?: string | null,
  } | null,
};

export type DeleteCollectionMutationVariables = {
  input: DeleteCollectionInput,
  condition?: ModelCollectionConditionInput | null,
};

export type DeleteCollectionMutation = {
  deleteCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCollectionsId?: string | null,
  } | null,
};

export type CreateMediaMutationVariables = {
  input: CreateMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type CreateMediaMutation = {
  createMedia?:  {
    __typename: "Media",
    id: string,
    name: string,
    type?: string | null,
    s3Key?: string | null,
    preferred?: boolean | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMediasId?: string | null,
    collectionMediasId?: string | null,
  } | null,
};

export type UpdateMediaMutationVariables = {
  input: UpdateMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type UpdateMediaMutation = {
  updateMedia?:  {
    __typename: "Media",
    id: string,
    name: string,
    type?: string | null,
    s3Key?: string | null,
    preferred?: boolean | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMediasId?: string | null,
    collectionMediasId?: string | null,
  } | null,
};

export type DeleteMediaMutationVariables = {
  input: DeleteMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type DeleteMediaMutation = {
  deleteMedia?:  {
    __typename: "Media",
    id: string,
    name: string,
    type?: string | null,
    s3Key?: string | null,
    preferred?: boolean | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMediasId?: string | null,
    collectionMediasId?: string | null,
  } | null,
};

export type CreateSchedulerMutationVariables = {
  input: CreateSchedulerInput,
  condition?: ModelSchedulerConditionInput | null,
};

export type CreateSchedulerMutation = {
  createScheduler?:  {
    __typename: "Scheduler",
    id: string,
    name: string,
    startAt?: number | null,
    endAt?: number | null,
    postTarget?: number | null,
    subreddits?: Array< string | null > | null,
    status?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSchedulersId?: string | null,
    collectionSchedulersId?: string | null,
  } | null,
};

export type UpdateSchedulerMutationVariables = {
  input: UpdateSchedulerInput,
  condition?: ModelSchedulerConditionInput | null,
};

export type UpdateSchedulerMutation = {
  updateScheduler?:  {
    __typename: "Scheduler",
    id: string,
    name: string,
    startAt?: number | null,
    endAt?: number | null,
    postTarget?: number | null,
    subreddits?: Array< string | null > | null,
    status?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSchedulersId?: string | null,
    collectionSchedulersId?: string | null,
  } | null,
};

export type DeleteSchedulerMutationVariables = {
  input: DeleteSchedulerInput,
  condition?: ModelSchedulerConditionInput | null,
};

export type DeleteSchedulerMutation = {
  deleteScheduler?:  {
    __typename: "Scheduler",
    id: string,
    name: string,
    startAt?: number | null,
    endAt?: number | null,
    postTarget?: number | null,
    subreddits?: Array< string | null > | null,
    status?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSchedulersId?: string | null,
    collectionSchedulersId?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    subreddit: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    collectionPostsId?: string | null,
    mediaPostsId?: string | null,
    schedulerPostsId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    subreddit: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    collectionPostsId?: string | null,
    mediaPostsId?: string | null,
    schedulerPostsId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    subreddit: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    collectionPostsId?: string | null,
    mediaPostsId?: string | null,
    schedulerPostsId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    accountEmail: string,
    accountId?: string | null,
    accountName?: string | null,
    accountAvator?: string | null,
    accountQueryCode?: string | null,
    subscriptionStatus?: string | null,
    subscriptionExpiredAt?: number | null,
    collections?:  {
      __typename: "ModelCollectionConnection",
      items:  Array< {
        __typename: "Collection",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCollectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCollectionQueryVariables = {
  id: string,
};

export type GetCollectionQuery = {
  getCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCollectionsId?: string | null,
  } | null,
};

export type ListCollectionsQueryVariables = {
  id?: string | null,
  filter?: ModelCollectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCollectionsQuery = {
  listCollections?:  {
    __typename: "ModelCollectionConnection",
    items:  Array< {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMediaQueryVariables = {
  id: string,
};

export type GetMediaQuery = {
  getMedia?:  {
    __typename: "Media",
    id: string,
    name: string,
    type?: string | null,
    s3Key?: string | null,
    preferred?: boolean | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMediasId?: string | null,
    collectionMediasId?: string | null,
  } | null,
};

export type ListMediaQueryVariables = {
  id?: string | null,
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMediaQuery = {
  listMedia?:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      id: string,
      name: string,
      type?: string | null,
      s3Key?: string | null,
      preferred?: boolean | null,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      collection?:  {
        __typename: "Collection",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCollectionsId?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userMediasId?: string | null,
      collectionMediasId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSchedulerQueryVariables = {
  id: string,
};

export type GetSchedulerQuery = {
  getScheduler?:  {
    __typename: "Scheduler",
    id: string,
    name: string,
    startAt?: number | null,
    endAt?: number | null,
    postTarget?: number | null,
    subreddits?: Array< string | null > | null,
    status?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSchedulersId?: string | null,
    collectionSchedulersId?: string | null,
  } | null,
};

export type ListSchedulersQueryVariables = {
  id?: string | null,
  filter?: ModelSchedulerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSchedulersQuery = {
  listSchedulers?:  {
    __typename: "ModelSchedulerConnection",
    items:  Array< {
      __typename: "Scheduler",
      id: string,
      name: string,
      startAt?: number | null,
      endAt?: number | null,
      postTarget?: number | null,
      subreddits?: Array< string | null > | null,
      status?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      collection?:  {
        __typename: "Collection",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCollectionsId?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSchedulersId?: string | null,
      collectionSchedulersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    subreddit: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    collectionPostsId?: string | null,
    mediaPostsId?: string | null,
    schedulerPostsId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  id?: string | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      subreddit: string,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      collectionPostsId?: string | null,
      mediaPostsId?: string | null,
      schedulerPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    accountEmail: string,
    accountId?: string | null,
    accountName?: string | null,
    accountAvator?: string | null,
    accountQueryCode?: string | null,
    subscriptionStatus?: string | null,
    subscriptionExpiredAt?: number | null,
    collections?:  {
      __typename: "ModelCollectionConnection",
      items:  Array< {
        __typename: "Collection",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCollectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    accountEmail: string,
    accountId?: string | null,
    accountName?: string | null,
    accountAvator?: string | null,
    accountQueryCode?: string | null,
    subscriptionStatus?: string | null,
    subscriptionExpiredAt?: number | null,
    collections?:  {
      __typename: "ModelCollectionConnection",
      items:  Array< {
        __typename: "Collection",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCollectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    accountEmail: string,
    accountId?: string | null,
    accountName?: string | null,
    accountAvator?: string | null,
    accountQueryCode?: string | null,
    subscriptionStatus?: string | null,
    subscriptionExpiredAt?: number | null,
    collections?:  {
      __typename: "ModelCollectionConnection",
      items:  Array< {
        __typename: "Collection",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCollectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCollectionSubscriptionVariables = {
  filter?: ModelSubscriptionCollectionFilterInput | null,
};

export type OnCreateCollectionSubscription = {
  onCreateCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCollectionsId?: string | null,
  } | null,
};

export type OnUpdateCollectionSubscriptionVariables = {
  filter?: ModelSubscriptionCollectionFilterInput | null,
};

export type OnUpdateCollectionSubscription = {
  onUpdateCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCollectionsId?: string | null,
  } | null,
};

export type OnDeleteCollectionSubscriptionVariables = {
  filter?: ModelSubscriptionCollectionFilterInput | null,
};

export type OnDeleteCollectionSubscription = {
  onDeleteCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    medias?:  {
      __typename: "ModelMediaConnection",
      items:  Array< {
        __typename: "Media",
        id: string,
        name: string,
        type?: string | null,
        s3Key?: string | null,
        preferred?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userMediasId?: string | null,
        collectionMediasId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    schedulers?:  {
      __typename: "ModelSchedulerConnection",
      items:  Array< {
        __typename: "Scheduler",
        id: string,
        name: string,
        startAt?: number | null,
        endAt?: number | null,
        postTarget?: number | null,
        subreddits?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSchedulersId?: string | null,
        collectionSchedulersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCollectionsId?: string | null,
  } | null,
};

export type OnCreateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnCreateMediaSubscription = {
  onCreateMedia?:  {
    __typename: "Media",
    id: string,
    name: string,
    type?: string | null,
    s3Key?: string | null,
    preferred?: boolean | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMediasId?: string | null,
    collectionMediasId?: string | null,
  } | null,
};

export type OnUpdateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnUpdateMediaSubscription = {
  onUpdateMedia?:  {
    __typename: "Media",
    id: string,
    name: string,
    type?: string | null,
    s3Key?: string | null,
    preferred?: boolean | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMediasId?: string | null,
    collectionMediasId?: string | null,
  } | null,
};

export type OnDeleteMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnDeleteMediaSubscription = {
  onDeleteMedia?:  {
    __typename: "Media",
    id: string,
    name: string,
    type?: string | null,
    s3Key?: string | null,
    preferred?: boolean | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userMediasId?: string | null,
    collectionMediasId?: string | null,
  } | null,
};

export type OnCreateSchedulerSubscriptionVariables = {
  filter?: ModelSubscriptionSchedulerFilterInput | null,
};

export type OnCreateSchedulerSubscription = {
  onCreateScheduler?:  {
    __typename: "Scheduler",
    id: string,
    name: string,
    startAt?: number | null,
    endAt?: number | null,
    postTarget?: number | null,
    subreddits?: Array< string | null > | null,
    status?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSchedulersId?: string | null,
    collectionSchedulersId?: string | null,
  } | null,
};

export type OnUpdateSchedulerSubscriptionVariables = {
  filter?: ModelSubscriptionSchedulerFilterInput | null,
};

export type OnUpdateSchedulerSubscription = {
  onUpdateScheduler?:  {
    __typename: "Scheduler",
    id: string,
    name: string,
    startAt?: number | null,
    endAt?: number | null,
    postTarget?: number | null,
    subreddits?: Array< string | null > | null,
    status?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSchedulersId?: string | null,
    collectionSchedulersId?: string | null,
  } | null,
};

export type OnDeleteSchedulerSubscriptionVariables = {
  filter?: ModelSubscriptionSchedulerFilterInput | null,
};

export type OnDeleteSchedulerSubscription = {
  onDeleteScheduler?:  {
    __typename: "Scheduler",
    id: string,
    name: string,
    startAt?: number | null,
    endAt?: number | null,
    postTarget?: number | null,
    subreddits?: Array< string | null > | null,
    status?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      accountEmail: string,
      accountId?: string | null,
      accountName?: string | null,
      accountAvator?: string | null,
      accountQueryCode?: string | null,
      subscriptionStatus?: string | null,
      subscriptionExpiredAt?: number | null,
      collections?:  {
        __typename: "ModelCollectionConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    collection?:  {
      __typename: "Collection",
      id: string,
      name: string,
      user?:  {
        __typename: "User",
        id: string,
        accountEmail: string,
        accountId?: string | null,
        accountName?: string | null,
        accountAvator?: string | null,
        accountQueryCode?: string | null,
        subscriptionStatus?: string | null,
        subscriptionExpiredAt?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      medias?:  {
        __typename: "ModelMediaConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      schedulers?:  {
        __typename: "ModelSchedulerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCollectionsId?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        subreddit: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        collectionPostsId?: string | null,
        mediaPostsId?: string | null,
        schedulerPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSchedulersId?: string | null,
    collectionSchedulersId?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    subreddit: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    collectionPostsId?: string | null,
    mediaPostsId?: string | null,
    schedulerPostsId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    subreddit: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    collectionPostsId?: string | null,
    mediaPostsId?: string | null,
    schedulerPostsId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    subreddit: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    collectionPostsId?: string | null,
    mediaPostsId?: string | null,
    schedulerPostsId?: string | null,
  } | null,
};
