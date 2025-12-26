import React, { useCallback } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddIcon from "@mui/icons-material/Add";

import type { NewsPostType, NewsBlockType } from "../../types/news";

type Props = {
  value: NewsPostType;
  onChange: (next: NewsPostType) => void;
};

type BlockWithId = NewsBlockType & { id: string };

function move<T>(arr: T[], from: number, to: number) {
  const copy = [...arr];
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

const NewsBlockEditor = React.memo(function NewsBlockEditor({
  block,
  idx,
  total,
  onMoveUp,
  onMoveDown,
  onRemove,
  onChangeBlock,
}: {
  block: BlockWithId;
  idx: number;
  total: number;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  onChangeBlock: (next: BlockWithId) => void;
}) {
  const isFirst = idx === 0;
  const isLast = idx === total - 1;

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Typography sx={{ fontWeight: 800, flex: 1 }}>
          {block.type === "paragraph" ? "Textblock" : "Bildblock"}
        </Typography>

        <Stack direction="row" spacing={0.5}>
          <IconButton disabled={isFirst} onClick={onMoveUp} size="small">
            <ArrowUpwardIcon fontSize="small" />
          </IconButton>
          <IconButton disabled={isLast} onClick={onMoveDown} size="small">
            <ArrowDownwardIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={onRemove} size="small">
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>

      {block.type === "paragraph" ? (
        <TextField
          label="Text"
          value={block.data.text}
          onChange={(e) =>
            onChangeBlock({
              ...block,
              data: { ...block.data, text: e.target.value },
            } as BlockWithId)
          }
          fullWidth
          multiline
          minRows={4}
        />
      ) : (
        <Stack spacing={2}>
          <TextField
            label="Bild-URL"
            value={block.data.url}
            onChange={(e) =>
              onChangeBlock({
                ...block,
                data: { ...block.data, url: e.target.value },
              } as BlockWithId)
            }
            fullWidth
            placeholder="https://…"
          />

          <TextField
            label="Bildtext (valfritt)"
            value={block.data.caption ?? ""}
            onChange={(e) =>
              onChangeBlock({
                ...block,
                data: { ...block.data, caption: e.target.value },
              } as BlockWithId)
            }
            fullWidth
          />

          {!!block.data.url?.trim() && (
            <Box sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src={block.data.url}
                alt={block.data.caption ?? ""}
                loading="lazy"
                sx={{
                  maxWidth: "100%",
                  maxHeight: 280,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              />
            </Box>
          )}
        </Stack>
      )}
    </Box>
  );
});

export default function NewsEditor({ value, onChange }: Readonly<Props>) {
  const blocks = (value.content.blocks as BlockWithId[]).map((b) => ({
    ...b,
    id: (b as any).id ?? uid(),
  }));

  const setField = useCallback(
    <K extends keyof NewsPostType>(key: K, v: NewsPostType[K]) => {
      onChange({ ...value, [key]: v });
    },
    [onChange, value]
  );

  const setBlocks = useCallback(
    (nextBlocks: BlockWithId[]) => {
      onChange({
        ...value,
        content: { ...value.content, blocks: nextBlocks },
      });
    },
    [onChange, value]
  );

  const updateBlock = useCallback(
    (index: number, next: BlockWithId) => {
      setBlocks(blocks.map((b, i) => (i === index ? next : b)));
    },
    [blocks, setBlocks]
  );

  const addParagraph = useCallback(() => {
    setBlocks([
      ...blocks,
      { id: uid(), type: "paragraph", data: { text: "" } } as BlockWithId,
    ]);
  }, [blocks, setBlocks]);

  const addImage = useCallback(() => {
    setBlocks([
      ...blocks,
      {
        id: uid(),
        type: "image",
        data: { url: "", caption: "" },
      } as BlockWithId,
    ]);
  }, [blocks, setBlocks]);

  const removeBlock = useCallback(
    (index: number) => setBlocks(blocks.filter((_, i) => i !== index)),
    [blocks, setBlocks]
  );

  const moveUp = useCallback(
    (idx: number) => setBlocks(move(blocks, idx, idx - 1)),
    [blocks, setBlocks]
  );

  const moveDown = useCallback(
    (idx: number) => setBlocks(move(blocks, idx, idx + 1)),
    [blocks, setBlocks]
  );

  return (
    <Stack spacing={3}>
      <Box>
        <Typography sx={{ fontWeight: 800, mb: 1 }}>Metadata</Typography>

        <Stack spacing={2}>
          <TextField
            label="Titel"
            value={value.title}
            onChange={(e) => setField("title", e.target.value)}
            fullWidth
          />

          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              value={value.status}
              onChange={(e) => setField("status", e.target.value)}
            >
              <MenuItem value="draft">Utkast</MenuItem>
              <MenuItem value="published">Publicerad</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Sammanfattning (valfritt)"
            value={value.summary ?? ""}
            onChange={(e) => setField("summary", e.target.value)}
            fullWidth
            multiline
            minRows={2}
          />
        </Stack>
      </Box>

      <Divider />

      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
          <Typography sx={{ fontWeight: 800, flex: 1 }}>Innehåll</Typography>

          <Stack direction="row" spacing={1}>
            <Button
              size="small"
              startIcon={<AddIcon />}
              variant="contained"
              onClick={addParagraph}
            >
              Text
            </Button>
            <Button
              size="small"
              startIcon={<AddIcon />}
              variant="contained"
              onClick={addImage}
            >
              Bild
            </Button>
          </Stack>
        </Box>

        {/* NOTE / INFO */}
        <Box
          sx={{
            border: "1px dashed",
            borderColor: "divider",
            borderRadius: 2,
            p: 2,
            mb: 2,
          }}
        >
          <Typography sx={{ fontWeight: 800, mb: 0.5 }}>OBS</Typography>
          <Typography variant="body2">
            Länkar kan copy-pastas rakt in. Vill du embedda en länk med egen
            text använder du markdown-syntax: <code>[text](länk)</code>
          </Typography>
        </Box>

        <Stack spacing={2}>
          {blocks.map((block, idx) => (
            <NewsBlockEditor
              key={block.id}
              block={block}
              idx={idx}
              total={blocks.length}
              onMoveUp={() => moveUp(idx)}
              onMoveDown={() => moveDown(idx)}
              onRemove={() => removeBlock(idx)}
              onChangeBlock={(next) => updateBlock(idx, next)}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
