import type { Post } from "../types/news";
import type { Pagination } from "../types/pagination";
import { apiClient } from "./apiClient";

/**
 * List posts (paginated)
 */
export const getPosts = async (
  limit = 20,
  offset = 0,
): Promise<Pagination<Post>> => {
  const response = await apiClient.get<Pagination<Post>>("/posts/published", {
    params: { limit, offset },
  });

  return response.data;
};

/**
 * Get a single post by id
 */
export const getPostById = async (id: string): Promise<Post> => {
  const response = await apiClient.get<Post>(`/posts/${id}`);
  return response.data;
};
