/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onCreateCollection(filter: $filter) {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onUpdateCollection(filter: $filter) {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onDeleteCollection(filter: $filter) {
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
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onCreateMedia(filter: $filter) {
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
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onUpdateMedia(filter: $filter) {
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
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia($filter: ModelSubscriptionMediaFilterInput) {
    onDeleteMedia(filter: $filter) {
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
export const onCreateScheduler = /* GraphQL */ `
  subscription OnCreateScheduler(
    $filter: ModelSubscriptionSchedulerFilterInput
  ) {
    onCreateScheduler(filter: $filter) {
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
export const onUpdateScheduler = /* GraphQL */ `
  subscription OnUpdateScheduler(
    $filter: ModelSubscriptionSchedulerFilterInput
  ) {
    onUpdateScheduler(filter: $filter) {
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
export const onDeleteScheduler = /* GraphQL */ `
  subscription OnDeleteScheduler(
    $filter: ModelSubscriptionSchedulerFilterInput
  ) {
    onDeleteScheduler(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
