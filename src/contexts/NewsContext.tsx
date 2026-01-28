import { createContext, useContext, useState, useMemo } from "react";
import { useNotification } from "./NotificationContext";
import type { Post } from "../types/news";
import type { Pagination } from "../types/pagination";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../services/newsService";
import { useAuth } from "./AuthContext";

interface NewsContextType {
  news: Post[];
  hasMore: boolean;
  loading: boolean;
  getMoreNews: () => Promise<void>;
  postNews: (newsPost: Post) => Promise<void>;
  updateNews: (newsPost: Post) => Promise<void>;
  deleteNews: (id: string) => Promise<void>;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
};

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [news, setNews] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const { showNotification } = useNotification();
  const { token } = useAuth();

  const getMoreNewsFunc = async () => {
    if (loading) return;

    try {
      setLoading(true);
      const resp: Pagination<Post> = await getPosts(10, news.length);
      setNews([...news, ...resp.posts]);
      setHasMore(resp.total > resp.offset + resp.limit);
    } catch (err) {
      console.error("getMoreNews: " + err);
      showNotification("Failed to get news", "error");
    }
    setLoading(false);
  };

  const postNewsFunc = async (newsPost: Post) => {
    if (loading || !token) return;

    try {
      setLoading(true);
      const createdNews: Post = await createPost(token, {
        slug: newsPost.slug,
        title: newsPost.title,
        summary: newsPost.summary ?? "",
        content: newsPost.content,
        status: newsPost.status,
      });
      setNews([...news, createdNews]);
    } catch (err) {
      console.error("postNews: " + err);
      showNotification("Failed to create news", "error");
    }
    setLoading(false);
  };

  const updateNewsFunc = async (newsPost: Post) => {
    if (loading || !token) return;

    try {
      setLoading(true);
      const updatedNews: Post = await updatePost(token, newsPost.id, {
        slug: newsPost.slug,
        title: newsPost.title,
        summary: newsPost.summary ?? "",
        content: newsPost.content,
        status: newsPost.status,
      });

      setNews((prev) =>
        prev.map((n) => (n.id === updatedNews.id ? updatedNews : n)),
      );
    } catch (err) {
      console.error("updateNews: " + err);
      showNotification("Failed to update news", "error");
    }
    setLoading(false);
  };

  const deleteNewsFunc = async (id: string) => {
    if (loading || !token) return;

    try {
      setLoading(true);
      await deletePost(token, id);
      setNews((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      console.error("deleteNews: " + err);
      showNotification("Failed to delete news", "error");
    }
    setLoading(false);
  };

  const value = useMemo<NewsContextType>(
    () => ({
      news: news,
      hasMore: hasMore,
      loading: loading,
      getMoreNews: getMoreNewsFunc,
      postNews: postNewsFunc,
      updateNews: updateNewsFunc,
      deleteNews: deleteNewsFunc,
    }),
    [
      news,
      hasMore,
      loading,
      getMoreNewsFunc,
      postNewsFunc,
      updateNewsFunc,
      deleteNewsFunc,
    ],
  );

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
