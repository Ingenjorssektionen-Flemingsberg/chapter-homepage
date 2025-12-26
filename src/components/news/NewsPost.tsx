import { Box, Divider, Typography } from "@mui/material";
import type { NewsPostType } from "../../types/news";
import { formatDate } from "../util/formatDate";
import { renderTextWithLinks } from "../util/RichLinkText";

type Props = {
  post: NewsPostType;
};

export default function NewsPost({ post }: Readonly<Props>) {
  const dateLabel = formatDate(post.published_at ?? post.created_at);

  return (
    <Box
      component="article"
      sx={{
        width: "100%",
        maxWidth: 860,
        mb: 4,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        boxShadow: (t) =>
          t.palette.mode === "dark"
            ? "0 10px 30px rgba(0,0,0,0.35)"
            : "0 10px 30px rgba(0,0,0,0.08)",
        overflow: "hidden",
        textAlign: "left",
      }}
    >
      {/* Header */}
      <Box sx={{ px: { xs: 2.5, sm: 4 }, pt: { xs: 2.5, sm: 3 }, pb: 2.25 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 750,
            mb: 1,
          }}
        >
          {post.title}
        </Typography>

        {post.summary && (
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontStyle: "italic",
              mb: 2,
              lineHeight: 1.7,
            }}
          >
            {post.summary}
          </Typography>
        )}

        <Typography variant="body2" color="text.secondary">
          {dateLabel}
        </Typography>
      </Box>

      <Divider />

      {/* Content */}
      <Box sx={{ px: { xs: 2.5, sm: 4 }, py: { xs: 2.5, sm: 3 } }}>
        {post.content.blocks.map((block, idx) => {
          const key = `${post.id}-${block.type}-${idx}`;

          switch (block.type) {
            case "paragraph":
              return (
                <Typography
                  key={key}
                  variant="body1"
                  sx={{
                    whiteSpace: "pre-line",
                    lineHeight: 1.8,
                    mb: 1.5,
                    "&:last-of-type": { mb: 0 },
                  }}
                >
                  {renderTextWithLinks(block.data.text)}
                </Typography>
              );

            case "image":
              return (
                <Box key={key} sx={{ my: 2.25, textAlign: "center" }}>
                  <Box
                    sx={{
                      display: "inline-block",
                      maxWidth: "100%",
                      borderRadius: 2.5,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={block.data.url}
                      alt={block.data.caption ?? ""}
                      loading="lazy"
                      sx={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>

                  {block.data.caption && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: "block", mt: 1 }}
                    >
                      {block.data.caption}
                    </Typography>
                  )}
                </Box>
              );

            default:
              return null;
          }
        })}
      </Box>
    </Box>
  );
}
