export type Pagination<T> = {
  limit: number;
  offset: number;
  items: T[];
  total: number;
};
