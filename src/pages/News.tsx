import { Container, Box, Paper, Typography } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import NewsPost from "../components/news/NewsPost";
import newsBanner from "../assets/news.webp";
import type { NewsPostType } from "../types/news";
import { useInfiniteScroll } from "../components/news/useInfiniteScroll";
import NewsPostSkeleton from "../components/news/NewsPostSkeleton";
import { useNews } from "../contexts/NewsContext";

export default function News() {
  const { news, hasMore, loading, getMoreNews } = useNews();

  const sentinelRef = useInfiniteScroll(getMoreNews, hasMore && !loading);

  return (
    <Container
      disableGutters
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        top: 0,
      }}
    >
      <HeroBanner
        image={newsBanner}
        height={{ xs: "40vh", md: "60vh" }}
        subtitle="Kolla in senaste"
        title="Nyheter"
      />

      <Box
        sx={{
          my: 6,
          mx: { xs: 2, md: "auto" },
        }}
      >
        {!loading && news.length === 0 && (
          <Paper
            elevation={0}
            sx={{
              px: 3,
              py: 2.5,
              mt: 4,
              textAlign: "center",
              color: "text.secondary",
              border: "1px dashed",
              borderColor: "divider",
              borderRadius: 3,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Inga nyheter ännu
            </Typography>
            <Typography variant="body2">No news 😔</Typography>
          </Paper>
        )}

        {news.map((post: NewsPostType) => (
          <NewsPost key={post.id} post={post} />
        ))}

        {loading &&
          Array.from({ length: 2 }).map((_) => (
            <NewsPostSkeleton key={`skeleton`} />
          ))}

        {/* Sentinel */}
        <Box ref={sentinelRef} sx={{ height: 1 }} />
      </Box>
    </Container>
  );
}
