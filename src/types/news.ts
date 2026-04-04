export type Post = {
  id: string;
  title: string;
  summary: string;
  published: boolean;
  publish_at: string | null;
  blocks: PostBlock[];
};

export type PostBlock = {
  id: string;
  position: number;
  type: "paragraph" | "image";

  text?: string | null;
  image_url?: string | null;
  caption?: string | null;

  width?: number | null;
  height?: number | null;
};
