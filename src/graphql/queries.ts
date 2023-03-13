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
      nextToken
    }
  }
`;
export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
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
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $id: ID
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCollections(
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
        schedulers {
          nextToken
        }
        createdAt
        updatedAt
        userCollectionsId
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
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userMediasId
        collectionMediasId
      }
      nextToken
    }
  }
`;
export const getScheduler = /* GraphQL */ `
  query GetScheduler($id: ID!) {
    getScheduler(id: $id) {
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
export const listSchedulers = /* GraphQL */ `
  query ListSchedulers(
    $id: ID
    $filter: ModelSchedulerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSchedulers(
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
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userSchedulersId
        collectionSchedulersId
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
      createdAt
      updatedAt
      userPostsId
      collectionPostsId
      mediaPostsId
      schedulerPostsId
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
        createdAt
        updatedAt
        userPostsId
        collectionPostsId
        mediaPostsId
        schedulerPostsId
      }
      nextToken
    }
  }
`;
