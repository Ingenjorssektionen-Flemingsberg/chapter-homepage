export type NewsBlockType =
  | {
      type: "paragraph";
      data: {
        text: string;
      };
    }
  | {
      type: "image";
      data: {
        url: string;
        caption?: string;
      };
    };

export type NewsPostType = {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  status: "draft" | "published";
  summary?: string | null;
  content: {
    blocks: NewsBlockType[];
  };
};
