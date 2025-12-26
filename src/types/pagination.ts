export type Pagination<T> = {
  limit: number;
  offset: number;
  posts: T[];
  total: number;
};
