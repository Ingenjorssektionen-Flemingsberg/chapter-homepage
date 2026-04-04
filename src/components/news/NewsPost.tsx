import { Box, Divider, Typography } from "@mui/material";
import type { Post } from "../../types/news";
import { formatDate } from "../util/formatDate";
import { renderTextWithLinks } from "../links/RichLinkText";

type Props = {
  post: Post;
};

export default function NewsPost({ post }: Readonly<Props>) {
  const dateLabel = formatDate(post.publish_at ?? new Date().toISOString());

  return (
    <Box
      component="article"
      sx={{
        width: "100%",
        maxWidth: "860px",
        minWidth: "860px",
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

      <Box sx={{ px: { xs: 2.5, sm: 4 }, py: { xs: 2.5, sm: 3 } }}>
        {[...post.blocks]
          .sort((a, b) => a.position - b.position)
          .map((block) => {
            const key = `${post.id}-${block.id}`;

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
                    {renderTextWithLinks(block.text ?? "")}
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
                        src={block.image_url ?? ""}
                        alt={block.caption ?? ""}
                        loading="lazy"
                        sx={{
                          display: "block",
                          width: block.width ? `${block.width}px` : "auto",
                          height: block.height ? `${block.height}px` : "auto",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>

                    {block.caption && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block", mt: 1 }}
                      >
                        {block.caption}
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
