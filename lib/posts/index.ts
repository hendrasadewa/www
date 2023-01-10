import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { FILE_DIR_BY_TYPE, POST_DIR_PATH } from './constants';
import { MARKDOWN_TYPES_ENUM, Post } from './types';

const postDirectory = path.join(process.cwd(), POST_DIR_PATH);

export function getFileDirectory(filePath = '/') {
  return path.join(process.cwd(), filePath);
}

export function getMarkdownFullPath(type: MARKDOWN_TYPES_ENUM, slug = '') {
  const directoryPath = getFileDirectory(FILE_DIR_BY_TYPE[type]);
  return path.join(directoryPath, `${slug}.md`);
}

export function getPostsFiles(type: MARKDOWN_TYPES_ENUM) {
  const fileDirectory = getFileDirectory(FILE_DIR_BY_TYPE[type]);
  const fileNames = fs.readdirSync(fileDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostBySlug(
  type: MARKDOWN_TYPES_ENUM,
  slug: string
): Promise<Post> {
  const fullPath = getMarkdownFullPath(type, slug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data: metadata, content } = matter(fileContents);

  return {
    slug,
    content,
    metadata,
  };
}
