import ReactMarkdown from 'react-markdown';

import { getPostBySlug, getPostsFiles } from '../../../lib/posts';
import { POST_DIR_PATH } from '../../../lib/posts/constants';
import { MARKDOWN_TYPES_ENUM } from '../../../lib/posts/types';

interface Props {
  params: { slug: string };
}

// Dynamic segments not included in generateStaticParams will return a 404.
export const dynamicParams = false;

// return all paths from assets/posts
export async function generateStaticParams() {
  const posts = getPostsFiles(MARKDOWN_TYPES_ENUM.POST);

  const paths = posts.map((post) => ({
    slug: post.params.slug,
  }));

  return paths;
}

async function PostPage({ params }: Props) {
  const { content } = await getPostBySlug(
    MARKDOWN_TYPES_ENUM.POST,
    params.slug
  );

  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default PostPage;
