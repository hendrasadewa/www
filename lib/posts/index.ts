import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostMetadata {
  title?: string;
  description?: string;
  publishedDate?: Date;
  tags?: string[];
}

interface Post {
  slug: string;
  content: string;
  metadata?: PostMetadata;
}

const POST_DIR_PATH = 'assets/posts';

const postDirectory = path.join(process.cwd(), POST_DIR_PATH);

export function getPostsFiles() {
  const fileNames = fs.readdirSync(postDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data: metadata, content } = matter(fileContents);

  return {
    slug,
    content,
    metadata,
  };
}
