export type PostStatus = "draft" | "published";

export interface ParagraphBlock {
  type: "paragraph";
  data: {
    text: string;
  };
}

export interface ImageBlock {
  type: "image";
  data: {
    url: string;
    caption?: string;
  };
}

export type ContentBlock = ParagraphBlock | ImageBlock;

export interface PostContent {
  blocks: ContentBlock[];
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  content: PostContent;
  status: PostStatus;
  created_at: string;
  updatedAt: string;
  published_at?: string;
}

export interface CreatePostRequest {
  slug: string;
  title: string;
  summary: string;
  content: PostContent;
  status: PostStatus;
}
