export enum SubscriptionStatus {
  GUEST = 'guest',
  LEVEL_ONE = 'level_one',
  LEVEL_TWO = 'level_two',
}

export type UserQuota = {
  maxPosts: number;
  maxMedias: number;
  maxSchedulers: number;
};
