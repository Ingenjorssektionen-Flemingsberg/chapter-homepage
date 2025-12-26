import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import type { NewsPostType, NewsBlockType } from "../types/news";
import NewsPost from "../components/news/NewsPost";
import NewsEditor from "../components/news/NewsEditor";
import { useInfiniteScroll } from "../components/news/useInfiniteScroll";
import { useNews } from "../contexts/NewsContext";

function makeEmptyPost(): NewsPostType {
  const created = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    title: "",
    slug: "",
    status: "draft",
    summary: "",
    created_at: created,
    updated_at: created,
    published_at: undefined,
    content: {
      blocks: [{ type: "paragraph", data: { text: "" } } as NewsBlockType],
    },
  };
}

export default function AdminNews() {
  const {
    news,
    hasMore,
    loading,
    getMoreNews,
    postNews,
    updateNews,
    deleteNews,
  } = useNews();

  const sentinelRef = useInfiniteScroll(getMoreNews, hasMore && !loading);

  const [selectedId, setSelectedId] = useState<string | null>(
    news[0]?.id ?? null
  );

  const selected = useMemo(
    () => news.find((p) => p.id === selectedId) ?? null,
    [news, selectedId]
  );

  const [editorOpen, setEditorOpen] = useState(false);
  const [editing, setEditing] = useState<NewsPostType | null>(null);

  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<NewsPostType | null>(null);

  const [create, setCreate] = useState<boolean>(false);

  function openCreate() {
    const p = makeEmptyPost();
    setCreate(true);
    setEditing(p);
    setEditorOpen(true);
  }

  function openEdit(post: NewsPostType) {
    // clone to avoid mutating list while editing
    setEditing(structuredClone(post));
    setEditorOpen(true);
  }

  function upsertPost(next: NewsPostType) {
    const updatedAt = new Date().toISOString();

    const title = next.title.trim();

    const normalized: NewsPostType = {
      ...next,
      title,
      slug: "",
      updated_at: updatedAt,
      published_at:
        next.status === "published"
          ? (next.published_at ?? updatedAt)
          : undefined,
    };

    if (create) postNews(normalized);
    else updateNews(normalized);

    setCreate(false);
    setSelectedId(normalized.id);
  }

  function askDelete(post: NewsPostType) {
    setDeleteTarget(post);
    setConfirmDeleteOpen(true);
  }

  function doDelete() {
    if (!deleteTarget) return;
    deleteNews(deleteTarget.id);
    setSelectedId((prev) => (prev === deleteTarget.id ? null : prev));
    setConfirmDeleteOpen(false);
    setDeleteTarget(null);
  }

  return (
    <Container disableGutters sx={{ py: 4, mt: 15 }}>
      <Box sx={{ px: { xs: 2, sm: 3 }, mb: 3 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          Admin - Nyheter
        </Typography>
        <Typography color="text.secondary">
          Skapa, redigera och publicera nyheter. Förhandsgranska i realtid.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "360px 1fr" },
          gap: 2.5,
          px: { xs: 2, sm: 3 },
          width: "100%",
          minWidth: "70vw",
        }}
      >
        {/* Left: List */}
        <Paper
          variant="outlined"
          sx={{
            borderRadius: 3,
            maxHeight: "70vh",
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              position: "sticky",
              top: 0,
              bgcolor: "background.paper",
              zIndex: 100,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography sx={{ fontWeight: 800, flex: 1 }}>
              Alla inlägg
            </Typography>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              onClick={openCreate}
            >
              Nytt
            </Button>
          </Box>

          <List disablePadding>
            {news.map((p) => {
              const isSelected = p.id === selectedId;
              const date = new Date(
                p.published_at ?? p.created_at
              ).toLocaleDateString();

              return (
                <ListItem
                  key={p.id}
                  disablePadding
                  secondaryAction={
                    <Stack direction="row" spacing={0.5}>
                      <IconButton
                        edge="end"
                        onClick={() => openEdit(p)}
                        aria-label="edit"
                      >
                        <EditOutlinedIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        onClick={() => askDelete(p)}
                        aria-label="delete"
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Stack>
                  }
                >
                  <ListItemButton
                    selected={isSelected}
                    onClick={() => setSelectedId(p.id)}
                    sx={{ py: 1.25 }}
                  >
                    <ListItemText
                      primary={
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography
                            sx={{ fontWeight: 700, maxWidth: "50%" }}
                            noWrap
                          >
                            {p.title || "(Utan titel)"}
                          </Typography>
                          <Chip
                            size="small"
                            variant="outlined"
                            label={
                              p.status === "published" ? "Publicerad" : "Utkast"
                            }
                          />
                        </Stack>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: "80%",
                          }}
                        >
                          {date} • /{p.slug || "—"}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          {/* Loading row */}
          {loading && (
            <Box
              sx={{
                py: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress size={20} />
              <Typography sx={{ ml: 1 }} variant="body2" color="text.secondary">
                Laddar fler…
              </Typography>
            </Box>
          )}

          {/* Sentinel */}
          <Box ref={sentinelRef} sx={{ height: "3vh" }} />
        </Paper>

        {/* Right: Preview / actions */}
        <Paper variant="outlined" sx={{ borderRadius: 3, p: { xs: 2, sm: 3 } }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography sx={{ fontWeight: 800, flex: 1 }}>
              Förhandsgranskning
            </Typography>

            {selected && (
              <Button variant="contained" onClick={() => openEdit(selected)}>
                Redigera
              </Button>
            )}
          </Box>

          {selected ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <NewsPost post={selected} />
            </Box>
          ) : (
            <Typography color="text.secondary">
              Välj ett inlägg i listan, eller skapa ett nytt.
            </Typography>
          )}
        </Paper>
      </Box>

      {/* Editor dialog */}
      <Dialog
        open={editorOpen}
        onClose={() => setEditorOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{ fontWeight: 800 }}>
          {editing && news.some((p) => p.id === editing.id)
            ? "Redigera nyhet"
            : "Skapa nyhet"}
        </DialogTitle>

        <DialogContent dividers>
          {editing && <NewsEditor value={editing} onChange={setEditing} />}
        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={() => setEditorOpen(false)}>
            Avbryt
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              if (!editing) return;
              upsertPost(editing);
              setEditorOpen(false);
            }}
            disabled={!editing?.title?.trim()}
          >
            Spara
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete confirm */}
      <Dialog
        open={confirmDeleteOpen}
        onClose={() => setConfirmDeleteOpen(false)}
      >
        <DialogTitle sx={{ fontWeight: 800 }}>Ta bort nyhet?</DialogTitle>
        <DialogContent dividers>
          <Typography>
            Är du säker att du vill ta bort{" "}
            <strong>{deleteTarget?.title || "detta inlägg"}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDeleteOpen(false)}>Avbryt</Button>
          <Button variant="contained" color="error" onClick={doDelete}>
            Ta bort
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
