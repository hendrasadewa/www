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