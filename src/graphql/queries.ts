/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMediaCollection = /* GraphQL */ `
  query GetMediaCollection($id: ID!) {
    getMediaCollection(id: $id) {
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
export const listMediaCollections = /* GraphQL */ `
  query ListMediaCollections(
    $id: ID
    $filter: ModelMediaCollectionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMediaCollections(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMedia = /* GraphQL */ `
  query GetMedia($id: ID!) {
    getMedia(id: $id) {
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
export const listMedia = /* GraphQL */ `
  query ListMedia(
    $id: ID
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMedia(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPostingSchedule = /* GraphQL */ `
  query GetPostingSchedule($id: ID!) {
    getPostingSchedule(id: $id) {
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
export const listPostingSchedules = /* GraphQL */ `
  query ListPostingSchedules(
    $id: ID
    $filter: ModelPostingScheduleFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPostingSchedules(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $id: ID
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
