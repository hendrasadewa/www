export enum MARKDOWN_TYPES_ENUM {
  POST = 'POST',
  PAGE = 'PAGE',
}

export interface PostMetadata {
  title?: string;
  description?: string;
  publishedDate?: Date;
  tags?: string[];
}

export interface Post {
  slug: string;
  content: string;
  metadata?: PostMetadata;
}
