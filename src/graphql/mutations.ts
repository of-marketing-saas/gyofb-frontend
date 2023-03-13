/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      accountEmail
      accountId
      accountName
      accountAvator
      accountQueryCode
      subscriptionStatus
      subscriptionExpiredAt
      collections {
        items {
          id
          name
          createdAt
          updatedAt
          userCollectionsId
        }
        nextToken
      }
      schedulers {
        items {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulersId
          collectionSchedulersId
        }
        nextToken
      }
      medias {
        items {
          id
          name
          type
          s3Key
          preferred
          createdAt
          updatedAt
          userMediasId
          collectionMediasId
        }
        nextToken
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      accountEmail
      accountId
      accountName
      accountAvator
      accountQueryCode
      subscriptionStatus
      subscriptionExpiredAt
      collections {
        items {
          id
          name
          createdAt
          updatedAt
          userCollectionsId
        }
        nextToken
      }
      schedulers {
        items {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulersId
          collectionSchedulersId
        }
        nextToken
      }
      medias {
        items {
          id
          name
          type
          s3Key
          preferred
          createdAt
          updatedAt
          userMediasId
          collectionMediasId
        }
        nextToken
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      accountEmail
      accountId
      accountName
      accountAvator
      accountQueryCode
      subscriptionStatus
      subscriptionExpiredAt
      collections {
        items {
          id
          name
          createdAt
          updatedAt
          userCollectionsId
        }
        nextToken
      }
      schedulers {
        items {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulersId
          collectionSchedulersId
        }
        nextToken
      }
      medias {
        items {
          id
          name
          type
          s3Key
          preferred
          createdAt
          updatedAt
          userMediasId
          collectionMediasId
        }
        nextToken
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
      id
      name
      user {
        id
        accountEmail
        accountId
        accountName
        accountAvator
        accountQueryCode
        subscriptionStatus
        subscriptionExpiredAt
        collections {
          nextToken
        }
        schedulers {
          nextToken
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      medias {
        items {
          id
          name
          type
          s3Key
          preferred
          createdAt
          updatedAt
          userMediasId
          collectionMediasId
        }
        nextToken
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      schedulers {
        items {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulersId
          collectionSchedulersId
        }
        nextToken
      }
      createdAt
      updatedAt
      userCollectionsId
    }
  }
`;
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
      id
      name
      user {
        id
        accountEmail
        accountId
        accountName
        accountAvator
        accountQueryCode
        subscriptionStatus
        subscriptionExpiredAt
        collections {
          nextToken
        }
        schedulers {
          nextToken
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      medias {
        items {
          id
          name
          type
          s3Key
          preferred
          createdAt
          updatedAt
          userMediasId
          collectionMediasId
        }
        nextToken
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      schedulers {
        items {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulersId
          collectionSchedulersId
        }
        nextToken
      }
      createdAt
      updatedAt
      userCollectionsId
    }
  }
`;
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
      id
      name
      user {
        id
        accountEmail
        accountId
        accountName
        accountAvator
        accountQueryCode
        subscriptionStatus
        subscriptionExpiredAt
        collections {
          nextToken
        }
        schedulers {
          nextToken
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      medias {
        items {
          id
          name
          type
          s3Key
          preferred
          createdAt
          updatedAt
          userMediasId
          collectionMediasId
        }
        nextToken
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      schedulers {
        items {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulersId
          collectionSchedulersId
        }
        nextToken
      }
      createdAt
      updatedAt
      userCollectionsId
    }
  }
`;
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
      id
      name
      type
      s3Key
      preferred
      user {
        id
        accountEmail
        accountId
        accountName
        accountAvator
        accountQueryCode
        subscriptionStatus
        subscriptionExpiredAt
        collections {
          nextToken
        }
        schedulers {
          nextToken
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        name
        user {
          id
          accountEmail
          accountId
          accountName
          accountAvator
          accountQueryCode
          subscriptionStatus
          subscriptionExpiredAt
          createdAt
          updatedAt
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        schedulers {
          nextToken
        }
        createdAt
        updatedAt
        userCollectionsId
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userMediasId
      collectionMediasId
    }
  }
`;
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
      id
      name
      type
      s3Key
      preferred
      user {
        id
        accountEmail
        accountId
        accountName
        accountAvator
        accountQueryCode
        subscriptionStatus
        subscriptionExpiredAt
        collections {
          nextToken
        }
        schedulers {
          nextToken
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        name
        user {
          id
          accountEmail
          accountId
          accountName
          accountAvator
          accountQueryCode
          subscriptionStatus
          subscriptionExpiredAt
          createdAt
          updatedAt
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        schedulers {
          nextToken
        }
        createdAt
        updatedAt
        userCollectionsId
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userMediasId
      collectionMediasId
    }
  }
`;
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
      id
      name
      type
      s3Key
      preferred
      user {
        id
        accountEmail
        accountId
        accountName
        accountAvator
        accountQueryCode
        subscriptionStatus
        subscriptionExpiredAt
        collections {
          nextToken
        }
        schedulers {
          nextToken
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        name
        user {
          id
          accountEmail
          accountId
          accountName
          accountAvator
          accountQueryCode
          subscriptionStatus
          subscriptionExpiredAt
          createdAt
          updatedAt
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        schedulers {
          nextToken
        }
        createdAt
        updatedAt
        userCollectionsId
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userMediasId
      collectionMediasId
    }
  }
`;
export const createScheduler = /* GraphQL */ `
  mutation CreateScheduler(
    $input: CreateSchedulerInput!
    $condition: ModelSchedulerConditionInput
  ) {
    createScheduler(input: $input, condition: $condition) {
      id
      name
      startAt
      endAt
      postTarget
      subreddits
      status
      user {
        id
        accountEmail
        accountId
        accountName
        accountAvator
        accountQueryCode
        subscriptionStatus
        subscriptionExpiredAt
        collections {
          nextToken
        }
        schedulers {
          nextToken
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        name
        user {
          id
          accountEmail
          accountId
          accountName
          accountAvator
          accountQueryCode
          subscriptionStatus
          subscriptionExpiredAt
          createdAt
          updatedAt
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        schedulers {
          nextToken
        }
        createdAt
        updatedAt
        userCollectionsId
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userSchedulersId
      collectionSchedulersId
    }
  }
`;
export const updateScheduler = /* GraphQL */ `
  mutation UpdateScheduler(
    $input: UpdateSchedulerInput!
    $condition: ModelSchedulerConditionInput
  ) {
    updateScheduler(input: $input, condition: $condition) {
      id
      name
      startAt
      endAt
      postTarget
      subreddits
      status
      user {
        id
        accountEmail
        accountId
        accountName
        accountAvator
        accountQueryCode
        subscriptionStatus
        subscriptionExpiredAt
        collections {
          nextToken
        }
        schedulers {
          nextToken
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        name
        user {
          id
          accountEmail
          accountId
          accountName
          accountAvator
          accountQueryCode
          subscriptionStatus
          subscriptionExpiredAt
          createdAt
          updatedAt
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        schedulers {
          nextToken
        }
        createdAt
        updatedAt
        userCollectionsId
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userSchedulersId
      collectionSchedulersId
    }
  }
`;
export const deleteScheduler = /* GraphQL */ `
  mutation DeleteScheduler(
    $input: DeleteSchedulerInput!
    $condition: ModelSchedulerConditionInput
  ) {
    deleteScheduler(input: $input, condition: $condition) {
      id
      name
      startAt
      endAt
      postTarget
      subreddits
      status
      user {
        id
        accountEmail
        accountId
        accountName
        accountAvator
        accountQueryCode
        subscriptionStatus
        subscriptionExpiredAt
        collections {
          nextToken
        }
        schedulers {
          nextToken
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        name
        user {
          id
          accountEmail
          accountId
          accountName
          accountAvator
          accountQueryCode
          subscriptionStatus
          subscriptionExpiredAt
          createdAt
          updatedAt
        }
        medias {
          nextToken
        }
        posts {
          nextToken
        }
        schedulers {
          nextToken
        }
        createdAt
        updatedAt
        userCollectionsId
      }
      posts {
        items {
          id
          title
          subreddit
          url
          createdAt
          updatedAt
          userPostsId
          collectionPostsId
          mediaPostsId
          schedulerPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userSchedulersId
      collectionSchedulersId
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      subreddit
      url
      createdAt
      updatedAt
      userPostsId
      collectionPostsId
      mediaPostsId
      schedulerPostsId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      subreddit
      url
      createdAt
      updatedAt
      userPostsId
      collectionPostsId
      mediaPostsId
      schedulerPostsId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      subreddit
      url
      createdAt
      updatedAt
      userPostsId
      collectionPostsId
      mediaPostsId
      schedulerPostsId
    }
  }
`;
