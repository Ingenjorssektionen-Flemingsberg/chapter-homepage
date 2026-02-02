import type { Pagination } from "../types/pagination";
import { apiClient } from "./apiClient";
import type { Post, CreatePostRequest } from "../types/news";

/**
 * List posts (paginated)
 */
export const getPosts = async (
  token: string | undefined,
  limit = 20,
  offset = 0,
): Promise<Pagination<Post>> => {
  const response = await apiClient.get<Pagination<Post>>("/posts", {
    params: { limit, offset },
    headers: token ? { Authorization: "Bearer " + token } : undefined,
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

/**
 * Create a post
 */
export const createPost = async (
  token: string,
  payload: CreatePostRequest,
): Promise<Post> => {
  console.log(token);
  const response = await apiClient.post<Post>("/posts", payload, {
    headers: { Authorization: "Bearer " + token },
  });
  return response.data;
};

/**
 * Update a post (optional)
 */
export const updatePost = async (
  token: string,
  id: string,
  payload: Partial<CreatePostRequest>,
): Promise<Post> => {
  const response = await apiClient.patch<Post>(`/posts/${id}`, payload, {
    headers: { Authorization: "Bearer " + token },
  });
  return response.data;
};

/**
 * Delete a post (optional)
 */
export const deletePost = async (token: string, id: string): Promise<void> => {
  await apiClient.delete(`/posts/${id}`, {
    headers: { Authorization: "Bearer " + token },
  });
};

/**
 * Unarchive a post (optional)
 */
export const unarchivePost = async (
  token: string,
  id: string,
): Promise<void> => {
  await apiClient.patch(`/posts/${id}/unarchive`, undefined, {
    headers: { Authorization: "Bearer " + token },
  });
};
