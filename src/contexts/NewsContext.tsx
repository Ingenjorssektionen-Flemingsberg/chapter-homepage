import { createContext, useContext, useState, useMemo } from "react";
import { useNotification } from "./NotificationContext";
import type { NewsPostType } from "../types/news";
import type { Pagination } from "../types/pagination";
import { MOCK_NEWS } from "../config/mock";

interface NewsContextType {
  news: NewsPostType[];
  hasMore: boolean;
  loading: boolean;
  getMoreNews: () => Promise<void>;
  postNews: (newsPost: NewsPostType) => Promise<void>;
  updateNews: (newsPost: NewsPostType) => Promise<void>;
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
  const [news, setNews] = useState<NewsPostType[]>(MOCK_NEWS);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const { showNotification } = useNotification();

  const sleep = (ms: number) =>
    new Promise<void>((resolve) => setTimeout(resolve, ms));

  const getMoreNewsFunc = async () => {
    if (loading) return;

    try {
      setLoading(true);
      const resp: Pagination<NewsPostType> = {
        limit: 11,
        offset: 0,
        posts: [],
        total: 10,
      }; // = await getNews(...);
      await sleep(5000);
      setNews([...news, ...resp.posts]);
      setHasMore(resp.total > resp.offset + resp.limit);
    } catch (err) {
      console.error("getMoreNews: " + err);
      showNotification("Failed to get news", "error");
    }
    setLoading(false);
  };

  const postNewsFunc = async (newsPost: NewsPostType) => {
    if (loading) return;

    try {
      setLoading(true);
      const createdNews: NewsPostType = newsPost; // = await postNews(...);
      setNews([...news, createdNews]);
    } catch (err) {
      console.error("postNews: " + err);
      showNotification("Failed to create news", "error");
    }
    setLoading(false);
  };

  const updateNewsFunc = async (newsPost: NewsPostType) => {
    if (loading) return;

    try {
      setLoading(true);
      const updatedNews: NewsPostType = newsPost; // = await updateNews(...);
      setNews((prev) =>
        prev.map((n) => (n.id === updatedNews.id ? updatedNews : n))
      );
    } catch (err) {
      console.error("updateNews: " + err);
      showNotification("Failed to update news", "error");
    }
    setLoading(false);
  };

  const deleteNewsFunc = async (id: string) => {
    if (loading) return;

    try {
      setLoading(true);
      // await deleteNews(...);
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
    ]
  );

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
