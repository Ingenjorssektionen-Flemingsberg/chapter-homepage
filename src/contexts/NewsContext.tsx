import { createContext, useContext, useState, useMemo } from "react";
import { useNotification } from "./NotificationContext";
import type { Post } from "../types/news";
import type { Pagination } from "../types/pagination";
import { getPosts } from "../services/newsService";

interface NewsContextType {
  news: Post[];
  hasMore: boolean;
  loading: boolean;
  getMoreNews: () => Promise<void>;
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

  const value = useMemo<NewsContextType>(() => {
    const getMoreNewsFunc = async () => {
      if (loading) return;

      try {
        setLoading(true);
        const resp: Pagination<Post> = await getPosts(10, news.length);
        setNews([...news, ...resp.items]);
        setHasMore(resp.total > resp.offset + resp.limit);
      } catch (err) {
        console.error("getMoreNews: " + err);
        showNotification("Failed to get news", "error");
      }
      setLoading(false);
    };

    return {
      news: news,
      hasMore: hasMore,
      loading: loading,
      getMoreNews: getMoreNewsFunc,
    };
  }, [
    news,
    hasMore,
    loading,
    setNews,
    setHasMore,
    setLoading,
    showNotification,
  ]);

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
