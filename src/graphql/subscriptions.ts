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
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        nextToken
      }
      schedules {
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
          userSchedulesId
          postingScheduleCollectionId
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
          mediaCollectionMediasId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
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
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        nextToken
      }
      schedules {
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
          userSchedulesId
          postingScheduleCollectionId
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
          mediaCollectionMediasId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
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
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        nextToken
      }
      schedules {
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
          userSchedulesId
          postingScheduleCollectionId
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
          mediaCollectionMediasId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMediaCollection = /* GraphQL */ `
  subscription OnCreateMediaCollection(
    $filter: ModelSubscriptionMediaCollectionFilterInput
  ) {
    onCreateMediaCollection(filter: $filter) {
      id
      name
      description
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
        schedules {
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
          mediaCollectionMediasId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
        }
        nextToken
      }
      schedule {
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
          createdAt
          updatedAt
        }
        collection {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userSchedulesId
        postingScheduleCollectionId
      }
      createdAt
      updatedAt
      userCollectionsId
      mediaCollectionScheduleId
    }
  }
`;
export const onUpdateMediaCollection = /* GraphQL */ `
  subscription OnUpdateMediaCollection(
    $filter: ModelSubscriptionMediaCollectionFilterInput
  ) {
    onUpdateMediaCollection(filter: $filter) {
      id
      name
      description
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
        schedules {
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
          mediaCollectionMediasId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
        }
        nextToken
      }
      schedule {
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
          createdAt
          updatedAt
        }
        collection {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userSchedulesId
        postingScheduleCollectionId
      }
      createdAt
      updatedAt
      userCollectionsId
      mediaCollectionScheduleId
    }
  }
`;
export const onDeleteMediaCollection = /* GraphQL */ `
  subscription OnDeleteMediaCollection(
    $filter: ModelSubscriptionMediaCollectionFilterInput
  ) {
    onDeleteMediaCollection(filter: $filter) {
      id
      name
      description
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
        schedules {
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
          mediaCollectionMediasId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
        }
        nextToken
      }
      schedule {
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
          createdAt
          updatedAt
        }
        collection {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userSchedulesId
        postingScheduleCollectionId
      }
      createdAt
      updatedAt
      userCollectionsId
      mediaCollectionScheduleId
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
        schedules {
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
        description
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
        schedule {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulesId
          postingScheduleCollectionId
        }
        createdAt
        updatedAt
        userCollectionsId
        mediaCollectionScheduleId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
        }
        nextToken
      }
      createdAt
      updatedAt
      userMediasId
      mediaCollectionMediasId
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
        schedules {
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
        description
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
        schedule {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulesId
          postingScheduleCollectionId
        }
        createdAt
        updatedAt
        userCollectionsId
        mediaCollectionScheduleId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
        }
        nextToken
      }
      createdAt
      updatedAt
      userMediasId
      mediaCollectionMediasId
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
        schedules {
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
        description
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
        schedule {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulesId
          postingScheduleCollectionId
        }
        createdAt
        updatedAt
        userCollectionsId
        mediaCollectionScheduleId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
        }
        nextToken
      }
      createdAt
      updatedAt
      userMediasId
      mediaCollectionMediasId
    }
  }
`;
export const onCreatePostingSchedule = /* GraphQL */ `
  subscription OnCreatePostingSchedule(
    $filter: ModelSubscriptionPostingScheduleFilterInput
  ) {
    onCreatePostingSchedule(filter: $filter) {
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
        schedules {
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
        description
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
        schedule {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulesId
          postingScheduleCollectionId
        }
        createdAt
        updatedAt
        userCollectionsId
        mediaCollectionScheduleId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
        }
        nextToken
      }
      createdAt
      updatedAt
      userSchedulesId
      postingScheduleCollectionId
    }
  }
`;
export const onUpdatePostingSchedule = /* GraphQL */ `
  subscription OnUpdatePostingSchedule(
    $filter: ModelSubscriptionPostingScheduleFilterInput
  ) {
    onUpdatePostingSchedule(filter: $filter) {
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
        schedules {
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
        description
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
        schedule {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulesId
          postingScheduleCollectionId
        }
        createdAt
        updatedAt
        userCollectionsId
        mediaCollectionScheduleId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
        }
        nextToken
      }
      createdAt
      updatedAt
      userSchedulesId
      postingScheduleCollectionId
    }
  }
`;
export const onDeletePostingSchedule = /* GraphQL */ `
  subscription OnDeletePostingSchedule(
    $filter: ModelSubscriptionPostingScheduleFilterInput
  ) {
    onDeletePostingSchedule(filter: $filter) {
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
        schedules {
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
        description
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
        schedule {
          id
          name
          startAt
          endAt
          postTarget
          subreddits
          status
          createdAt
          updatedAt
          userSchedulesId
          postingScheduleCollectionId
        }
        createdAt
        updatedAt
        userCollectionsId
        mediaCollectionScheduleId
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
          mediaCollectionPostsId
          mediaPostsId
          postingSchedulePostsId
          postMediaId
        }
        nextToken
      }
      createdAt
      updatedAt
      userSchedulesId
      postingScheduleCollectionId
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
      media {
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
          createdAt
          updatedAt
        }
        collection {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userMediasId
        mediaCollectionMediasId
      }
      schedule {
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
          createdAt
          updatedAt
        }
        collection {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userSchedulesId
        postingScheduleCollectionId
      }
      createdAt
      updatedAt
      userPostsId
      mediaCollectionPostsId
      mediaPostsId
      postingSchedulePostsId
      postMediaId
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
      media {
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
          createdAt
          updatedAt
        }
        collection {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userMediasId
        mediaCollectionMediasId
      }
      schedule {
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
          createdAt
          updatedAt
        }
        collection {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userSchedulesId
        postingScheduleCollectionId
      }
      createdAt
      updatedAt
      userPostsId
      mediaCollectionPostsId
      mediaPostsId
      postingSchedulePostsId
      postMediaId
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
      media {
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
          createdAt
          updatedAt
        }
        collection {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userMediasId
        mediaCollectionMediasId
      }
      schedule {
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
          createdAt
          updatedAt
        }
        collection {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
          mediaCollectionScheduleId
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userSchedulesId
        postingScheduleCollectionId
      }
      createdAt
      updatedAt
      userPostsId
      mediaCollectionPostsId
      mediaPostsId
      postingSchedulePostsId
      postMediaId
    }
  }
`;
