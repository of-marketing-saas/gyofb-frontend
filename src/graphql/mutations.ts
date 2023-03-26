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
export const createMediaCollection = /* GraphQL */ `
  mutation CreateMediaCollection(
    $input: CreateMediaCollectionInput!
    $condition: ModelMediaCollectionConditionInput
  ) {
    createMediaCollection(input: $input, condition: $condition) {
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
export const updateMediaCollection = /* GraphQL */ `
  mutation UpdateMediaCollection(
    $input: UpdateMediaCollectionInput!
    $condition: ModelMediaCollectionConditionInput
  ) {
    updateMediaCollection(input: $input, condition: $condition) {
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
export const deleteMediaCollection = /* GraphQL */ `
  mutation DeleteMediaCollection(
    $input: DeleteMediaCollectionInput!
    $condition: ModelMediaCollectionConditionInput
  ) {
    deleteMediaCollection(input: $input, condition: $condition) {
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
export const createPostingSchedule = /* GraphQL */ `
  mutation CreatePostingSchedule(
    $input: CreatePostingScheduleInput!
    $condition: ModelPostingScheduleConditionInput
  ) {
    createPostingSchedule(input: $input, condition: $condition) {
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
export const updatePostingSchedule = /* GraphQL */ `
  mutation UpdatePostingSchedule(
    $input: UpdatePostingScheduleInput!
    $condition: ModelPostingScheduleConditionInput
  ) {
    updatePostingSchedule(input: $input, condition: $condition) {
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
export const deletePostingSchedule = /* GraphQL */ `
  mutation DeletePostingSchedule(
    $input: DeletePostingScheduleInput!
    $condition: ModelPostingScheduleConditionInput
  ) {
    deletePostingSchedule(input: $input, condition: $condition) {
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
